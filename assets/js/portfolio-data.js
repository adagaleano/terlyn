const portfolioData = {

  "informe-trimestral": {
    title: "Informe Trimestral de Recaudación",
    category: "Informe automatizado",
    tools: ["Python", "LaTeX", "Oracle", "KNIME", "matplotlib"],
    period: "2023 – presente",
    institution: "SAR – Honduras",
    image: "assets/img/portafolio/recaudación.png",
    description: "Pipeline end-to-end que genera automáticamente el informe trimestral de recaudación tributaria del SAR. Incluye análisis de estacionalidad del Impuesto Sobre Ventas en Honduras.",
    steps: [
      { title: "Extracción de datos", tools: ["Oracle", "KNIME"],
        desc: "Consultas estructuradas a la base de datos tributaria Oracle para obtener recaudación por impuesto, período y tipo de contribuyente, orquestadas con flujos KNIME." },
      { title: "Procesamiento y limpieza", tools: ["Python", "pandas"],
        desc: "Validación, estructuración y consolidación de los datos: manejo de valores nulos, agregación por período y cálculo de acumulados por impuesto." },
      { title: "Análisis estadístico", tools: ["Python", "numpy", "scipy"],
        desc: "Cálculo de variaciones interanuales, análisis de estacionalidad del ISV y descomposición de series de tiempo para identificar tendencias y ciclos." },
      { title: "Generación de gráficos", tools: ["matplotlib", "seaborn"],
        desc: "Producción automática de gráficos de recaudación, comparativos históricos y curvas de estacionalidad en formato apto para publicación institucional." },
      { title: "Compilación del informe", tools: ["LaTeX", "pdflatex"],
        desc: "Inserción dinámica de cifras actualizadas y gráficos en la plantilla LaTeX del informe trimestral. Compilación automática del PDF final." },
      { title: "Revisión y distribución", tools: ["Control interno"],
        desc: "Entrega del PDF final con nomenclatura versionada al equipo directivo del SAR para revisión y publicación." }
    ]
  },

  "nota-ejecutiva": {
    title: "Nota Ejecutiva de Recaudación",
    category: "Informe automatizado",
    tools: ["Python", "R", "LaTeX", "Google Sheets API", "Shiny"],
    period: "2023 – presente",
    institution: "SAR – Honduras",
    image: "assets/img/portafolio/Nota ejecutiva.png",
    description: "Nota ejecutiva mensual generada automáticamente con R y Python. Integra datos de Google Sheets, procesamiento del IPC nacional y plantilla LaTeX para producir un análisis de la recaudación real.",
    steps: [
      { title: "Lectura desde Google Sheets", tools: ["Google Sheets API", "Python", "R"],
        desc: "Extracción automática de datos de recaudación almacenados en hojas de cálculo compartidas usando la API de Google Sheets desde Python y R (lecturas_gsheets.R)." },
      { title: "Procesamiento del IPC", tools: ["Python – ipc.py", "R – ipc_bch.R"],
        desc: "Descarga y procesamiento del Índice de Precios al Consumidor para deflactar la recaudación nominal a valores reales." },
      { title: "Cálculo de indicadores", tools: ["Python", "R"],
        desc: "Cálculo de variaciones interanuales, acumulados, recaudación real deflactada y desviaciones respecto a la meta programada." },
      { title: "Generación de gráficos", tools: ["matplotlib", "ggplot2"],
        desc: "Producción automática de gráficos de tendencia, barras comparativas y tablas de resultados mensuales listos para el documento." },
      { title: "Compilación con LaTeX", tools: ["LaTeX", "pdflatex", "R Markdown"],
        desc: "Las cifras y gráficos se insertan automáticamente en la plantilla LaTeX. El informe se compila con pdflatex para generar el PDF final (render_nota.R)." },
      { title: "Publicación en Shiny", tools: ["R Shiny", "shinyapps.io"],
        desc: "La nota ejecutiva se integra como módulo en el dashboard Shiny interno del SAR, permitiendo actualización dinámica y consulta interactiva." }
    ]
  },

  "informe-ventas": {
    title: "Informe de Ventas Tributarias",
    category: "Informe automatizado",
    tools: ["R", "KNIME", "Oracle", "PL-SQL", "ggplot2"],
    period: "2022 – presente",
    institution: "SAR – Honduras",
    image: "assets/img/portafolio/ventas.png",
    description: "Análisis y reportería automatizada de ventas gravadas versus ingresos declarados por contribuyente y período, construida con pipeline KNIME y procesamiento en R.",
    steps: [
      { title: "Extracción de ventas declaradas", tools: ["Oracle", "PL-SQL"],
        desc: "Consultas a la base Oracle para obtener declaraciones de ventas por contribuyente, actividad económica y período fiscal." },
      { title: "Consolidación y limpieza", tools: ["KNIME"],
        desc: "Flujo KNIME para consolidar múltiples períodos, eliminar duplicados, validar RTN y estructurar el dataset en formato analítico." },
      { title: "Cálculo de brechas", tools: ["R", "dplyr"],
        desc: "Comparación de ventas gravadas declaradas contra ingresos tributarios reportados para identificar brechas por contribuyente y sector económico." },
      { title: "Visualización de tendencias", tools: ["ggplot2"],
        desc: "Gráficos de ventas por sector, evolución mensual y distribución por contribuyente para el cuerpo del informe." },
      { title: "Generación del informe", tools: ["R Markdown", "LaTeX"],
        desc: "Compilación automática del informe en PDF con indicadores actualizados, tablas y gráficos insertados desde el pipeline de datos." }
    ]
  },

  "resumen-ejecutivo": {
    title: "Resumen Ejecutivo Automatizado",
    category: "Informe automatizado",
    tools: ["R", "R Markdown", "LaTeX", "Shiny", "Google Sheets"],
    period: "2023 – presente",
    institution: "SAR – Honduras",
    image: "assets/img/portafolio/Resumen ejec.png",
    description: "Documento ejecutivo generado automáticamente con R Markdown y LaTeX, integrado al dashboard Shiny interno del SAR para actualización dinámica de cifras de recaudación.",
    steps: [
      { title: "Lectura de datos actualizados", tools: ["R", "Google Sheets API"],
        desc: "Conexión automática a hojas de cálculo compartidas mediante lecturas_gsheets.R para obtener los datos más recientes de recaudación." },
      { title: "Procesamiento de indicadores", tools: ["R", "dplyr", "tidyr"],
        desc: "Cálculo de variaciones, acumulados, metas y desviaciones; estructuración de tablas resumen para el documento." },
      { title: "Construcción de gráficos", tools: ["ggplot2", "plotly"],
        desc: "Gráficos dinámicos e interactivos de recaudación mensual, comparativos históricos y distribución por tipo de impuesto." },
      { title: "Renderizado LaTeX", tools: ["R Markdown", "pdflatex"],
        desc: "El script render_nota.R compila la plantilla LaTeX con cifras y gráficos actualizados, produciendo el PDF final del resumen ejecutivo." },
      { title: "Integración con Shiny", tools: ["R Shiny", "ui.R", "server.R"],
        desc: "El resumen se integra como componente del dashboard Shiny, permitiendo actualización en tiempo real desde la interfaz web interna." },
      { title: "Despliegue", tools: ["rsconnect", "shinyapps.io"],
        desc: "La aplicación se despliega en shinyapps.io para acceso del equipo del SAR desde cualquier dispositivo." }
    ]
  },

  "dashboard-datalab": {
    title: "Dashboard DataLab SAR",
    category: "Dashboard interactivo",
    tools: ["R", "Shiny", "plotly", "ggplot2", "shinyapps.io"],
    period: "2022 – presente",
    institution: "SAR – Honduras",
    image: "assets/img/masonry-portfolio/masonry-portfolio-1.jpg",
    description: "Aplicación Shiny con visualización interactiva de ISR personas jurídicas, ISR personas naturales y ventas del SAR. Publicada en shinyapps.io para acceso del equipo de análisis.",
    steps: [
      { title: "Definición de requerimientos", tools: ["Coordinación interna"],
        desc: "Levantamiento de necesidades del equipo DataLab: indicadores clave, filtros requeridos y periodicidad de actualización." },
      { title: "Preparación de datos", tools: ["R", "readxl", "dplyr"],
        desc: "Carga y procesamiento de los archivos ISRPJ.xlsx, ISRPN.xlsx y VENTAS.xlsx; limpieza de datos y creación de variables derivadas." },
      { title: "Diseño de la interfaz", tools: ["R Shiny", "shinydashboard"],
        desc: "Diseño de la UI con tabs por tipo de impuesto, paneles de filtros (período, actividad económica) y área de visualización principal." },
      { title: "Construcción de visualizaciones", tools: ["plotly", "ggplot2"],
        desc: "Gráficos interactivos de recaudación mensual, acumulados, comparativos históricos y tablas dinámicas con descarga en Excel." },
      { title: "Reactividad y lógica de servidor", tools: ["R Shiny", "reactiveValues"],
        desc: "Implementación de la lógica reactiva para filtros dinámicos y actualización automática de gráficos según la selección del usuario." },
      { title: "Despliegue", tools: ["rsconnect", "shinyapps.io"],
        desc: "Publicación de la aplicación en shinyapps.io mediante rsconnect, con acceso restringido al equipo del SAR." }
    ]
  },

  "dashboard-aduanas": {
    title: "Dashboard SAR-Aduanas",
    category: "Dashboard interactivo",
    tools: ["R", "Shiny", "Oracle", "PL-SQL", "plotly", "dplyr"],
    period: "2023 – presente",
    institution: "SAR – Honduras",
    image: "assets/img/masonry-portfolio/masonry-portfolio-2.jpg",
    description: "Dashboard Shiny integrado con datos tributarios internos y aduaneros del SAR, con detalle por impuesto, domicilio fiscal y reclasificación de contribuyentes.",
    steps: [
      { title: "Extracción de datos tributarios", tools: ["Oracle", "PL-SQL", "sar.R"],
        desc: "Consultas PL-SQL a la base Oracle del SAR para obtener recaudación detallada por impuesto, período y contribuyente (recaudacion.R)." },
      { title: "Extracción de datos aduaneros", tools: ["R", "aduanas.R"],
        desc: "Carga y procesamiento de datos de importaciones y exportaciones provenientes del sistema aduanero nacional." },
      { title: "Cruce y reclasificación", tools: ["R", "dplyr", "base_reclasificacion.csv"],
        desc: "Cruce entre datos tributarios y aduaneros por RTN del contribuyente, con reclasificación de sectores según tabla de equivalencia." },
      { title: "Módulos por impuesto", tools: ["detalle_impuestos.R", "graficos_detalle.R"],
        desc: "Construcción de módulos independientes para ISR, ISV, Aduanas y otros impuestos, con gráficos de detalle por módulo." },
      { title: "Domicilio fiscal", tools: ["sar_domicilio_data.R"],
        desc: "Procesamiento de datos de domicilio fiscal para visualizar la distribución geográfica de la recaudación por departamento y municipio." },
      { title: "Interfaz y despliegue", tools: ["ui.R", "server.R", "shinyapps.io"],
        desc: "Estructura modular separada en ui.R y server.R, con despliegue en shinyapps.io y acceso controlado por credenciales." }
    ]
  },

  "dashboard-modulos": {
    title: "Dashboard Shiny con Módulos",
    category: "Dashboard interactivo",
    tools: ["R", "Shiny", "módulos Shiny", "ggplot2", "shinyapps.io"],
    period: "2022 – 2023",
    institution: "SAR – Honduras",
    image: "assets/img/masonry-portfolio/masonry-portfolio-3.jpg",
    description: "Aplicación Shiny modularizada con autenticación de usuarios, análisis por departamento e indicadores tributarios interactivos.",
    steps: [
      { title: "Arquitectura modular", tools: ["R Shiny modules"],
        desc: "Diseño de la aplicación con módulos Shiny independientes (moduleUI + moduleServer) para separar la lógica por sección y facilitar el mantenimiento." },
      { title: "Sistema de autenticación", tools: ["R", "registrarse.R"],
        desc: "Implementación de un sistema de registro e inicio de sesión para controlar el acceso a la información tributaria del dashboard." },
      { title: "Carga de datos departamentales", tools: ["R", "readxl"],
        desc: "Lectura de datos por departamento desde el archivo Excel, con procesamiento de indicadores por región geográfica." },
      { title: "Visualizaciones interactivas", tools: ["ggplot2", "plotly"],
        desc: "Mapas de calor departamentales, gráficos comparativos y tablas de indicadores tributarios con filtros reactivos." },
      { title: "Lógica de servidor", tools: ["R Shiny", "app2.R"],
        desc: "Implementación del servidor con funciones reactivas por módulo, manejo del estado de sesión y comunicación entre módulos." },
      { title: "Despliegue", tools: ["rsconnect", "shinyapps.io"],
        desc: "Publicación en shinyapps.io con configuración de acceso por credenciales para el equipo autorizado." }
    ]
  },

  "evasion-fiscal": {
    title: "Estimación de Evasión Fiscal ISV",
    category: "Análisis fiscal",
    tools: ["Stata", "R", "Excel", "RA-GAP", "BID/FMI"],
    period: "2022 – 2023",
    institution: "SAR – Honduras / BID",
    image: "assets/img/masonry-portfolio/masonry-portfolio-4.jpg",
    description: "Aplicación de la metodología RA-GAP del BID/FMI para estimar el gap tributario del ISV en Honduras (2018–2022) usando matrices de oferta y utilización (COU) trimestrales y datos aduaneros.",
    steps: [
      { title: "Revisión metodológica RA-GAP", tools: ["Documentación BID/FMI"],
        desc: "Estudio de la metodología Revenue Administration Gap Analysis Program del FMI, adaptada al contexto tributario de Honduras por el BID." },
      { title: "Construcción de matrices COU", tools: ["Excel", "Stata"],
        desc: "Preparación de las matrices de oferta y utilización trimestrales 2018–2023 como base para estimar el consumo teórico gravado por el ISV." },
      { title: "Preprocesamiento de declaraciones ISV", tools: ["Stata", "Data_Prep_Declaraciones_ISV.do"],
        desc: "Limpieza y estructuración de las declaraciones del ISV para los anexos AV3 y AV4 del formulario tributario usando scripts Stata." },
      { title: "Preprocesamiento de pagos ISV", tools: ["Stata", "Data_Prep_Pagos_ISV.do"],
        desc: "Procesamiento de los pagos efectivos del ISV (anexos AV1 y AV2) para separar la recaudación observada por tipo de contribuyente." },
      { title: "Cálculo del gap tributario", tools: ["RA-GAP", "Excel", "Stata"],
        desc: "Aplicación del modelo RA-GAP para comparar la recaudación teórica potencial con la observada y estimar la tasa de evasión del ISV." },
      { title: "Validación con datos aduaneros", tools: ["R", "bases Aduanas SAR"],
        desc: "Cruce con datos de importaciones para validar las estimaciones de consumo y ajustar el gap por bienes exonerados y exentos." },
      { title: "Redacción del informe técnico", tools: ["Word", "LaTeX"],
        desc: "Elaboración del informe de resultados con metodología, hallazgos y recomendaciones de política fiscal, publicado oficialmente por el SAR." }
    ]
  },

  "proyecciones": {
    title: "Proyecciones de Ingresos Tributarios",
    category: "Análisis fiscal",
    tools: ["R", "Excel", "R Markdown", "forecast", "ARIMA"],
    period: "2021 – presente",
    institution: "SAR – Honduras",
    image: "assets/img/portafolio/proyecciones.png",
    description: "Sistema de pronóstico y distribución de ingresos tributarios por categoría impositiva, con seguimiento mensual de desviaciones respecto a la meta programada.",
    steps: [
      { title: "Análisis de series históricas", tools: ["R", "Excel"],
        desc: "Revisión de la recaudación histórica por impuesto para identificar tendencias, estacionalidad y factores atípicos que influyen en la proyección." },
      { title: "Variables macroeconómicas", tools: ["INE", "Excel", "fuentes oficiales"],
        desc: "Incorporación de variables externas (PIB, inflación, consumo) de fuentes estadísticas oficiales como predictores en los modelos de pronóstico." },
      { title: "Modelado de pronóstico", tools: ["R", "forecast", "ARIMA"],
        desc: "Construcción de modelos ARIMA y ETS en R para proyectar la recaudación por impuesto en el año en curso y el siguiente." },
      { title: "Distribución por impuesto", tools: ["Excel", "plantillas SAR"],
        desc: "Distribución de los ingresos tributarios proyectados entre ISR (PJ y PN), ISV, Aduanas y otros impuestos usando plantillas estandarizadas." },
      { title: "Seguimiento mensual", tools: ["Excel", "R"],
        desc: "Actualización mensual de las plantillas para comparar lo proyectado vs. lo observado y calcular desviaciones acumuladas." },
      { title: "Documentación técnica", tools: ["R Markdown"],
        desc: "Generación de reportes técnicos con los supuestos, el modelo aplicado y la evolución de los pronósticos para comunicación interna." }
    ]
  },

  "reclasificacion": {
    title: "Impacto de la Reclasificación de Contribuyentes",
    category: "Análisis fiscal",
    tools: ["R", "fixest", "did", "ggplot2", "Oracle", "R Markdown"],
    period: "2023 – 2024",
    institution: "SAR – Honduras",
    image: "assets/img/masonry-portfolio/masonry-portfolio-5.jpg",
    description: "Análisis causal del efecto de la reclasificación de contribuyentes sobre la recaudación tributaria, aplicando la metodología de diferencias en diferencias (DiD) sobre un panel de datos fiscales.",
    steps: [
      { title: "Definición de la pregunta causal", tools: ["Diseño de investigación"],
        desc: "Formulación de la hipótesis: ¿en qué medida la reclasificación de un contribuyente a una categoría de mayor control impacta su comportamiento tributario y la recaudación?" },
      { title: "Extracción del panel de datos", tools: ["Oracle", "PL-SQL"],
        desc: "Construcción del panel histórico de contribuyentes clasificados y no clasificados, con su recaudación mensual antes y después del evento de reclasificación." },
      { title: "Construcción del dataset analítico", tools: ["R", "dplyr", "tidyr"],
        desc: "Estructuración del panel balanceado: identificación del grupo tratado (reclasificados), el grupo control y la ventana de tiempo pre/post tratamiento." },
      { title: "Verificación de tendencias paralelas", tools: ["R", "ggplot2", "event study"],
        desc: "Prueba del supuesto de tendencias paralelas mediante gráficos de estudio de eventos, validando la comparabilidad entre grupos antes del tratamiento." },
      { title: "Estimación del modelo DiD", tools: ["R", "fixest", "did"],
        desc: "Estimación del efecto causal usando diferencias en diferencias con efectos fijos de contribuyente y período, incluyendo variantes de DiD escalonado." },
      { title: "Análisis de heterogeneidad", tools: ["R", "fixest"],
        desc: "Descomposición del efecto por sector económico, tamaño de contribuyente y tipo de impuesto para identificar dónde el impacto es más pronunciado." },
      { title: "Documentación de resultados", tools: ["R Markdown", "LaTeX"],
        desc: "Elaboración del informe técnico con descripción del diseño, tablas de coeficientes, gráficos de event study y discusión de los hallazgos de política." }
    ]
  },

  "workflows-knime": {
    title: "Workflows KNIME para Solicitudes",
    category: "Solicitud de datos",
    tools: ["KNIME", "Oracle", "Excel", "anonimización de RTN"],
    period: "2022 – presente",
    institution: "SAR – Honduras",
    image: "assets/img/masonry-portfolio/masonry-portfolio-7.jpg",
    description: "Automatización en KNIME de solicitudes de datos a instituciones externas (IHSS, Aduanas y otras). Incluye extracción, anonimización y entrega controlada de microdatos enmascarados.",
    steps: [
      { title: "Definición del requerimiento", tools: ["Solicitud formal"],
        desc: "Elaboración del documento de solicitud con las variables, períodos y desagregaciones requeridas por la contraparte institucional." },
      { title: "Diseño del workflow KNIME", tools: ["KNIME Analytics Platform"],
        desc: "Construcción del flujo de trabajo con nodos de lectura (Oracle, CSV, Excel), transformación, filtrado y salida específicos para cada solicitud (.knwf)." },
      { title: "Extracción de microdatos", tools: ["KNIME", "Oracle"],
        desc: "Consulta a bases de datos internas del SAR para extraer los registros solicitados, con validación de completitud y consistencia." },
      { title: "Anonimización de RTN", tools: ["KNIME", "enmascaramiento"],
        desc: "Sustitución del RTN real por un identificador enmascarado reproducible para proteger la identidad de los contribuyentes en la entrega." },
      { title: "Control de calidad", tools: ["KNIME", "estadísticas descriptivas"],
        desc: "Generación de estadísticas de validación: conteos, distribuciones y cruces para verificar que los datos entregados sean correctos y completos." },
      { title: "Entrega de datos", tools: ["CSV", "Excel", "gestión documental"],
        desc: "Empaquetado y entrega de los archivos enmascarados a la institución solicitante con acta de recepción y guía técnica de variables." }
    ]
  },

  "avvisi-audio": {
    title: "Avvisi Audio – Sistema Web",
    category: "Sistema web",
    tools: ["Flask", "Python", "Supabase", "PostgreSQL", "LaTeX", "Docker", "Render", "Jinja2"],
    period: "2024",
    institution: "Avvisi Audio (freelance)",
    image: "assets/img/masonry-portfolio/masonry-portfolio-6.jpg",
    description: "Sistema web integral desarrollado en Flask para la gestión operativa de Avvisi Audio: cotizaciones con PDF automático en LaTeX, catálogo de productos, clientes, proveedores, eventos y dashboard analítico. Desplegado en Render con Docker y base de datos en Supabase.",
    steps: [
      { title: "Diseño de la arquitectura", tools: ["Flask", "blueprints", "Supabase"],
        desc: "Definición de la estructura modular con el patrón de blueprints de Flask (auth, clients, items, quotations, suppliers, events, dashboard) y base de datos PostgreSQL en Supabase." },
      { title: "Autenticación y sesiones", tools: ["Supabase Auth", "GoTrue", "Flask sessions"],
        desc: "Implementación del sistema de registro, inicio de sesión y gestión de sesiones usando Supabase Auth y control de acceso por roles de usuario." },
      { title: "Módulos del sistema", tools: ["Flask blueprints", "SQLAlchemy", "Jinja2"],
        desc: "Desarrollo de los módulos de clientes, contactos, proveedores, catálogo de ítems, eventos y usuarios; cada uno con sus rutas, servicio y plantillas HTML." },
      { title: "Cotizaciones y generación de PDF", tools: ["LaTeX", "pdf.py", "templates_latex"],
        desc: "Motor de cotizaciones con plantilla LaTeX dinámica: los datos del cliente, ítems y precios se insertan automáticamente y se compila el PDF final para descarga." },
      { title: "Dashboard analítico", tools: ["Flask", "Jinja2", "Supabase"],
        desc: "Panel de control con métricas de cotizaciones, clientes activos y eventos recientes, construido sobre el blueprint de dashboard con consultas agregadas a Supabase." },
      { title: "Página web pública", tools: ["HTML", "CSS", "Jinja2"],
        desc: "Diseño y desarrollo de la página web pública de Avvisi Audio: presentación de servicios, catálogo y formulario de contacto, integrada al mismo proyecto Flask." },
      { title: "Despliegue en producción", tools: ["Docker", "Render", "gunicorn"],
        desc: "Contenerización con Dockerfile, configuración del servicio en Render (render.yaml) y servidor WSGI con gunicorn para el despliegue en producción." }
    ]
  },

  "powerpoint-auto": {
    title: "Generación Automática de PowerPoint",
    category: "Automatización",
    tools: ["Python", "python-pptx", "pandas", "matplotlib"],
    period: "2024",
    institution: "SAR – Honduras",
    image: "assets/img/masonry-portfolio/masonry-portfolio-9.jpg",
    description: "Script Python que produce presentaciones institucionales completas a partir de datos procesados, eliminando la edición manual de diapositivas.",
    steps: [
      { title: "Definición de la plantilla", tools: ["PowerPoint", "python-pptx"],
        desc: "Diseño de la plantilla institucional en PowerPoint con estilos corporativos y marcadores de posición para datos dinámicos." },
      { title: "Carga y procesamiento de datos", tools: ["Python", "pandas"],
        desc: "Lectura de datos de recaudación o análisis desde archivos Excel/CSV y cálculo de los indicadores que irán en cada diapositiva." },
      { title: "Generación de gráficos", tools: ["matplotlib", "seaborn"],
        desc: "Producción de los gráficos en formato imagen (PNG) listos para inserción en las diapositivas correspondientes." },
      { title: "Construcción de diapositivas", tools: ["python-pptx", "main.py"],
        desc: "Inserción automática de títulos, cifras, tablas e imágenes de gráficos en cada diapositiva según la estructura de la plantilla." },
      { title: "Exportación del archivo", tools: ["python-pptx"],
        desc: "Generación del archivo .pptx final con nomenclatura de fecha y versión, listo para presentación sin intervención manual adicional." }
    ]
  },

  "etl-oracle": {
    title: "ETL Oracle / PL-SQL",
    category: "Automatización",
    tools: ["Oracle", "PL-SQL", "SQL", "KNIME"],
    period: "2021 – presente",
    institution: "SAR – Honduras",
    image: "assets/img/masonry-portfolio/masonry-portfolio-1.jpg",
    description: "Procesos de extracción, transformación y carga de datos tributarios en Oracle con validaciones automáticas, trazabilidad completa y control de calidad.",
    steps: [
      { title: "Análisis de fuentes de datos", tools: ["Oracle SQL Developer"],
        desc: "Exploración y documentación de los esquemas Oracle del SAR: tablas de declaraciones, pagos, contribuyentes y relaciones disponibles." },
      { title: "Diseño de consultas de extracción", tools: ["PL-SQL", "SQL"],
        desc: "Construcción de consultas optimizadas con JOINs, filtros por período y agregaciones para extraer los datos requeridos en cada análisis." },
      { title: "Transformación de datos", tools: ["PL-SQL", "funciones", "procedures"],
        desc: "Normalización de campos, unificación de formatos de fecha y RTN, reclasificación de códigos y construcción de variables derivadas mediante procedures PL-SQL." },
      { title: "Validaciones de calidad", tools: ["PL-SQL", "KNIME"],
        desc: "Implementación de reglas de validación: rangos plausibles, consistencia entre declaraciones y pagos, RTN válidos y completitud de registros." },
      { title: "Carga a tablas destino", tools: ["Oracle", "INSERT", "UPDATE"],
        desc: "Carga de los datos transformados y validados a las tablas analíticas de destino, con control de duplicados y manejo de cargas incrementales." },
      { title: "Auditoría y trazabilidad", tools: ["Oracle", "logs de procesamiento"],
        desc: "Registro de cada ejecución en tablas de log: fecha, registros procesados, errores encontrados y responsable, para trazabilidad completa del proceso." }
    ]
  }

};
