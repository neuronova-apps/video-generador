import { existsSync, readFileSync } from 'node:fs';
const files = ['README.md','package.json','docs/arquitectura/ARQUITECTURA.md','docs/implementacion/PLAN.md','docs/validaciones/FASE_0.md','tests/structure.test.mjs'];
for (const file of files) if (!existsSync(file)) { console.error(`Falta ${file}`); process.exitCode = 1; }
const p = JSON.parse(readFileSync('package.json','utf8'));
if (!p.private || p.engines?.node !== '>=22') process.exitCode = 1;
if (!process.exitCode) console.log('Estructura de fase 0 válida.');
