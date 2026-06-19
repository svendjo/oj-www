// All site copy lives here, keyed by language then by page.
// Languages: en (English), da (Dansk), fr (Français), es (Español).
// Home / About / Contact and the Products catalogue are translated in all four
// languages. Shared, language-neutral product data (images, numeric ranges)
// lives in helpers below so it is not duplicated per language.

export const LANGS = ['en', 'da', 'fr', 'es'];

export const LANG_FLAGS = [
  { code: 'da', label: 'Dansk', flag: 'Flag of Denmark.png' },
  { code: 'en', label: 'English', flag: 'Flag of the United Kingdom.png' },
  { code: 'fr', label: 'Français', flag: 'Flag of France.png' },
  { code: 'es', label: 'Español', flag: 'Flag of Spain.png' },
];

// Navigation labels per language (the original used English button images;
// we keep the same look but localise the accessible label / text).
export const NAV = {
  en: { home: 'Home', products: 'Products', about: 'About', contact: 'Contact' },
  da: { home: 'Hjem', products: 'Produkter', about: 'Om', contact: 'Kontakt' },
  fr: { home: 'Accueil', products: 'Produits', about: 'À propos', contact: 'Contact' },
  es: { home: 'Inicio', products: 'Productos', about: 'Acerca de', contact: 'Contacto' },
};

const EMAIL = 'Merete@OlafJohannsen.dk';

