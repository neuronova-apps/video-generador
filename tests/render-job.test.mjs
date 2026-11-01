import test from 'node:test';import assert from 'node:assert/strict';import{readFileSync}from'node:fs';
test('trabajos requieren aprobación y FFprobe',()=>{const s=readFileSync('scripts/render-storyboard-job.mjs','utf8');assert.match(s,/approved-by-user/);assert.match(s,/ffprobe/);assert.match(s,/state:'running'/);assert.match(s,/state:'completed'/);assert.match(s,/state:'failed'/);});
