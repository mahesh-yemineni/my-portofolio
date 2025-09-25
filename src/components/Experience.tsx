import { GraduationCap, Briefcase, Award, Calendar, MapPin, TrendingUp } from "lucide-react";

const Experience = () => {
  const certifications = [
    { name: "Python Programming", category: "Programming", year: "2024" },
    { name: "Cloud Engineer", category: "Cloud", year: "2024" },
    { name: "Salesforce Developer", category: "CRM", year: "2023" },
    { name: "Java Programming", category: "Programming", year: "2023" },
    { name: "CNSP (Network Security)", category: "Security", year: "2024" },
    { name: "IoT Solutions", category: "IoT", year: "2023" },
    { name: "Cyber Security", category: "Security", year: "2024" },
    { name: "Design Thinking", category: "Innovation", year: "2023" }
  ];

  const internships = [
    {
      role: "Django Developer Intern",
      company: "L4G Solutions",
      duration: "6 months",
      period: "Jan 2024 - Jun 2024",
      location: "Remote",
      description: "Developed web applications using Django framework, implemented REST APIs, and worked on database optimization. Collaborated with senior developers on multiple client projects.",
      achievements: [
        "Built 3 full-stack web applications",
        "Improved API response time by 40%",
        "Collaborated on 5+ client projects"
      ],
      skills: ["Django", "Python", "REST APIs", "PostgreSQL", "Git"],
      type: "Development"
    },
    {
      role: "Salesforce Intern", 
      company: "Megnity Technologies",
      duration: "4 months",
      period: "Aug 2023 - Nov 2023",
      location: "Hybrid",
      description: "Worked on Salesforce customization, created workflows and reports, integrated external APIs, and assisted in client requirement analysis and solution design.",
      achievements: [
        "Automated 15+ business processes",
        "Created 20+ custom reports & dashboards",
        "Integrated 3 external systems"
      ],
      skills: ["Salesforce", "Apex", "Workflows", "Reports", "API Integration"],
      type: "CRM"
    }
  ];

  const getCertificationIcon = (category: string) => {
    switch (category) {
      case 'Programming': return '💻';
      case 'Cloud': return '☁️';
      case 'CRM': return '🏢';
      case 'Security': return '🔒';
      case 'IoT': return '🌐';
      case 'Innovation': return '💡';
      default: return '📜';
    }
  };

  return (
    <section id="experience" className="py-24 section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in">
            <h2 className="text-5xl md:text-6xl font-bold font-display mb-8 text-gradient">
              Experience & Certifications
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Professional journey backed by hands-on experience and industry-recognized certifications
            </p>
          </div>
          
          {/* Internships */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-12 slide-up">
              <Briefcase className="h-8 w-8 text-primary mr-4" />
              <h3 className="text-3xl font-bold font-display text-foreground">Professional Experience</h3>
            </div>
            
            <div className="space-y-8">
              {internships.map((internship, index) => (
                <div key={index} className="glass-effect rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] scale-in border">
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center mb-2">
                            <span className={`inline-block w-3 h-3 rounded-full mr-3 ${
                              internship.type === 'Development' ? 'bg-blue-500' : 'bg-green-500'
                            }`}></span>
                            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                              {internship.type}
                            </span>
                          </div>
                          <h4 className="text-2xl font-bold font-display text-foreground mb-1">{internship.role}</h4>
                          <p className="text-lg font-semibold text-primary mb-2">{internship.company}</p>
                          <div className="flex items-center text-muted-foreground text-sm space-x-4">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {internship.period}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {internship.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description & Achievements */}
                    <div className="md:col-span-2">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {internship.description}
                      </p>
                      
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                          <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {internship.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-sm text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {internship.skills.map((skill) => (
                          <span
                            key={skill}
                            className="skill-tag px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <div className="flex items-center justify-center mb-12 slide-up">
              <Award className="h-8 w-8 text-primary mr-4" />
              <h3 className="text-3xl font-bold font-display text-foreground">Industry Certifications</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.name} 
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 scale-in border border-border/50 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {getCertificationIcon(cert.category)}
                    </div>
                    <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {cert.name}
                    </h4>
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-3">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                        {cert.category}
                      </span>
                      <span className="text-xs">•</span>
                      <span>{cert.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Learning Philosophy */}
            <div className="glass-effect rounded-3xl p-8 text-center max-w-4xl mx-auto scale-in">
              <GraduationCap className="h-12 w-12 text-primary mx-auto mb-6" />
              <h4 className="text-2xl font-bold font-display text-foreground mb-4">Lifelong Learning Philosophy</h4>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I believe in continuous skill development and staying ahead of industry trends. 
                My diverse certifications reflect my commitment to mastering both foundational 
                and cutting-edge technologies across multiple domains.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full font-medium border border-blue-100">
                  📚 Always Learning
                </div>
                <div className="px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-full font-medium border border-green-100">
                  🎯 Industry Focused
                </div>
                <div className="px-4 py-2 bg-gradient-to-r from-purple-50 to-violet-50 text-purple-700 rounded-full font-medium border border-purple-100">
                  🚀 Future Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;