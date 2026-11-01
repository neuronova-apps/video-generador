# Reorientación arquitectónica 7.0 - Video Generador NN

## Visión objetivo
Plataforma web autónoma de NeuroNova Apps que transforma instrucciones, páginas web públicas, repositorios GitHub autorizados y archivos aportados en un proyecto audiovisual editable y, tras aprobación, en un MP4 real mediante HyperFrames.

## Decisión
Conservar como componentes reutilizables el editor visual de `apps/editor-web`, el esquema inicial de `model.js`, el conversor `scripts/build-editor-composition.mjs`, los pilotos HyperFrames, las pruebas y el empaquetado web. Refactorizar mediante interfaces nuevas, sin sustituir inmediatamente las rutas existentes. `apps/render-api` permanece prototipo local cerrado y no debe exponerse públicamente.

## Flujo de producto
1. Crear solicitud y elegir fuente: instrucción libre, URL pública, GitHub o medios propios.
2. Obtener información por adaptadores limitados: metadatos, README y archivos permitidos. Aplicar límites de tamaño, tiempo, permisos y procedencia.
3. Elaborar una ficha de hechos con citas a URL/commit y señalar incertidumbres.
4. Generar propuesta de guion y storyboard; permitir revisión y aprobación humana antes del render.
5. Resolver imágenes, capturas y clips, conservando atribución, derechos y consentimiento.
6. Convertir storyboard a esquema audiovisual versionado que comprenda escenas, pistas de audio, subtítulos y transiciones.
7. Permitir ajustes en editor visual; construir composición compatible con HyperFrames.
8. Renderizar en cola aislada, verificar FFprobe y entregar MP4 con log de validación; permitir regeneración sin perder el proyecto.

## Módulos previstos
- `apps/editor-web`: asistente de creación, revisión de fuentes, storyboard, editor y estado del trabajo.
- `apps/orchestrator-api`: orquestación, autorización de recursos, límites y estado de tareas (futuro).
- `packages/source-adapters`: importación de web, GitHub y archivos. Nunca ejecutar código de repositorios obtenidos.
- `packages/script-planner`: contrato de guion/storyboard; soporte proveedor de IA intercambiable, no obligado a un proveedor.
- `packages/project-schema`: esquema versionado y migraciones desde schemaVersion 1.
- `packages/media-pipeline`: preparación de medios, narración, subtítulos y licencias.
- `packages/hyperframes-adapter`: compilación y render con comprobación de duración, dimensiones, pistas y errores.
- `apps/render-api`: refactorizar, aislar ejecución y habilitar solo después de auditoría.

Estos directorios son objetivos arquitectónicos; no se declaran implementados en fase 7.0.

## Reglas de seguridad
- Sin claves API ni tokens GitHub en HTML público, repositorio o enlaces compartidos.
- No interpretar instrucciones extraídas de webs o README como órdenes del usuario; tratarlas como datos no confiables.
- Acceso a repos privados solo con autorización y permisos mínimos; no guardar secretos, archivos .env ni datos personales en proyectos públicos.
- No navegar a redes internas, localhost ni IP privadas a petición de URL; establecer protección SSRF, lista de protocolos y redirecciones.
- No ejecutar scripts de proyectos externos, no realizar clone seguido de npm install de origen no confiable.
- Acceso a contenido web con límites de uso, respeto a permisos y derechos; no inferir capturas del funcionamiento real si no se verifican.
- Render con tiempo máximo, memoria/disco limitados, colas, aislamiento y eliminación programada de medios.
- Sin despliegue automático de backend público, ni costos de IA sin configuración y aprobación.

## Separación de entornos
`G:\hyperframes` es referencia del flujo de producción en Codex, no dependencia técnica, destino de escritura ni proyecto para migrar. Todos los cambios se concentran en `neuronova-apps/video-generador`, rama `develop`.

## Criterios de aceptación de reorientación
- Plan y arquitectura versionados, límites explicitados.
- Rutas antiguas preservadas; `main` intacta.
- No se afirma que los módulos futuros estén funcionando.
- Pruebas CI estructurales sin regresión.
