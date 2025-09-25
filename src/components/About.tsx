const About = () => {
  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Driven by Innovation
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  As a passionate fresher in the tech industry, I'm driven by the opportunity to 
                  create meaningful solutions that make a real impact. My journey spans across 
                  three dynamic domains where data meets technology.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  From analyzing complex datasets to building robust Salesforce solutions and 
                  developing full-stack applications, I bring a comprehensive approach to 
                  problem-solving that bridges technical expertise with business value.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in continuous learning and staying ahead of industry trends, 
                  which has led me to explore emerging technologies like IoT, Cloud Computing, 
                  and Cybersecurity.
                </p>
              </div>
            </div>
            
            <div className="slide-up">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-semibold mb-3 text-primary">
                    🎯 Goal-Oriented
                  </h4>
                  <p className="text-muted-foreground">
                    Focused on delivering high-quality solutions that exceed expectations 
                    and drive business growth.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-semibold mb-3 text-primary">
                    🔄 Adaptable
                  </h4>
                  <p className="text-muted-foreground">
                    Quick to learn new technologies and adapt to changing project 
                    requirements with a positive attitude.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-semibold mb-3 text-primary">
                    🤝 Collaborative
                  </h4>
                  <p className="text-muted-foreground">
                    Strong communication skills and experience working in 
                    cross-functional teams to achieve common goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;