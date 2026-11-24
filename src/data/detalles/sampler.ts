import type { Detalle, Figura } from '../projects'

const base = '/img/proyectos/sampler'

const fig = (
  archivo: string,
  ancho: number,
  alto: number,
  alt: string,
  pie?: string,
): Figura => ({ src: `${base}/${archivo}.webp`, ancho, alto, alt, pie })

export const detalleSampler: Detalle = {
  descripcion: [
    'Campaña publicitaria para Sampler, un festival de artes sonoras expandidas ambientado en Matadero Madrid, donde artistas visuales, músicos, cineastas, creadores sonoros, VJs, performers y creadores 3D convergen para explorar los terrenos visual y sonoro.',
    'Nuestro objetivo no era solo diseñar piezas publicitarias, sino crear una identidad visual flexible y única, capaz de posicionar el festival como un referente de vanguardia y de conectar emocionalmente con su público y con sus valores.',
    'El resultado es un sistema gráfico construido sobre una onda sonora que varía entre morados y azules, con tipografía Poppins, y que funciona con la misma fuerza en formatos urbanos, digitales y de merchandising.',
  ],
  datos: [
    { clave: 'Equipo', valor: 'Alba Gómez y Sandra Villora' },
    { clave: 'Asignatura', valor: 'Elementos del Diseño · curso 2025-2026' },
    { clave: 'Tipo', valor: 'Proyecto académico a partir de un briefing' },
    {
      clave: 'Entregables',
      valor:
        'Cartel, pareja de banderolas, banderola vertical, folleto de tres pliegos, banner web, pulseras y merchandising',
    },
  ],
  secciones: [
    {
      titulo: 'Briefing',
      texto: [
        'Sampler no es únicamente un festival de música electrónica, sino un espacio de encuentro para creadores de distintas disciplinas que trabajan en la intersección entre sonido, imagen, tecnología y performance.',
        'La campaña debía transmitir una imagen de vanguardia y de calidad cultural, alineada con los valores del festival (diversidad, multidisciplinariedad, hibridación entre disciplinas y mirada al futuro), y conectar con un público especializado y sensible a la creación audiovisual contemporánea.',
        'El reto creativo: una identidad visual actual que representara la esencia experimental del festival y funcionara con la misma fuerza en formatos urbanos, digitales y de merchandising.',
      ],
    },
    {
      titulo: 'Concepto: el sonido como forma',
      texto: [
        'Para empezar analizamos otros festivales y buscamos qué hace único a Sampler: las artes sonoras. El reto era convertir el sonido, algo inmaterial e intangible, en un concepto visual. También estudiamos qué representan los colores y las formas en que el sonido se plasma físicamente y cómo lo representa la tecnología.',
        'La conclusión fue una onda sonora: el sonido entendido como vibración, energía y movimiento. Sus mallas y ondas fluidas representan la complejidad y la expansión del sonido, y varían entre morados y azules, colores que remiten a la cultura digital, la electrónica y la escena audiovisual contemporánea.',
      ],
      filas: [
        [
          fig(
            '01-onda',
            1214,
            1700,
            'Malla de líneas fluidas en tonos azules y morados sobre fondo negro que representa una onda sonora',
            'Recurso visual central: la onda sonora',
          ),
        ],
      ],
    },
    {
      titulo: 'Sistema gráfico',
      texto: [
        'Para la tipografía elegimos Poppins, una sans serif geométrica limpia y sencilla que equilibra la complejidad del objeto visual, garantiza legibilidad y mantiene un aire moderno y profesional. Se usa en regular y en bold para crear jerarquías.',
        'La paleta combina morados, azules y negro.',
      ],
      colores: [
        { nombre: 'Morado', hex: '#502B67', rol: 'principal' },
        { nombre: 'Azul', hex: '#1179B3', rol: 'principal' },
        { nombre: 'Verde azulado', hex: '#156375', rol: 'principal' },
        { nombre: 'Negro', hex: '#000000', rol: 'principal' },
      ],
    },
    {
      titulo: 'Cartel principal',
      texto: [
        'Usamos el recurso visual como elemento central en los distintos formatos y compusimos el texto sobre él, tratando de mantener el dinamismo que generaba la onda. Creamos una jerarquía visual que da importancia al nombre del festival, seguido de los artistas participantes. El cartel mide 50 × 70 cm.',
      ],
      filas: [
        [
          fig(
            '02-cartel',
            1143,
            1600,
            'Cartel de Sampler con la onda de fondo, el título, las fechas y la lista de artistas',
            'Cartel principal',
          ),
        ],
        [
          fig(
            '03-cartel-mockup-pared',
            1600,
            1200,
            'Cartel de Sampler enmarcado en un muro de un edificio',
            'Cartel en un muro',
          ),
          fig(
            '04-cartel-mockup-calle',
            1000,
            683,
            'Cartel de Sampler en un soporte urbano frente a un edificio histórico',
            'Cartel en el espacio urbano',
          ),
        ],
      ],
    },
    {
      titulo: 'Visión de conjunto',
      texto: [
        'La nueva identidad se adapta con facilidad a todos los formatos, tanto web como físicos, sin perder su esencia y transmitiendo el mensaje con claridad.',
      ],
      filas: [
        [
          fig(
            '05-vision-conjunto',
            1321,
            1322,
            'Todas las piezas de la campaña de Sampler reunidas: cartel, banderolas, folleto, pulseras y banner',
            'La campaña completa',
          ),
        ],
      ],
    },
    {
      titulo: 'Pareja de banderolas',
      texto: [
        'Las banderolas, de 64 × 50 cm, siempre van juntas: una reúne el nombre del festival, las fechas y el lugar, y la otra la lista de artistas.',
      ],
      filas: [
        [
          fig(
            '06-banderolas',
            1600,
            1008,
            'Pareja de banderolas de Sampler: una con el título y otra con los artistas',
            'Pareja de banderolas',
          ),
        ],
        [
          fig(
            '07-banderolas-mockup',
            1600,
            1067,
            'Pareja de banderolas colgadas de una farola',
            'Banderolas en una farola',
          ),
        ],
      ],
    },
    {
      titulo: 'Banderola vertical',
      texto: [
        'La banderola vertical mide 360 × 60 cm y se centra en lo esencial: el nombre del festival, las fechas y el lugar, con el nombre a gran escala sobre la onda.',
      ],
      filas: [
        [
          fig(
            '08-banderola-vertical',
            500,
            3000,
            'Banderola vertical de Sampler con el nombre del festival en grande',
            'Banderola vertical',
          ),
          fig(
            '09-banderola-vertical-mockup',
            976,
            1600,
            'Banderola vertical colgada de un poste',
            'Banderola en un poste',
          ),
        ],
      ],
    },
    {
      titulo: 'Folleto informativo',
      texto: [
        'Folleto en tres pliegos (21 × 12,5 cm plegado y 21 × 37,5 cm desplegado) con el texto de presentación del festival, los artistas participantes y el programa de los tres días. Se muestra por fuera, por dentro y cómo se vería impreso.',
      ],
      filas: [
        [
          fig('10-folleto-exterior', 1063, 595, 'Exterior del folleto con la portada y la lista de artistas', 'Exterior'),
          fig('11-folleto-interior', 1063, 595, 'Interior del folleto con el texto de presentación y el programa por días', 'Interior'),
        ],
        [
          fig('12-folleto-portada-mockup', 1600, 1209, 'Portada del folleto sobre un fondo gris', 'Portada'),
        ],
        [
          fig('13-folleto-exterior-mockup', 1600, 1209, 'Folleto desplegado visto por el exterior', 'Exterior desplegado'),
          fig('14-folleto-interior-mockup', 1600, 1209, 'Folleto desplegado visto por el interior', 'Interior desplegado'),
        ],
      ],
    },
    {
      titulo: 'Banner web',
      texto: [
        'El banner web horizontal lleva la identidad al formato digital, con el mismo recurso visual y la misma jerarquía en un formato apaisado.',
      ],
      filas: [
        [fig('15-banner-web', 900, 90, 'Banner web horizontal de Sampler', 'Banner web horizontal')],
        [
          fig(
            '16-banner-web-mockup',
            1007,
            452,
            'Banner web de Sampler sobre una pantalla de ordenador',
            'Banner en una web',
          ),
        ],
      ],
    },
    {
      titulo: 'Pulseras',
      texto: [
        'Las pulseras de acceso cambian de color según el tipo de entrada (general, artista, VIP y staff), para facilitar su identificación. Incluyen un código QR con el que se comprueban el acceso, el saldo y los datos del titular, garantizando seguridad y comodidad.',
      ],
      filas: [
        [fig('17-pulsera-general', 1600, 120, 'Pulsera de acceso general', 'Pulsera general')],
        [fig('18-pulsera-artist', 1600, 120, 'Pulsera de acceso para artistas', 'Pulsera artist')],
        [fig('19-pulsera-vip', 1600, 120, 'Pulsera de acceso VIP', 'Pulsera VIP')],
        [fig('20-pulsera-staff', 1600, 120, 'Pulsera de acceso para el equipo', 'Pulsera staff')],
        [
          fig(
            '21-pulseras-mockup',
            1184,
            864,
            'Cuatro pulseras de colores distintos colgadas de una barra',
            'Las cuatro pulseras',
          ),
        ],
      ],
    },
    {
      titulo: 'Merchandising',
      texto: [
        'Parte del merchandising que se ofrecería en el recinto, para quienes quieran llevarse un recuerdo del festival. Fuimos más allá de lo típico con objetos útiles para el público, como fundas para earplugs, vasos reutilizables o totebags, además de camisetas, chapas y gafas.',
      ],
      filas: [
        [
          fig('22-camiseta', 1600, 1067, 'Persona de espaldas con una camiseta negra con la onda estampada', 'Camiseta'),
          fig('23-chapa', 1600, 1067, 'Chapa con el logo de Sampler', 'Chapa'),
        ],
        [
          fig('24-gafas', 1600, 1200, 'Gafas de sol negras con el nombre del festival en la patilla', 'Gafas'),
          fig('25-earplugs', 1024, 1024, 'Funda negra para earplugs con el logo de Sampler', 'Funda para earplugs'),
        ],
        [
          fig('26-tote-bag', 1600, 1067, 'Persona con una tote bag negra con la onda estampada', 'Tote bag'),
          fig('27-vaso', 896, 1152, 'Vaso reutilizable negro con el logo de Sampler', 'Vaso reutilizable'),
        ],
      ],
    },
  ],
}