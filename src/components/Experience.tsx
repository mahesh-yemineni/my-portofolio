import { GraduationCap, Briefcase, Award } from "lucide-react";

const Experience = () => {
  const certifications = [
    "Python Programming",
    "Cloud Engineer",
    "Salesforce Developer",
    "Java Programming",
    "CNSP (Certified Network Security Professional)",
    "IoT Solutions",
    "Cyber Security",
    "Design Thinking"
  ];

  const internships = [
    {
      role: "Django Developer Intern",
      company: "L4G Solutions",
      duration: "6 months",
      description: "Developed web applications using Django framework, implemented REST APIs, and worked on database optimization. Collaborated with senior developers on multiple client projects.",
      skills: ["Django", "Python", "REST APIs", "PostgreSQL", "Git"]
    },
    {
      role: "Salesforce Intern",
      company: "Megnity Technologies",
      duration: "4 months",
      description: "Worked on Salesforce customization, created workflows and reports, integrated external APIs, and assisted in client requirement analysis and solution design.",
      skills: ["Salesforce", "Apex", "Workflows", "Reports", "API Integration"]
    }
  ];

  return (
    <section id="experience" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Experience & Certifications
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Internships */}
            <div className="slide-up">
              <div className="flex items-center mb-8">
                <Briefcase className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-2xl font-bold text-foreground">Internships</h3>
              </div>
              
              <div className="space-y-8">
                {internships.map((internship, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-foreground">{internship.role}</h4>
                        <p className="text-primary font-medium">{internship.company}</p>
                      </div>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {internship.duration}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {internship.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map((skill) => (
                        <span
                          key={skill}
                          className="skill-tag px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div className="slide-up">
              <div className="flex items-center mb-8">
                <Award className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid gap-4">
                  {certifications.map((cert, index) => (
                    <div 
                      key={cert} 
                      className="flex items-center p-4 bg-section-bg rounded-xl hover:bg-primary/5 transition-colors duration-200"
                    >
                      <GraduationCap className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                      <span className="font-medium text-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-foreground mb-4">Continuous Learning</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Committed to staying current with industry trends and technologies. 
                  Regularly participating in online courses, workshops, and tech meetups 
                  to expand knowledge and skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;