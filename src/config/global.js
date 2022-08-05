export default {
  global: {
    componenteFormativo:
      'Manejo del sistema de poscosecha en la producción agrícola',
    descripcionCurso:
      'Este componente aborda las etapas del proceso de producción, desde la planificación y elección de materias primas hasta el embalaje, el almacenamiento y el manejo de la poscosecha. Con este componente el aprendiz se capacitará en la adopción y uso de materias primas necesarias y la aplicación de tecnologías propias de los procesos involucrados, de acuerdo con la legislación aplicable para la actividad productiva.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/portada/fondo-banner-interno.jpg'),
    /*imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],*/
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Marco normativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Buenas prácticas de manufactura ',
            hash: 'bpm',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Normatividad ambiental',
            hash: 'ambiental',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Normatividad sanitaria',
            hash: 'sanitaria',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Seguridad y salud en el trabajo',
            hash: 'sst',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Producción agrícola',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Requerimientos de la producción',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Fisiología y bioquímica',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Manejo de la poscosecha',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Acondicionamiento, selección y clasificación del producto',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Empaque',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Almacenamiento, embalaje y transporte',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Manejo y disposición de los residuos',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Deseguridadysalud.com. (2019). Normatividad Sistema de Gestión de Seguridad y Salud en el Trabajo – SGSST. Deseguridadysalud.com.',
      link: 'https://deseguridadysalud.com/normatividad-sgsst-colombia-2019/',
    },
    {
      referencia:
        'Flórez, G. (2018). Métodos de estudio: fenología de plantas.  Asociación Primatológica Colombiana.',
      link:
        'https://www.asoprimatologicacolombiana.org/notas-redprim/metodos-de-estudio-fenologia-de-plantas#:~:text=La%20fenolog%C3%ADa%20de%20plantas%20involucra,los%20ocasionan%20o%20los%20afectan.',
    },
    {
      referencia:
        'Infoagro. (s.f.). La fenología como herramienta en la agroclimatología. Infoagro.',
      link: 'https://www.infoagro.com/frutas/fenologia.htm',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (s.f.). Normatividad. ICA.',
      link: 'https://www.ica.gov.co/normatividad/normas-nacionales/leyes',
    },
    {
      referencia:
        'Instituto Interamericano de Cooperación para la Agricultura. (2006). Gestión de agronegocios en empresas asociativas rurales. IICA.',
      link: 'http://repiica.iica.int/docs/B0352e/B0352e.pdf',
    },
    {
      referencia:
        'Ministerio de Agricultura. (s.f.).  Normatividad. MinAgricultura.',
      link: 'https://www.minagricultura.gov.co/Normatividad/Paginas/Leyes.aspx',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura. (s.f.). Manual para el mejoramiento del manejo poscosecha de frutas y hortalizas. Oficina regional de la FAO para América Latina y El Caribe. FAO.',
      link:
        'https://www.fao.org/3/x5055s/x5055S03.htm#2.%20Operaciones%20de%20cosecha%20y%20campo',
    },
    {
      referencia:
        'Rosabal, L., Martínez, L., Reyes, Y., Dell’Amico, J. & Núñez, M. (2014). Aspectos fisiológicos, bioquímicos y expresión de genes en condiciones de déficit hídrico. Influencia en el proceso de germinación. Scielo.',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S0258-59362014000300003',
    },
    {
      referencia:
        '<i>SafetyCulture</i>. (2022). ¿Qué son las buenas prácticas de manufactura? <i>SafetyCulture</i>. ',
      link:
        'https://safetyculture.com/es/temas/bpm-buenas-practicas-de-manufactura/',
    },
    {
      referencia:
        'USAID del Pueblo de los Estados Unidos de América. (s.f.). Manual de buenas prácticas ambientales. USAID. ',
      link: 'https://pdf.usaid.gov/pdf_docs/PA00WCHT.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Bioquímica',
      significado:
        'una parte de la química que estudia las bases moleculares y los procesos químicos de los sistemas biológicos tales como células, tejidos, órganos, compartimientos y aparatos.',
    },
    {
      termino: 'Embalaje',
      significado:
        'todo aquello que se hace necesario en el proceso de acondicionar los productos para protegerlos y/o agruparlos de manera temporal pensando en su manipulación, transporte y almacenamiento. ',
    },
    {
      termino: 'Fenología',
      significado:
        'es la ciencia que estudia las fases del ciclo vital de los seres vivos y cómo las variaciones estacionales e interanuales del clima las afectan.',
    },
    {
      termino: 'Fertilización',
      significado:
        'consiste en proporcionar nutrientes que las plantas necesitan para que sea plenamente productiva en cantidad.',
    },
    {
      termino: 'Fisiología',
      significado:
        'examina cómo los organismos llevan a cabo sus funciones físicas y químicas.',
    },
    {
      termino: 'Manejo fitosanitario',
      significado:
        'son los métodos y técnicas para la prevención, control, eliminación o curación de las enfermedades de las plantas, procurando la estabilidad y bienestar de su cultivo o agroecosistema.',
    },
    {
      termino: 'Poscosecha',
      significado:
        'se refiere al manejo adecuado para la conservación de diversos productos agrícolas, con el fin de determinar la calidad y posterior comercialización o consumo.',
    },
  ],
  complementario: [
    {
      tema: 'Manejo poscosecha',
      referencia:
        'AGROSAVIA TV. (2020). Recomendaciones tecnológicas para propagación y manejo poscosecha del cultivo de mora de castilla [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7we1vqv9xYY',
    },
    {
      tema: 'Producción agrícola',
      referencia:
        'TV Agro. (2016). Tecnologías para la producción agrícola - TvAgro por Juan Gonzalo Ángel [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FPL-2aHPoL0',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Karly Cediel',
        cargo: 'Contratista experta temática',
        centro: 'Regional Tolima - Centro Agropecuario La Granja',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora metodológica',
        centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: '',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jorge Enrique Haylock Calderín',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
}
