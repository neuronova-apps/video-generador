# Fase 8.0 - Reestructuración de composición audiovisual

Se reemplaza en el convertidor la plantilla de fondos y textos por un compositor modular que genera escenas de demostración con marco de navegador, capturas aportadas, resaltado animado, cursor ilustrativo, movimientos y distribución lateral de textos. Las escenas sin imagen presentan tarjetas gráficas y no simulan una captura inexistente.

**Alcance y honestidad visual:** el cursor y los puntos resaltados son ilustrativos y no representan clics reales. No se infieren controles de la web ni se valida que el resaltado corresponda a un elemento concreto. Sin capturas, el resultado sigue siendo una presentación gráfica. El sistema no tiene narración sonora automática.

**Criterio de aceptación:** renderizar un MP4 de 45 s con varias capturas verificadas, comprobar que el marco de navegador, el cursor y el resaltado se mueven en el video, que cambian las composiciones entre escenas y que no aparecen períodos negros. Si no hay diferencia visual apreciable respecto al piloto anterior, se rechaza la fase y se reestructura antes de continuar. Las pruebas unitarias no sustituyen la validación audiovisual humana.
