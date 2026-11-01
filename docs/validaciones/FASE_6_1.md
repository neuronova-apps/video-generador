# Fase 6.1 - Prueba extremo a extremo

Estado: en validación. La canalización convierte un paquete portable JSON del editor en composición local de HyperFrames, genera una imagen y un tono de ensayo con FFmpeg, ejecuta lint, render y comprueba presencia de pista de audio.

Restricciones: piloto con 1 escena y audio sintético; no demuestra clips de video externo, animaciones, subtítulos sincronizados ni compatibilidad humana del editor. El exportador HTML previo del navegador es distinto de esta nueva ruta de conversión. No desplegar ni fusionar a main hasta verificar resultados.

Ejecución automática: workflow Integración audiovisual fase 6.1. Siguiente acción tras aprobar piloto: integrar el generador compartido en la interfaz, validar multimedia real, seguridad y accesibilidad, y probar recuperación en navegador.
