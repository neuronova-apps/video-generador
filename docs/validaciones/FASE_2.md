# Validación de fase 2

Estado: editor funcional inicial en `apps/editor-web`; requiere comprobación humana en navegador.

Funciones implementadas: alta y baja de escenas, edición de título/subtítulo/duración/color, biblioteca de imágenes locales PNG/JPEG/WebP (15 MB por archivo), asociación a escena, previsualización visual, reproducción por tiempo, desplazamiento en línea temporal, guardado y apertura de JSON validado. La biblioteca no persiste en el JSON: los objetos URL se revocan al abrir proyecto y los archivos de imágenes deben cargarse de nuevo. No hay audio, transiciones ni exportación MP4 desde la UI.

Para probar: servir la raíz con `python -m http.server 8000` y abrir `http://localhost:8000/apps/editor-web/`. No abrir `index.html` directamente como archivo local, por módulos ES.

Comprobaciones pendientes en navegador: imágenes, reproducción, selección, guardado/apertura y dispositivos móviles. Pruebas de esquema: `npm test`.

La fase 1 permanece pendiente del render MP4 y FFprobe en GitHub Actions. No afirmar que fase 2 esté aprobada integralmente sin pruebas humanas.
