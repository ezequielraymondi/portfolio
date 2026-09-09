# Portfolio Plan

Archivo de seguimiento para mantener contexto entre sesiones de Pi/Codex y revisar qué hicimos, qué estamos haciendo y qué queda pendiente.

## Cómo usar este archivo

- Revisar este archivo al iniciar una nueva sesión de trabajo.
- Actualizar `Estado actual` cuando cambia el foco.
- Mover tareas entre `Pendiente`, `En progreso` y `Hecho`.
- Registrar decisiones relevantes en `Decisiones`.
- No inventar datos profesionales: si falta información, preguntarle a Leandro antes de modificar contenido público.

## Estado actual

- Foco: repo listo para recruiters; deploy y variables EmailJS en Vercel pendientes de confirmar.
- Última revisión: README profesional, limpieza de template, EmailJS en env vars, favicon y tests actualizados.

## Fuentes de verdad actuales

- Portfolio React: `src/`
- Orden de secciones visibles: `src/App.js`
- Datos de proyectos: `src/components/Portfolio/Data.jsx`
- CV HTML más actualizado y servido públicamente: `public/leandro_ezequiel_raymondi_rossa.html`
- Botones `Descargar CV`: apuntan a `/leandro_ezequiel_raymondi_rossa.html`
- Imagen del proyecto Sophie Langues: `src/assets/experienciasophielangues.png`

## Pendiente

- Deploy en Vercel con cambios SEO y pedir indexación del sitemap en Search Console.
- Opcional futuro: agregar imagen `public/og-image.jpg` (1200x630) para previews en WhatsApp/LinkedIn.
- Opcional futuro: generar PDF actualizado desde el CV HTML si se prefiere descargar PDF en lugar de HTML.
- Opcional futuro: revisar assets/dependencias heredadas si se decide hacer una limpieza profunda.

## En progreso

- Ninguna tarea activa.

## Hecho

- Se creó `AGENTS.md` con instrucciones para Pi y estructura principal del proyecto.
- Se alineó el portfolio con el CV HTML actualizado.
- Se actualizó el copy principal del hero y luego se ajustó para aclarar foco end-to-end técnico, sin prometer diseño visual.
- Se actualizó `Sobre mí` con texto más personal/profesional elegido por Leandro.
- Se reemplazó la card `Foco / LAMP + IA` por tres cards: `Experiencia`, `Perfil` y `Actitud`.
- Se creó `src/components/skills/AiTools.jsx` y se agregó una tercera tarjeta de skills: `Desarrollo asistido por IA`.
- Se rediseñó `Stack técnico` con skills tipo chips/pills flexibles para evitar desbordes como `Bootstrap/SASS`.
- Se agregó el proyecto `Experiencias Sophie Langues` al portfolio con imagen en `src/assets/experienciasophielangues.png`.
- Se movió el CV HTML actualizado a `public/leandro_ezequiel_raymondi_rossa.html` y los botones `Descargar CV` apuntan a esa ruta.
- Se armonizaron cards de `Casos reales`, dejando una sola descripción principal por proyecto.
- Se borraron `.log` locales y copias duplicadas de imágenes del root que ya estaban en `src/assets/`.
- Se movieron listeners de scroll de `Header.jsx` y `ScrollUp.jsx` a `useEffect` con cleanup.
- Se ejecutó `npm run build` correctamente tras los cambios.
- Fase 1 SEO: `public/index.html` con meta tags, Open Graph, Twitter Card y JSON-LD Person.
- Se agregaron `public/robots.txt` y `public/sitemap.xml`.
- Marca pública unificada a **Ezequiel Raymondi** en header, hero, footer y about.
- Redes sociales agregadas en home y footer (LinkedIn, GitHub, Instagram, TikTok, YouTube, Facebook).
- Links profesionales actualizados a `linkedin.com/in/ezequielraymondi` y `github.com/ezequielraymondi`.

## Decisiones

- Mantener respuestas y documentación de trabajo en español.
- No agregar secciones inactivas/template al `AGENTS.md` por ahora.
- Usar este archivo como tablero simple de seguimiento entre sesiones.
- Usar `plataformas` como categoría inicial para `Experiencias Sophie Langues`.
- Usar el CV HTML actualizado como descarga pública por ahora; PDF queda como mejora opcional.
- Dejar el portfolio listo y esperar nuevas noticias antes de seguir ajustando textos o estructura.

## Registro de cambios manual

- 2026-08-29: tareas actuales finalizadas; plan actualizado para esperar nuevas indicaciones.
- 2026-08-29: reemplazada card `Foco` por cards `Perfil` y `Actitud` en `Sobre mí`; build correcto.
- 2026-08-29: reemplazado texto de `Sobre mí` por opción elegida; build correcto.
- 2026-08-29: ajustado texto del hero para aclarar foco end-to-end técnico sin prometer diseño visual; build correcto.
- 2026-08-29: rediseñado `Stack técnico` con chips/pills flexibles para evitar desbordes; build correcto.
- 2026-08-29: agregado proyecto `Experiencias Sophie Langues` e imagen movida a `src/assets/`.
- 2026-08-29: CV HTML movido a `public/` y botones de descarga actualizados.
- 2026-08-29: listeners de scroll movidos a `useEffect` en Header y ScrollUp.
