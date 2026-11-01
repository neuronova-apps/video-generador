import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
test('render remoto permanece cerrado por defecto',()=>{const s=readFileSync('apps/render-api/server.mjs','utf8');assert.match(s,/ENABLE_RENDER_JOBS/);assert.match(s,/render_disabled/);assert.match(s,/127\.0\.0\.1/);assert.match(s,/timingSafeEqual/);});
test('paquete web no publica automáticamente',()=>{const s=readFileSync('.github/workflows/editor-preview.yml','utf8');assert.match(s,/upload-artifact/);assert.doesNotMatch(s,/deploy-pages/);});
