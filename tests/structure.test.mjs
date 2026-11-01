import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
test('Documentación arquitectónica presente',()=>{assert.ok(existsSync('docs/arquitectura/ARQUITECTURA.md'));assert.ok(existsSync('docs/implementacion/PLAN.md'));});
test('No se requieren medios para la fase 0',()=>{assert.ok(existsSync('scripts/check-structure.mjs'));});
