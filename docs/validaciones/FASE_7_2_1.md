# Fase 7.2.1 - Depuración del contenido web

Objetivo: extraer una ficha de consulta con título, descripción, encabezados, párrafos diferenciados, secciones sugeridas y procedencia. El procesamiento heurístico elimina bloques de navegación, pie, lateral, scripts y estilos; deduplica párrafos exactamente normalizados.

Limitaciones: la extracción se basa en reglas y no comprende la semántica completa de la página. La asociación entre título de sección y párrafo es una propuesta aproximada, no una garantía. No interpreta páginas JavaScript dinámicas ni verifica hechos. No genera guiones o videos.

Seguridad pendiente heredada: el prototipo local de consulta HTTPS tiene riesgo de rebinding DNS; no desplegar como servicio público hasta fijar el destino de red validado, limitar redirecciones y aislar la salida.

Validación: npm test y revisión humana con páginas de estructura diferente. Siguiente fase tras aceptación: 7.3, integración GitHub.
