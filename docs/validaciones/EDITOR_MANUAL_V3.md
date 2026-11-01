# Editor multipista NN - Etapa 3

Ruta: `/apps/video-editor-v3/`. Esta etapa implementa una pista visual y una pista de textos independientes, cada segmento con inicio y duración editables, superposición en vista previa de lienzo, y exportación WebM local sin audio. Permite importar imágenes/videos, guardar y reabrir JSON portátil v3 con medios hasta 35 MB.

Límites: una sola fuente visual activa a la vez; no existe composición simultánea de dos videos, pistas musicales o de voz, ni MP4. Las exportaciones se realizan en tiempo real con MediaRecorder y deben verificarse por posibles desfases en archivos de video. Este es un paso hacia edición multipista, no un editor audiovisual completo. El editor anterior permanece intacto.

Prueba manual: importar imagen y video; crear segmentos visuales con inicios distintos, agregar texto independiente a mitad del video, ajustar tiempos y comprobar superposición; guardar, recargar, abrir JSON y verificar el resultado; exportar WebM. Las pruebas de estructura CI no sustituyen esta prueba audiovisual.
