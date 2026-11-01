# Fase 3: edición audiovisual

Estado: implementación inicial en develop; pendiente de validación humana y de renderización.

## Añadido
- Biblioteca de imágenes, videos MP4/WebM y audio MP3/WAV/OGG, con validación de tipo y tamaño.
- Asociación de clip, audio y subtítulo a cada escena.
- Selector de transición (ninguna, fundido, deslizamiento) y animación de texto (ninguna, fundido, ascenso).
- Previsualización mediante elementos HTML media con sincronización aproximada respecto del tiempo de escena.
- Compatibilidad de lectura con proyectos JSON de fase 2. Campos adicionales opcionales.

## Limitaciones y riesgos pendientes
- No existe aún exportación directa del editor a HyperFrames ni MP4. No se puede afirmar sincronización audiovisual final.
- La reproducción multimedia en navegador depende de permisos, codecs, carga y navegador; la sincronización en previsualización es aproximada.
- Los medios no se incluyen en el JSON descargado; hay que subirlos nuevamente al reabrir.
- Las transiciones son efectos visuales de entrada, no disoluciones entre dos videos superpuestos.
- No hay pista global de audio ni editor de subtítulos con marcas temporales; los subtítulos actuales son por escena.
- La fase 1 requiere un MP4 real y FFprobe aprobados.

## Validación requerida
Ejecutar `npm test`; abrir editor servido por HTTP y probar cargas, cambios de escena, duración, reproducción, pausa, guardado y reapertura, y comportamiento en móvil. Verificar por separado render de fase 1 en GitHub Actions. La fase 3 no se aprueba integralmente hasta demostrar exportación audiovisual con sincronización.
