# Arquitectura inicial

## Alcance
Proyecto autónomo de NN. HyperFrames se incorporará como dependencia en la fase 1, con versión fijada y avisos de licencia. No se clonará el repositorio completo sin necesidad.

## Componentes previstos
- `apps/editor-web`: interfaz de edición, previsualización y biblioteca multimedia.
- `apps/render-api`: API para trabajos de renderizado remoto, no activa en fase 0.
- `packages/video-core`: composición y puente hacia HyperFrames.
- `packages/editor-components`: componentes reutilizables de interfaz.
- `packages/project-schema`: esquema de proyectos exportables y migrables.
- `templates`: formatos 16:9, 9:16 y 1:1.
- `examples`: composiciones piloto.

Se crearán estos directorios según cada fase y no como marcadores vacíos.

## Flujo previsto
Editor -> esquema de proyecto -> composición HTML/animaciones seekable -> HyperFrames -> Chromium y FFmpeg -> MP4 -> validación con FFprobe.

## Requisitos de fase 1
Node.js >=22; FFmpeg y FFprobe en PATH; entorno con navegador compatible; comprobación de dependencias y recursos audiovisuales con permiso de uso. Los formatos y parámetros se definirán tras pruebas reales.

## Límites
GitHub Pages no ejecuta Node.js/FFmpeg del lado servidor. El renderizado inicial será local y la opción remota se evaluará en una fase posterior. Evitar claves en cliente y medios personales en Git.

## Riesgos y controles
- FFmpeg ausente: diagnóstico explícito previo al render.
- Deriva de dependencias: fijar versión y lockfile.
- Incompatibilidad de animaciones: pruebas de fotograma y duración.
- Archivos multimedia pesados: almacenamiento separado del código.
- Riesgo de cambios en otros proyectos: escrituras limitadas exclusivamente a este repositorio.
