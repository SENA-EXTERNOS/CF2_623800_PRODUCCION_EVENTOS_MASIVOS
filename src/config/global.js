export default {
  global: {
    componenteFormativo: 'Planeación de eventos ',
    descripcionCurso:
      'En la planeación de eventos se deben tener en cuenta varios factores que intervienen en las etapas de preproducción, producción y postproducción, uno de los más importantes se trata de la ficha técnica, documento que describe todas las características del evento, adicionalmente se debe definir los medios de comunicación para la adecuada difusión y divulgación de la actividad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fases y producción del evento',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ficha técnica de un evento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Plan de trabajo de un evento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Organigrama',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Flujograma',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Cronograma',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Divulgación y comunicaciones',
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
      tema: 'Ficha técnica del evento',
      referencia:
        'Venustiano Carranza. (Sin fecha). Ficha Técnica Jefatura Delegacional. Venustiano Carranza',
      tipo: 'Documento',
      link:
        'https://www.vcarranza.cdmx.gob.mx/transparencia/documentos_2018/art_124/23_F_XXIII/ANIV_MERC_MERCED_SONORA.pdf ',
    },
    {
      tema: 'Ficha técnica del evento',
      referencia:
        'Gobierno de Coahuila. (Sin fecha). Ficha Técnica de evento. Docplayer.es',
      tipo: 'Documento',
      link: 'https://docplayer.es/15537767-Ficha-tecnica-de-evento.html ',
    },
    {
      tema: 'Plan de trabajo de un evento - Organigrama',
      referencia:
        'Luisa Fernanda Roa Martínez. (Sin fecha). Estructura Organizacional de los eventos. Yumpu.com',
      tipo: 'Enlace web',
      link:
        'https://www.yumpu.com/es/document/read/65302521/estructura-organizacional-de-los-eventos ',
    },
    {
      tema: 'Plan de trabajo de un evento - Flujograma',
      referencia:
        'González, Otto (2022). ¿Qué es un diagrama de flujo y para qué sirve? [Web log post] Crehana.',
      tipo: 'Blog',
      link:
        'https://www.crehana.com/blog/negocios/que-es-un-diagrama-de-flujo/ ',
    },
    {
      tema: 'Plan de trabajo – cronograma',
      referencia:
        'Asana Team. (2021). El diagrama de pert: qué es y cómo crearlo. Asana.',
      tipo: 'Página web',
      link: 'https://asana.com/es/resources/pert-chart ',
    },
    {
      tema: 'Plantillas para planificación de eventos',
      referencia:
        'Plantillas gratis para planificación de un evento en Excel, Google Sheets y GanttPRO. Ganttpro. ',
      tipo: 'Página web',
      link: 'https://ganttpro.com/es/event-planning-templates/ ',
    },
  ],
  glosario: [
    {
      termino: 'Backline',
      significado: 'equipo electrónico de amplificación de audio.',
    },
    {
      termino: 'Briefing',
      significado:
        'herramienta de comunicación que sirve para vender el evento.',
    },
    {
      termino: 'Camerino',
      significado: 'lugar donde se prepara al artista para salir a escena.',
    },
    {
      termino: 'Comité',
      significado: 'grupo de profesionales expertos en un hacer.',
    },
    {
      termino: 'Free Press',
      significado:
        'comunicado de prensa que busca dar a conocer información clave.',
    },
    {
      termino: 'Landig page',
      significado:
        'es una página web que redirecciona a los usuarios a un sitio donde encuentra oferta de productos, servicios o eventos.',
    },
    {
      termino: 'Negociación',
      significado: 'llegar a acuerdos que favorezcan las partes.',
    },
    {
      termino: 'Página web',
      significado:
        'es un sitio o documento en internet donde los usuarios encuentran información en línea de un tema en texto, imágenes, audio, vídeo, hipervínculos entre otros.',
    },
    {
      termino: 'Producción',
      significado: 'realizar todas las gestiones previas de un evento.',
    },
    {
      termino: 'Rider técnico',
      significado:
        'conoce las necesidades técnicas de los artistas en un espectáculo.',
    },
    {
      termino: 'Streaming',
      significado:
        'tecnología que permite transmitir contenido multimedia, vídeos o audios ya sea en vivo o diferido a dispositivos móviles, computadoras, tablets, portátiles.',
    },
    {
      termino: 'Target Group',
      significado:
        'grupo objetivo al cual se dirige en específico un producto, servicio o evento.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cesae Bussines & Tourism School. (2018). Cómo organizar un evento: ideas, fases y recomendaciones para tener éxito. Cesae ',
      link:
        'https://www.cesae.es/blog/como-organizar-un-evento-ideas-fases-y-recomendaciones-para-tener-exito',
    },
    {
      referencia:
        'Divulgación dinámica The Education Club. (2020). <em>Etapas de la organización de eventos.</em> Divulgación dinámica',
      link:
        'https://www.divulgaciondinamica.es/etapas-de-la-organizacion-de-eventos/ ',
    },
    {
      referencia:
        'Euroforum. (2018). <em>¿Cuáles son las funciones de un organizador de eventos?</em> Euroforum',
      link:
        'https://www.euroforum.es/blog/funciones-de-un-organizador-de-eventos/ ',
    },
    {
      referencia:
        'Fundación Evolución y Wormhole (2018). <em>Estrategias de diseño e implementación de eventos online.</em> Wormhole Live Learning plarform ',
      link:
        'https://www.wormholeit.com/wp-content/uploads/2018/10/Estrategias-de-diseno-e-implementacion-de-eventos-online.pdf',
    },
    {
      referencia:
        'Madison Experience Marketing. (2018). <em>Comunicación en los eventos, organiza tu estrategia.</em> Madison Experience Marketing ',
      link: '',
    },
    {
      referencia:
        'Natinnova. (2021). <em>Difusión de eventos: todo lo que debes tener en cuenta</em>. Natinnova',
      link: '',
    },
    {
      referencia:
        'Peewah. (2016). <em>Medios de comunicación que no pueden faltar para lograr la asistencia esperada a tu evento.</em> Peewah',
      link: '',
    },
    {
      referencia:
        'Marketer Colombia (2021). <em>¿Qué debes tener en cuenta para crear un evento digital exitoso?</em> Mks Colombia',
      link:
        'https://www.mkscolombia.com/in-the-eye-of-the-marketer/que-debes-tener-en-cuenta-para-crear-un-evento-digital-exitoso/',
    },
    {
      referencia:
        'Meardon, Eddi. (Sin fecha). <em>Todo sobre los diagramas de Gantt</em>. Atlassian',
      link: 'https://www.atlassian.com/es/agile/project-management/gantt-chart',
    },
    {
      referencia:
        'Navarro Almuedo, L. (2018). <em>Planificación, organización y control de eventos.</em> IC Editorial. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/129553',
    },
    {
      referencia:
        'Rico, D. G. (2017). <em>Gestión de eventos de marketing y comunicación.</em> Ediciones de la U. ',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7127',
    },
    {
      referencia:
        'Sabater, F. y Ato, Ó. (2020). <em>Planificación de la comunicación de eventos: estrategia e innovación en tiempos de inmediatez.</em> Editorial UOC. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/169695',
    },
    {
      referencia:
        'Universidad Empresarial Siglo 21. (Sin fecha). <em>Ficha Técnica de un Evento</em>. Coursehero ',
      link:
        'https://www.coursehero.com/u/file/81186680/1-Ficha-tecnica-de-un-eventopdf/#comments',
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
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
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
        cargo: 'Desarrollo front-end',
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
