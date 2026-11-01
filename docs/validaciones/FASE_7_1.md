# Fase 7.1 - Asistente de solicitudes

Implementado en rama develop: formulario con origen instrucción/web/GitHub/archivos, nombre, instrucción, URL HTTPS cuando corresponde, duración 5-600 segundos, relación de aspecto; guardado del borrador en localStorage e importación/exportación JSON validada. La interfaz conserva el editor anterior. Pruebas unitarias en tests/request.test.mjs.

Importante: fase 7.1 no consulta URL, no analiza repositorios ni genera guiones automáticamente; estas funciones corresponden a fases 7.2-7.4. La referencia a archivos propios no incorpora todavía archivos a la solicitud (se utiliza la biblioteca del editor). No hay sincronización entre formato de solicitud y formato del editor; queda para integración posterior.

Pruebas humanas pendientes: crear, guardar, recargar, exportar/importar y validar restricciones de URL y duración. No declarar aprobación integral sin ellas.
