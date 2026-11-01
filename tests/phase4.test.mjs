import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
test('editor ofrece formatos y paquete portable',()=>{const html=readFileSync('apps/editor-web/index.html','utf8');for(const key of ['exportAspect','exportQuality','savePortable','openPortable','exportHtml'])assert.match(html,new RegExp(key));});
test('exportador no promete MP4 directo',()=>{const js=readFileSync('apps/editor-web/editor.js','utf8');assert.match(js,/composicion-nn\.html/);assert.match(js,/renderizador HyperFrames/);});
