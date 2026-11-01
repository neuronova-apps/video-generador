// Motor visual 8.0: composiciones diferenciadas y demostración ilustrativa.
// Los puntos de interacción son una animación conceptual, NO clics reales.
export const escapeHtml=x=>String(x??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export function visualScene(scene,index,start){
 const esc=escapeHtml,hasImage=Boolean(scene.imageData),duration=scene.duration;
 const type=hasImage?(index%2===0?'interface-focus':'interface-tour'):(index===0?'hero':'feature-cards');
 const title=esc(scene.title),description=esc(scene.narration.slice(0,180));
 const image=hasImage?'<img class="ui-shot" src="'+esc(scene.imageData)+'" alt="Captura de la interfaz">':'';
 const display=hasImage?'<div class="browser-shell"><div class="browser-bar"><span>● ● ●</span><span class="address">'+esc(scene.sourceUrl||'Vista del proyecto')+'</span></div><div class="browser-viewport">'+image+'<div class="spotlight"></div><div class="cursor-arrow">➤</div></div></div>':'<div class="feature-visual"><div class="module-tile tile-a"><span>01</span>Explorar</div><div class="module-tile tile-b"><span>02</span>Descubrir</div><div class="module-tile tile-c"><span>03</span>Utilizar</div></div>';
 return '<section class="clip layout-'+type+'" id="scene-'+index+'" data-start="'+start+'" data-duration="'+duration+'" data-track-index="0" style="--d:'+duration+'s"><div class="scene-header"><span>NEURONOVA · PRESENTACIÓN</span><span class="counter">'+String(index+1).padStart(2,'0')+'</span></div>'+display+'<div class="script-panel"><div class="label">ESCENA '+(index+1)+'</div><h1>'+title+'</h1><p>'+description+'</p></div><div class="bottom-track"><i></i></div></section>';
}
export function visualStyles(){return `
body{margin:0;background:#07101c;color:#fff;font-family:Arial,sans-serif}
#stage{width:1280px;height:720px;position:relative;overflow:hidden}
.clip{position:absolute;inset:0;overflow:hidden;background:radial-gradient(circle at 85% 20%,#193e5f,#091524 70%);box-sizing:border-box}
.scene-header{position:absolute;z-index:8;top:28px;left:48px;right:48px;display:flex;justify-content:space-between;font-size:15px;letter-spacing:3px;color:#8dc8e6}
.counter{font-size:28px;color:#fff}.browser-shell{position:absolute;left:58px;top:115px;width:760px;height:460px;border:2px solid #78bbda;border-radius:17px;overflow:hidden;background:#fff;box-shadow:0 35px 75px #0009;transform-origin:center;animation:cameraReveal var(--d) linear both}
.browser-bar{height:43px;background:#e9f0f4;display:flex;align-items:center;gap:22px;padding:0 18px;color:#ed816a;font-size:13px}
.address{color:#536b78;font-size:13px;white-space:nowrap;max-width:620px;overflow:hidden;text-overflow:ellipsis}
.browser-viewport{height:417px;position:relative;overflow:hidden;background:#f1f5f8}.ui-shot{height:100%;width:100%;object-fit:contain}
.spotlight{position:absolute;width:160px;height:100px;left:48%;top:36%;border:6px solid #ffb331;border-radius:16px;box-shadow:0 0 0 400px #0003,0 0 30px #ffc568;animation:focusTravel var(--d) ease-in-out both}
.cursor-arrow{position:absolute;left:60%;top:64%;font-size:58px;color:#ffbd42;text-shadow:2px 2px #182634,0 0 12px #fff;transform:rotate(-35deg);animation:pointerTravel var(--d) ease-in-out both}
.script-panel{position:absolute;z-index:5;top:190px;right:45px;width:340px;padding:26px 28px;background:#0b2038ed;border-left:7px solid #50d6e2;border-radius:10px;box-shadow:0 15px 50px #0008}
.label{color:#70dcec;font-size:17px;letter-spacing:2px}.script-panel h1{font-size:31px;line-height:1.15;margin:20px 0;overflow-wrap:anywhere}.script-panel p{font-size:19px;line-height:1.38;display:-webkit-box;-webkit-line-clamp:6;-webkit-box-orient:vertical;overflow:hidden}
.layout-interface-tour .browser-shell{left:430px;width:795px}.layout-interface-tour .script-panel{right:auto;left:48px;top:206px}.layout-interface-tour .spotlight{animation-name:focusTravelReverse}
.layout-hero .script-panel,.layout-feature-cards .script-panel{width:480px;top:210px;right:auto;left:64px}.layout-hero .script-panel h1{font-size:48px}.feature-visual{position:absolute;left:655px;top:180px;width:520px;height:375px}.module-tile{position:absolute;width:230px;height:120px;display:flex;align-items:center;gap:18px;border-radius:18px;background:linear-gradient(140deg,#2474ad,#173652);border:2px solid #75c6e6;font-size:25px;box-shadow:0 18px 30px #0008;animation:tileFloat var(--d) ease-in-out both}
.module-tile span{font-size:37px;color:#ffe28e}.tile-a{left:0;top:0}.tile-b{left:230px;top:135px;animation-delay:.3s}.tile-c{left:20px;top:265px;animation-delay:.6s}
.bottom-track{position:absolute;left:48px;right:48px;bottom:30px;height:5px;background:#35607b}.bottom-track i{display:block;height:100%;background:#5de0e8;animation:fillProgress var(--d) linear both}
@keyframes fillProgress{from{width:0}to{width:100%}}
@keyframes cameraReveal{0%{transform:translateY(55px) scale(.9);opacity:.3}23%{transform:translateY(0) scale(1);opacity:1}100%{transform:translateY(0) scale(1.12);opacity:1}}
@keyframes focusTravel{0%,15%{left:12%;top:15%;opacity:0}35%{opacity:1}85%{left:55%;top:56%;opacity:1}100%{left:55%;top:56%;opacity:.6}}
@keyframes focusTravelReverse{0%,15%{left:72%;top:20%;opacity:0}35%{opacity:1}85%{left:20%;top:60%;opacity:1}100%{left:20%;top:60%;opacity:.6}}
@keyframes pointerTravel{0%,20%{left:72%;top:70%;opacity:0}40%{opacity:1}85%{left:48%;top:48%}100%{left:48%;top:48%;opacity:1}}
@keyframes tileFloat{0%{transform:translateY(85px) rotate(-8deg);opacity:0}30%{transform:translateY(0) rotate(0);opacity:1}100%{transform:translateY(-18px) rotate(2deg);opacity:1}}
`;}
