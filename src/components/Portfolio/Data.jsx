import ExperienciasSophieLangues from "../../assets/experienciasophielangues.png";
import GoogleAIConnect from "../../assets/googlexaiconnect.png";
import CardioDiabetesEnRed from "../../assets/cardiodiabetesenred.png";
import SepeliosNatarello from "../../assets/sepeliosnatarello.png";

export const projectsData = [
  {
    id: 1,
    image: ExperienciasSophieLangues,
    title: "Experiencias Sophie Langues",
    category: "plataformas",
    url: "https://experienciasophielangues.sophielangues.com.ar/",
    summary:
      "Plataforma e-learning interactiva para academia de idiomas, con catálogo de cursos, gestión de contenidos, registro de usuarios y navegación orientada a conversión.",
    stack: ["PHP", "JavaScript", "MySQL", "HTML/CSS"],
  },
  {
    id: 2,
    image: GoogleAIConnect,
    title: "Google x AIConnect",
    category: "eventos",
    url: "https://youtube.com/shorts/zGlCkNKy94g",
    summary:
      "Experiencia interactiva para eventos presenciales de Google, con trivias, memotest, tótems, fotografía con tablets y ranking en tiempo real por equipos.",
    stack: ["JavaScript", "PHP", "MySQL", "AWS"],
  },
  {
    id: 3,
    image: CardioDiabetesEnRed,
    title: "Cardiodiabetesenred",
    category: "plataformas",
    url: "https://eventmedia.space/cardiodiabetesenred/",
    summary:
      "Plataforma de capacitación gamificada para colaboradores de Novo Nordisk, con panel administrativo, leaderboard, control de sesiones y métricas operativas.",
    stack: ["PHP", "MySQL", "JavaScript", "AWS"],
  },
  {
    id: 4,
    image: SepeliosNatarello,
    title: "Sepelios Natarello",
    category: "sistemas",
    url: "https://sepeliosnatarello.com.ar/",
    summary:
      "Sitio corporativo con CMS personalizado, formulario de contacto, galería dinámica y sección de homenajes para centralizar la presencia online del negocio.",
    stack: ["PHP", "MySQL", "JavaScript", "AWS"],
  },
];

export const projectsNav = [
  { name: "all", label: "Todos" },
  { name: "eventos", label: "Eventos" },
  { name: "plataformas", label: "Plataformas" },
  { name: "sistemas", label: "Sistemas" },
];
