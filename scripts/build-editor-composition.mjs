import {readFile,mkdir,writeFile} from 'node:fs/promises';
import {resolve,join} from 'node:path';
import {validateProject,normalizeScene,totalDuration} from '../apps/editor-web/model.js';
const [input,outDir]=process.argv.slice(2);
if(!input||!outDir)throw Error('Uso: node scripts/build-editor-composition.mjs proyecto-portable.json carpeta-salida');
const obj=JSON.parse(await readFile(resolve(input),'utf8'));
if(obj.format!=='nn-video-portable-v1'||!obj.media||typeof obj.media!=='object')throw Error('Formato de paquete no válido');
validateProject(obj.project);
const output=resolve(outDir);await mkdir(output,{recursive:true});
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const registry=new Map();let n=0;
for(const [id,media] of Object.entries(obj.media)){
 const type=media?.type;
 const ext={'image/png':'png','image/jpeg':'jpg','image/webp':'webp','video/mp4':'mp4','video/webm':'webm','audio/wav':'wav','audio/mpeg':'mp3','audio/ogg':'ogg'}[type];
 if(!ext||!new RegExp('^data:'+type.replace('/','\\/')+';base64,').test(media.data||''))throw Error('Media inválida: '+id);
 const data=Buffer.from(media.data.split(',')[1],'base64');
 if(data.byteLength>35*1024*1024)throw Error('Medio demasiado grande');
 const name='media-'+(++n)+'.'+ext;await writeFile(join(output,name),data);registry.set(id,{name,type});
}
let at=0;const scenes=obj.project.scenes.map(raw=>{
 const s=normalizeScene(raw),start=at;at+=s.duration;
 const image=registry.get(s.imageId),video=registry.get(s.videoId),audio=registry.get(s.audioId);
 const media=video?'<video muted playsinline src="'+video.name+'"></video>':image?'<img src="'+image.name+'" alt="">':'';
 const snd=audio?'<audio data-start="'+start+'" data-duration="'+s.duration+'" data-track-index="1" src="'+audio.name+'"></audio>':'';
 return '<section class="clip" data-start="'+start+'" data-duration="'+s.duration+'" data-track-index="0" style="background:'+s.color+'">'+media+'<div class="text"><h1>'+escape(s.title)+'</h1><p>'+escape(s.subtitle)+'</p></div><div class="caption">'+escape(s.caption)+'</div></section>'+snd;
}).join('\n');
const html=`<!doctype html><html lang="es"><meta charset="utf-8"><style>body{margin:0;background:#000;color:white;font-family:Arial}#stage{position:relative;width:1280px;height:720px;overflow:hidden}.clip{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;text-align:center}.clip img,.clip video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.text{position:relative;z-index:1;text-shadow:0 2px 12px #000;padding:5%}h1{font-size:64px}p{font-size:30px}.caption{position:absolute;z-index:2;bottom:4%;font-size:26px;background:#0009;padding:8px}</style><div id="stage" data-composition-id="nn-editor" data-no-timeline data-start="0" data-duration="${totalDuration(obj.project)}" data-width="1280" data-height="720">${scenes}</div><script>window.__seekVideo=t=>{for(const el of document.querySelectorAll('.clip')){const st=+el.dataset.start,d=+el.dataset.duration;el.style.display=t>=st&&t<st+d?'flex':'none';}};window.__seekVideo(0);<\/script></html>`;
await writeFile(join(output,'index.html'),html);console.log(JSON.stringify({output,scenes:obj.project.scenes.length,duration:totalDuration(obj.project),media:registry.size}));
