import { ChevronDown, Github, Linkedin } from 'lucide-react';

interface AboutProps {
  onNavigate: (section: string) => void;
}

function About({ onNavigate }: AboutProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 relative">
      <div className="max-w-6xl w-full space-y-16">
        <div className="space-y-8">
          <div className="relative">
            <svg
              viewBox="0 0 600 80"
              className="w-full max-w-md mb-8"
            >
              <text
                x="10"
                y="60"
                fill="white"
                fontSize="48"
                fontFamily="'Eyesome Script', cursive"
                style={{ fontStyle: 'italic' }}
              >
                bonjour
              </text>
            </svg>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                A LITTLE ABOUT ME
              </h2>

              <div className="w-20 border-t-2 border-white"></div>

              <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                <p>
                  Ever since I discovered programming, it has been an exciting journey
                  of creativity and problem-solving. I started my path in front-end
                  development, and I truly enjoy seeing my progress, building
                  engaging interfaces, and creating designs that impress and bring
                  joy to users.
                </p>

                <p>
                  Alongside front-end, I also work on back-end development using{' '}
                  <span className="text-white font-medium">Django</span> and{' '}
                  <span className="text-white font-medium">MySQL</span>. I am eager
                  to continue growing my skills in both front-end and back-end
                  technologies to build full-stack, impactful web applications.
                </p>

                {/* <p>
                  I have a solid foundation in languages like{' '}
                  <span className="text-white font-medium">C, C++, and JavaScript</span>.
                  I am always eager to learn new frameworks and technologies to enhance
                  my capabilities. To fuel this passion, I've pursued certifications
                  from renowned platforms like{' '}
                  <span className="text-white font-medium">freeCodeCamp</span>, validating
                  my knowledge and commitment to continuous improvement.
                </p> */}
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                <p>
                  I enjoy applying my knowledge in real-world projects using{' '}
                  <span className="text-white font-medium">HTML, CSS, and Vanilla JavaScript</span>, along
                  with modern libraries such as{' '}
                  <span className="text-white font-medium">React.js</span>.
                </p>

                {/* <p>
                  My goal is to develop impactful, user-friendly web applications
                  while continuously growing as a developer and exploring new
                  technologies that allow me to bring creative ideas to life.
                </p> */}
              </div>

              <div className="pt-8 space-y-6">
                <h3 className="text-2xl font-light tracking-wide">LET'S CONNECT</h3>
                <div className="w-20 border-t-2 border-white"></div>
                <p className="text-gray-300 text-lg">
                  Feel free to <span className="text-white">reach out</span> and connect with me!
                </p>

                <div className="flex gap-6">
                  <a
                    href="https://github.com/fouaouri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 border border-white hover:bg-white hover:text-black transition-all duration-300 group"
                    aria-label="GitHub Profile"
                  >
                    <Github size={28} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/fatima-ezzahra-ouaourikt-5a7139274/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 border border-white hover:bg-white hover:text-black transition-all duration-300 group"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={28} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => onNavigate('skills')}
        className="absolute bottom-12 animate-bounce hover:scale-110 transition-transform"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={48} strokeWidth={1} />
      </button>
    </div>
  );
}

export default About;
