# Project Instructions

## Project context

- This is Leandro Raymondi's personal portfolio.
- The app is a React 18 project bootstrapped with Create React App.
- Main source code lives in `src/`.
- Static/public assets live in `public/`; app assets live in `src/assets/`.
- Portfolio sections are organized under `src/components/`.

## Project structure

- `src/index.js` mounts the React app.
- `src/App.js` defines the visible portfolio sections and their order.
- `src/App.css` contains global theme variables, layout helpers, reusable classes, and responsive rules.
- `src/components/header/` contains the top navigation.
- `src/components/home/` contains the hero, main intro copy, social links, scroll CTA, and CV download CTA.
- `src/components/about/` contains the professional summary, profile image, info cards, and CV download CTA.
- `src/components/skills/` contains frontend/backend skill lists.
- `src/components/Portfolio/` contains project filters and cards. Project data lives in `src/components/Portfolio/Data.jsx`.
- `src/components/contact/` contains direct contact info and the contact form.
- `src/components/footer/` contains footer links and social links.
- `src/components/scrollup/` contains the floating back-to-top button.
- `src/assets/` contains app images and downloadable files such as the CV PDF.
- `api/contact.js` is a Vercel serverless function used by the contact form for validation/rate limiting.

## Commands

- Install dependencies: `npm install`
- Start local dev server: `npm start`
- Create production build: `npm run build`
- Run tests: `npm test`

## Working guidelines

- Review `PORTFOLIO_PLAN.md` at the start of portfolio update sessions and keep it updated when tasks move forward.
- Before making changes, inspect the relevant files and keep existing style/conventions.
- Prefer small, targeted edits over broad rewrites.
- Do not modify generated output in `build/` unless explicitly requested.
- Do not run `npm run eject`.
- After code changes, run `npm run build` when practical to verify the project still compiles.
- Keep responses concise and in Spanish unless the user asks otherwise.

## Code style

- Use React functional components and JSX, matching the existing component structure.
- Keep component-specific CSS in the existing `.css` files next to each section.
- Preserve existing class naming patterns unless a refactor is requested.
- Avoid adding new dependencies unless clearly necessary and approved by the user.

## Portfolio content preferences

- Treat personal data, CV, links, images, and project descriptions carefully.
- Ask before inventing professional experience, metrics, technologies, or project details.
- When updating portfolio projects, keep images and data entries consistent with `src/components/Portfolio/Data.jsx` and related components.
