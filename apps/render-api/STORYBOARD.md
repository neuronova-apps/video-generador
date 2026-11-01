# Render de storyboard - laboratorio local
Arranque local con Node 22+: definir RENDER_API_TOKEN (mínimo 32 caracteres) y ENABLE_STORYBOARD_RENDER=true, luego `node apps/render-api/storyboard-server.mjs`. Escucha únicamente 127.0.0.1:8789. La interfaz necesita el token para realizar solicitudes: **no utilizar una clave real de producción** ni publicar la interfaz con ese token.
API: POST /api/storyboard/render para JSON aprobado, GET /api/storyboard/jobs/{id} y GET /api/storyboard/jobs/{id}/download. Procesa una solicitud simultánea. Se guardan resultados bajo output/storyboard-jobs.
Este prototipo no puede exponerse a Internet: faltan control de cuotas y usuarios, seguridad de medios, persistencia de colas, expiración y eliminación programada. El token en cliente sería inseguro en hosting público; solo se admite laboratorio local.

## Ejecución en Windows PowerShell para pruebas locales

Desde la raíz de `video-generador-develop`, abrir tres terminales. La primera ejecuta `npx --yes http-server . -p 8000 -c-1`. La segunda ejecuta `node apps/web-source-api/server.mjs` (para analizar páginas y GitHub). En la tercera:

```powershell
$env:RENDER_API_TOKEN = "ClaveDePruebaLocalTemporalDeMasDe32Caracteres"
$env:ENABLE_STORYBOARD_RENDER = "true"
node apps/render-api/storyboard-server.mjs
```

Abrir `http://localhost:8000/apps/editor-web/`, guardar solicitud, analizar la fuente, preparar y aprobar storyboard; escribir la misma clave local en el apartado de render. Pulsar `Generar MP4`, luego `Consultar estado` hasta observar `completed`, y `Descargar MP4`. `Regenerar` inicia otro trabajo con el storyboard aprobado. No compartir ni guardar la clave en archivos.

**Limitaciones:** requiere `npm install`, FFmpeg y FFprobe funcionales; el servidor solo es local. Los trabajos están en memoria y desaparecen del listado tras reiniciar el servicio, aunque los ficheros locales quedan en `output/storyboard-jobs`. El MP4 de storyboard contiene texto, no locución automática ni recursos visuales externos. No se muestra porcentaje real de progreso.
