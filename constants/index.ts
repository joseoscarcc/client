// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'inicio', label: 'Inicio' },
    { href: '/cotizador', key: 'cotiza_auto', label: 'Cotiza tu Auto' },
    { href: '/productos', key: 'productos', label: 'Productos' },
    { href: '/nosotros', key: 'nosotros', label: 'Nosotros' },
  ];
  
  // CAMP SECTION
  export const PEOPLE_URL = [
    '/person-1.png',
    '/person-2.png',
    '/person-3.png',
    '/person-4.png',
  ];
  
  // FEATURES SECTION
  export const FEATURES = [
    {
      title: 'Siempre Estamos Disponibles',
      icon: '/map.svg',
      variant: 'green',
      description:
        'La disponibilidad sobre todo en los siniestros es importante, por eso siempre estamos disponibles para ayudarte en lo que necesites. Nos puedes contactar a través del medio de contacto que tu prefieras',
    },
    {
      title: 'Sabemos Que Tu Tiempo Vale Oro',
      icon: '/calendar.svg',
      variant: 'green',
      description:
        "No te queremos hacer perder ni un minuto de tu tiempo. Estamos comprometidos a brindarte un servicio ágil, acompañandote en todo momento.",
    },
    {
      title: '¡No Te Quedes Con Dudas!',
      icon: '/tech.svg',
      variant: 'green',
      description:
        'Aprovecha los mas de 40 años que tenemos de experiencia en el mundo de los seguros. Nosotros te diremos todo lo que necesitas saber sobre cualquier seguro.',
    },
    {
      title: 'No Te Preocupes',
      icon: '/location.svg',
      variant: 'orange',
      description:
        'No tienes que preocuparte por no tener a la mano la información de tus seguros, ya que siempre tienes a un WhatsApp, Email, mensaje de texto de tener la información que necesitas.',
    },
  ];
  
  // FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: 'Conoce mas',
      links: [
        { text: 'Nosotros', url: '/nosotros' },
        { text: 'Política de Privacidad', url: '/privacidad' },
        { text: 'Contacto', url: '/contacto' },
      ],
    },
    {
      title: 'Nuestra Comunidad',
      links: [
        { text: 'Seguros y Fianzas Blog', url: '/blog' },
        { text: 'Educación', url: 'https://youtube.com/@segurosjoe' },
        { text: 'WhatsApp', url: 'https://whatsapp.com' },
      ],
    },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contacto',
    links: [
      { label: 'Teléfono', value: '664 508 9876', url: 'tel:6645089876' }, // Add the URL for phone call
      { label: 'Email', value: 'atencion@cotaparada.com', url: 'mailto:atencion@cotaparada.com' }, // Add the URL for email
    ],
  };
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      { icon: '/facebook.svg', url: 'https://facebook.com/joseoscarcota' }, // Add the URL for Facebook
      { icon: '/instagram.svg', url: 'https://instagram.com/joseoscarcc' }, // Add the URL for Instagram
      { icon: '/twitter.svg', url: 'https://twitter.com/joseoscarcc' }, // Add the URL for Twitter
      { icon: '/youtube.svg', url: 'https://youtube.com/@segurosjoe' }, // Add the URL for YouTube
    ],
  };

  export const POSTS = {
    id: 1,
    title: '¿Qué productos encuentras en Cota Parada?',
    subtitle: 'Conocemos los productos más sofisticados en la industria de los seguros',
    date: '16 Marzo 2024',
    start: 'Cota Parada, reconocido como el nuevo broker de seguros de México, ofrece una amplia gama de productos diseñados para proteger lo más valioso para nuestros clientes: su salud, su patrimonio y su tranquilidad financiera. Desde seguros de Gastos Médicos Mayores hasta coberturas especializadas para autos, hogares, empresas y más, en Cota Parada nos comprometemos a brindar soluciones personalizadas y confiables que se adapten a las necesidades específicas de cada individuo y negocio.',
    image: [
      {src:"/productos.png",
      alt:"productos"}
    ],
    body: [
      {
        subtitle: 'Gastos Médicos Mayores',
        text: 'Estos seguros están enfocados en la salud de las personas y cubren los gastos en caso de accidentes o enfermedades. Pueden ser individuales, familiares o grupales, especialmente diseñados para empresas.',
      },
      {
        subtitle: 'Vida',
        text: 'Son seguros que cubren la muerte del asegurado y están diseñados para proteger a la familia o dependientes económicos del asegurado. Hay varios tipos de seguros de vida disponibles para adaptarse a las necesidades específicas de cada persona.',
      },
      {
        subtitle: 'Accidentes Personales',
        text: 'Estos seguros cubren los gastos derivados de accidentes que puedan ocurrirle al asegurado, proporcionando una protección adicional en situaciones imprevistas. Los seguros de accidentes personales incluyen una suma asegurada por muerte accidental.',
      },
      {
        subtitle: 'Autos',
        text: 'Seguros diseñados para proteger tanto al vehículo como a los ocupantes en caso de accidentes, robos u otros eventos relacionados con el automóvil.',
      },
      {
        subtitle: 'Casa Habitación',
        text: 'Seguros diseñados para proteger tanto al vehículo como a los ocupantes en caso de accidentes, robos u otros eventos relacionados con el automóvil.',
      },
      {
        subtitle: 'Incendio',
        text: 'Específicamente enfocado en cubrir los daños causados por incendios en propiedades, brindando tranquilidad financiera en caso de desastres.',
      },
      {
        subtitle: 'Cascos',
        text: 'Seguros para proteger equipos, maquinaria o embarcaciones, cubriendo los daños causados por accidentes o eventos adversos.',
      },
      {
        subtitle: 'Agrícola y Porcícola',
        text: 'Dirigidos a proteger los cultivos y la producción agrícola, así como las actividades relacionadas con la cría de cerdos, ofreciendo cobertura ante pérdidas y daños.',
      },
      {
        subtitle: 'Responsabilidad Civil Profesiones y Salud',
        text: 'Ofrecen protección en casos de responsabilidad legal por daños a terceros en el ejercicio de una profesión o en el ámbito de la salud, respectivamente.',
      },
      {
        subtitle: 'Carga en Movimiento',
        text: 'Seguros diseñados para proteger la mercancía durante su transporte, cubriendo pérdidas o daños durante el traslado.',
      },
      {
        subtitle: 'Viajes',
        text: 'Brindan cobertura durante los viajes, incluyendo asistencia médica, cancelación de viaje, pérdida de equipaje y otros imprevistos.',
      },
      {
        subtitle: 'Construcción',
        text: 'Protege proyectos de construcción ante riesgos como accidentes laborales, daños materiales, robo de materiales, entre otros.',
      },
      {
        subtitle: 'Fianzas',
        text: 'Ofrecen garantías financieras ante terceros, asegurando el cumplimiento de obligaciones contractuales.',
      },
    ],
    end: 'Estos son algunos de los productos que Cota Parada ofrece para cubrir una amplia gama de necesidades tanto personales como empresariales.',
    
  };
  export const BLOG = {
    id: 1,
    title: 'Proximámente nuestro blog',
    subtitle: 'El Blog de José Oscar Cota, para que conozcas mas a tu agente de seguros y la profesión de los seguros',
    date: '25 Marzo 2024',
    start: 'Nos gusta escribir, es por eso que compartimos el blog de Cota Parada para poder compartir un poco de nuestra profesión y el día a día.',
    image: [
      {src:"/proximamente.gif",
      alt:"proximamente"}
    ],
    body: [
      {
        subtitle: 'Proximamente, ',
        text: 'compartiremos el día a día de la profesión de los seguros y como este bonito trabajo nos permite crecer, realizarnos y obtener sustento suficiente para nuestra familia. ',
      },
    ],
    end:'Nos alegra poder compartir un poco de nuestra vida y nuestra profesión, esperamos que te agrada y te suscribas al blog.',
  };

  export const PRIVACIDAD = {
    id: 1,
    title: 'Política de Privacidad',
    subtitle: 'Conoce nuestra política de privacidad',
    date: '25 Marzo 2024',
    start: 'Política de privacidad de José Oscar Ernesto Cota Carrasco Esta Política de privacidad describe cómo se recopila, utiliza y comparte su información personal cuando visita o hace una compra en www.cotaparada.com (denominado en lo sucesivo el “Sitio”).',
    image: [
      {src:"/privacidad.png",
      alt:"privacidad"}
    ],
    body: [
      {
        subtitle: '',
        text: `
        INFORMACIÓN PERSONAL QUE RECOPILAMOS
        Cuando visita el Sitio, recopilamos automáticamente cierta información sobre su dispositivo, incluida información sobre su navegador web, dirección IP, zona horaria y algunas de las cookies que están instaladas en su dispositivo. Además, a medida que navega por el Sitio, recopilamos información sobre las páginas web individuales o los productos que ve, las páginas web o los términos de búsqueda que lo remitieron al Sitio e información sobre cómo interactúa usted con el Sitio. Nos referimos a esta información recopilada automáticamente como“Información del dispositivo”.
        Recopilamos Información del dispositivo mediante el uso de las siguientes tecnologías:
        - Los “Archivos de registro” rastrean las acciones que ocurren en el Sitio y recopilan datos, incluyendo su dirección IP, tipo de navegador, proveedor de servicio de Internet, páginas de referencia/salida y marcas de fecha/horario.
        - Las “balizas web”, las “etiquetas” y los “píxeles” son archivos electrónicos utilizados para registrar información sobre cómo navega usted por el Sitio.
        
        Además, cuando hace una compra o intenta hacer una compra a través del Sitio, recopilamos cierta información de usted, entre la que se
        incluye su nombre, dirección de facturación, dirección de envío, información de pago (incluidos los números de la tarjeta de crédito ), dirección de correo electrónico y número de teléfono. Nos referimos a esta información como
        “Información del pedido”.
        
        Cuando hablamos de “Información personal” en la presente Política de privacidad, nos referimos tanto a la Información del dispositivo como aInformación del pedido.
        ¿CÓMO UTILIZAMOS SU INFORMACIÓN PERSONAL?
        Usamos la Información del pedido que recopilamos en general para preparar los pedidos realizados a través del Sitio (incluido el procesamientode su información de pago, la organización de los envíos y la entrega de facturas y/o confirmaciones de pedido). Además, utilizamos esta
        Información del pedido para: comunicarnos con usted;
        examinar nuestros pedidos en busca de fraudes o riesgos potenciales; y cuando de acuerdo con las preferencias que usted compartió con
        nosotros, le proporcionamos información o publicidad relacionada con nuestros productos o servicios.
        
        Utilizamos la Información del dispositivo que recopilamos para ayudarnos a detectar posibles riesgos y fraudes (en particular, su dirección IP) yen general, para mejorar y optimizar nuestro Sitio (por ejemplo, al generar informes y estadísticas sobre cómo nuestros clientes navegan e interactúan con el Sitio y para evaluar el éxito de nuestras campañas publicitarias y de marketing).
        
        COMPARTIR SU INFORMACIÓN PERSONAL
        Compartimos su Información personal con terceros para que nos ayuden a utilizar su Información personal, tal como se describió anteriormente. Por ejemplo, utilizamos la tecnología de Shopify en nuestra tienda online. Puede obtener más información sobre cómo Shopify utiliza su Información personal aquí: https://www.shopify.com/legal/privacy. También utilizamos Google Analytics para ayudarnos a comprender cómo usan nuestros clientes el Sitio. Puede obtener más información sobre cómo Google utiliza su Información personal aquí:
        https://www.google.com/intl/es/policies/privacy/. Puede darse de baja de Google Analytics aquí: https://tools.google.com/dlpage/gaoptout.
        Finalmente, también podemos compartir su Información personal para cumplir con las leyes y regulaciones aplicables, para responder a una citación, orden de registro u otra solicitud legal de información que recibamos, o para proteger nuestros derechos.
        
        PUBLICIDAD ORIENTADA POR EL COMPORTAMIENTO
        Como se describió anteriormente, utilizamos su Información personal para proporcionarle anuncios publicitarios dirigidos o comunicaciones demarketing que creemos que pueden ser de su interés. Para más información sobre cómo funciona la publicidad dirigida, puede visitar la págineducativa de la Iniciativa Publicitaria en la Red ("NAI" por sus siglas en inglés) en http://www.networkadvertising.org/understanding-onlineadvertising/how-does-it-work.
        Puede darse de baja de la publicidad dirigida mediante los siguientes enlaces:
        
        [[
        FACEBOOK: https://www.facebook.com/settings/?tab=ads
        GOOGLE: https://adssettings.google.com/authenticated?hl=es
        BING: https://about.ads.microsoft.com/es-es/recursos/directivas/anuncios-personalizados
        ]]
        
        NO RASTREAR
        Tenga en cuenta que no alteramos las prácticas de recopilación y uso de datos de nuestro Sitio cuando vemos una señal de No rastrear desdesu navegador.
        
        SUS DERECHOS
        Si usted es un residente europeo, tiene derecho a acceder a la información personal que tenemos sobre usted y a solicitar que su informaciónpersonal sea corregida, actualizada o eliminada. Si desea ejercer este derecho, comuníquese con nosotros a través de la información de contacto que se encuentra a continuación.
        Además, si usted es un residente europeo, tenemos en cuenta que estamos procesando su información para cumplir con los contratos que podamos tener con usted (por ejemplo, si realiza un pedido a través del Sitio) o para perseguir nuestros intereses comerciales legítimos enumerados anteriormente. Además, tenga en cuenta que su información se transferirá fuera de Europa, incluidos Canadá y los Estados Unidos.
        RETENCIÓN DE DATOS
        Cuando realiza un pedido a través del Sitio, mantendremos su Información del pedido para nuestros registros a menos que y hasta que nos pidque eliminemos esta información.
        CAMBIOS
        Podemos actualizar esta política de privacidad periódicamente para reflejar, por ejemplo, cambios en nuestras prácticas o por otros motivos operativos, legales o reglamentarios.
        `,
      },
    ],
    end:`
    CONTÁCTENOS
    Para obtener más información sobre nuestras prácticas de privacidad, si tiene alguna pregunta o si desea presentar una queja, contáctenos pocorreo electrónico a atencion@cotaparada.com o por correo mediante el uso de la información que se proporciona a continuación:
    1713 No Reelección Col Juarez, Navojoa, SON, 85870, México.`,
  };