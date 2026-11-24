import type { Detalle, Figura } from '../projects'

const base = '/img/proyectos/jardi-botanic'

const fig = (
  archivo: string,
  ancho: number,
  alto: number,
  alt: string,
  pie?: string,
): Figura => ({ src: `${base}/${archivo}.webp`, ancho, alto, alt, pie })

export const detalleJardiBotanic: Detalle = {
  descripcion: [
    'El Jardí Botànic de la Universitat de València es un museo vivo situado en el casco histórico de València: un espacio universitario abierto cuyo objetivo es popularizar el mundo vegetal fomentando su estudio, divulgación y conservación.',
    'Este proyecto rediseña su identidad visual a partir del análisis de la relación entre los elementos arquitectónicos característicos del jardín y la naturaleza que los rodea. El isotipo toma como referencia la entrada principal y la simplifica hasta llegar a un símbolo construido con círculos.',
    'La propuesta combina Futura Condensed Medium, que aporta una verticalidad geométrica, con Futura Regular para la lectura, y una paleta de verdes y tonos tierra extraída del propio entorno del jardín. El resultado es un sistema versátil que va de la papelería institucional al merchandising sostenible.',
  ],
  datos: [
  { clave: 'Equipo', valor: 'Alba Gómez y Lucía Alemany, Sandra Villora y Paula Alcayde' },
  { clave: 'Entregables', valor: 'Manual de identidad visual, papelería, señalética y merchandising' },
],
  secciones: [
    {
      titulo: 'Concepto',
      texto: [
        'La idea del símbolo surge de observar cómo conviven la arquitectura del jardín y la naturaleza. Partiendo de la fotografía de la entrada principal, se inició un proceso de simplificación hasta llegar a una forma que resume su esencia.',
        'El isotipo se construye a partir de círculos, una forma orgánica que representa unidad, equilibrio y continuidad: valores vinculados al jardín como espacio de preservación de la naturaleza en convivencia con el ser humano.',
      ],
      filas: [
        [
          fig(
            '01-concepto-entrada',
            1187,
            999,
            'Fotografía de la entrada del jardín y proceso de simplificación hasta el isotipo final',
            'De la entrada del jardín al isotipo final',
          ),
        ],
      ],
    },
    {
      titulo: 'Logo',
      texto: [
        'El sistema se compone de tres piezas con usos distintos. El imagotipo, que une símbolo y nombre, es la versión principal para documentos oficiales, papelería, carteles y web. El isotipo funciona como icono, bordado o merchandising pequeño. El logotipo se reserva para documentos institucionales, firmas de correo y pies de página.',
      ],
      filas: [
        [
          fig(
            '02-imagotipo',
            1600,
            463,
            'Imagotipo del Jardí Botànic en verde',
            'Imagotipo',
          ),
        ],
        [
          fig('03-isotipo', 950, 870, 'Isotipo circular del Jardí Botànic', 'Isotipo'),
          fig(
            '04-logotipo',
            1365,
            475,
            'Logotipo con el nombre Jardí Botànic y Universitat de València',
            'Logotipo',
          ),
        ],
      ],
    },
    {
      titulo: 'Construcción',
      texto: [
        'Cada pieza tiene su retícula de construcción. La C final de «Botànic» se usa como unidad para fijar las separaciones entre las partes del logo y el área de protección que debe respetarse a su alrededor.',
        'Un test de reducción comprueba que la marca sigue siendo legible en tamaños pequeños, desde 150 × 40 mm hasta 50 × 13 mm.',
      ],
      filas: [
        [
          fig(
            '05-reticula-imagotipo',
            1600,
            985,
            'Retícula de construcción del imagotipo',
            'Retícula del imagotipo',
          ),
        ],
        [
          fig(
            '06-reticula-isotipo',
            1108,
            1069,
            'Retícula de construcción del isotipo con círculos guía',
            'Retícula del isotipo',
          ),
          fig(
            '07-reticula-logotipo',
            1600,
            1124,
            'Retícula de construcción del logotipo',
            'Retícula del logotipo',
          ),
        ],
        [
          fig(
            '08-area-proteccion',
            1600,
            1240,
            'Área de protección del imagotipo, el isotipo y el logotipo',
            'Área de protección',
          ),
          fig(
            '09-test-reduccion',
            1600,
            858,
            'Test de reducción del logo en cuatro tamaños',
            'Test de reducción',
          ),
        ],
      ],
    },
    {
      titulo: 'Color',
      texto: [
        'Una paleta de verdes que reflejan naturaleza, vida y crecimiento, y de colores tierra que representan lo orgánico y lo sustentable. Tres colores principales, los más empleados en las aplicaciones de marca y el merchandising, y tres secundarios que nacen de variar el tono, la saturación y el brillo de los principales para ofrecer más contraste sin perder armonía.',
      ],
      colores: [
        { nombre: 'Verde Botànic', hex: '#035920', rgb: 'R3 G89 B32', cmyk: 'C91 M37 Y100 K16', rol: 'principal' },
        { nombre: 'Tierra', hex: '#826D52', rgb: 'R130 G109 B82', cmyk: 'C39 M44 Y61 K33', rol: 'principal' },
        { nombre: 'Verde lima', hex: '#9ABB3C', rgb: 'R154 G187 B60', cmyk: 'C48 M7 Y91 K0', rol: 'principal' },
        { nombre: 'Verde hoja', hex: '#348434', rgb: 'R52 G132 B52', cmyk: 'C80 M24 Y100 K9', rol: 'secundario' },
        { nombre: 'Arena', hex: '#D2B48C', rgb: 'R210 G180 B140', cmyk: 'C18 M38 Y47 K5', rol: 'secundario' },
        { nombre: 'Crema', hex: '#F2E8D5', rgb: 'R242 G232 B213', cmyk: 'C6 M9 Y19 K0', rol: 'secundario' },
      ],
      filas: [
        [
          fig(
            '10-variantes-color',
            1600,
            900,
            'El logo sobre cuatro fondos de la paleta: crema, arena, verde lima y verde hoja',
            'El logo sobre los colores de la paleta',
          ),
        ],
        [
          fig(
            '11-positivo-negativo',
            1600,
            269,
            'Versiones del logo en positivo y en negativo',
            'Versión en positivo y en negativo',
          ),
        ],
      ],
    },
    {
      titulo: 'Tipografía',
      texto: [
        'Futura Condensed Medium es la tipografía principal. Sin serifa y ligada a la modernidad y al progreso, su carácter geométrico y compacto refuerza una idea de verticalidad que funciona bien junto al isotipo, creado a partir de formas orgánicas y circulares.',
        'Futura Regular, de la misma familia, hace de tipografía secundaria: mantiene la relación entre ambas y aporta legibilidad y claridad.',
      ],
      filas: [
        [
          fig(
            '12-tipografia',
            1600,
            595,
            'Alfabeto en Futura Condensed Medium',
            'Futura Condensed Medium',
          ),
        ],
        [
          fig(
            '13-convivencia-tipografias',
            1600,
            1073,
            'Carta institucional con el logo y las dos tipografías conviviendo',
            'Convivencia de las dos tipografías en un documento institucional',
          ),
        ],
      ],
    },
    {
      titulo: 'Usos indebidos',
      texto: [
        'El manual también recoge los errores que hay que evitar: cambiar la paleta o la tipografía, usar colores parecidos en logo y fondo, o alterar las proporciones del conjunto. Hay que respetar siempre el área de protección y usar el logo vectorizado para evitar pixelaciones.',
      ],
      filas: [
        [
          fig(
            '14-usos-indebidos',
            1600,
            897,
            'Ejemplos de usos incorrectos del logo: colores, fondos y tipografías alterados',
            'Usos incorrectos del logo',
          ),
        ],
      ],
    },
    {
      titulo: 'Papelería, señalética y comunicación',
      texto: [
        'La identidad se aplica a las piezas del día a día del jardín: entradas, tarjetas de presentación, señalética, carteles y página web. La paleta verde y los tonos tierra se combinan con imágenes botánicas para mantener un tono natural y cercano.',
      ],
      filas: [
        [
          fig('15-entrada', 1600, 1131, 'Entrada al jardín sobre una mesa de madera', 'Entrada'),
          fig('16-tarjetas', 1600, 1200, 'Dos tarjetas de presentación, una verde y otra crema', 'Tarjetas de presentación'),
        ],
        [
          fig('17-senaletica', 1335, 873, 'Señal circular sobre un muro con el imagotipo', 'Señalética'),
          fig('20-web', 1000, 666, 'Página web del jardín en un portátil', 'Página web'),
        ],
        [
          fig('18-cartel-reapertura', 786, 1078, 'Cartel verde de reapertura en una marquesina de la calle', 'Cartel de reapertura'),
          fig('19-cartel-botardonic', 1600, 1366, 'Cartel ilustrado de las visitas guiadas de otoño-invierno', 'Cartel de visitas guiadas de otoño-invierno'),
        ],
      ],
    },
    {
      titulo: 'Merchandising',
      texto: [
        'El símbolo se adapta a piezas de merchandising pensadas con criterios de sostenibilidad: camisetas, vasos reciclables, pines, pegatinas, marcapáginas, gorras y bolsas reutilizables de tela o reciclables de papel. El isotipo, por su sencillez, funciona especialmente bien en los formatos pequeños.',
      ],
      filas: [
        [
          fig('21-camiseta-verde', 1600, 1316, 'Camiseta verde con el isotipo en blanco', 'Camiseta verde'),
          fig('22-camiseta-crema', 742, 1001, 'Camiseta crema con el isotipo en verde', 'Camiseta crema'),
        ],
        [
          fig('23-vasos', 1000, 666, 'Dos vasos de cartón reciclable con el isotipo', 'Vasos reciclables'),
          fig('26-pegatinas', 1000, 666, 'Dos pegatinas circulares con el isotipo', 'Pegatinas'),
        ],
        [
          fig('24-pin-crema', 1600, 1067, 'Pin crema con el isotipo en verde', 'Pin crema'),
          fig('25-pin-verde', 840, 889, 'Pin verde con el isotipo en crema', 'Pin verde'),
        ],
        [
          fig('27-marcapaginas-verde', 1600, 1200, 'Marcapáginas verde con el imagotipo sobre un libro', 'Marcapáginas verde'),
          fig('28-marcapaginas-crema', 1600, 1200, 'Marcapáginas crema con el imagotipo sobre un libro', 'Marcapáginas crema'),
        ],
        [
          fig('29-gorra', 1000, 666, 'Gorra crema con el isotipo bordado en verde', 'Gorra'),
          fig('30-bolsa-tela', 666, 1000, 'Bolsa de tela colgada con el isotipo y el nombre', 'Bolsa reutilizable de tela'),
        ],
        [
          fig('31-bolsas-papel', 1500, 1125, 'Dos bolsas de papel kraft con el imagotipo, en verde oscuro y en verde lima', 'Bolsas de papel reciclable'),
        ],
      ],
    },
  ],
}