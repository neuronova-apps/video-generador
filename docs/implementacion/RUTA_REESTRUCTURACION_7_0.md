# Ruta de reestructuración - Video Generador NN
Estado: fase 7.0 (planificación técnica).

| Etapa | Implementación | Criterio verificable |
| --- | --- | --- |
| 7.0 | Reorientación, inventario de reutilización, contratos y riesgos | Documentación versionada y CI sin regresión |
| 7.1 | Entrada de solicitudes, asistente de creación y selección de fuentes | Una solicitud se crea, edita y guarda sin render |
| 7.2 | Adaptador web público seguro | Datos y evidencias extraídos de URL de prueba, límites y protección SSRF comprobados |
| 7.3 | Adaptador GitHub (repos públicos y privados autorizados) | README, estructura y commit de prueba extraídos con trazabilidad, sin ejecutar código |
| 7.4 | Planificador de guiones y storyboard, con revisión humana | Proyecto editable y fuentes asociadas; datos dudosos señalados |
| 7.5 | Motor audiovisual: medios, texto, pistas, efectos y conversión HyperFrames | MP4 generado desde storyboard con pruebas FFprobe de audio/video y subtítulos |
| 7.6 | Cola de render, progreso, regeneración, descargas y persistencia | Trabajos aislados con estados y reintentos; proyecto recuperable |
| 7.7 | Pruebas integrales, seguridad, accesibilidad y piloto web controlado | Auditoría cerrada, aprobación humana y decisión explícita de publicación |

## Retenciones y deuda técnica
Mantener editor visual y pruebas existentes como piloto. No confundir vistas previas de transiciones con transiciones renderizadas. La fase 6.2 anterior no está cerrada completamente: falta validación de audio humano, exportación completa desde editor y seguridad del backend. Esos bloqueos se incorporan a puertas de calidad en 7.5 a 7.7; no se consideran resueltos por replanificar.

## Secuencia de entrega
Trabajar en `develop`, cambios pequeños con pruebas, un informe por etapa; fusionar a `main` solo tras aprobación. Las fuentes deben citarse en la ficha de proyecto y el guion final requiere revisión antes de render. Establecer límites, permisos y costos antes de integrar servicios externos.

## Primera próxima ejecución
Fase 7.1: interfaz de ingreso de instrucción y URL, selección de origen, borrador de solicitud persistente y pruebas; sin prometer análisis automático de repositorios hasta 7.3.
