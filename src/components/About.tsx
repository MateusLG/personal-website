import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const About = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const skills = ["C", "Python", "JavaScript", "TypeScript", "Linux", "Shell", "Google Cloud", "Docker", "Kubernetes", "Git", "FastAPI", "Flask", "Django", "Node.js", "MCP", "Lovable", "Claude", "Google Gemini", "ChatGPT", "Groq"];
  
  return (
    <section 
      id="about" 
      className="py-24 md:py-32"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 
            className={`text-3xl md:text-5xl font-bold mb-8 text-center transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Sobre mim
          </h2>
          <div 
            className={`bg-card rounded-3xl p-8 md:p-12 shadow-card hover:shadow-hover transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Me chamo <span className="text-foreground font-semibold">Mateus Lira</span>, sou desenvolvedor com experiência em diversas tecnologias. Trabalho principalmente no back-end, sempre buscando criar soluções eficientes, baratas e elegantes. Comecei a programar aos 14 anos e desde então nunca parei de aprender e aperfeiçoar meus conhecimentos. Tenho experiência em Cloud, IA, Algoritmos, Automação, Linux e assuntos correlatos.
            </p>
            
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className={`px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${300 + index * 50}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
