import type { ExperienceItem } from '../types';

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: 'Tech Company Inc.',
      position: 'Senior Software Engineer',
      period: '2022 - Present',
      description: [
        'Led development of scalable web applications using React and Node.js',
        'Collaborated with cross-functional teams to deliver high-quality products',
        'Mentored junior developers and conducted code reviews',
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    },
    {
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      description: [
        'Built responsive web applications from scratch',
        'Implemented RESTful APIs and database schemas',
        'Optimized application performance and user experience',
      ],
      technologies: ['Vue.js', 'Python', 'MongoDB', 'AWS'],
    },
    {
      company: 'Web Agency',
      position: 'Frontend Developer',
      period: '2018 - 2020',
      description: [
        'Developed client-facing web applications',
        'Worked with design teams to implement pixel-perfect UIs',
        'Maintained and improved existing codebases',
      ],
      technologies: ['JavaScript', 'HTML', 'CSS', 'React'],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-6 bg-[#0f0f0f]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                  <p className="text-xl text-purple-400 mb-2">{exp.company}</p>
                </div>
                <span className="text-gray-400 font-medium">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                {exp.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
