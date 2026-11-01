# Fase 7.2 - Análisis de páginas web públicas

Estado: prototipo local y pruebas unitarias implementados. Sin publicación pública ni aprobación integral.

Servidor: `node apps/web-source-api/server.mjs` en localhost:8788. Editor desde `http://localhost:8000` mediante servidor estático. En interfaz, seleccionar 'Página web', rellenar URL HTTPS y pulsar 'Analizar página'. Se muestra la ficha preliminar con título, descripción, extracto, fecha y URL; no genera guion ni video.

Controles: HTTPS obligatorio, sin credenciales, sin puertos alternativos, bloqueos de IPs privadas/reservadas, verificación DNS inicial, redirecciones deshabilitadas, límite de respuesta 300 KB, timeout 7 s, tipo HTML, una solicitud simultánea. El servidor se enlaza exclusivamente a 127.0.0.1.

IMPORTANTE: **no exponer a Internet este prototipo**. Existe riesgo de DNS rebinding porque la conexión HTTP de fetch puede resolver nuevamente el host después de la comprobación inicial. Se necesita un transporte que fije la IP validada, control de salida de red y bloqueo de re-resolución antes de cualquier despliegue remoto. No introducir credenciales en URLs. No hay scraping de páginas dinámicas, PDF ni repositorios GitHub.

Pruebas pendientes: navegador, páginas reales, errores y acceso remoto seguro. El análisis extrae datos para revisión humana, no afirma veracidad. Próxima fase prevista: 7.3, adaptador GitHub.
