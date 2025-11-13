import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Projects = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const projects = [
    {
      name: "WeatherCLI",
      description: "Uma ferramenta de linha de comando para consulta de informações meteorológicas",
      url: "https://github.com/MateusLG/WeatherCLI",
      tags: ["CLI", "Weather", "API"],
    },
    {
      name: "QuantikAI",
      description: "Solução de inteligência artificial para análise quantitativa",
      url: "https://github.com/MateusLG/QuantikAI",
      tags: ["AI", "Analytics", "Python"],
    },
    {
      name: "LampIAo",
      description: "Projeto de automação e iluminação inteligente",
      url: "https://github.com/MateusLG/LampIAo",
      tags: ["IoT", "Automation"],
    },
    {
      name: "limpa-tex",
      description: "Ferramenta para limpeza e formatação de arquivos LaTeX",
      url: "https://github.com/MateusLG/limpa-tex",
      tags: ["LaTeX", "CLI", "Tools"],
    },
  ];

  return (
    <section 
      id="projects" 
      className="py-24 md:py-32 bg-secondary/30"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <h2 
          className={`text-3xl md:text-5xl font-bold mb-12 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.name}
              className={`group hover:shadow-hover transition-all duration-700 border-border/50 bg-card/50 backdrop-blur-sm ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1 flex-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </div>
                  <Github className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
                  asChild
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    Ver no GitHub
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
