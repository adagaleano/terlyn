const portfolioData = {

  "informe-recaudacion": {
    title: "Informe Mensual de Recaudación",
    category: "Informe automatizado",
    tools: ["Python", "KNIME", "Google Sheets API", "pandas", "matplotlib", "SVG", "Jinja2", "LaTeX", "latexmk"],
    period: "2025 – presente",
    institution: "SAR – Honduras (DEFE)",
    image: "assets/img/portafolio/Informes%20y%20notas/recaudación.png",
    description: "Pipeline en Python orientado a objetos que genera automáticamente el informe mensual de recaudación del SAR. Lee desde Google Sheets los datos de SAR y Aduanas preparados en KNIME, calcula variaciones interanuales (mensuales y acumuladas) y desglosa la recaudación por impuesto, tipo y tamaño de contribuyente, departamento, municipio y actividad económica; produce gráficos y mapas y compila el PDF final en LaTeX.",
    steps: [
      { title: "Preparación de datos en KNIME", tools: ["KNIME", "Google Sheets"],
        desc: "Un flujo KNIME extrae y prepara la recaudación de SAR y Aduanas y la publica en hojas de Google Sheets que sirven como fuente del pipeline." },
      { title: "Carga desde Google Sheets", tools: ["Python", "Google Sheets API", "loader.py"],
        desc: "La clase RecaudacionLoader lee con la API de Google Sheets (cuenta de servicio) las hojas de SAR, Aduanas, tipo y tamaño de contribuyente, departamento, municipio y actividad económica, y las consolida." },
      { title: "Procesamiento y agregación", tools: ["Python", "pandas", "processor.py"],
        desc: "La clase RecaudacionProcessor agrega totales, calcula variaciones interanuales por entidad e impuesto y construye tablas anuales, mensuales y acumuladas (YTD) por cada dimensión." },
      { title: "Gráficos y mapas", tools: ["matplotlib", "SVG", "plotter.py"],
        desc: "La clase RecaudacionPlotter genera los gráficos (evolución, composición por tipo de impuesto, variaciones por concepto de SAR y Aduanas) y rellena plantillas SVG con mapas por departamento y rankings de actividad económica." },
      { title: "Exportación de tablas LaTeX", tools: ["Python", "LaTeX"],
        desc: "Cada tabla (tipo y tamaño de contribuyente, departamento, municipio y sección económica) se exporta como fragmento .tex listo para insertarse en el documento." },
      { title: "Compilación del informe", tools: ["Jinja2", "LaTeX", "latexmk", "reporter.py"],
        desc: "render_tex rellena la plantilla LaTeX con Jinja2 (figuras y tablas) y compile_pdf la compila con latexmk para producir el PDF mensual sin edición manual." }
    ]
  },

  "nota-ejecutiva": {
    title: "Nota Ejecutiva de Recaudación",
    category: "Informe automatizado",
    tools: ["Python", "R", "LaTeX", "Google Sheets API", "Shiny"],
    period: "2023 – presente",
    institution: "SAR – Honduras",
    image: "assets/img/portafolio/Informes%20y%20notas/Nota%20ejecutiva.png",
    description: "Nota ejecutiva mensual generada automáticamente con Python (y una versión paralela en R/Shiny). Integra datos de Google Sheets, procesamiento del IPC del BCH y plantilla LaTeX para producir un análisis de la recaudación real.",
    steps: [
      { title: "Lectura desde Google Sheets", tools: ["Google Sheets API", "Python", "R"],
        desc: "Extracción automática de datos de recaudación almacenados en hojas de cálculo compartidas usando la API de Google Sheets desde Python y R (lecturas_gsheets.R)." },
      { title: "Procesamiento del IPC", tools: ["Python – ipc.py", "R – ipc_bch.R"],
        desc: "Descarga y procesamiento del Índice de Precios al Consumidor del BCH para deflactar la recaudación nominal a valores reales." },
      { title: "Cálculo de indicadores", tools: ["Python", "R"],
        desc: "Cálculo de variaciones interanuales, acumulados, recaudación real deflactada y desviaciones respecto a la meta programada." },
      { title: "Generación de gráficos", tools: ["matplotlib", "ggplot2"],
        desc: "Producción automática de gráficos de tendencia, barras comparativas y tablas de resultados mensuales listos para el documento." },
      { title: "Compilación con LaTeX", tools: ["LaTeX", "pdflatex"],
        desc: "Las cifras y gráficos se insertan automáticamente en la plantilla LaTeX y el informe se compila para generar el PDF final (render_nota.R / generador_informe.py)." },
      { title: "Versión en Shiny", tools: ["R Shiny"],
        desc: "Existe una versión en R/Shiny (app.R, server.R, ui.R) que permite generar y consultar la nota de forma interactiva." }
    ]
  },

  "informe-ventas": {
    title: "Informe de Ventas Tributarias",
    category: "Informe automatizado",
    tools: ["Python", "KNIME", "pandas", "matplotlib", "LaTeX"],
    period: "2022 – presente",
    institution: "SAR – Honduras",
    image: "assets/img/portafolio/Informes%20y%20notas/ventas.png",
    description: "Análisis y reportería automatizada de ventas gravadas versus ingresos declarados por contribuyente y período, con extracción en KNIME y procesamiento en Python con ajuste por IPC.",
    steps: [
      { title: "Extracción de ventas declaradas", tools: ["KNIME"],
        desc: "Flujo KNIME para obtener las declaraciones de ventas por contribuyente, actividad económica y período fiscal." },
      { title: "Carga y limpieza", tools: ["Python", "pandas", "loader.py"],
        desc: "Lectura, consolidación de múltiples períodos, validación y estructuración del dataset en formato analítico." },
      { title: "Ajuste por IPC", tools: ["Python", "ipc.py"],
        desc: "Procesamiento del IPC para deflactar las ventas e ingresos y poder comparar valores reales entre períodos." },
      { title: "Cálculo de indicadores", tools: ["Python", "processor.py"],
        desc: "Comparación de ventas gravadas declaradas contra ingresos tributarios reportados para identificar brechas por contribuyente y sector." },
      { title: "Visualización de tendencias", tools: ["matplotlib"],
        desc: "Gráficos de ventas por sector, evolución mensual y distribución por contribuyente para el cuerpo del informe." },
      { title: "Generación del informe", tools: ["LaTeX", "plantilla .tex"],
        desc: "Compilación automática del informe en PDF con indicadores actualizados, tablas y gráficos insertados desde el pipeline de datos." }
    ]
  },

  "resumen-ejecutivo": {
    title: "Resumen Ejecutivo: Directos e Indirectos",
    category: "Informe automatizado",
    tools: ["Python / R", "Excel", "LaTeX", "plantilla SAR"],
    period: "2025 – presente",
    institution: "SAR – Honduras (DEFE)",
    image: "assets/img/portafolio/Informes%20y%20notas/directos_e_indirectos.png",
    description: "Resumen ejecutivo mensual sobre la proporción entre impuestos directos e indirectos de los tributos internos, elaborado a partir de la base de recaudación y publicado con la plantilla institucional del SAR.",
    steps: [
      { title: "Consolidación de la recaudación", tools: ["Excel", "base de recaudación"],
        desc: "Recopilación de la recaudación por impuesto y su clasificación entre tributos directos (ISR y afines) e indirectos (ISV, importaciones, ACPV)." },
      { title: "Cálculo de la proporción", tools: ["Python / R", "Excel"],
        desc: "Cálculo de la participación de directos vs. indirectos y de su evolución mensual e interanual." },
      { title: "Gráficos comparativos", tools: ["matplotlib / ggplot2"],
        desc: "Generación de los gráficos de composición y tendencia que acompañan el resumen." },
      { title: "Maquetación institucional", tools: ["LaTeX", "plantilla SAR"],
        desc: "Inserción de cifras y gráficos en la plantilla institucional del SAR para producir el documento ejecutivo final." }
    ]
  },

  "dashboard-datalab": {
    title: "Dashboard DataLab SAR",
    category: "Dashboard interactivo",
    tools: ["R", "Shiny", "Oracle", "SQL", "Python", "plotly"],
    period: "2022 – presente",
    institution: "SAR – Honduras",
    image: "assets/img/portafolio/Dashboard/datalab/inicio.png",
    description: "Aplicación Shiny alimentada por un pipeline Oracle→R que visualiza obligados tributarios, ISR de personas jurídicas y naturales, ventas y calidad de datos, con un asistente integrado (DataLab Bot).",
    steps: [
      { title: "Conexión a Oracle", tools: ["R", "conexion_oracle.R"],
        desc: "Conexión a la base de datos Oracle del SAR para extraer las bases de obligados, declaraciones y pagos (Bases de DATALAB)." },
      { title: "Consultas y calidad de datos", tools: ["SQL", "quality_assessment.R"],
        desc: "Ejecución de consultas SQL y control de calidad (valores faltantes, consistencia, clasificación) sobre las bases de personas jurídicas y naturales." },
      { title: "Transformaciones", tools: ["R", "dplyr", "transformaciones.R"],
        desc: "Limpieza, homologación y construcción de variables derivadas que alimentan la aplicación." },
      { title: "Interfaz Shiny", tools: ["R Shiny", "app.R"],
        desc: "Diseño de la UI con secciones por base (Datos Generales, ISV, ISRPJ, ISRPN) y paneles de filtros e indicadores." },
      { title: "Figuras y metadatos", tools: ["Python", "crear_metadatos_latex.py"],
        desc: "Generación de figuras estilo publicación en Python y metadatos para documentación, integrados a la aplicación." },
      { title: "Asistente y despliegue", tools: ["DataLab Bot", "shinyapps.io"],
        desc: "Integración de un asistente virtual (DataLab Bot) y publicación de la app para el equipo del SAR." }
    ]
  },

  "dashboard-aduanas": {
    title: "Dashboard SAR-Aduanas",
    category: "Dashboard interactivo",
    tools: ["R", "Shiny", "módulos Shiny", "SEFIN", "plotly", "dplyr"],
    period: "2023 – presente",
    institution: "SAR – Honduras",
    image: "assets/img/portafolio/Dashboard/SAR_ADUANAS/1.png",
    description: "Dashboard Shiny modular que integra datos del SAR, Aduanas y SEFIN, con detalle por impuesto, domicilio fiscal y variaciones interanuales.",
    steps: [
      { title: "Consolidación de fuentes", tools: ["R", "sar.R", "aduanas.R", "consolidar.R"],
        desc: "Carga y consolidación de la recaudación interna del SAR, los datos aduaneros y la información de SEFIN en una base común." },
      { title: "Detalle por impuesto", tools: ["R", "detalle_impuestos.R"],
        desc: "Construcción del detalle por impuesto (ISR, ISV, importaciones, ACPV) y de las variaciones interanuales por institución." },
      { title: "Domicilio fiscal", tools: ["R", "sar_domicilio_data.R", "mod_sar_domicilio.R"],
        desc: "Procesamiento del domicilio fiscal para visualizar la distribución geográfica de la recaudación." },
      { title: "Arquitectura modular", tools: ["R Shiny modules", "mod_kpis", "mod_charts", "mod_tables"],
        desc: "Aplicación organizada en módulos independientes de KPIs, filtros, gráficos, tablas, glosario y navegación." },
      { title: "Interfaz y despliegue", tools: ["ui.R", "server.R", "shinyapps.io"],
        desc: "Estructura separada en ui.R y server.R, con despliegue y acceso controlado por credenciales." }
    ]
  },

  "dashboard-recaudacion": {
    title: "Dashboard de Recaudación",
    category: "Dashboard interactivo",
    tools: ["R", "Shiny", "módulos Shiny", "leaflet", "plotly", "shinyapps.io"],
    period: "2024 – presente",
    institution: "SAR – Honduras",
    image: "assets/img/portafolio/Dashboard/recaudación/1.png",
    description: "Tablero Shiny modular para el seguimiento de la recaudación frente a la meta anual, con cumplimiento por mes, distribución por impuesto, segmentación y un mapa interactivo de recaudación por departamento.",
    steps: [
      { title: "Arquitectura modular", tools: ["R Shiny modules", "sidebar.R"],
        desc: "Aplicación organizada en módulos Shiny (dashboard, gráficos, segmentación, página 2) con un sidebar de navegación que separa la lógica por sección." },
      { title: "Autenticación de usuarios", tools: ["R", "registrarse.R"],
        desc: "Sistema de registro e inicio de sesión que controla el acceso a la información de recaudación del tablero." },
      { title: "Procesamiento de datos", tools: ["R", "data_processing.R"],
        desc: "Carga y transformación de la recaudación por impuesto y período, cálculo del cumplimiento frente a la meta y de las variaciones." },
      { title: "Segmentación", tools: ["R", "segmentacion.R"],
        desc: "Módulo que permite analizar la recaudación por concepto de impuesto y por distintos cortes de contribuyentes." },
      { title: "Visualizaciones", tools: ["plotly", "leaflet", "graphs_module.R"],
        desc: "Indicador de cumplimiento (gauge), gráficos de meta vs. observado, distribución ISV/ISR/Resto y un mapa coroplético interactivo por departamento." },
      { title: "Despliegue", tools: ["rsconnect", "shinyapps.io"],
        desc: "Publicación de la aplicación para consulta del equipo del SAR con acceso controlado." }
    ]
  },

  "evasion-fiscal": {
    title: "Estimación de Evasión Fiscal ISV",
    category: "Análisis fiscal",
    tools: ["Stata", "R", "Excel", "RA-GAP", "BID/FMI"],
    period: "2022 – 2023",
    institution: "SAR – Honduras / BID",
    image: "",
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
        desc: "Elaboración del informe de resultados con metodología, hallazgos y recomendaciones de política fiscal." }
    ]
  },

  "proyecciones": {
    title: "Proyecciones de Ingresos Tributarios",
    category: "Análisis fiscal",
    tools: ["R", "R Markdown", "forecast", "ARIMA", "Excel"],
    period: "2021 – presente",
    institution: "SAR – Honduras",
    image: "",
    description: "Modelos de pronóstico y distribución de ingresos tributarios por categoría impositiva en R/R Markdown, con reporte reproducible en HTML y seguimiento mensual de desviaciones respecto a la meta.",
    steps: [
      { title: "Análisis de series históricas", tools: ["R", "Excel"],
        desc: "Revisión de la recaudación histórica por impuesto para identificar tendencias, estacionalidad y factores atípicos que influyen en la proyección." },
      { title: "Variables macroeconómicas", tools: ["fuentes oficiales", "Excel"],
        desc: "Incorporación de variables externas (PIB, inflación, consumo) de fuentes estadísticas oficiales como predictores de los modelos." },
      { title: "Modelado de pronóstico", tools: ["R", "forecast", "ARIMA"],
        desc: "Construcción de modelos ARIMA y ETS en R para proyectar la recaudación por impuesto en el año en curso y el siguiente." },
      { title: "Distribución por impuesto", tools: ["Excel", "plantillas SAR"],
        desc: "Distribución de los ingresos proyectados entre ISR (PJ y PN), ISV, Aduanas y otros impuestos usando plantillas estandarizadas." },
      { title: "Reporte reproducible", tools: ["R Markdown", "HTML"],
        desc: "Generación de un reporte en HTML con los supuestos, el modelo aplicado y la evolución de los pronósticos para comunicación interna." },
      { title: "Seguimiento mensual", tools: ["Excel", "R"],
        desc: "Actualización mensual para comparar lo proyectado vs. lo observado y calcular desviaciones acumuladas." }
    ]
  },

  "reclasificacion": {
    title: "Impacto de la Reclasificación de Contribuyentes",
    category: "Análisis fiscal",
    tools: ["R", "fixest", "did", "ggplot2", "LaTeX", "R Markdown"],
    period: "2023 – 2024",
    institution: "SAR – Honduras",
    image: "",
    description: "Estudio de inferencia causal sobre el efecto de la reclasificación de contribuyentes en la recaudación, aplicando diferencias en diferencias (DiD), matrices de transición y series de tiempo, documentado en un paper en LaTeX.",
    steps: [
      { title: "Definición de la pregunta causal", tools: ["Diseño de investigación"],
        desc: "Formulación de la hipótesis: ¿en qué medida la reclasificación de un contribuyente a una categoría de mayor control impacta su comportamiento tributario y la recaudación?" },
      { title: "Construcción del panel", tools: ["R", "dplyr", "tidyr"],
        desc: "Estructuración del panel balanceado: grupo tratado (reclasificados), grupo control y la ventana de tiempo pre/post tratamiento." },
      { title: "Matrices de transición", tools: ["R", "main_transiciones.R"],
        desc: "Análisis de las transiciones de los contribuyentes entre categorías para caracterizar el evento de reclasificación." },
      { title: "Tendencias paralelas", tools: ["R", "ggplot2", "event study"],
        desc: "Prueba del supuesto de tendencias paralelas mediante gráficos de estudio de eventos, validando la comparabilidad entre grupos antes del tratamiento." },
      { title: "Estimación del modelo DiD", tools: ["R", "fixest", "did", "dif.R"],
        desc: "Estimación del efecto causal con diferencias en diferencias y efectos fijos de contribuyente y período, incluyendo variantes de DiD escalonado." },
      { title: "Documentación de resultados", tools: ["R Markdown", "LaTeX"],
        desc: "Elaboración del paper técnico (metodologia.tex, paper.tex) con el diseño, tablas de coeficientes, gráficos de event study y hallazgos de política." }
    ]
  },

  "workflows-knime": {
    title: "Workflows KNIME para Solicitudes",
    category: "Solicitud de datos",
    tools: ["KNIME", "Python", "R", "Oracle", "anonimización de RTN"],
    period: "2022 – presente",
    institution: "SAR – Honduras",
    image: "",
    description: "Automatización en KNIME de solicitudes de datos a instituciones externas (IHSS, Aduanas y otras). Incluye extracción, anonimización (en Python y R) y entrega controlada de microdatos enmascarados.",
    steps: [
      { title: "Definición del requerimiento", tools: ["Solicitud formal"],
        desc: "Elaboración del documento de solicitud con las variables, períodos y desagregaciones requeridas por la contraparte institucional." },
      { title: "Diseño del workflow KNIME", tools: ["KNIME Analytics Platform"],
        desc: "Construcción del flujo con nodos de lectura (Oracle, CSV, Excel), transformación, filtrado y salida específicos para cada solicitud (.knwf)." },
      { title: "Extracción de microdatos", tools: ["KNIME", "Oracle"],
        desc: "Consulta a bases de datos internas del SAR para extraer los registros solicitados, con validación de completitud y consistencia." },
      { title: "Anonimización de RTN", tools: ["Python", "R", "Anonimización.Rmd"],
        desc: "Sustitución del RTN real por un identificador enmascarado reproducible (scripts en Python y R) para proteger la identidad de los contribuyentes." },
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
    image: "assets/img/portafolio/Sistemas/Avissi/1.png",
    description: "Sistema web integral en Flask para la gestión operativa de Avvisi Audio: cotizaciones con PDF automático en LaTeX, catálogo de productos, clientes, proveedores, eventos y dashboard. Backend en Supabase (PostgreSQL) y despliegue en Render con Docker.",
    steps: [
      { title: "Diseño de la arquitectura", tools: ["Flask", "blueprints", "Supabase"],
        desc: "Estructura modular con el patrón de blueprints de Flask (auth, clientes, ítems, cotizaciones, proveedores, eventos, dashboard) y base de datos PostgreSQL en Supabase." },
      { title: "Autenticación y sesiones", tools: ["Supabase Auth", "Flask sessions"],
        desc: "Registro, inicio de sesión y gestión de sesiones con Supabase Auth y control de acceso por roles de usuario." },
      { title: "Módulos del sistema", tools: ["Flask blueprints", "Jinja2"],
        desc: "Clientes, contactos, proveedores, catálogo (equipos, consumibles, servicios y paquetes), eventos y usuarios; cada uno con sus rutas, servicio y plantillas." },
      { title: "Cotizaciones y PDF", tools: ["LaTeX", "utils/tex.py", "templates_latex"],
        desc: "Motor de cotizaciones con plantilla LaTeX dinámica: los datos del cliente, ítems y precios se insertan automáticamente y se compila el PDF final para descarga." },
      { title: "Reservas y disponibilidad", tools: ["PostgreSQL", "restricciones temporales"],
        desc: "Control de reservas con reglas de disponibilidad y capacidad implementadas como restricciones temporales en la base de datos." },
      { title: "Despliegue en producción", tools: ["Docker", "Render", "gunicorn"],
        desc: "Contenerización con Docker, configuración del servicio en Render y servidor WSGI con gunicorn para el despliegue en producción." }
    ]
  },

  "creative-dreams": {
    title: "Creative Dreams – Sistema Web",
    category: "Sistema web",
    tools: ["Flask", "Python", "Supabase", "PostgreSQL", "Jinja2", "gunicorn"],
    period: "2025",
    institution: "Creative Dreams (freelance)",
    image: "assets/img/portafolio/Sistemas/creative%20dreams/2.png",
    description: "Sistema web en Flask con Supabase para una empresa de organización de eventos: gestión interna de eventos, clientes, proveedores, catálogo, cotizaciones y pagos, además de un portal para el cliente y una página pública por evento con RSVP.",
    steps: [
      { title: "Arquitectura Flask + Supabase", tools: ["Flask", "blueprints", "Supabase"],
        desc: "Estructura modular con blueprints de Flask y base de datos PostgreSQL en Supabase para clientes, eventos, catálogo, cotizaciones y pagos." },
      { title: "Autenticación y roles", tools: ["Supabase Auth", "Flask sessions"],
        desc: "Registro e inicio de sesión con control de acceso por rol (administración, planificadores y clientes)." },
      { title: "Panel interno de gestión", tools: ["Flask", "Jinja2"],
        desc: "Administración de eventos, clientes, contactos, proveedores, catálogo y cotizaciones, con control de actividades y cobros." },
      { title: "Portal del cliente", tools: ["Flask", "Jinja2"],
        desc: "Espacio privado para cada cliente con sus documentos, itinerario del evento y seguimiento de actividades." },
      { title: "Página pública por evento", tools: ["HTML", "CSS", "Jinja2"],
        desc: "Página por evento con galería, cuenta regresiva, mesa de regalos y confirmación de asistencia (RSVP) para los invitados." },
      { title: "Despliegue", tools: ["gunicorn"],
        desc: "Servidor WSGI con gunicorn para el despliegue en producción." }
    ]
  },

  "powerpoint-auto": {
    title: "Generación Automática de PowerPoint",
    category: "Automatización",
    tools: ["Python", "python-pptx", "pandas", "matplotlib"],
    period: "2024",
    institution: "SAR – Honduras",
    image: "",
    description: "Script en Python que arma automáticamente presentaciones (portada, tablas y gráficos) a partir de los datos, sin diseñar las diapositivas a mano.",
    steps: [
      { title: "Carga y procesamiento de datos", tools: ["Python", "pandas"],
        desc: "Lectura de los datos de recaudación o análisis y cálculo de los indicadores (totales, crecimiento interanual) que irán en cada diapositiva." },
      { title: "Generación de gráficos", tools: ["matplotlib"],
        desc: "Producción de los gráficos en formato imagen (PNG) listos para insertarse en las diapositivas correspondientes." },
      { title: "Construcción de diapositivas", tools: ["python-pptx", "main.py"],
        desc: "Inserción automática de título, tablas de datos e imágenes de gráficos en cada diapositiva mediante python-pptx." },
      { title: "Exportación del archivo", tools: ["python-pptx"],
        desc: "Generación del archivo .pptx final listo para presentación sin intervención manual adicional." }
    ]
  },

  "etl-oracle": {
    title: "ETL Oracle / PL-SQL",
    category: "Automatización",
    tools: ["Oracle", "PL-SQL", "SQL", "R"],
    period: "2021 – presente",
    institution: "SAR – Honduras",
    image: "",
    description: "Extracción, transformación y carga de datos tributarios desde Oracle: conexión a la base, consultas SQL y control de calidad de los datos que alimentan los dashboards y reportes.",
    steps: [
      { title: "Análisis de fuentes de datos", tools: ["Oracle SQL Developer"],
        desc: "Exploración y documentación de los esquemas Oracle del SAR: tablas de declaraciones, pagos, contribuyentes y sus relaciones." },
      { title: "Conexión desde R", tools: ["R", "conexion_oracle.R"],
        desc: "Conexión programática a Oracle desde R para automatizar la extracción de los datos requeridos por cada análisis." },
      { title: "Consultas de extracción", tools: ["PL-SQL", "SQL", "consultas_sql.R"],
        desc: "Construcción de consultas optimizadas con JOINs, filtros por período y agregaciones para extraer los datos necesarios." },
      { title: "Transformación de datos", tools: ["SQL", "R"],
        desc: "Normalización de campos, unificación de formatos de fecha y RTN y construcción de variables derivadas." },
      { title: "Validaciones de calidad", tools: ["R", "quality_assessment.R"],
        desc: "Reglas de validación: rangos plausibles, consistencia entre declaraciones y pagos, RTN válidos y completitud de registros." },
      { title: "Carga a destino", tools: ["R", "Oracle"],
        desc: "Carga de los datos transformados y validados a las bases analíticas que alimentan los dashboards y reportes." }
    ]
  }

};
