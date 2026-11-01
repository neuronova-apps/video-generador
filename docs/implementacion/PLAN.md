# Plan de implementación

| Fase | Alcance | Salida / aprobación |
| --- | --- | --- |
| 0 | Rama de desarrollo, estructura, arquitectura, pruebas mínimas | Archivos presentes y validaciones documentales satisfactorias |
| 1 | Dependencia HyperFrames, CLI, composiciones piloto, render local | MP4 real y FFprobe confirma duración, imagen y audio requeridos |
| 2 | Editor web, biblioteca de medios, previsualización y línea de tiempo | Edición básica sin programar HTML |
| 3 | Transiciones, textos, subtítulos y mezcla de audio | Video multiescena con sincronización comprobada |
| 4 | Proyectos editables, perfiles de exportación y descargas | Reapertura y nueva exportación válidas |
| 5 | Publicación del editor y servicio de render remoto | MP4 descargado desde web, control de costos y seguridad |
| 6 | Accesibilidad, regresión, documentación y release | Aprobación humana, pruebas y versión etiquetada |

## Reglas
Cambios en `develop`, revisión antes de fusionar a `main`. Las fases que incluyan render requieren archivos audiovisuales reales reproducibles; una vista previa HTML no equivale a MP4. Nunca afirmar aprobación sin pruebas. Mantener trazabilidad, avisos de licencia Apache 2.0 y aislamiento respecto de CREBE.

## Próxima fase
Fase 1: añadir HyperFrames con versión fijada y lockfile, detectar FFmpeg/FFprobe, crear composición piloto de 15 segundos, ejecutar lint/preview/render y registrar metadatos del MP4 mediante FFprobe.
