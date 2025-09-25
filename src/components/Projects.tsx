import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  featured?: boolean;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects: Project[] = [
    // Data Analytics Projects
    {
      id: 1,
      title: "Retail Sales Dashboard",
      description: "Interactive Power BI dashboard analyzing retail sales patterns, customer behavior, and inventory optimization with real-time data visualization.",
      category: "Data Analytics",
      technologies: ["Power BI", "SQL", "Python", "Excel"],
      featured: true
    },
    {
      id: 2,  
      title: "Investment Risk Simulation",
      description: "Monte Carlo simulation model for investment portfolio risk assessment using Python and statistical analysis techniques.",
      category: "Data Analytics",
      technologies: ["Python", "NumPy", "Pandas", "Matplotlib"]
    },
    {
      id: 3,
      title: "Customer Segmentation Analysis",
      description: "Machine learning-based customer segmentation using clustering algorithms to identify target market groups.",
      category: "Data Analytics", 
      technologies: ["Python", "Scikit-learn", "Tableau", "SQL"]
    },
    {
      id: 4,
      title: "Data Quality & Compliance Dashboard",
      description: "Automated data quality monitoring system with compliance reporting and anomaly detection capabilities.",
      category: "Data Analytics",
      technologies: ["Python", "Power BI", "SQL Server", "Azure"]
    },
    {
      id: 5,
      title: "E-commerce Sales Forecasting",
      description: "Time series forecasting model for e-commerce sales prediction using machine learning algorithms.",
      category: "Data Analytics",
      technologies: ["Python", "TensorFlow", "Pandas", "Azure ML"]
    },
    {
      id: 6,
      title: "Healthcare Analytics Dashboard",
      description: "Comprehensive healthcare analytics platform for patient data analysis and operational insights.",
      category: "Data Analytics",
      technologies: ["Tableau", "R", "SQL", "Power BI"]
    },
    {
      id: 7,
      title: "Social Media Sentiment Analysis",
      description: "Real-time sentiment analysis of social media data using NLP techniques and machine learning models.",
      category: "Data Analytics",
      technologies: ["Python", "NLTK", "Twitter API", "MongoDB"]
    },

    // Salesforce Projects
    {
      id: 8,
      title: "Lead Management Automation",
      description: "Automated lead scoring and routing system with custom workflows and real-time notifications.",
      category: "Salesforce",
      technologies: ["Salesforce", "Apex", "Process Builder", "Lightning"],
      featured: true
    },
    {
      id: 9,
      title: "Case Escalation & Service Console",  
      description: "Advanced case management system with automated escalation rules and custom service console configuration.",
      category: "Salesforce",
      technologies: ["Salesforce", "Service Cloud", "Lightning", "Flows"]
    },
    {
      id: 10,
      title: "Custom Salesforce App for Workshop Registrations",
      description: "End-to-end workshop registration system with payment integration and automated email confirmations.",
      category: "Salesforce",
      technologies: ["Salesforce", "Lightning", "Apex", "Payment Gateway"]
    },
    {
      id: 11,
      title: "Salesforce Reports & Dashboards",
      description: "Comprehensive reporting suite with interactive dashboards for sales performance and customer analytics.",
      category: "Salesforce",
      technologies: ["Salesforce", "Reports", "Dashboards", "Einstein Analytics"]
    },
    {
      id: 12,
      title: "Role-Based Access & Security Model",
      description: "Enterprise-level security implementation with role hierarchies, permission sets, and data access controls.",
      category: "Salesforce",
      technologies: ["Salesforce", "Security", "Profiles", "Permission Sets"]
    },
    {
      id: 13,
      title: "Workflow & Approval Automation",
      description: "Complex approval processes with multi-level workflows and automated business rule enforcement.",
      category: "Salesforce", 
      technologies: ["Salesforce", "Workflows", "Approval Process", "Process Builder"]
    },
    {
      id: 14,
      title: "Salesforce + External API Integration",
      description: "Seamless integration between Salesforce and external systems using REST APIs and custom connectors.",
      category: "Salesforce",
      technologies: ["Salesforce", "REST API", "Integration", "Middleware"]
    },

    // Software Development Projects
    {
      id: 15,
      title: "Smart Expense Tracker",
      description: "Full-stack expense management application with AI-powered receipt scanning and budget analytics.",
      category: "Software Development",
      technologies: ["Django", "React", "PostgreSQL", "Machine Learning"],
      featured: true
    },
    {
      id: 16,
      title: "Online Learning Platform",
      description: "Comprehensive e-learning platform with video streaming, progress tracking, and interactive assessments.",
      category: "Software Development",
      technologies: ["Django", "React", "Redis", "AWS S3"]
    },
    {
      id: 17,
      title: "Cloud-Based File Storage",
      description: "Secure cloud storage solution with file sharing, version control, and collaborative editing features.",
      category: "Software Development",
      technologies: ["Node.js", "MongoDB", "AWS", "WebSocket"]
    },
    {
      id: 18,
      title: "IoT Smart Home Dashboard",
      description: "Real-time IoT device monitoring and control system with mobile app integration.",
      category: "Software Development",
      technologies: ["Python", "IoT", "MQTT", "React Native"]
    },
    {
      id: 19,
      title: "AI-Powered Resume Screener",
      description: "Automated resume screening system using NLP and machine learning for candidate evaluation.",
      category: "Software Development", 
      technologies: ["Python", "NLP", "Machine Learning", "Flask"]
    },
    {
      id: 20,
      title: "Cybersecurity Log Analyzer",
      description: "Advanced security log analysis tool with threat detection and automated incident response.",
      category: "Software Development",
      technologies: ["Python", "Elasticsearch", "Kibana", "Security"]
    },
    {
      id: 21,
      title: "Job Portal Web Application",
      description: "Complete job portal with applicant tracking, resume parsing, and interview scheduling features.",
      category: "Software Development",
      technologies: ["Django", "PostgreSQL", "Celery", "Bootstrap"]
    }
  ];

  const categories = ["All", "Data Analytics", "Salesforce", "Software Development"];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getProjectCount = (category: string) => {
    return category === "All" 
      ? projects.length 
      : projects.filter(p => p.category === category).length;
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of 21 diverse projects spanning data analytics, Salesforce development, and software engineering
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 slide-up">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className="px-6 py-3 rounded-full font-medium transition-all duration-200"
              >
                {category} ({getProjectCount(category)})
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card rounded-2xl p-6 ${
                  project.featured ? 'ring-2 ring-primary/20' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {project.featured && (
                  <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    Featured
                  </div>
                )}
                
                <div className="mb-4">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="skill-tag px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* No projects message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;