export const content = {
  // ───────────────────────────── ENGLISH ─────────────────────────────
  en: {
    home: {
      image: 'RE 325 i sand og vand-small 005.jpg',
      caption: [
        'Waterproof Cable Connection Sleeve - Universal Cable Connection Sleeve',
        'UL 94 V 0 - IP68 - 5 bar',
        'Immediate Response - Flooding - LED',
        'Can be used underground IP67',
      ],
      liability: "Product liability? - Safety doesn't cost you extra",
      accessoriesHeading: 'Cable Accessories',
      accessoriesSub: [
        'For non-stationary electric appliances',
        'Cable Inlets - Cord Grip Bushes - Cable Joints',
        'Pg-thread and Metric thread',
      ],
      accessoriesList: [
        'Locknuts, blanking plugs, skid washers, O-rings and gaskets.',
        'Onion sealing rings in Pg-range.',
        'Cable Glands (Cord Grip Bushes) with clamp bridge.',
        'Cable Glands (Cord Grip Bushes) with dome top - standard cable glands.',
      ],
      eliwellHeading: 'Eliwell agency',
      eliwellText: 'Eliwell-products: thermostats, thermometers and sensors.',
      contactPrompt: 'Please contact on email:',
      email: EMAIL,
      trademark: 'OLAF JOHANNSEN® is a registered trademark of Olaf Johannsen ApS',
      year: '2016 Olaf Johannsen',
    },
    about: {
      title: 'About Olaf Johannsen ApS',
      image: 'flushmountedcablegland.gif',
      imageAlt: 'Flush-mounted Cable Gland',
      intro: [
        'The company Olaf Johannsen was founded in 1964 as a private company. Changed after 10 years to Olaf Johannsen ApS.',
        "The production was partly electronics and partly development and manufacturing of cable accessories. From 1983, the company's primary business has been the production of low voltage cable utilities.",
      ],
      timeline: [
        ['1970', 'Olaf Johannsen ApS manufactures electronic equipment in Sønderborg. Among other things he manufactures a liquid level detector, for use when filling up liquid tanks. For instance oil or petrol tanks.'],
        ['1972', 'Development of a Carbon dioxide metre, Carbon oxide/Oxide indicator (Exhaust analyser). The production is moved to new facilities.'],
        ['1982', 'Olaf Johannsen ApS starts importing: Eliwell agency, Eliwell thermostats and probes. The thermostats imported are mainly for use in measure and regulating equipment for industrial cooling- and heating equipment. The thermostats are with a digital display well suited for panel mounting. Besides the thermostats also electronic thermometers as well as remote- and digital thermometers are imported.'],
        ['1991', 'The company develops a new and improved Cord Grip Bush, which is safer than other Cord Grip Bushes on the market. The Cord Grip Bush has a unique bridge, which has been designed so it can be used upside down, allowing numerous possible cable diameters to be used.'],
        ['1992', 'More Cord Grip Bushes in different sizes are manufactured.'],
        ['1996', 'The Flush-mounted Cable Gland is developed and put into production.'],
        ['1999', 'The Cable Joint RE325 is developed and put into production.'],
        ['2000', 'Olaf Johannsen ApS is now also selling onion sealing rings which are used if a connection between a piece of electronic equipment and a cable needs to be waterproof.'],
        ['2001', 'Development and manufacturing of Cord Grip Bushes with a metric thread M-thread.'],
        ['2003', 'Olaf Johannsen ApS goes online.'],
        ['2006', 'New version of the Cable Joint RE325, IP68 5 bar for flexible cables. IP67 for rigid cables.'],
      ],
    },
    contact: {
      title: 'How to order',
      orderLine: 'You can order by phone or fax on weekdays from 8am to 4pm CET.',
      rows: [
        ['Phone', '0045 7442 2242'],
        ['Fax', '0045 7448 8898'],
        ['Mobile', '0045 2835 6414'],
        ['Email', EMAIL],
      ],
      addressLabel: 'Address',
      address: ['Olaf Johannsen ApS', 'Sundgade 22', 'DK - 6400 Sønderborg'],
      adminLabel: 'Administration',
      admin: [
        ['Directing manager', 'Merete Lunde Johannsen'],
        ['Webpage administrator', 'Sigurd Knarhøi Johannsen'],
      ],
    },
  },

  // ───────────────────────────── DANSK ─────────────────────────────
  da: {
    home: {
      image: 'RE 325 i sand og vand-small 005.jpg',
      caption: [
        'Vandtæt Samle- og Reparations Muffe - Universel Samlemuffe',
        'UL 94 V 0 - IP68 - 5 bar',
        'Akut Hjælp - Oversvømmelse - LED',
        'Kan benyttes under jorden IP67',
      ],
      liability: 'Produkt sikkerhed? - Sikkerhed koster ikke ekstra',
      accessoriesHeading: 'Kabel Tilbehør',
      accessoriesSub: [
        'For ikke-stationære elektriske apparater',
        'Kabel gennemføringer - Forskruninger - Samlemuffer',
        'Pg-gevind og Metrisk gevind',
      ],
      accessoriesList: [
        'Møtrikker, blændpropper, spændskiver, O-ringe og pakninger.',
        'Løgringspakninger til Pg-forskruninger.',
        'Forskruning med vendbar bøjle.',
        'Forskruning med vibrationsikret top - standard forskruninger.',
      ],
      eliwellHeading: 'Eliwell agentur',
      eliwellText: 'Eliwell-produkter: termostater, termometre, pyrometre og sensorer.',
      contactPrompt: 'Kontakt på email:',
      email: EMAIL,
      trademark: 'OLAF JOHANNSEN® er et registreret varemærke af Olaf Johannsen ApS',
      year: '2016 Olaf Johannsen',
    },
    about: {
      title: 'Om Olaf Johannsen ApS',
      image: 'flushmountedcablegland.gif',
      imageAlt: 'Planforsænket kabelgennemføring',
      intro: [
        'Firmaet Olaf Johannsen blev grundlagt i 1964 som et privat firma. Omlagt efter 10 år til Olaf Johannsen ApS.',
        'Produktionen var dels elektroniske komponenter, dels udvikling -og produktion af kabel tilbehør. Fra 1983 var firmaets primære område, produktionen af lav volts kabel tilbehør.',
      ],
      timeline: [
        ['1970', 'Olaf Johannsen ApS udvikler elektronisk udstyr i Sønderborg. Blandt andet udvikles en væske niveau detektor. Et elektronisk niveaukontrolsystem specielt konstrueret til brug i forbindelse med brandfarlige væsker, især benzin og olie. Niveaukontrolsystemet består af en elektronisk del og en niveauføler uden bevægelige dele.'],
        ['1972', 'Udvikling af kulilte meter, kulilte/ilt måler (udstødnings analysator). Produktionen flyttes til nye bygninger.'],
        ['1982', 'Olaf Johannsen ApS starter import: Eliwell Agentur, Eliwell termostater og følere. Måle- og reguleringsudstyr til industrielle køle- og varmeanlæg, apparater med digitalvisning, til panelmontering. Udover termostater, importeres også elektroniske termometre og fjern- og digital termometre.'],
        ['1991', 'Firmaet udvikler en ny og forbedret kabelforskruning, som er mere sikker end andre kabelforskruninger på markedet. Kabelforskruningen har en unikt designet bøjle. Bøjlen kan vendes, hvilket tillader et større spændområde i kabeldiametre.'],
        ['1992', 'Flere forskruninger i forskellige størrelser udvikles.'],
        ['1996', 'Planforsænket kabelgennemføring udvikles og sættes i produktion.'],
        ['1999', 'Kabelsamlemuffe RE325 udvikles og sættes i produktion.'],
        ['2000', 'Olaf Johannsen ApS sælger nu løgringspakninger, som benyttes hvis en forbindelse mellem et elektronisk apparat og et kabel skal være vandtæt.'],
        ['2001', 'Udvikling og produktion af kabelforskruninger med metrisk gevind. M-gevind.'],
        ['2003', 'Olaf Johannsen ApS kommer online.'],
        ['2006', 'Ny version af samlemuffen RE325. Nu IP68 5 bar for bevægelige kabler. IP67 for stive kabler.'],
      ],
    },
    contact: {
      title: 'Bestilling af varer',
      orderLine: 'Kontoret har åbent hverdage 8:00 til 16:00.',
      rows: [
        ['Tlf', '0045 7442 2242'],
        ['Fax', '0045 7448 8898'],
        ['Mobil', '0045 2835 6414'],
        ['Email', EMAIL],
      ],
      addressLabel: 'Adresse',
      address: ['Olaf Johannsen ApS', 'Sundgade 22', 'DK - 6400 Sønderborg'],
      adminLabel: 'Administration',
      admin: [
        ['Direktør', 'Merete Lunde Johannsen'],
        ['Webpage administrator', 'Sigurd Knarhøi Johannsen'],
      ],
    },
  },

  // ───────────────────────────── FRANÇAIS ─────────────────────────────
  fr: {
    home: {
      image: 'RE 325 i sand og vand-small 005.jpg',
      caption: [
        "Manchon de raccordement de câble étanche à l'eau - Manchon de raccordement de câble universel",
        'UL 94 V 0 - IP68 - 5 bars',
        'Réaction immédiate - Inondation - DEL',
        'Peut être utilisé en sous-sol IP67',
      ],
      liability: 'Responsabilité civile produit ? - La sécurité ne vous coûte rien de plus',
      accessoriesHeading: 'Accessoires de câbles',
      accessoriesSub: [
        'Pour les appareils électriques non stationnaires',
        'Entrée de câbles - Douilles serre-câbles - Presse-étoupes',
        'Filet Pg et filet métrique',
      ],
      accessoriesList: [
        "Contre-écrous, bouchons d'obturation, rondelles de glissement, joints toriques et garnitures d'étanchéité.",
        "Bagues d'étanchéité « oignon » de la gamme Pg.",
        'Presse-étoupe de câbles (Douilles serre-câbles) avec bride de serrage.',
        'Presse-étoupe de câbles (Douilles serre-câbles) avec dôme - presse-étoupe standard de câble.',
      ],
      eliwellHeading: "Représentant d'Eliwell",
      eliwellText: 'Produits Eliwell : thermostats, thermomètres et capteurs.',
      contactPrompt: 'Veuillez contacter par email :',
      email: EMAIL,
      trademark: "OLAF JOHANNSEN® est une marque déposée d'Olaf Johannsen ApS",
      year: '2016 Olaf Johannsen',
    },
    about: {
      title: "À propos d'Olaf Johannsen ApS",
      image: 'flushmountedcablegland.gif',
      imageAlt: 'Presse-étoupe de câble encastré',
      intro: [
        "La société Olaf Johannsen a été fondée en 1964 en tant qu'entreprise privée. Au bout de 10 ans, elle a changé sa raison sociale en Olaf Johannsen ApS.",
        "Elle fabrique des produits électroniques, et elle développe et fabrique des accessoires de câbles. Depuis 1983, la principale activité de la société a été la fabrication d'articles pour câbles basse tension.",
      ],
      timeline: [
        ['1970', "La société Olaf Johannsen ApS fabrique des équipements électroniques à Sønderborg. Entre autres choses, elle fabrique un détecteur de niveau de liquide qui est utilisé lors du remplissage de réservoirs de liquide. Par exemple des réservoirs de pétrole ou d'huile."],
        ['1972', "Mise au point d'un compteur de dioxyde de carbone, d'un indicateur de dioxyde de carbone/d'oxyde (analyseur de gaz d'échappement). La production a ensuite été transférée vers de nouvelles installations."],
        ['1982', "Olaf Johannsen ApS commence à importer : Représentant d'Eliwell, des thermostats et sondes Eliwell. Les thermostats importés sont principalement conçus pour la mesure et la régulation d'équipements de refroidissement et de chauffage industriels. À côté des thermostats, nous importons également des thermomètres électroniques, ainsi que des téléthermomètres et des thermomètres numériques."],
        ['1991', "La société met au point une nouvelle douille à griffe pour cordon améliorée, qui est plus sûre que d'autres douilles à griffe pour cordon du marché. Cette douille dispose d'une entretoise unique conçue pour pouvoir être utilisée la tête en bas, ce qui permet de nombreux diamètres de câbles possibles."],
        ['1992', "Fabrication d'autres douilles à griffe pour cordon en différentes tailles."],
        ['1996', 'Le presse-étoupe de câble encastré est mis au point et sa fabrication est lancée.'],
        ['1999', 'Le presse-étoupe RE325 est mis au point et sa fabrication est lancée.'],
        ['2000', "La société Olaf Johannsen ApS commercialise désormais aussi des bagues d'étanchéité « oignon » qui sont utilisées si un raccordement entre un équipement électronique et un câble doit être étanche à l'eau."],
        ['2001', 'Mise au point et fabrication de douilles à griffe pour cordon à filet métrique. Filet M.'],
        ['2003', 'La société Olaf Johannsen ApS est présente en ligne.'],
        ['2006', 'Nouvelle version du presse-étoupe RE325, IP68 5 bars pour les câbles souples. IP67 pour les câbles rigides.'],
      ],
    },
    contact: {
      title: 'Comment passer une commande',
      orderLine: 'Vous pouvez commander par téléphone ou par fax les jours de la semaine de 8 h à 16 h CET.',
      rows: [
        ['Téléphone', '0045 7442 2242'],
        ['Fax', '0045 7448 8898'],
        ['Portable', '0045 2835 6414'],
        ['E-mail', EMAIL],
      ],
      addressLabel: 'Adresse',
      address: ['Olaf Johannsen ApS', 'Sundgade 22', 'DK - 6400 Sønderborg'],
      adminLabel: 'Administration',
      admin: [
        ['Directeur Général', 'Merete Lunde Johannsen'],
        ['Administrateur du site web', 'Sigurd Knarhøi Johannsen'],
      ],
    },
  },

  // ───────────────────────────── ESPAÑOL ─────────────────────────────
  es: {
    home: {
      image: 'RE 325 i sand og vand-small 005.jpg',
      caption: [
        'Manguito de unión para cables resistente al agua - Manguito de unión universal para cables',
        'UL 94 V 0 - IP68 - 5 bares',
        'Respuesta Inmediata - Inundación - LED',
        'Puede utilizarse bajo tierra IP67',
      ],
      liability: '¿Responsabilidad del producto? - La seguridad no le añade un costo adicional',
      accessoriesHeading: 'Accesorios para cables',
      accessoriesSub: [
        'Para aparatos eléctricos no estacionarios',
        'Entradas de cable - Casquillos prensacables - Juntas de cables',
        'Rosca PG y rosca métrica',
      ],
      accessoriesList: [
        'Contratuercas, tapones obturadores, arandelas deslizantes, juntas tóricas y empaquetaduras.',
        'Anillos de obturación de tipo cebolla en rango PG.',
        'Prensaestopas (casquillos prensacables) con abrazadera tipo puente.',
        'Prensaestopas (casquillos prensacables) con tapa - prensaestopas estándar.',
      ],
      eliwellHeading: 'Agencia Eliwell',
      eliwellText: 'Productos Eliwell: termostatos, termómetros y sensores.',
      contactPrompt: 'Para comunicarse con nosotros, escríbanos a la siguiente dirección:',
      email: EMAIL,
      trademark: 'OLAF JOHANNSEN® es una marca registrada de Olaf Johannsen ApS',
      year: '2016 Olaf Johannsen',
    },
    about: {
      title: 'Acerca de Olaf Johannsen ApS',
      image: 'flushmountedcablegland.gif',
      imageAlt: 'Prensaestopas encastrado',
      intro: [
        'La compañía Olaf Johannsen fue fundada en 1964 como empresa privada. Después de 10 años pasó a ser Olaf Johannsen ApS.',
        'La producción se dedicaba en parte a la electrónica y en parte al desarrollo y fabricación de accesorios para cables. A partir de 1983, el negocio principal de la compañía ha sido la producción de servicios por cable de baja tensión.',
      ],
      timeline: [
        ['1970', 'Olaf Johannsen ApS fabrica equipo electrónico en Sønderborg. Entre otras cosas, fabrica un detector de nivel de líquido, que sirve para cuando se llena por completo los tanques de líquidos. Por ejemplo, los tanques de aceite o de gasolina.'],
        ['1972', 'Desarrollo de un medidor de dióxido de carbono, indicador de óxido de carbono/óxido (Analizador de gases de escape). La producción se traslada a nuevas instalaciones.'],
        ['1982', 'Olaf Johannsen ApS incursiona en las importaciones: Agencia Eliwell, Termostatos y sondas Eliwell. Los termostatos importados se destinan principalmente a la medición y regulación de equipo para el equipo industrial de refrigeración y calefacción. Además de los termostatos, también se importan termómetros electrónicos y termómetros remotos y digitales.'],
        ['1991', 'La compañía desarrolla un nuevo y mejorado casquillo prensacables, que es más seguro que los otros casquillos prensacables que ofrece el mercado. El casquillo prensacables tiene un puente único, que ha sido diseñado para que pueda utilizarse en posición invertida, lo que permite el uso de diversos diámetros de cable.'],
        ['1992', 'Se fabrican más casquillos prensacables en diferentes tamaños.'],
        ['1996', 'Se desarrolla y pone en producción el prensaestopas encastrado.'],
        ['1999', 'Se desarrolla y pone en producción la junta de cables RE325.'],
        ['2000', 'Ahora Olaf Johannsen ApS también vende anillos de obturación de tipo cebolla, que se utilizan si una conexión entre la pieza de un equipo electrónico y un cable necesitan estar impermeabilizados.'],
        ['2001', 'Desarrollo y fabricación de casquillos prensacables con una rosca métrica.'],
        ['2003', 'Olaf Johannsen ApS ingresa a la web.'],
        ['2006', 'Nueva versión de la junta de cables RE325, IP68, 5 bares, para cables flexibles. IP67 para cables rígidos.'],
      ],
    },
    contact: {
      title: 'Cómo hacer un pedido',
      orderLine: 'Puede hacer su pedido por teléfono o fax los días de semana de 8 a.m. a 4 p.m. CET.',
      rows: [
        ['Teléfono', '0045 7442 2242'],
        ['Fax', '0045 7448 8898'],
        ['Celular', '0045 2835 6414'],
        ['Correo electrónico', EMAIL],
      ],
      addressLabel: 'Dirección',
      address: ['Olaf Johannsen ApS', 'Sundgade 22', 'DK - 6400 Sønderborg'],
      adminLabel: 'Administración',
      admin: [
        ['Director gerente', 'Merete Lunde Johannsen'],
        ['Administrador de la página web', 'Sigurd Knarhøi Johannsen'],
      ],
    },
  },
};

