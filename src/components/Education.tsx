import type { EducationItem } from '../types';

const Education = () => {
  const education: EducationItem[] = [
    {
      institution: 'University Name',
      degree: 'Bachelor of Science in Computer Science',
      period: '2014 - 2018',
      description:
        'Relevant coursework: Data Structures, Algorithms, Database Systems, Software Engineering',
    },
    {
      institution: 'High School',
      degree: 'High School Diploma',
      period: '2012 - 2014',
    },
  ];

  return (
    <section id="education" className="min-h-screen py-20 px-6 bg-[#0f0f0f]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={`${edu.institution}-${edu.period}`}
              className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-xl text-purple-400 mb-2">{edu.institution}</p>
                </div>
                <span className="text-gray-400 font-medium">{edu.period}</span>
              </div>
              {edu.description && <p className="text-gray-300 mt-4">{edu.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
