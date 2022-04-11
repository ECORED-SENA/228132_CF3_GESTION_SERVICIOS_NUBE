export default {
  global: {
    componenteFormativo:
      'Especificaciones técnicas para la arquitectura tecnológica en nube',
    descripcionCurso:
      'Este componente formativo brinda los conocimientos para definir especificaciones técnicas de acuerdo con los requerimientos de la arquitectura tecnológica de la organización, en donde se abarcan los aspectos tecnológicos necesarios para la apropiación y gestión de servicios en la nube.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
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
        titulo: 'Servicios de directorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos de dominio',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estructura lógica y física',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Cuentas',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Directorios y objetos en general',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Políticas de dominio',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Software de virtualización',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Generalidades de la Virtualización',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Máquinas virtuales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Características',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Contenedores',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Contenedores de <em>software</em>',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Hipervisor vs contenedores',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: '<em>Docker</em>',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Almacenamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Generalidades',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Tipos',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Tecnologías',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Arreglos Raid',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Seguridad en la nube',
        desarrolloContenidos: true,
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
        'ALMACENAMIENTO, INTRODUCCIÓN Y TERMINOLOGÍA. (2016, January 19). Recuperado de ',
      link:
        'https://alinuxaday.wordpress.com/2016/01/19/almacenamiento-introduccion-y-terminologia',
    },
    {
      referencia:
        'Astaiza y Taborda (2021). Componente Formativo 5, Virtualización del módulo 5 del tecnólogo despliegue de aplicaciones y servicio en la nube.',
    },
    {
      referencia:
        'Astaiza y Taborda (2021). Componente Formativo 6, Contenedores del tecnólogo despliegue de aplicaciones y servicio en la nube.',
    },
    {
      referencia: 'Amazon (2021). AWS Directory Service',
      link: 'https://aws.amazon.com/es/directoryservice/?nc=sn&loc=1',
    },
    {
      referencia: 'Castillo (2018). Active Directory Que es y para qué sirve',
      link: 'https://www.profesionalreview.com/2018/12/15/active-directory/',
    },
    {
      referencia: 'Microsoft (2021). Cuentas de Active Directory',
      link:
        'https://docs.microsoft.com/es-es/windows/security/identity-protection/access-control/active-directory-accounts',
    },
    {
      referencia:
        'Microsoft (2021). Línea base de seguridad de Azure para Azure Active Directory',
      link:
        'https://docs.microsoft.com/es-es/security/benchmark/azure/baselines/aad-security-baseline?toc=/azure/active-directory/fundamentals/toc.json',
    },
    {
      referencia:
        'Microsoft (2021). Configuración de redundancia geográfica con Replicación de SQL Server',
      link:
        'https://docs.microsoft.com/es-es/windows-server/identity/ad-fs/deployment/set-up-geographic-redundancy-with-sql-server-replication',
    },
    {
      referencia: 'MinTIC (2016). Seguridad en la Nube',
      link:
        'https://mintic.gov.co/gestionti/615/articles-5482_G12_Seguridad_Nube.pdf',
    },
    {
      referencia:
        'RDR-IT.COM (2021). Active Directory: relación de confianza entre dos bosques / dominios',
      link:
        'https://rdr-it.com/es/active-directory-relacion-de-confianza-entre-dos-bosques-dominios/',
    },
    {
      referencia:
        'SANS Institute (2003). Global Information Assurance Certification Paper ',
      link:
        'https://www.giac.org/paper/gsec/3292/seguridad-con-el-directorio-activo-politicas-de-grupo/105441#:~:text=Las%20pol%C3%ADticas%20de%20grupo%20del,las%20necesidades%20de%20cada%20usuario.',
    },
    {
      referencia:
        'TECNOLOGIA-INFORMATICA.COM (2021). ¿Qué es RAID? Los niveles de RAID',
      link:
        'https://www.tecnologia-informatica.com/que-es-raid-los-niveles-de-raid ',
    },
    {
      referencia:
        'VIRTUALIZAMOS.ES (2021). ¿Qué tecnología de almacenamiento elijo? <em>Fibre Channel, iSCSI o NAS.</em>',
      link:
        'https://www.virtualizamos.es/que-tecnologia-de-almacenamiento-elijo-fibre-channel-iscsi-o-nas',
    },
  ],
  glosario: [
    {
      termino: '<em>Active Directory</em>',
      significado:
        '<em>Active Directory (AD)</em> es una base de datos y un conjunto de servicios que conectan a los usuarios con los recursos de red que necesitan para realizar su trabajo.',
    },
    {
      termino: 'Contenedores',
      significado:
        'en el sector del transporte se usan contenedores físicos para aislar diferentes cargas (por ejemplo, para el transporte en buques y en trenes), las tecnologías de desarrollo de <em>software</em> usan cada vez más un método denominado contenerización.',
    },
    {
      termino: 'Dominio',
      significado:
        'un dominio cuando hablamos de virtualización almacena una partición de directorio de dominio que consta de información sobre el dominio en el que se encuentra, más el esquema y las particiones del directorio de configuración para todo el bosque.',
    },
    {
      termino: 'Migración',
      significado:
        'la migración de la TI consiste en trasladar datos o <em>software</em> de un sistema a otro.',
    },
    {
      termino: 'Virtualización',
      significado:
        'La virtualización es una tecnología que permite crear servicios de TI útiles, con recursos que están tradicionalmente vinculados al <em>hardware.</em> ',
    },
  ],
  complementario: [
    {
      texto: 'MinTIC (2016) Seguridad en la Nube',
      tipo: 'Guia',
      descarga: '/downloads/seguridad_en_la_nube.pdf',
    },
    {
      texto:
        'Guía rápida de Microsoft Introducción a AD DS. Accedido 28 de diciembre de 2021 en el enlace ',
      tipo: 'Página web',
      link:
        'https://docs.microsoft.com/en-us/learn/modules/introduction-to-ad-ds/',
    },
    {
      texto:
        'Página oficial de <em>Docker</em> accedida el 29 de diciembre de 2021, disponible en:',
      tipo: 'Página web',
      link: 'https://docs.docker.com/docker-for-windows/install/',
    },
    {
      texto:
        'Documentación de referencia de <em>Docker</em> sobre archivos <em>Dockerfile</em> disponible ',
      tipo: 'Página web',
      link: 'https://docs.docker.com/engine/reference/builder/',
    },
    {
      texto:
        'Documentación de referencia <em>Dockerfile</em> para Windows disponible en ',
      tipo: 'Página web',
      link:
        'https://docs.microsoft.com/en-us/virtualization/windowscontainers/manage-docker/manage-windows-dockerfile',
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
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Pablo Cesar Pardo Ortiz',
        cargo: 'Experto Temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Hernando José Peña Hidalgo',
        cargo: 'Experto Temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'José Luis Bastidas Pérez',
        cargo: 'Experto Temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Joaquín Patiño Cerón',
        cargo: 'Experto Temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Peter Emerson Pinchao Solis',
        cargo: 'Experto Temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Henry Eduardo Bastidas Paruma',
        cargo: 'Instructor',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Metodóloga ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Antonio Vecino Valero'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Díaz Pinto',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
