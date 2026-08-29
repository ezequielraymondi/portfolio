# Portfolio Plan

Archivo de seguimiento para mantener contexto entre sesiones de Pi/Codex y revisar qué hicimos, qué estamos haciendo y qué queda pendiente.

## Cómo usar este archivo

- Revisar este archivo al iniciar una nueva sesión de trabajo.
- Actualizar `Estado actual` cuando cambia el foco.
- Mover tareas entre `Pendiente`, `En progreso` y `Hecho`.
- Registrar decisiones relevantes en `Decisiones`.
- No inventar datos profesionales: si falta información, preguntarle a Leandro antes de modificar contenido público.

## Estado actual

- Foco: revisión visual final de los ajustes pedidos por Leandro.
- Última revisión: se rediseñó la sección `Stack técnico` con skills tipo chips/pills para evitar desbordes y mejorar armonía visual.
- Archivo de instrucciones de Pi creado/actualizado: `AGENTS.md`.

## Fuentes de verdad actuales

- Portfolio React: `src/`
- Orden de secciones visibles: `src/App.js`
- Datos de proyectos: `src/components/Portfolio/Data.jsx`
- CV HTML más actualizado y servido públicamente: `public/leandro_ezequiel_raymondi_rossa.html`
- Botones `Descargar CV`: apuntan a `/leandro_ezequiel_raymondi_rossa.html`
- Imagen del proyecto Sophie Langues: `src/assets/experienciasophielangues.png`

## Pendiente

### 1. Revisión visual/manual final

Objetivo: revisar en navegador los ajustes ya aplicados.

Pasos sugeridos:

- Revisar hero/inicio en desktop: subtítulo `Desarrollador Web / AI-Assisted Developer`, separador izquierdo más corto y texto vendedor.
- Revisar hero/inicio en mobile: que el subtítulo pueda partir línea sin desbordar.
- Revisar `Sobre mí`: texto más personal y solo dos cards.
- Revisar `Stack técnico`: nuevo diseño con skills tipo chips/pills, sin desbordes en textos como `Bootstrap/SASS`.
- Revisar `Casos reales`: una sola descripción por proyecto y cards armónicas.
- Confirmar que los botones `Descargar CV` abran/descarguen el HTML actualizado.

### 2. Confirmación final de contenido profesional

Objetivo: validar textos públicos antes de deploy.

Puntos a confirmar por Leandro:

- Rol público: `Desarrollador Web / AI-Assisted Developer`.
- Experiencia pública: `+3 años de experiencia`.
- Nuevo texto vendedor del hero.
- Nuevo texto personal/profesional de `Sobre mí`.
- Texto final de los proyectos en `Casos reales`.
- Categoría del proyecto Sophie Langues: actualmente `plataformas`.

### 3. PDF opcional del CV

Objetivo: si se prefiere PDF en lugar de HTML descargable, generar una versión PDF actualizada.

Estado actual:

- No se encontró una herramienta local disponible para convertir HTML a PDF automáticamente.
- El portfolio ya usa el CV HTML actualizado desde `public/leandro_ezequiel_raymondi_rossa.html`.

Pendiente opcional:

- Generar manualmente un PDF desde el HTML.
- Reemplazar `src/assets/leandroraymondi-cv.pdf` o eliminarlo si ya no se usa.

### 4. Limpieza profunda opcional

Objetivo: reducir código/assets heredados o no usados sin afectar funcionalidad.

Candidatos:

- Revisar assets heredados/no usados antes de eliminarlos.
- Revisar si `swiper` sigue siendo necesario si la sección de testimonios no se usa.
- Revisar si conviene eliminar componentes inactivos del template o conservarlos para futura adaptación.

## En progreso

- Ninguna tarea activa todavía.

## Hecho

- Se aplicaron ajustes pedidos tras revisión manual:
  - Hero/inicio: se acortó el separador izquierdo del subtítulo en `src/components/home/home.css`.
  - Hero/inicio: se reescribió el texto principal con tono más vendedor y alineado al CV en `src/components/home/Data.jsx`.
  - Hero/inicio: se reemplazaron proof items por `+3 años de experiencia`, `Desarrollo web` y `AI-Assisted Developer`.
  - Sobre mí: se reescribió el texto con enfoque más personal/profesional en `src/components/about/About.jsx`.
  - Sobre mí: se retiró la card `Proyectos +7 entregas` en `src/components/about/Info.jsx`.
  - Sobre mí: se ajustó el layout de cards de 3 a 2 columnas en `src/components/about/about.css`.
  - Stack técnico: se eliminaron las descripciones de cada skill en `Frontend.jsx`, `Backend.jsx` y `AiTools.jsx`.
  - Stack técnico: se redujeron tamaños/espaciados en `src/components/skills/skills.css`.
  - Casos reales: se eliminó la segunda descripción visual (`impact`) en `src/components/Portfolio/WorkItems.jsx`.
  - Casos reales: se armonizaron los textos `summary` de los proyectos en `src/components/Portfolio/Data.jsx`.
- Se rediseñó `Stack técnico` porque el diseño anterior seguía rompiendo visualmente:
  - `src/components/skills/skills.css`: las skills pasaron de grilla rígida a chips/pills flexibles con `flex-wrap`.
  - Se evitó que textos como `Bootstrap/SASS` se pasen del contenedor.
  - Se mantuvieron las tres tarjetas por categoría, pero con contenido más armónico y adaptable.