// ───────────────────────── PRODUCTS ─────────────────────────
// Language-neutral data shared by every catalogue, so it is defined once.
// Each product carries a `gallery`: every picture for that product from the
// original site, so the expanded card can cycle through all of them. `thumb`
// is the collapsed-card image (the first gallery picture). Images are grouped
// from the original products.html selection grid and per-product detail
// sections; the line-drawing .gif diagrams are included as gallery frames too.
const PRODUCT_IMAGES = {
  'cable-joint': {
    gallery: [
      'cablejoint 1_medium.jpg',
      'RE 325 i sand og vand-small 005.jpg',
      'P9070065.jpg',
      'cablejoint.gif',
      'cablejoint3.gif',
    ],
  },
  'flush-mounted-cable-gland': {
    gallery: [
      'flush-mounted cable gland 1_medium.jpg',
      'flush-mounted cable gland 2_medium.jpg',
      'flush-mounted cable gland 3_medium.jpg',
      '012_b_medium.gif',
      'flushmountedcablegland.gif',
    ],
  },
  'cord-grip-bush': {
    gallery: [
      'cord grip bush 1_medium.jpg',
      'cord grip bush 2_medium.jpg',
      'cord grip bush 3_medium.jpg',
      '003 1_medium.jpg',
      '004 1_medium.jpg',
      '009 1_medium.jpg',
      '009 3_medium.jpg',
      '009 4_medium.jpg',
      '003_b_medium.gif',
      '004_b_medium.gif',
      '009_b_medium.gif',
      'cordGribBush2016.jpg',
      'cordgripbush.gif',
    ],
  },
  'cable-gland-dome-top': {
    gallery: [
      'cable gland with dome top 1_medium.jpg',
      'cable_gland 1_medium.jpg',
      '009 2_medium.jpg',
      '010 1_medium.jpg',
      '010 2_medium.jpg',
      '010_b_medium.gif',
      'cable_gland_with_dome_top.gif',
      'cable_gland_with_dome_top_seperated.gif',
    ],
  },
  'pg-skid-washer': {
    gallery: [
      'pg-skid washer 1_medium.jpg',
      '007_medium.gif',
      'pg-skid_washer.gif',
    ],
  },
  'o-ring': {
    gallery: [
      'o-rings 1_medium.jpg',
      '003 2_medium.jpg',
      '003 3_medium.jpg',
      'o-rings.gif',
    ],
  },
};

