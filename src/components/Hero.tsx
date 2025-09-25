import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-white">Mahesh</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Passionate about building impactful solutions in{" "}
              <span className="font-semibold">Data Analytics</span>,{" "}
              <span className="font-semibold">Salesforce</span>, and{" "}
              <span className="font-semibold">Software Development</span>
            </p>
          </div>
          
          <div className="slide-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-lg"
              onClick={scrollToContact}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="slide-up flex justify-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:mahesh@example.com"
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;