# Fase 7.6 - Gestión y regeneración de trabajos

Estado: base local implementada; validación completa pendiente.

Se incorpora `scripts/render-storyboard-job.mjs` para tomar un storyboard JSON ya aprobado y producir un MP4 usando HyperFrames en un directorio temporal independiente. Cada ejecución crea un identificador aleatorio y un archivo JSON de estado (queued/running/completed/failed) junto al MP4 validado con FFprobe cuando procede.

## Ejemplo local
`node scripts/render-storyboard-job.mjs examples/storyboard-piloto/storyboard.json output/jobs`

Al repetir el comando con la misma entrada se genera otra ejecución con un identificador diferente (regeneración manual). El archivo de estado permite conocer el desenlace, pero todavía no existe panel web con actualización de progreso. Los medios aún no se almacenan de forma persistente y no hay una cola multiusuario. No se permite enviar HTML arbitrario al motor.

## Restricciones
Se requiere Node.js, HyperFrames instalado y FFmpeg/FFprobe disponibles. No implementar acceso remoto directo ni colocar secretos en navegador. No se ha probado carga, cancelación, expiración, recuperación de fallos ni durabilidad en servidor.

## Puerta de aprobación
Generar al menos un MP4 mediante el nuevo ejecutor, revisar JSON de estado y la validación FFprobe; repetir para verificar regeneración. Después añadir API autorizada y panel web, con límites de uso, aislamiento y limpieza. No declarar versión pública estable.
