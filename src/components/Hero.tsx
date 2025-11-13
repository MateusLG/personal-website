import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import FloatingParticles from "./FloatingParticles";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated gradient background with parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-hero-start/10 via-background to-hero-end/10 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px) scale(1.1)`,
        }}
      />
      
      {/* Radial gradient orbs with parallax */}
      <div
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{
          transform: `translate(${mousePosition.x * -25}px, ${mousePosition.y * -25}px)`,
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-hero-end/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Grid pattern with parallax */}
      <div
        className="absolute inset-0 opacity-10 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
          backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Floating particles effect with parallax */}
      <div
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
      >
        <FloatingParticles />
      </div>
      
      {/* Fixed text content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-hero-start to-hero-end bg-clip-text text-transparent">
              Mateus Lira
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Desenvolvedor Full Stack apaixonado por criar experiências digitais únicas
          </p>
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mt-8 group"
          >
            <span>Explore mais</span>
            <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
