# Validación de fase 0

## Objetivo
Dejar el repositorio listo para comenzar la integración sin afirmar que existe un editor o renderizador operativo.

## Lista de comprobación
- [x] Repositorio NN identificado y rama `main` inspeccionada.
- [x] Rama `develop` creada para aislar cambios (verificar SHA en GitHub).
- [x] Arquitectura, plan y reglas escritos en `develop`.
- [x] Scripts y tests mínimos de estructura incorporados.
- [ ] Prueba automatizada de Node ejecutada en runner CI.
- [ ] Primer MP4 real (corresponde a la fase 1).

## Comandos para ejecutar localmente
`npm run check:structure` y `npm test` con Node.js >=22.

No se habilita publicación ni procesamiento remoto en esta fase.
