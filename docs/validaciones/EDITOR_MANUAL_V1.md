# Editor de video NN: reinicio manual V1

Ruta: `/apps/video-editor/`. Espacio separado del generador automático. Incluye importación local de imágenes JPG/PNG/WEBP y videos MP4/WebM, biblioteca, clips secuenciales, mover, duplicar y eliminar, texto superpuesto, duración, desplazamiento del inicio de videos, reproducción y exportación WebM mediante captura del lienzo.

Límites: no hay pista de audio ni multipista real; la exportación es WebM en tiempo real, no MP4/HyperFrames; un JSON exportado registra referencias de medios pero NO incrusta esos medios ni habilita todavía abrir el proyecto. Los videos de origen pueden presentar problemas de sincronización durante la exportación; validación humana requerida. No anunciar editor profesional terminado ni solicitar instalar Playwright para este flujo: solo necesita servidor web estático.

Prueba de aceptación: importar una imagen real y un MP4, añadirlos a línea de tiempo, ajustar duración, verificar que cambian las vistas de la previsualización, exportar WebM y confirmar visual y auditivamente que no hay pista sonora. Se conserva editor previo para no perder funcionalidades. Prohibido asumir que una URL se transforma automáticamente en video.
