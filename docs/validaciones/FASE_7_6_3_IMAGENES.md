# Ampliación fase 7.6.3: recursos visuales aportados

Se añadió un campo de carga de imagen en cada escena del storyboard. Se aceptan PNG, JPG y WEBP de hasta 900 KB por escena. Las imágenes se integran en el JSON del storyboard mediante data URI y se representan en la composición HyperFrames con ligero zoom CSS y panel de texto superpuesto. La revisión de imágenes y narraciones exige una nueva aprobación si el usuario cambia el contenido.

El servicio local admite ahora solicitudes de hasta 8 MB. Esta cifra limita el número total de imágenes que pueden enviarse en una única solicitud. No supone soporte para un número ilimitado de capturas. El tamaño y tipo se validan en el modelo de storyboard.

**No implementado:** extracción automática de capturas de sitios o repositorios, simulación de clics, movimiento de cursor, narración sintetizada, sincronización fonética, ni análisis automático del contenido de imágenes. El resultado sigue siendo un piloto y debe probarse mediante un MP4 real: presencia de cada imagen, animación, legibilidad y duración de escenas.

Procedimiento: analizar fuente, preparar guion, adjuntar una o dos capturas a las escenas, registrar aprobación, generar MP4 y revisar el archivo descargado.
