# Video Generador - NeuroNova Apps

Proyecto independiente para crear, previsualizar y renderizar videos con HyperFrames. Estado: fase 0, arquitectura inicial. No es aún un editor funcional.

## Objetivo
Editor web con procesamiento local inicial mediante Node.js 22+, Chromium y FFmpeg, preparado para un backend de renderizado remoto.

## Desarrollo
- Rama `main`: base inicial estable.
- Rama `develop`: integración y pruebas; no publicar en producción sin validación.
- Fase 1: integración versionada de HyperFrames y primer video MP4 real.

Consultar `docs/arquitectura/ARQUITECTURA.md`, `docs/implementacion/PLAN.md` y `docs/validaciones/FASE_0.md`.

Se mantendrán los avisos de licencia y atribución de dependencias externas. No se incorporan activos ni proyectos del CREBE.

## Editor visual experimental (fase 2)

Iniciar un servidor HTTP estático en la raíz del repositorio (`python -m http.server 8000`) y abrir `http://localhost:8000/apps/editor-web/`. Permite editar escenas, gestionar imágenes locales y guardar/abrir proyectos JSON. El JSON no incorpora las imágenes cargadas; deberán adjuntarse otra vez al reabrir.

Esta interfaz no genera MP4. La validación de render de fase 1 sigue independiente y la aprobación de fase 2 requiere pruebas en navegador. Consulte `docs/validaciones/FASE_2.md`.
