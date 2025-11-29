import type { Skill } from '../types';

const Skills = () => {
  const skills: Skill[] = [
    // Languages
    { name: 'TypeScript', category: 'language' },
    { name: 'JavaScript', category: 'language' },
    { name: 'Python', category: 'language' },
    { name: 'Java', category: 'language' },
    { name: 'C++', category: 'language' },
    // Frameworks
    { name: 'React', category: 'framework' },
    { name: 'Vue.js', category: 'framework' },
    { name: 'Node.js', category: 'framework' },
    { name: 'Express', category: 'framework' },
    { name: 'Next.js', category: 'framework' },
    // Tools
    { name: 'Git', category: 'tool' },
    { name: 'Docker', category: 'tool' },
    { name: 'AWS', category: 'tool' },
    { name: 'Webpack', category: 'tool' },
    { name: 'Vite', category: 'tool' },
    // Databases
    { name: 'PostgreSQL', category: 'database' },
    { name: 'MongoDB', category: 'database' },
    { name: 'Redis', category: 'database' },
  ];

  const categories = [
    { name: 'Languages', value: 'language' as const },
    { name: 'Frameworks', value: 'framework' as const },
    { name: 'Tools', value: 'tool' as const },
    { name: 'Databases', value: 'database' as const },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="space-y-12">
          {categories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category.value);
            return (
              <div key={category.value}>
                <h3 className="text-2xl font-semibold text-gray-300 mb-6">{category.name}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 transform hover:scale-105 text-center"
                    >
                      <div className="text-white font-medium">{skill.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
