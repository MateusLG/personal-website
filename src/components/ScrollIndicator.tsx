import { useState, useEffect } from "react";

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "about", "projects", "contact"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = [
    { id: "hero", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "projects", label: "Projetos" },
    { id: "contact", label: "Contato" },
  ];

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative flex items-center"
          aria-label={`Ir para ${section.label}`}
        >
          <div
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeSection === section.id
                ? "bg-primary border-primary scale-125"
                : "bg-transparent border-muted-foreground hover:border-primary hover:scale-110"
            }`}
          />
          <span
            className={`absolute right-full mr-4 px-3 py-1 rounded-full text-sm whitespace-nowrap transition-all duration-300 ${
              activeSection === section.id
                ? "opacity-100 translate-x-0 bg-primary text-primary-foreground"
                : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 bg-card text-foreground"
            }`}
          >
            {section.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ScrollIndicator;
