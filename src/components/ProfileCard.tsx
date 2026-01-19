import { Download, Mail, Linkedin, Github, Globe, Twitter, Send } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const ProfileCard = () => {
  return (
    <div className="max-h-screen flex flex-col">
      {/* Profile Image Section */}
      <div className="relative w-full h-[350px] md:h-[500px] aspect-[4/5] overflow-hidden">
        <img
          src="https://i.ibb.co.com/FLs0P9rb/IMG-0927.jpg"
          alt="Toufikul Islam"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />

        {/* Shadow Overlay for Name */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Name & Title on Image */}
        <div style={{
          position: "absolute",
          bottom: "6px",
          left: "0",
          right: "0",
          backgroundColor: "rgba(0,0,0,0.35)", // semi-transparent
          backdropFilter: "blur(1px)",        // ⭐ magic
          WebkitBackdropFilter: "blur(1px)",  // Safari support
          color: "white",
          padding: "10px",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          textTransform: "uppercase",
          letterSpacing: "2px",
          borderRadius: "4px",
          boxShadow: "0 0 10px rgba(0,0,0,0.4)",
        }}
          className="absolute bottom-6 left-0 right-0 text-center px-4">
          <h1 className="text-xl md:text-3xl font-bold text-white tracking-wide mb-1">TOUFIKUL ISLAM</h1>
          <div className="flex items-center justify-center gap-2">
            <span className="h-[1px] w-4 bg-primary"></span>
            <p className="text-white/80 font-semibold text-[14px] md:text-[16px] uppercase tracking-widest">
              <span className="text-white">
                <Typewriter
                  words={[
                    "Full Stack Developer",
                    "MERN Stack Developer",
                    "React & Next.js Developer",
                    "Mobile App Developer",
                  ]}

                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </p>
            <span className="h-[1px] w-4 bg-primary"></span>
          </div>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="flex justify-center gap-4 py-6 border-b border-white/5">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">
          <Github size={20} />
        </a>
        <a href="#" className="text-white/60 hover:text-primary transition-colors">
          <Twitter size={20} />
        </a>
        <a href="#" className="text-white/60 hover:text-primary transition-colors">
          <Globe size={20} />
        </a>
      </div>

      {/* CTA Buttons - Two Column Grid */}
      <div className="grid grid-cols-2 mt-auto">
        <a
          href="#"
          className="flex flex-col items-center justify-center gap-2 py-6 border-r border-white/5 hover:bg-white/5 transition-all group"
        >
          <div className="p-2 rounded-full bg-white/5 text-white/40 group-hover:text-primary transition-colors">
            <Download size={18} />
          </div>
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">Download CV</span>
        </a>
        <a
          href="#contact"
          className="flex flex-col items-center justify-center gap-2 py-6 hover:bg-white/5 transition-all group"
        >
          <div className="p-2 rounded-full bg-white/5 text-white/40 group-hover:text-primary transition-colors">
            <Send size={18} />
          </div>
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">Contact Me</span>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
