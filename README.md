# Portfolio — Ezequiel Raymondi

Portfolio personal de **Ezequiel Raymondi**, desarrollador web. Presenta casos reales, stack técnico, CV descargable y formulario de contacto.

**Sitio en vivo:** [ezequielraymondi.com.ar](https://ezequielraymondi.com.ar)

## Stack

- React 18 (Create React App)
- CSS modular por sección
- EmailJS para envío de mensajes
- Vercel Serverless Function (`api/contact.js`) con rate limiting diario
- Despliegue en Vercel

## Secciones

- Hero y presentación profesional
- Sobre mí
- Stack técnico (frontend, backend, herramientas IA)
- Casos reales con filtros por categoría
- Contacto (email, WhatsApp y formulario)

## Proyectos destacados en el portfolio

- Experiencias Sophie Langues — plataforma e-learning
- Google x AIConnect — experiencia interactiva para eventos
- Cardiodiabetesenred — capacitación gamificada (Novo Nordisk)
- Sepelios Natarello — sitio corporativo con CMS

## Desarrollo local

```bash
npm install
cp .env.example .env
npm start
```

Abrí [http://localhost:3000](http://localhost:3000).

### Variables de entorno

Copiá `.env.example` a `.env` y completá los valores de EmailJS:

| Variable | Descripción |
|---|---|
| `REACT_APP_EMAILJS_SERVICE_ID` | ID del servicio EmailJS |
| `REACT_APP_EMAILJS_TEMPLATE_ID` | ID del template EmailJS |
| `REACT_APP_EMAILJS_PUBLIC_KEY` | Public key de EmailJS |

En Vercel, configurá las mismas variables en **Project → Settings → Environment Variables**.

### Rate limiting del formulario

`api/contact.js` limita envíos por IP y cookie (1 por día). Opcionalmente usa Vercel KV si están definidos `KV_REST_API_URL` y `KV_REST_API_TOKEN`.

## Scripts

| Comando | Descripción |
|---|---|
| `npm start` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm test` | Tests con React Testing Library |

## Estructura

```text
src/
  components/   # Secciones del portfolio
  assets/       # Imágenes y recursos
public/         # HTML, CV, SEO (robots, sitemap, favicon)
api/            # Serverless function de contacto (Vercel)
```

## Contacto

- Web: [ezequielraymondi.com.ar](https://ezequielraymondi.com.ar)
- LinkedIn: [linkedin.com/in/ezequielraymondi](https://www.linkedin.com/in/ezequielraymondi/)
- GitHub: [github.com/ezequielraymondi](https://github.com/ezequielraymondi)
