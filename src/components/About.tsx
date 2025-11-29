const About = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 pt-32">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-[#1a1a1a] flex items-center justify-center">
                <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text">
                  SD
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Sudipto Dasgupta
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">Full Stack Developer</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Passionate developer with expertise in building modern web applications. I love
              creating efficient, scalable solutions and turning complex problems into simple,
              beautiful designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                type="button"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/portfolio/resume.txt';
                  link.target = '_blank';
                  link.rel = 'noopener noreferrer';
                  link.click();
                }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Download Resume
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
