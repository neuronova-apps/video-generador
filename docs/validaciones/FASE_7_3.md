# Fase 7.3 - Análisis de repositorios GitHub
Estado: prototipo local implementado; validación funcional pendiente.

Entrada admitida: URL principal pública https://github.com/owner/repo sin credenciales. Se usa API pública de GitHub, sin clonar ni ejecutar código. Se presenta la descripción, rama predeterminada, SHA de commit, encabezados y párrafos del README y archivos del árbol raíz. Se limita la respuesta, la lectura y el tiempo. La extracción del README es heurística y debe revisarse.
No se admiten repositorios privados en esta fase. La lectura de contenidos protegidos requiere integración autorizada posterior.
El servicio de análisis permanece enlazado a localhost. No publicar backend sin solucionar antes el control de salida de red del analizador web (DNS rebinding) y las medidas de aislamiento.
Comprobar npm test, funcionamiento del servidor, un repositorio público, errores de URL y la navegación del editor. Los resúmenes no constituyen afirmaciones verificadas de funcionamiento de la aplicación.
Siguiente fase tras aprobación: 7.4 generación de guion y storyboard.