// Cord Grip Bush diameter ranges — numeric, identical in every language.
const CORD_GRIP_ORDERING = [
  ['Pg9 / M16', '3.6 - 11.3 mm'],
  ['Pg11', '4.0 - 13.3 mm'],
  ['Pg13.5 / M20', '4.1 - 14.3 mm'],
  ['Pg16', '5.0 - 16.2 mm'],
  ['Pg21', '5.9 - 21.2 mm'],
  ['M25', '- 15.8 mm'],
  ['Pg29', '7.1 - 29.0 mm'],
  ['M32', '- 21.9 mm'],
];

// Attach the shared image map to each item by id. The collapsed-card thumbnail
// is the first picture in the gallery.
const withImages = (items) =>
  items.map((it) => {
    const imgs = PRODUCT_IMAGES[it.id];
    return { thumb: imgs.gallery[0], ...imgs, ...it };
  });

export const products = {
  en: {
    labels: {
      intro: 'Select a product for full specifications.',
      conformity: 'Tested and found to be in conformity with:',
      features: 'Features',
      ordering: 'Ordering code',
    },
    items: withImages([
      {
        id: 'cable-joint',
        name: 'Waterproof Cable Joint - Cable Connection Sleeve',
        tagline: 'Non separable. For repairing or extending moveable rubber cables.',
        specs: [
          'IP 68 for Flexible Cables - flammability rating UL 94 V 0',
          'IP 67 for Rigid Cables - flammability rating UL 94 V 0',
          'New version with larger span of cable diameter.',
          'Can be used in open fields, in water, underground and for LED.',
        ],
        conformity: [
          'EN 60 998-2-1:2004 (IEC 60 998-2-1:2002)',
          'EN 60 529:1991 + A1 (IEC 60 529:2001)',
          'In accordance with CE',
          'ROHS-conform',
        ],
        features: [
          'Very user-friendly. Only a standard screwdriver is needed to assemble the cable joint.',
          'No resin. The cable joint can be reused.',
          'Material: polyamide 6.6. V 0. Practically imperishable.',
          'Installing the clamp bridges prevents the cable joint from opening even if the cable is twisted.',
          'The illustration on the outside of the cable joint shows an installation guide.',
          'Cable protection caps are available as an option.',
          'Special executions upon request.',
          'Flexible cables: IP 68, waterproof 5 bar. Secures cables ø7.5-9.2 mm and ø9.0-14.0 mm.',
          'Rigid cables: IP 67, waterproof 1 meter. Secures cable ø14.0 mm.',
          'Suitable for e.g. H05RR-F, H05RN-F and H07RN-F cables.',
        ],
        ordering: [
          ['Cable Joint, black', 'RE325-0'],
          ['Cable Joint, grey', 'RE325-8'],
          ['Cable protection cap', 'RE325-H'],
        ],
      },
      {
        id: 'flush-mounted-cable-gland',
        name: 'Flush-mounted Cable Gland - Cable Inlet IP 68 - 10 bar',
        tagline: 'All other parts belong behind the panel.',
        specs: [
          'Heavy, mobile equipment leaves the cable entry particularly exposed and prone to break-down, for instance in the event of collision.',
          'The flush-mounted cable gland provides maximum protection against damage as all parts, with the exception of a flat collar, are well-protected behind the panel of the equipment.',
          'Under normal circumstances the cable floats freely from the sealing ring, only occasionally touching the bell mouth and thus preventing wear from friction.',
        ],
        ordering: [
          ['M16/M25 - Panel hole ø25.5 ±0.5mm, cable ø4-ø8mm, IP 68 10 bar, 16.5g', 'M16/M25'],
          ['M20/M40 - Panel hole ø40.5 ±0.5mm, cable ø5-ø13mm, IP 68 10 bar, 40g', 'M20/M40'],
          ['P21/M60 - Panel hole ø61.0 ±0.5mm, cable ø10-ø19mm, 108g', 'P21/M60'],
        ],
        features: [
          'Material: Nylon 6.6. V 0',
          'Colours: Black, white or light grey (RAL 7035)',
          'Panel thickness: 1.5 - 4.0mm (M16/M25, M20/M40); 2.0 - 11.0mm (P21/M60)',
          'Operating temp. range: -20 °C to +100 °C (M16/M25, M20/M40); -20 °C to +80 °C (P21/M60)',
        ],
      },
      {
        id: 'cord-grip-bush',
        name: 'Cord Grip Bush',
        tagline: 'The Cord Grip Bush has a unique bridge, designed so it can be used upside down, allowing numerous possible cable diameters.',
        specs: [
          'The Cord Grip Bush has been around for decades. To offer the greatest possible safety the clamp bridge can only be opened using tools.',
          'This Cord Grip Bush cannot be fitted incorrectly, as the clamp bridge can only be moved in the direction of the screw axis. This guarantees that both screws will engage, ensuring optimum safety.',
          'The ends of the clamp bridge are wider than the middle section, which ensures both screws reach equally far into the threads. With two skids in the cord grip bush, the position of the clamp bridge is always secured.',
        ],
        features: [
          'Material: Nylon PA 6.6. UL 94',
          'Made to meet: DIN 40430, DIN 46320, DIN VDE 0619, EN 50262',
          'Operating temp. range: -20 °C to +80 °C',
          'Colours: Black or light grey (RAL 7035) - White on request',
          'Screws: Zinc-electroplated steel, stainless steel',
          'Thread: Pg or Metric',
          'Type: Pg9, Pg11, Pg13.5, Pg16, Pg21, Pg29 / M16, M20, M25, M32',
          'Position of the clamp bridge: M (for larger cables) or W (for smaller cables)',
        ],
        ordering: CORD_GRIP_ORDERING,
        note: 'The above parameters only concern rubber cables.',
      },
      {
        id: 'cable-gland-dome-top',
        name: 'Cable Gland with dome top',
        tagline: 'Can be delivered from Pg7 up to Pg36 / M12 up to M50.',
        features: [
          'Material: Nylon PA 6.',
          'Colours: Light grey (RAL 7035)',
          'Seal: Neoprene',
          'Protection: IP 68',
          'Operating temp. range: -20 °C to +80 °C',
        ],
      },
      {
        id: 'pg-skid-washer',
        name: 'Pg-Skid Washer',
        tagline: 'ROHS-Conform',
        features: ['Material: Steel, zinc electroplated steel', 'U 9-11-13.5-16-21-29'],
      },
      {
        id: 'o-ring',
        name: 'O-Ring',
        tagline: 'ROHS-Conform',
        features: ['Material: Rubber / Neoprene', 'U 9-11-13.5-16-21-29'],
      },
    ]),
  },

  da: {
    labels: {
      intro: 'Vælg et produkt for fulde specifikationer.',
      conformity: 'Testet og fundet i overensstemmelse med:',
      features: 'Profil',
      ordering: 'Ordrekode',
    },
    items: withImages([
      {
        id: 'cable-joint',
        name: 'Vandtæt Samle- og Reparations Muffe',
        tagline: 'Ikke delbar. Til reparation og forlængelse af bevægelige gummikabler.',
        specs: [
          'IP 68 for bevægelige kabler - brandbarhed UL 94 V 0',
          'IP 67 for stift installationskabel PVC - brandbarhed UL 94 V 0',
          'Ny version med større spænd af kabeldiametre.',
          'Kan benyttes på åben mark, i vand (50 meter), under jorden og til LED.',
        ],
        conformity: [
          'EN 60 998-2-1:2004 (IEC 60 998-2-1:2002)',
          'EN 60 529:1991 + A1 (IEC 60 529:2001)',
          'I overensstemmelse med CE',
          'ROHS direktivet 2006',
        ],
        features: [
          'Meget brugervenlig. Kan samles med en almindelig skruetrækker.',
          'Ingen giftstoffer. Samlemuffen kan genbruges.',
          'Materiale: polyamid 6.6. V 0. Praktisk talt uforgængelig.',
          'Installation af bøjlen forhindrer samlemuffen i at åbne sig, selvom kablet vrides.',
          'Illustration på samlemuffens yderside til guide af installation.',
          'Kabel beskyttelses hætter fås som tilbehør.',
          'Specielle udførelser efter forespørgsel.',
          'Fleksible kabler: IP 68, vandtæt 5 bar (50 meter). Sikrer kabler ø7.5-9.2 mm og ø9.0-14.0 mm.',
          'Stift installationskabel: IP 67, vandtæt 1 meter. Sikrer PVC kabler ø14.0 mm.',
          'Kan anvendes til f.eks. H05RR-F, H05RN-F og H07RN-F kabler.',
        ],
        ordering: [
          ['Samlemuffe, sort', 'RE325-0'],
          ['Samlemuffe, grå', 'RE325-8'],
          ['Beskyttelses hætte', 'RE325-H'],
        ],
      },
      {
        id: 'flush-mounted-cable-gland',
        name: 'Planforsænket kabelgennemføring - Kabel gennemføring IP 68 - 10 bar',
        tagline: 'Alle andre dele hører til bag panelet.',
        specs: [
          'Tungt mobilt udstyr efterlader kabelindgangen særligt udsat og dømt til at blive ødelagt, f.eks. ved sammenstød.',
          'Den nye planforsænkede kabelgennemføring yder maksimal beskyttelse, eftersom alle dele, undtagen kraven, er godt beskyttet bag udstyrets panel.',
          'Under normale omstændigheder går kablet frit ud fra kraven. Kablet rører kun lejlighedsvis kraven og forhindrer således slid fra gnidning mellem kabel og krave.',
        ],
        ordering: [
          ['M16/M25 - Panel hul ø25.5 ±0.5mm, kabel ø4-ø8mm, IP 68 10 bar, 16.5g', 'M16/M25'],
          ['M20/M40 - Panel hul ø40.5 ±0.5mm, kabel ø5-ø13mm, IP 68 10 bar, 40g', 'M20/M40'],
          ['P21/M60 - Panel hul ø61.0 ±0.5mm, kabel ø10-ø19mm, 108g', 'P21/M60'],
        ],
        features: [
          'Materiale: Nylon 6.6. V 0',
          'Farver: Sort, hvid, lysegrå (RAL 7035)',
          'Panel tykkelse: 1.5 - 4.0mm (M16/M25, M20/M40); 2.0 - 11.0mm (P21/M60)',
          'Opererende temp.: -20 °C til +100 °C (M16/M25, M20/M40); -20 °C til +80 °C (P21/M60)',
        ],
      },
      {
        id: 'cord-grip-bush',
        name: 'Kabelforskruning',
        tagline: 'Kabelforskruningen har en unikt designet bøjle. Bøjlen kan vendes, hvilket tillader et større spændområde i kabeldiametre.',
        specs: [
          'Kabelforskruningen har fandtes i årtier. For at tilbyde den størst mulige sikkerhed kan bøjlen kun åbnes vha. værktøj.',
          'Med den gamle version var der risiko for at bøjlen ville sætte sig i en skæv vinkel så kun én skrue sad fast. Dette gjorde den værdiløs.',
          'Denne nye kabelforskruning kan ikke samles forkert, eftersom bøjlen kun kan bevæges i skrue-aksens retning. Dette garanterer at begge skruer tager fat og yder dermed optimal sikkerhed.',
          'Enderne på den nye bøjle er bredere end midten, hvilket sikrer at begge skruer når lige langt ind i deres gevind. Med to slidsker i forskruningen er bøjlens position altid sikret.',
        ],
        features: [
          'Materiale: Nylon PA 6.6. UL 94',
          'Produceret til at imødekomme: DIN 40430, DIN 46320, DIN VDE 0619, EN 50262',
          'Opererende temp.: -20 °C til +80 °C',
          'Farver: Sort, hvid, lysegrå (RAL 7035) - Hvid på efterspørgsel',
          'Skruer: El-galvaniseret stål, rustfrit stål',
          'Gevind: Pg eller Metrisk',
          'Type: Pg9, Pg11, Pg13.5, Pg16, Pg21, Pg29 / M16, M20, M25, M32',
          'Bøjle position: M (for større kabler) eller W (for mindre kabler)',
        ],
        ordering: CORD_GRIP_ORDERING,
        note: 'De ovennævnte parametre går kun på gummi kabler.',
      },
      {
        id: 'cable-gland-dome-top',
        name: 'Kabelforskruning "PERFECT"',
        tagline: 'Kan leveres fra Pg7 op til Pg36 / M12 op til M50.',
        features: [
          'Materiale: Nylon PA 6.',
          'Farver: Sort, hvid, lysegrå (RAL 7035)',
          'Pakning: Neophren',
          'Beskyttelse: IP 68',
          'Opererende temp.: -20 °C til +80 °C',
        ],
      },
      {
        id: 'pg-skid-washer',
        name: 'Pg-spændskiver',
        tagline: 'ROHS direktivet 2006',
        features: ['Materiale: Stål, El-galvaniseret stål', 'U 9-11-13.5-16-21-29'],
      },
      {
        id: 'o-ring',
        name: 'O-ring',
        tagline: 'ROHS-Conform',
        features: ['Materiale: Gummi / Neophren', 'U 9-11-13.5-16-21-29'],
      },
    ]),
  },

  fr: {
    labels: {
      intro: 'Sélectionnez un produit pour les spécifications complètes.',
      conformity: 'Testé et trouvé conforme à :',
      features: 'Caractéristiques',
      ordering: 'Code de commande',
    },
    items: withImages([
      {
        id: 'cable-joint',
        name: "Presse-étoupe étanche à l'eau - Manchon de raccordement de câble",
        tagline: 'Non séparable. Pour réparer ou prolonger des câbles amovibles en caoutchouc.',
        specs: [
          "IP 68 pour les câbles souples - cote d'inflammabilité UL 94 V 0",
          "IP 67 pour les câbles rigides - cote d'inflammabilité UL 94 V 0",
          'Nouvelle version avec une portée plus grande du diamètre de câble.',
          "Peut être utilisé en plein champ, dans l'eau, en sous-sol et pour DEL.",
        ],
        conformity: [
          'EN 60 998-2-1:2004 (IEC 60 998-2-1:2002)',
          'EN 60 529:1991 + A1 (IEC 60 529:2001)',
          'Conformément à CE',
          'Conforme à ROHS',
        ],
        features: [
          'Très facile à utiliser. Seul un tournevis standard est nécessaire pour monter le presse-étoupe.',
          'Pas de résine. Le presse-étoupe peut être réutilisé.',
          'Matériau : polyamide 6.6. V 0. Pratiquement indestructible.',
          "L'installation des brides de serrage empêche le presse-étoupe de s'ouvrir, même si le câble est tordu.",
          "L'illustration à l'extérieur du presse-étoupe présente un guide d'installation.",
          'Des capuchons de protection de câbles sont disponibles en option.',
          'Exécutions spéciales sur simple demande.',
          'Câbles souples : IP 68, étanche à l\'eau 5 bars. Fixe les câbles ø7.5-9.2 mm et ø9.0-14.0 mm.',
          'Câbles rigides : IP 67, étanche à l\'eau 1 mètre. Fixe le câble ø14.0 mm.',
          'Convient par ex. pour câbles H05RR-F, H05RN-F et H07RN-F.',
        ],
        ordering: [
          ['Presse-étoupe, noir', 'RE325-0'],
          ['Presse-étoupe, gris', 'RE325-8'],
          ['Capuchon de protection de câble', 'RE325-H'],
        ],
      },
      {
        id: 'flush-mounted-cable-gland',
        name: 'Presse-étoupe de câble montée à fleur - Entrée de câble IP 68 - 10 bars',
        tagline: 'Tous les autres éléments sont rangés derrière le panneau.',
        specs: [
          "Les équipements lourds et mobiles laissent l'entrée des câbles particulièrement exposée et risquent d'être endommagés, par exemple en cas de collision.",
          "Le presse-étoupe de câble monté encastré assure une protection optimale contre les dégâts, car tous les éléments, à l'exception d'un collier plat, sont bien protégés derrière le panneau de l'équipement.",
          "Dans des circonstances normales, le câble flotte librement de la bague d'étanchéité, et ne touche qu'occasionnellement le bord évasé, ce qui évite l'usure résultant de la friction.",
        ],
        ordering: [
          ['M16/M25 - Orifice ø25.5 ±0.5mm, câble ø4-8mm, IP 68 10 bars, 16.5g', 'M16/M25'],
          ['M20/M40 - Orifice ø40.5 ±0.5mm, câble ø5-13mm, IP 68 10 bars, 40g', 'M20/M40'],
          ['P21/M60 - Orifice ø61.0 ±0.5mm, câble ø10-19mm, 108g', 'P21/M60'],
        ],
        features: [
          'Matériau : Nylon 6.6. V 0',
          'Couleurs : Noir, blanc ou gris clair (RAL 7035)',
          'Épaisseur du panneau : 1.5 à 4.0mm (M16/M25, M20/M40) ; 2.0 à 11.0mm (P21/M60)',
          'Plage de températures de service : de -20 °C à +100 °C (M16/M25, M20/M40) ; de -20 °C à +80 °C (P21/M60)',
        ],
      },
      {
        id: 'cord-grip-bush',
        name: 'Douille à griffe pour cordon',
        tagline: 'La douille à griffe pour cordon comporte une entretoise unique conçue pour pouvoir être utilisée la tête en bas, ce qui permet de nombreux diamètres de câbles possibles.',
        specs: [
          'Elle existe déjà depuis plusieurs décennies. Pour apporter la plus grande sécurité possible, la bride de serrage peut uniquement être ouverte à l\'aide d\'outils.',
          "Avec l'ancienne version, il y avait un risque de voir la bride de serrage aboutir à un certain angle sur le conducteur avec une seule vis en prise, ce qui la rendait inutilisable.",
          "Cette nouvelle douille ne peut pas être posée de manière incorrecte, car elle peut seulement être déplacée dans le sens de l'axe de la vis. Cela garantit que les deux vis viennent en prise et assure une sécurité optimale.",
          'Les extrémités de la bride de serrage sont plus larges que sa section centrale, ce qui garantit que les deux vis pénètrent aussi loin l\'une que l\'autre dans les filets. Avec deux patins, la position de la bride de serrage est toujours bloquée.',
        ],
        features: [
          'Matériau : Nylon PA 6.6. UL 94',
          'Conçu pour respecter : DIN 40430, DIN 46320, DIN VDE 0619, EN 50262',
          'Plage de températures de service : de -20 °C à +80 °C',
          'Couleurs : Noir ou gris clair (RAL 7035) - Blanc sur demande',
          'Vis : Acier galvanisé au zinc, acier inoxydable',
          'Filet : Pg ou métrique',
          'Type : Pg9, Pg11, Pg13.5, Pg16, Pg21, Pg29 / M16, M20, M25, M32',
          'Position de la bride de serrage : M (pour les câbles plus grands) ou W (pour les câbles plus petits)',
        ],
        ordering: CORD_GRIP_ORDERING,
        note: 'Les paramètres susmentionnés concernent uniquement les câbles en caoutchouc.',
      },
      {
        id: 'cable-gland-dome-top',
        name: 'Presse-étoupe avec dôme',
        tagline: 'Peut être livré de Pg7 à Pg36 / de M12 à M50.',
        features: [
          'Matériau : Nylon PA 6.',
          'Couleurs : Gris clair (RAL 7035)',
          'Joint : Néoprène',
          'Protection : IP 68',
          'Plage de températures de service : de -20 °C à +80 °C',
        ],
      },
      {
        id: 'pg-skid-washer',
        name: 'Rondelle de glissement Pg',
        tagline: 'Conforme à ROHS',
        features: ['Matériau : Acier, acier galvanisé au zinc', 'U 9-11-13.5-16-21-29'],
      },
      {
        id: 'o-ring',
        name: 'Joint torique',
        tagline: 'Conforme à ROHS',
        features: ['Matériau : Caoutchouc / Néoprène', 'U 9-11-13.5-16-21-29'],
      },
    ]),
  },

  es: {
    labels: {
      intro: 'Seleccione un producto para ver las especificaciones completas.',
      conformity: 'Probados y verificada su conformidad con:',
      features: 'Características',
      ordering: 'Código de pedido',
    },
    items: withImages([
      {
        id: 'cable-joint',
        name: 'Junta de cables resistente al agua - Manguito de unión para cables',
        tagline: 'No separable. Para reparar o prolongar cables con aislamiento de caucho móviles.',
        specs: [
          'IP 68 para cables flexibles - grado de combustibilidad UL 94 V 0',
          'IP 67 para cables rígidos - grado de combustibilidad UL 94 V 0',
          'Nueva versión con intervalo más grande de diámetro de cable.',
          'Puede utilizarse en campos abiertos, en el agua, bajo tierra y para LED.',
        ],
        conformity: [
          'EN 60 998-2-1:2004 (IEC 60 998-2-1:2002)',
          'EN 60 529:1991 + A1 (IEC 60 529:2001)',
          'Conformidad con CE',
          'Conformidad con ROHS',
        ],
        features: [
          'De muy fácil manejo. Solo se necesita un destornillador estándar para ensamblar la junta de cables.',
          'Sin resina. La junta de cables puede reutilizarse.',
          'Material: poliamida 6.6. V 0. Prácticamente no sufre deterioro.',
          'La instalación de las abrazaderas tipo puente evita que la junta de cables se abra, incluso si el cable está torcido.',
          'La ilustración en el exterior de la junta de cables muestra una guía de instalación.',
          'Las tapas de protección para cables están disponibles como alternativa.',
          'Trabajos especiales previo pedido.',
          'Cables flexibles: IP 68, resistencia al agua de hasta 5 bares. Asegura cables ø7.5-9.2 mm y ø9.0-14.0 mm.',
          'Cables rígidos: IP 67, resistencia al agua de hasta 1 metro. Asegura cable PVC ø14.0 mm.',
          'Adecuados para cables H05RR-F, H05RN-F y H07RN-F.',
        ],
        ordering: [
          ['Junta de cables, negro', 'RE325-0'],
          ['Junta de cables, gris', 'RE325-8'],
          ['Tapa de protección para cables', 'RE325-H'],
        ],
      },
      {
        id: 'flush-mounted-cable-gland',
        name: 'Prensaestopas encastrado - Entrada de cable IP 68 - 10 bares',
        tagline: 'Todas las demás partes se encuentran detrás del panel.',
        specs: [
          'El equipo móvil pesado deja la entrada de cable particularmente expuesta y propensa a averías, por ejemplo, en caso de choque.',
          'El nuevo prensaestopas encastrado ofrece máxima protección contra daños dado que todas las partes, con excepción de un anillo plano, se encuentran bien protegidas detrás del panel del equipo.',
          'En circunstancias normales, el cable flota libremente desde el anillo de obturación, tocando solo de vez en cuando la boca acampanada, evitando así el desgaste por fricción.',
        ],
        ordering: [
          ['M16/M25 - Orificio ø25.5 ±0.5mm, cable ø4-ø8mm, IP 68 10 bares, 16.5g', 'M16/M25'],
          ['M20/M40 - Orificio ø40.5 ±0.5mm, cable ø5-ø13mm, IP 68 10 bares, 40g', 'M20/M40'],
          ['P21/M60 - Orificio ø61.0 ±0.5mm, cable ø10-ø19mm, 108g', 'P21/M60'],
        ],
        features: [
          'Material: Nylon 6.6. V 0',
          'Colores: Negro, blanco o gris claro (RAL 7035)',
          'Espesor de panel: 1.5 - 4.0mm (M16/M25, M20/M40); 2.0 - 11.0mm (P21/M60)',
          'Rango de temperatura de operación: -20 °C a +100 °C (M16/M25, M20/M40); -20 °C a +80 °C (P21/M60)',
        ],
      },
      {
        id: 'cord-grip-bush',
        name: 'Casquillo prensacables',
        tagline: 'El casquillo prensacables tiene un puente único, diseñado para que pueda utilizarse en posición invertida, lo que permite el uso de diversos diámetros de cable.',
        specs: [
          'El casquillo prensacables existe hace ya varias décadas. Para ofrecer la mayor seguridad posible, la abrazadera tipo puente solo puede abrirse utilizando herramientas.',
          'Con la versión anterior, existía el riesgo de que la abrazadera tipo puente terminara en un ángulo del conductor, con un solo tornillo roscado, lo que la hacía inútil.',
          'El nuevo casquillo prensacables descarta la posibilidad de un ajuste incorrecto, ya que la abrazadera tipo puente solo puede moverse en la dirección del eje del tornillo. Esto garantiza que ambos tornillos estén roscados, asegurando una óptima seguridad.',
          'Los extremos de la abrazadera tipo puente son más anchos que la sección del medio, lo que garantiza que ambos tornillos se introduzcan por igual en las roscas. Con dos arandelas, la posición de la abrazadera tipo puente está siempre asegurada.',
        ],
        features: [
          'Material: Nylon PA 6.6. UL 94',
          'Fabricado en cumplimiento de las normas: DIN 40430, DIN 46320, DIN VDE 0619, EN 50262',
          'Rango de temperatura de operación: -20 °C a +80 °C',
          'Colores: Negro o gris claro (RAL 7035) - Blanco previo pedido',
          'Tornillos: Acero con revestimiento electrolítico de zinc, acero inoxidable',
          'Rosca: Pg o métrica',
          'Tipo: Pg9, Pg11, Pg13.5, Pg16, Pg21, Pg29 / M16, M20, M25, M32',
          'Posición de la abrazadera tipo puente: M (para cables más grandes) o W (para cables más pequeños)',
        ],
        ordering: CORD_GRIP_ORDERING,
        note: 'Los parámetros antes mencionados solo corresponden a los cables con aislamiento de caucho.',
      },
      {
        id: 'cable-gland-dome-top',
        name: 'Prensaestopas con tapa',
        tagline: 'Puede entregarse desde Pg7 hasta Pg36 / M12 hasta M50.',
        features: [
          'Material: Nylon PA 6.',
          'Colores: Gris claro (RAL 7035)',
          'Sello: Neopreno',
          'Protección: IP 68',
          'Rango de temperatura de operación: -20 °C a +80 °C',
        ],
      },
      {
        id: 'pg-skid-washer',
        name: 'Arandela deslizante Pg',
        tagline: 'Conformidad con ROHS',
        features: ['Material: Acero, acero con revestimiento electrolítico de zinc', 'U 9-11-13.5-16-21-29'],
      },
      {
        id: 'o-ring',
        name: 'Junta tórica',
        tagline: 'Conformidad con ROHS',
        features: ['Material: Caucho / Neopreno', 'U 9-11-13.5-16-21-29'],
      },
    ]),
  },
};
