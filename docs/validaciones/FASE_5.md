# Fase 5 - Publicación web y procesamiento remoto
Estado: base técnica implementada, despliegue público y render remoto NO aprobados.
## Componentes
- Workflow de pruebas y empaquetado estático del editor como artifact de Actions. No activa GitHub Pages ni instala un backend.
- Servidor de render local restringido a 127.0.0.1; exige Bearer token, limita un proceso simultáneo y no recibe HTML o proyectos arbitrarios. Render desactivado por defecto.
- Endpoints de salud, solicitar render piloto fijo, consultar trabajo y descargar MP4 si existe.
## Riesgos pendientes
- El render de fase 1 no tiene resultado válido confirmado.
- Un MP4 existente no implica codecs, duración o audio correctos; falta FFprobe integrado en backend.
- No hay conexión segura de la interfaz web con servidor; no colocar tokens en cliente.
- Sin almacenamiento persistente ni borrado automático de videos, gestión de usuarios, tasa de solicitudes, colas y entornos aislados.
- Publicación real requiere infraestructura de backend, secretos y decisiones sobre cuotas/costos.
## Criterios de aprobación
Comprobar CI del editor y pruebas humanas en navegador; render piloto y FFprobe satisfactorios; autenticación y aislamiento probados; desplegar únicamente después de revisión de seguridad. No exponer este prototipo a Internet.
## Siguiente fase
Fase 6: calidad, pruebas de integración, seguridad, accesibilidad y cierre de pendientes anteriores. No declarar lanzamiento estable sin validación.
