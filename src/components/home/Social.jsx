import React from "react";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/ezequielraymondi/",
    icon: "bx bxl-linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/ezequielraymondi/",
    icon: "bx bxl-github",
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/eze.raymondi/",
    icon: "bx bxl-instagram",
    label: "Instagram",
  },
  {
    href: "https://www.tiktok.com/@eze.raymondi",
    icon: "bx bxl-tiktok",
    label: "TikTok",
  },
  {
    href: "https://www.youtube.com/@eze.raymondi",
    icon: "bx bxl-youtube",
    label: "YouTube",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61577666664031",
    icon: "bx bxl-facebook",
    label: "Facebook",
  },
];

const Social = () => {
  return (
    <div className="home__social">
      {socialLinks.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <i className={icon}></i>
        </a>
      ))}
    </div>
  );
};

export default Social;
