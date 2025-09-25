import SkillBar from "./SkillBar";
import SkillBadge from "./SkillBadge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analytics",
      icon: "📊",
      description: "Transforming data into actionable insights",
      skills: [
        { name: "SQL", level: 90, isPremium: true },
        { name: "Python", level: 85, isPremium: true },
        { name: "Power BI", level: 88 },
        { name: "Tableau", level: 82 },
        { name: "Azure ML", level: 75 },
        { name: "Data Visualization", level: 85 },
        { name: "Statistical Analysis", level: 80 }
      ]
    },
    {
      title: "Salesforce Development",
      icon: "☁️",
      description: "Building scalable CRM solutions",
      skills: [
        { name: "Salesforce Admin", level: 90, isPremium: true },
        { name: "Apex Programming", level: 78 },
        { name: "Lightning Components", level: 82 },
        { name: "Process Builder", level: 85 },
        { name: "API Integration", level: 80 },
        { name: "Custom Objects", level: 88 }
      ]
    },
    {
      title: "Software Development",
      icon: "💻",
      description: "Full-stack development expertise",
      skills: [
        { name: "Django", level: 88, isPremium: true },
        { name: "REST APIs", level: 85 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 82 },
        { name: "React", level: 78 },
        { name: "Database Design", level: 85 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "🌐",
      description: "Modern cloud infrastructure",
      skills: [
        { name: "Azure", level: 82 },
        { name: "AWS", level: 75 },
        { name: "Docker", level: 78 },
        { name: "CI/CD", level: 72 },
        { name: "Cloud Architecture", level: 80 }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: "🚀",
      description: "Cutting-edge tech exploration",
      skills: [
        { name: "IoT Solutions", level: 75 },
        { name: "Cybersecurity", level: 78 },
        { name: "Machine Learning", level: 80 },
        { name: "Design Thinking", level: 85 }
      ]
    }
  ];

  const topSkills = [
    { name: "SQL", level: "expert", icon: "🗃️" },
    { name: "Python", level: "expert", icon: "🐍" },
    { name: "Salesforce", level: "expert", icon: "☁️" },
    { name: "Django", level: "advanced", icon: "🌐" },
    { name: "Power BI", level: "advanced", icon: "📊" },
    { name: "Azure", level: "advanced", icon: "☁️" },
    { name: "Data Analysis", level: "expert", icon: "📈" },
    { name: "API Development", level: "advanced", icon: "🔌" }
  ];

  return (
    <section id="skills" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in">
            <h2 className="text-5xl md:text-6xl font-bold font-display mb-8 text-gradient">
              Skills & Expertise
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A comprehensive skill set spanning data analytics, cloud platforms, and modern development frameworks
            </p>
          </div>

          {/* Top Skills Badges */}
          <div className="mb-20 slide-up">
            <h3 className="text-2xl font-bold font-display text-center mb-12 text-foreground">
              Core Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {topSkills.map((skill, index) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  level={skill.level as any}
                  icon={skill.icon}
                  isPremium={skill.level === 'expert'}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
          
          {/* Detailed Skills with Progress Bars */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {skillCategories.slice(0, 3).map((category, index) => (
              <div 
                key={category.title} 
                className="glass-effect rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 scale-in border"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-center mb-8">
                  <div className="text-5xl mb-4 filter drop-shadow-lg">{category.icon}</div>
                  <h3 className="text-2xl font-bold font-display text-foreground mb-2">{category.title}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      category={skill.isPremium ? 'expert' : skill.level >= 85 ? 'advanced' : 'intermediate'}
                      delay={index * 200 + skillIndex * 100}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.slice(3).map((category, index) => (
              <div 
                key={category.title} 
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 scale-in border border-border/50"
                style={{ animationDelay: `${(index + 3) * 200}ms` }}
              >
                <div className="text-center mb-8">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold font-display text-foreground mb-2">{category.title}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      category={skill.level >= 80 ? 'advanced' : 'intermediate'}
                      delay={(index + 3) * 200 + skillIndex * 100}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-20 text-center slide-up">
            <div className="glass-effect rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold font-display text-foreground mb-6">
                Continuous Learning Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I believe in staying current with industry trends and emerging technologies. 
                My diverse skill set allows me to bridge the gap between data insights, 
                business processes, and technical implementation.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
                  21+ Projects Completed
                </span>
                <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full font-medium">
                  8 Certifications
                </span>
                <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full font-medium">
                  2 Internships
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;