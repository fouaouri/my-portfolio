import { ChevronDown } from 'lucide-react';

interface SkillsProps {
  onNavigate: (section: string) => void;
}

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Bootstrap','Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'Django', 'Python'],
  },
  {
    category: 'Database',
    skills: ['MySQL'],
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'C', 'C++', 'REST API', 'Docker', 'Postman', 'UI/UX Design','Figma'],
  },
];

function Skills({ onNavigate }: SkillsProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 py-20 relative">
      <div className="max-w-7xl w-full space-y-16">
        <div className="space-y-8">
          <div className="relative">
            <svg
              viewBox="0 0 800 100"
              className="w-full max-w-2xl"
            >
              <circle cx="100" cy="50" r="8" fill="white" />
              <line x1="120" y1="50" x2="200" y2="30" stroke="white" strokeWidth="3" />
              <line x1="200" y1="30" x2="280" y2="70" stroke="white" strokeWidth="3" />
              <line x1="280" y1="70" x2="360" y2="40" stroke="white" strokeWidth="3" />
              <line x1="360" y1="40" x2="440" y2="60" stroke="white" strokeWidth="3" />
              <line x1="440" y1="60" x2="520" y2="35" stroke="white" strokeWidth="3" />
              <line x1="520" y1="35" x2="600" y2="65" stroke="white" strokeWidth="3" />
              <line x1="600" y1="65" x2="780" y2="50" stroke="white" strokeWidth="3" />
            </svg>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
            SKILLS & EXPERTISE
          </h2>

          <div className="w-32 border-t-2 border-white"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group border border-white p-8 hover:bg-white hover:text-black transition-all duration-500"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-light tracking-wide">
                  {category.category}
                </h3>

                <div className="w-12 border-t-2 border-current"></div>

                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="text-lg text-gray-300 group-hover:text-black transition-colors flex items-start"
                    >
                      <span className="mr-3 text-current">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 border border-white/30">
          <div className="space-y-6">
            <h3 className="text-2xl font-light tracking-wide">PROFICIENCY LEVELS</h3>
            <div className="w-20 border-t-2 border-white"></div>

            <div className="space-y-8">
              {[
                { skill: 'JavaScript & TypeScript', level: 90 },
                { skill: 'React.js', level: 85 },
                { skill: 'HTML & CSS', level: 95 },
                { skill: 'Node.js & Express.js', level: 80 },
                { skill: 'Django', level: 75 },
                { skill: 'MySQL & Database Design', level: 80 },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg">{item.skill}</span>
                    <span className="text-gray-400">{item.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 w-full">
                    <div
                      className="h-full bg-white transition-all duration-1000"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => onNavigate('projects')}
        className="absolute bottom-12 animate-bounce hover:scale-110 transition-transform"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={48} strokeWidth={1} />
      </button>
    </div>
  );
}

export default Skills;
