const About = () => {
  return (
    <section id="about" className="py-24 section-bg-alt">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 fade-in">
            <h2 className="text-5xl md:text-6xl font-bold font-display mb-8 text-gradient">
              About Me
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="slide-up">
              <div className="glass-effect rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border">
                <h3 className="text-3xl font-bold font-display mb-8 text-foreground">
                  🚀 Driven by Innovation
                </h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    As a passionate fresher in the tech industry, I'm driven by the opportunity to 
                    create meaningful solutions that make a real impact. My journey spans across 
                    three dynamic domains where data meets technology.
                  </p>
                  <p>
                    From analyzing complex datasets to building robust Salesforce solutions and 
                    developing full-stack applications, I bring a comprehensive approach to 
                    problem-solving that bridges technical expertise with business value.
                  </p>
                  <p>
                    I believe in continuous learning and staying ahead of industry trends, 
                    which has led me to explore emerging technologies like IoT, Cloud Computing, 
                    and Cybersecurity.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="slide-up space-y-6">
              {[
                { icon: "🎯", title: "Goal-Oriented", desc: "Focused on delivering high-quality solutions that exceed expectations and drive business growth." },
                { icon: "🔄", title: "Adaptable", desc: "Quick to learn new technologies and adapt to changing project requirements with a positive attitude." },
                { icon: "🤝", title: "Collaborative", desc: "Strong communication skills and experience working in cross-functional teams to achieve common goals." }
              ].map((item, index) => (
                <div key={item.title} className="glass-effect rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 scale-in border" style={{ animationDelay: `${index * 200}ms` }}>
                  <h4 className="text-xl font-bold font-display mb-4 text-primary flex items-center">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;