- Se ejecutó `npm run build` correctamente después del rediseño de `Stack técnico`.
- Se ejecutó `npm run build` correctamente después de los ajustes pedidos por Leandro.
- Se actualizó el copy principal del portfolio para alinearlo con el CV HTML nuevo:
  - `src/components/home/Data.jsx`: rol, descripción, experiencia `+3 años` y foco inicial `Stack LAMP + IA`.
  - `src/components/about/About.jsx`: subtítulo y descripción profesional con enfoque de IA aplicada.
  - `src/components/about/Info.jsx`: experiencia `+3 años` y foco `LAMP + IA`.
  - `src/components/footer/Footer.jsx`: rol actualizado.
  - `public/index.html`: idioma `es` y título actualizado.
  - Ajustes de tildes en `src/components/skills/Skills.jsx`, `src/components/skills/Frontend.jsx` y `src/components/contact/Contact.jsx`.
- Se actualizó la sección de skills:
  - Se creó `src/components/skills/AiTools.jsx`.
  - Se agregó una tercera tarjeta `Desarrollo asistido por IA`.
  - Se sumaron herramientas/metodologías del CV: Cursor IDE, OpenAI Codex, Claude Code, Antigravity, Prompting y Spec-Driven Dev.
  - Se ajustaron skills existentes: REST APIs, Node.js, AWS EC2/S3, Postman y Firebase.
  - Se adaptó `src/components/skills/skills.css` para tres tarjetas en desktop y una columna en responsive.
- Se agregó el proyecto `Experiencias Sophie Langues` al portfolio:
  - Se movió `experienciasophielangues.png` desde la raíz a `src/assets/experienciasophielangues.png`.
  - Se agregó el proyecto a `src/components/Portfolio/Data.jsx` con categoría `plataformas`.
- Se actualizó el CV descargable:
  - Se movió `leandro_ezequiel_raymondi_rossa.html` a `public/leandro_ezequiel_raymondi_rossa.html`.
  - Los botones `Descargar CV` ahora apuntan al HTML actualizado.
  - Se dejó como pendiente opcional generar un PDF actualizado.
- Se hizo limpieza segura del repo local:
  - Se borraron `.log` locales del root.
  - Se eliminaron copias duplicadas de imágenes del root que ya estaban en `src/assets/`.
  - Se mantuvo `.vercel/` local e ignorado por Git.
  - No se editó `build/` manualmente.
- Se aplicaron mejoras técnicas no urgentes:
  - `src/components/header/Header.jsx`: listener de scroll movido a `useEffect` con cleanup.
  - `src/components/scrollup/ScrollUp.jsx`: listener de scroll movido a `useEffect` con cleanup.
- Se ejecutó `npm run build` correctamente después de los cambios anteriores.
- Se creó `AGENTS.md` con instrucciones para Pi.
- Se agregó estructura principal del proyecto a `AGENTS.md`.
- Se revisaron logs locales y se concluyó que son salidas de ejecuciones previas (`npm start`, `vercel dev`, pruebas) y están ignorados por Git.
- Se revisó `.vercel/` y se confirmó que contiene vínculo local con Vercel, no debe commitearse.
- Se analizó `leandro_ezequiel_raymondi_rossa.html` como CV más actualizado.
- Se detectó nueva imagen para Sophie Langues en raíz: `experienciasophielangues.png`.

## Decisiones

- Mantener respuestas y documentación de trabajo en español.
- No agregar secciones inactivas/template al `AGENTS.md` por ahora.
- Usar este archivo como tablero simple de seguimiento entre sesiones.
- Usar `plataformas` como categoría inicial para `Experiencias Sophie Langues`.
- Usar el CV HTML actualizado como descarga pública por ahora; PDF queda como mejora opcional.

## Registro de cambios manual

- 2026-08-29: rediseñado `Stack técnico` con chips/pills flexibles para evitar desbordes; build correcto.
- 2026-08-29: corregido tamaño de `Stack técnico` porque había quedado demasiado chico; build correcto.
- 2026-08-29: aplicados ajustes posteriores a revisión manual: hero, sobre mí, stack técnico y cards de casos reales; build correcto.
- 2026-08-29: agregadas tareas de ajustes visuales/copy posteriores a revisión manual: hero, sobre mí, stack técnico y casos reales.
- 2026-08-29: actualizadas skills con tarjeta de desarrollo asistido por IA.
- 2026-08-29: agregado proyecto `Experiencias Sophie Langues` e imagen movida a `src/assets/`.
- 2026-08-29: CV HTML movido a `public/` y botones de descarga actualizados.
- 2026-08-29: limpieza segura de `.log` locales y copias duplicadas de imágenes en raíz.
- 2026-08-29: listeners de scroll movidos a `useEffect` en Header y ScrollUp.
- 2026-08-29: ejecutado `npm run build` correctamente tras cambios de skills, portfolio, CV y mejoras técnicas.
- 2026-08-29: actualizado copy principal del portfolio según CV HTML y verificado con `npm run build`.
- 2026-08-29: creado `PORTFOLIO_PLAN.md` con planificación inicial de actualización del portfolio según el CV HTML.
