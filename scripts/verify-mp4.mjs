import {spawnSync} from 'node:child_process';
import {existsSync,statSync} from 'node:fs';
const file=process.argv[2];
if(!file||!existsSync(file)||statSync(file).size<1000){console.error('Archivo MP4 ausente o vacío');process.exit(1);}
const r=spawnSync('ffprobe',['-v','error','-show_entries','format=duration:stream=codec_type,width,height','-of','json',file],{encoding:'utf8'});
if(r.status!==0){console.error(r.stderr);process.exit(1);}
const obj=JSON.parse(r.stdout),duration=Number(obj.format?.duration),video=obj.streams.find(s=>s.codec_type==='video');
console.log(JSON.stringify({file,duration,video,size:statSync(file).size},null,2));
if(!video||video.width!==1280||video.height!==720||Math.abs(duration-15)>0.75){console.error('No supera comprobación técnica');process.exit(1);}
console.log('MP4 verificado');
