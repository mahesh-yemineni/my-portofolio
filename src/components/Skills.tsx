const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analytics",
      icon: "📊",
      skills: ["SQL", "Python", "Power BI", "Tableau", "Azure ML", "Data Visualization", "Statistical Analysis"]
    },
    {
      title: "Salesforce Development",
      icon: "☁️",
      skills: ["Salesforce Admin", "Workflows", "Reports & Dashboards", "API Integration", "Custom Objects", "Process Builder"]
    },
    {
      title: "Software Development",
      icon: "💻",
      skills: ["Django", "REST APIs", "Java", "JavaScript", "React", "Node.js", "Database Design"]
    },
    {
      title: "Cloud & Infrastructure",
      icon: "🌐",
      skills: ["Azure", "AWS", "Cloud Architecture", "DevOps", "Docker", "CI/CD"]
    },
    {
      title: "Emerging Technologies",
      icon: "🚀",
      skills: ["IoT", "Cybersecurity", "Machine Learning", "AI", "Blockchain", "Design Thinking"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive skill set spanning data analytics, cloud platforms, and modern development frameworks
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title} 
                className="slide-up bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag px-3 py-2 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;