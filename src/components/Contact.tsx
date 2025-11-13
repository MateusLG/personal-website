import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Contact = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const contacts = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/mateuslg",
      label: "@mateuslg",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/lgmateus/",
      label: "Mateus Lira",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:mateuslira3105@gmail.com",
      label: "mateuslira3105@gmail.com",
    },
  ];

  return (
    <section 
      id="contact" 
      className="py-24 md:py-32 bg-secondary/30"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 
            className={`text-3xl md:text-5xl font-bold transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Vamos conversar?
          </h2>
          <p 
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Estou sempre aberto a novas oportunidades e colaborações. 
            Entre em contato através das minhas redes sociais.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Button
                  key={contact.name}
                  variant="outline"
                  size="lg"
                  className={`w-full sm:w-auto min-w-[200px] group hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                  asChild
                >
                  <a
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-sm font-medium">{contact.name}</span>
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
      
      <footer className="mt-24 pt-8 border-t border-border/50">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mateus Lira. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
