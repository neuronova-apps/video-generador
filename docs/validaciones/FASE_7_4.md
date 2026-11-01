# Fase 7.4 - Guion y storyboard

Implementado en develop: generador determinista de borradores a partir de solicitud guardada y ficha web o GitHub analizada. Presenta escenas con duración distribuida, título, texto de narración, sugerencia visual y referencia de origen. Permite editar, registrar revisión humana cuando existe evidencia y exportar storyboard JSON.

No incorpora todavía un proveedor de IA ni crea narraciones inteligentes; los textos proceden de fragmentos de la fuente, requieren edición. No genera video ni se conecta al renderizador. La comparación de URL exige la misma fuente analizada para evitar mezclar proyectos.

La observación de GitHub sobre main es correcta: como main contiene un README mínimo, el análisis no describe el desarrollo de develop. Para contrastar otra rama se necesita ampliación del adaptador GitHub en una intervención posterior.

Pruebas: npm test, empaquetado editor y validación humana del guion. Pendiente comprobar revisión manual, calidad de escenas, enlaces de evidencia y exportación. Fase siguiente propuesta: 7.5, canalización audiovisual desde storyboard.
