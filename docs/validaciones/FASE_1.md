# Fase 1: integración del motor
Estado: EN VALIDACIÓN. Nunca aprobar fase 1 sin MP4 real y comprobación FFprobe.
## Implementación
- Composición autocontenida de tres escenas de 5 s, 1280 × 720 (15 s).
- HyperFrames versión exacta declarada como dependencia.
- Scripts para diagnosticar FFmpeg/FFprobe y comprobar MP4.
- Workflow manual para render piloto y subir artefactos cuando la ejecución sea satisfactoria.
## Ejecución local
1. Node.js 22+, FFmpeg y FFprobe instalados en PATH.
2. `npm install`
3. `npm run check:render-env`
4. `cd examples/video-piloto && npx hyperframes lint && npx hyperframes render`
5. Localizar salida de render e invocar `node ../../scripts/verify-mp4.mjs RUTA_DEL_VIDEO.mp4`.
El CLI puede cambiar ubicación de salida según versión. Consultar `npx hyperframes render --help`.
## Aprobación
Pendiente: logs de render, MP4 real, dimensiones 1280×720 y duración ~15 s. Una ejecución fallida no implica aprobación.
