export default {
  global: {
    Name:
      'Planificación e implementación de buenas prácticas ganaderas en la producción de carne bovina',
    Description:
      'La producción eficiente requiere planificación, bienestar animal, sanidad y sostenibilidad. La normativa colombiana regula la inocuidad y seguridad laboral. La modernización y la adopción de tecnologías fortalecen la competitividad en mercados nacionales e internacionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Empresa ganadera bovina de carne',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Política sanitaria y de inocuidad en alimentos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Normativa en seguridad y salud en el trabajo concepto y aplicación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Implicaciones e importancia',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Buenas prácticas ganaderas en la producción de bovinos de carne (BPG) y bienestar animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Bienestar animal',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Componentes BPG',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Criterios de cumplimiento y listas de chequeo',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Aplicación BPG',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Recursos para la implementación de BPG',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Diagnóstico de aplicación BPG en el predio y bienestar animal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Gestión ambiental y de calidad en bovinos de carne',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Reglamentación enfocada en la seguridad del personal ganadero',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  complementario: [
    {
      tema: 'BPG en producción de bovinos de carne',
      referencia:
        'Jorge Mario (2021). <i>Buenas prácticas ganaderas, ICA 2020</i>. [Archivo de video] YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=F1SXng6fIr4',
    },
    {
      tema: 'Diagnóstico de aplicación BPG en el predio',
      referencia:
        'Asocebu Col. (2020). <i>Hablemos de Cebú - importancia en la prevención de las enfermedades de control oficial en Colombia</i>. [Archivo de video] YouTube.  ',
      tipo: 'Diagnóstico de aplicación BPG en el predio',
      link: 'https://www.youtube.com/watch?v=9jPXUuk2WNI',
    },
    {
      tema: 'Diagnóstico de aplicación BPG en el predio',
      referencia:
        'Zootecnia y veterinaria es mi pasión. (2022). <i>Zootecnia, veterinaria y producción animal</i>. Zoovetesmipasion. [Archivo de video] YouTube.  ',
      tipo: 'Página web',
      link:
        'https://zoovetesmipasion.com/ganaderia/buenas-practicas-ganaderas-2',
    },
    {
      tema: 'Gestión ambiental en bovinos de carne',
      referencia:
        'La Finca de Hoy. (2020). <i>Así debe ser un correcto plan sanitario para el bienestar de sus bovinos - La Finca de Hoy</i>. [Archivo de video] YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uVxB71GZBpw',
    },
    {
      tema: 'Buenas Prácticas',
      referencia: 'FEDEGAN (2024). <i>Buenas practicas</i>.',
      tipo: 'Video',
      link:
        'https://www.facebook.com/FedeganColombia/videos/buenas-practicas/933326963735682/',
    },
  ],
  glosario: [
    {
      termino: 'Bienestar animal',
      significado:
        'estado físico y mental de un animal en relación con las condiciones en las que vive y muere.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'conjunto de prácticas sanitarias y preventivas para evitar la entrada y salida de agentes infecciosos en la producción ganadera.',
    },
    {
      termino: 'Buenas prácticas ganaderas (BPG)',
      significado:
        'conjunto de normas y procedimientos que garantizan la sanidad, inocuidad y sostenibilidad en la producción ganadera.',
    },
    {
      termino: 'FEDEGAN',
      significado: 'federación colombiana de ganaderos.',
    },
    {
      termino: 'ICA (Instituto Colombiano Agropecuario)',
      significado:
        'entidad encargada de regular y certificar las buenas prácticas en el sector agropecuario en Colombia.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'garantía de que los alimentos no causarán daño al consumidor cuando se preparen y consuman de acuerdo con su uso previsto.',
    },
    {
      termino: 'Normativa sanitaria',
      significado:
        'conjunto de leyes y regulaciones que rigen la producción y comercialización de productos de origen animal.',
    },
    {
      termino: 'Sanidad animal',
      significado:
        'conjunto de medidas de prevención y control de enfermedades en los animales de producción.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'capacidad de una empresa ganadera para operar de manera rentable sin afectar negativamente al medio ambiente y a las futuras generaciones.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'sistema que permite rastrear el origen, manejo y destino de los productos ganaderos para asegurar su calidad y seguridad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Consejo Nacional de Política Económica y Social (CONPES). (2010). <i>Política sanitaria y de inocuidad para las cadenas láctea y cárnica (Documento CONPES 3676)</i>. Departamento Nacional de Planeación. ',
      link:
        'https://www.ica.gov.co/getattachment/3b31038a-72ba-40f9-a34d-cecd89015890/2010cp3676.aspx',
    },
    {
      referencia:
        'Corrientes Portal Turístico Provincial. (s.f.). <i>Ganadería de corrientes</i>. Corrientes. ',
      link: 'http://www.corrientes.com.ar/provincia/ganaderia.php',
    },
    {
      referencia:
        'Federación Colombiana de Ganaderos. (s.f.). <i>Buenas prácticas ganaderas</i>. FEDEGAN. ',
      link:
        'https://www.fedegan.org.co/programas/buenas-practicas-ganaderas#:~:text=Las%20Buenas%20Pr%C3%A1cticas%20Ganaderas%20(BPG,que%20trabajan%20en%20la%20explotaci%C3%B3n',
    },
    {
      referencia:
        'García, E. (2019). <i>Ganadería de Sinaloa fuera del programa créditos a la palabra</i>. Luz noticias. ',
      link:
        'https://www.luznoticias.mx/agro/ganaderia-de-sinaloa-fuera-del-programa-creditos-a-la-palabra/57574',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2007). <i>Resolución 2341 de 2007. Por la cual se establecen requisitos sanitarios en la producción primaria de ganado bovino y bufalino destinado al sacrificio</i>. ',
      link:
        'https://www.ica.gov.co/getattachment/0b5de556-cb4a-43a8-a27a-cd9a2064b1ab/2341.aspx',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2020). <i>Resolución 68167 de 2020 [Documento en línea]</i>. ICA. ',
      link:
        'https://www.ica.gov.co/getattachment/db5b53ff-0752-4884-90b8-a7ce15ce1ead/2020R68167.aspx',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (s.f.). <i>Reglamento sobre las condiciones sanitarias y de inocuidad en la producción de ganado bovino y porcino</i>. ',
      link:
        'https://www.ica.gov.co/getdoc/016f3c96-a458-4fa6-ae96-41d18b2221f5/requisitos-sanitarios-y-de-inocuidad-en-la-producc.aspx',
    },
    {
      referencia:
        'Metro Ecuador. (2019). <i>La "ganadería climáticamente inteligente" se consolida en Ecuador</i>. Contexto ganadero. ',
      link:
        'https://www.contextoganadero.com/reportaje/la-ganaderia-climaticamente-inteligente-se-consolida-en-ecuador',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2020). <i>Resolución 000253 de 2020. Por la cual se adopta el Manual de Condiciones de Bienestar Animal para cada especie de producción agropecuaria</i>. ',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=101246',
    },
    {
      referencia:
        'OnCuba. (2018). <i>Ganadería cubana: más leche, pero muy lejos de satisfacer la demanda</i>. OnCuba News. ',
      link:
        'https://oncubanews.com/cuba/ganaderia-cubana-mas-leche-pero-muy-lejos-de-satisfacer-la-demanda/',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2007). <i>Decreto 1500 de 2007. Por el cual se establece el reglamento técnico que crea el Sistema Oficial de Inspección, Vigilancia y Control de la Carne y Productos Cárnicos Comestibles</i>. Diario Oficial de Colombia. ',
      link:
        'https://corponarino.gov.co/expedientes/juridica/2007decreto1500.pdf',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2017). <i>Decreto 2113 de 2017. Por el cual se adiciona el Capítulo 5 sobre bienestar animal en el sector agropecuario</i>. Diario Oficial de Colombia. ',
      link:
        'https://www.minagricultura.gov.co/Normatividad/Decretos/Decreto%20No.%202113%20de%202017.pdf',
    },
    {
      referencia:
        'Rangel, V. (2020). <i>Gestión ambiental en el sector ganadero doble propósito de los pequeños productores en Maicao, Colombia</i>. Revista Espacios. ',
      link: 'https://www.revistaespacios.com/a20v41n27/a20v41n27p03.pdf',
    },
    {
      referencia:
        'Resolución 068167 de 2020. [Instituto Colombiano Agropecuario]. <i>Por medio de la cual se establecen los requisitos para obtener la certificación en Buenas Prácticas Ganaderas BPG en la producción de carne de bovinos y/o bufalinos</i>. ',
      link:
        'https://www.ica.gov.co/getattachment/db5b53ff-0752-4884-90b8-a7ce15ce1ead/2020R68167.aspx',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable línea de producción',
          centro: 'Dirección general',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez',
          cargo: 'Experta temática',
          centro:
            'Regional Huila - Centro Agroempresarial y Desarrollo Pecuario del Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Regional Huila - Centro Agroempresarial y Desarrollo Pecuario del Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Diana Milena Picon Rincon',
          cargo: 'Diseñador de contenidos',
          centro:
            'Regional Huila - Centro Agroempresarial y Desarrollo Pecuario del Huila',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Regional Huila - Centro Agroempresarial y Desarrollo Pecuario del Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro:
            'Regional Huila - Centro Agroempresarial y Desarrollo Pecuario del Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
