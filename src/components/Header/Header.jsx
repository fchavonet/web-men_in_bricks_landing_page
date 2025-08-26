import { useEffect, useState } from "react";

function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="w-full h-16 sticky top-8 px-8 py-2 flex flex-row justify-between items-center border bg-gray-50/75 backdrop-blur-xs z-[9999]">
      <h1 className="flex flex-row justify-between lg:justify-center items-center gap-4">
        <img src="" alt="Logo Men in Bricks" />
        <a href="#hero">Men in Bricks</a>
      </h1>

      <nav className="hidden lg:block">
        <ul className="flex flex-row justify-center items-center gap-4">
          <li>
            <a href="#player" className={activeSection === "player" ? "underline" : ""}>
              Écouter
            </a>
          </li>

          <li>
            <a href="#about" className={activeSection === "about" ? "underline" : ""}>
              À propos
            </a>
          </li>

          <li>
            <a href="#contact" className={activeSection === "contact" ? "underline" : ""}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
