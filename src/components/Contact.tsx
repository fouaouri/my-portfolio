import { ArrowUp, Mail, MapPin } from "lucide-react";
import emailjs from "emailjs-com";
import { useRef } from "react";

interface ContactProps {
  onNavigate: (section: string) => void;
}

function Contact({ onNavigate }: ContactProps) {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
	e.preventDefault();
	if (!formRef.current) return;
  
	try {
	  const result = await emailjs.sendForm(
		"service_4ep4c04",
		"template_kd96cwb",
		formRef.current,
		"fAJlbqiUqGkkJG9aO"
	  );
	  console.log("Email sent:", result);
	  alert("Your message has been sent 🤍");
	  formRef.current.reset();
	} catch (error: any) {
	  console.error("EmailJS error:", error);
	  alert(`Oops! Something went wrong: ${error.text || error}`);
	}
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 relative">
      <div className="max-w-5xl w-full space-y-16">
        <div className="space-y-8">
          <div className="relative">
            <svg viewBox="0 0 600 100" className="w-full max-w-lg">
              <path
                d="M 50 50 L 150 50 L 200 20 L 250 80 L 300 40 L 350 60 L 400 50 L 550 50"
                stroke="white"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
            CONTACT
          </h2>

          <div className="w-32 border-t-2 border-white"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <h3 className="text-2xl font-light tracking-wide">Get in Touch</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            <div className="space-y-6 pt-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 border border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase mb-1">Email</p>
                  <p className="text-lg">fzouaourikt@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 border border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase mb-1">Location</p>
                  <p className="text-lg">Available Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="space-y-6">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm uppercase text-gray-400">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full bg-transparent border border-white p-4 focus:outline-none focus:border-gray-400 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm uppercase text-gray-400">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full bg-transparent border border-white p-4 focus:outline-none focus:border-gray-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm uppercase text-gray-400">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-transparent border border-white p-4 focus:outline-none focus:border-gray-400 transition-colors resize-none"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-4 px-8 text-lg tracking-wider hover:bg-gray-200 transition-colors duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>

        <div className="pt-16 text-center border-t border-white/20">
          <p className="text-gray-400 tracking-wider">
            2025/2026 PORTFOLIO - Fatima Ezzahra Ouaourikt
          </p>
        </div>
      </div>

      <button
        onClick={() => onNavigate("hero")}
        className="absolute bottom-12 hover:scale-110 transition-transform"
        aria-label="Back to top"
      >
        <ArrowUp size={48} strokeWidth={1} />
      </button>
    </div>
  );
}

export default Contact;
