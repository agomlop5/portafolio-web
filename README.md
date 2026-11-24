# Portfolio · Alba Gómez

Portfolio web de diseño gráfico e ilustración, pensado para presentar mis proyectos y buscar prácticas y trabajo.

Proyecto final de la asignatura de Apps y Arte multimedia · Grado en Bellas Artes · Universitat Politècnica de València

**Web:** 

## Tecnologías

- [Vue 3](https://vuejs.org/) con TypeScript y [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vue Router](https://router.vuejs.org/) (configuración declarativa, rutas anidadas)
- [shadcn-vue](https://www.shadcn-vue.com/) para componentes de interfaz
- [Lucide](https://lucide.dev/) para los iconos

No se utiliza ninguna otra librería ni framework de terceros (ni Bootstrap, jQuery, React o Angular).

## Qué incluye

- **Inicio** con presentación tipográfica, retrato ilustrado y accesos a las secciones principales.
- **Proyectos** organizados por ramas (identidad visual, cartelería y campañas, ilustración, editorial, pintura y dibujo), con página de rama y página de proyecto.
- **Página de proyecto** con ficha técnica, descripción, secciones numeradas, paleta de color y galería de imágenes a pantalla completa (navegable con teclado).
- Un proyecto puede pertenecer a más de una rama.
- **Contacto** con correo copiable con un clic.
- Página 404 propia y navegación entre ramas y entre proyectos.
- Diseño responsive, accesible (enlace "Saltar al contenido", foco visible, textos alternativos, respeto a `prefers-reduced-motion`).

## Rutas

| Ruta | Contenido |
|---|---|
| `/` | Inicio |
| `/proyectos` | Ramas de proyectos |
| `/proyectos/:categoria` | Proyectos de una rama |
| `/proyectos/:categoria/:slug` | Página de un proyecto |
| `/sobre-mi` | Sobre mí |
| `/contacto` | Contacto |
| cualquier otra | Página 404 |

## Estructura del código

```text
src/
  components/
    layout/     Cabecera, pie, contenedor y banda de contacto
    home/       Secciones de la página de inicio
    project/    Galería a pantalla completa y paleta de color
    ui/         Componentes de shadcn-vue
  composables/  Lógica reutilizable (useCategorias, useCategoria, useLightbox, useCopyToClipboard)
  data/         Contenido embebido en el frontend (ramas, proyectos, contacto, detalles)
  router/       Rutas
  views/        Páginas
```

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Para generar la versión de producción:

```bash
npm run build
```

## Requisitos de la tarea y dónde se cumplen

| Requisito | Dónde |
|---|---|
| Tailwind como mínimo el 50% del CSS | Todo el proyecto usa clases de utilidad; el CSS propio se limita a los tokens de color y tipografía |
| Responsive, Flexbox y Grid | Hero, tarjetas de ramas, filas de imágenes, pie |
| Componentes de shadcn/ui | `src/components/ui/` [añade aquí los que uses] |
| Iconos de Lucide | Cabecera, pie, tarjetas, galería |
| Vue Router declarativo y rutas anidadas | `src/router/index.ts` (`/proyectos` y sus hijas) |
| Datos embebidos en el frontend | `src/data/` |
| TypeScript + Vue: eventos, variables reactivas, directivas, componentes propios y composables | `src/components/`, `src/composables/` |
| Imágenes optimizadas | WebP, 1600 px como máximo y menos de 300 KB por imagen |

## Decisiones de diseño

- **Tipografías** (Google Fonts, licencia OFL): Anton para titulares, Playfair Display en cursiva como acento, DM Mono para etiquetas y DM Sans para texto.
- **Color**: base crema y tinta, con dos acentos complementarios (cobalto y naranja), para que la web no compita con los colores de cada proyecto.
- **Jerarquía**: lo más grande es el nombre y las disciplinas; contacto y pie son discretos.

## Uso de inteligencia artificial

He utilizado Claude (Anthropic) como herramienta de apoyo durante el desarrollo. Para ser transparente, esto es lo que hizo y lo que decidí yo:

- **Dirección de diseño**: conversé con la IA sobre referencias, estilos, tipografías y paleta. Las decisiones finales (concepto, estilo, color, estructura de secciones y qué proyectos mostrar) son mías.
- **Código**: la IA generó y revisó parte del código de componentes, rutas y composables. [Lo he probado, adaptado y modificado a mi gusto].
- **Depuración**: me ayudó a resolver errores de rutas, importaciones y estilos.
- **Textos**: parte de los textos descriptivos de los proyectos están redactados con ayuda de la IA a partir de mi manual de marca y mi dosier.

Los proyectos, diseños, ilustraciones y manuales que se muestran son obra mía. El uso de la IA a sido como apoyo para la creación de esta web.

## Créditos y licencias

- Fuentes: Anton, Playfair Display, DM Mono y DM Sans, de Google Fonts (SIL Open Font License).
- Iconos: Lucide (licencia ISC).
- Componentes: shadcn-vue (licencia MIT).

## Autora

**Alba Gómez** · Estudiante de Bellas Artes (UPV) · albagl.trabajo.18@gmail.com · @alglarts