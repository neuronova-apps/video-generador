# Render API - prototipo restringido
Servicio Node.js 22+ solamente local, ligado a 127.0.0.1. No es un backend público listo para producción.
Requiere variable RENDER_API_TOKEN (mínimo 32 caracteres). Arranque: `RENDER_API_TOKEN=... node apps/render-api/server.mjs`.
La opción `ENABLE_RENDER_JOBS=true` permite POST /api/render para renderizar únicamente la composición piloto fija; **NO** acepta proyectos externos ni HTML de usuarios. Autorización Bearer en todas las rutas /api; GET /health no requiere token.
GET /api/jobs/{id} consulta estado. GET /api/jobs/{id}/download devuelve MP4 solo si se verificó existencia. No existe aún persistencia, limpieza automática, verificación FFprobe, cancelación, límites por usuario ni protección contra uso intensivo.
CORS permite un origen exacto con ALLOWED_ORIGIN; por defecto no se publica CORS. Nunca insertar el token en JavaScript de una web pública.
No desplegar esta API en Internet. Un gateway autenticado, colas, aislamiento de procesos y control de cuotas son requisitos previos.
