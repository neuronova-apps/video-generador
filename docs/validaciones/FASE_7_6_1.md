# Fase 7.6.1 - Integración local entre editor y renderizado
Estado: implementado como prototipo de laboratorio; cierre integral pendiente.
Se incorpora un servicio local restringido y controles web de solicitar render, consultar estado y descargar MP4. El backend exige token y permanece deshabilitado sin ENABLE_STORYBOARD_RENDER=true. No publicar en Internet ni usar token de producción en navegador.
Limitaciones: API de sesión sin almacenamiento persistente de trabajos, sin eliminación programada, sin control de cuotas, sin cola concurrente, sin progreso porcentual real y sin perfiles de exportación múltiples. La prueba final debe hacerse en navegador con un storyboard aprobado y MP4 reproducible. La integración pública requiere autenticación backend sin exponer secretos al navegador.
Pruebas a realizar: npm test, conectividad y estados, aprobación, rechazo de solicitudes inválidas, descarga, regeneración y recuperación de errores.
