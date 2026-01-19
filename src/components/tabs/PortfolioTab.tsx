import { ExternalLink, Github, Globe } from "lucide-react";

interface Project {
  title: string;
  image: string;
  description: string;
  features: string[];
  technologies: string[];
  liveLink: string;
  clientCode: string;
  serverCode: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Fly-Book",
    image: "https://i.ibb.co.com/LhDb30kd/Screenshot-2026-01-19-at-5-34-18-PM.jpg",
    description:
      "A full-stack social learning platform with social networking, e-learning, marketplace, jobs, and community features.",
    features: [
      "Social feed, real-time chat & notifications",
      "E-learning system with courses, videos & PDFs",
      "Multi-vendor e-commerce & seller dashboard",
      "Job board, digital library & organizations",
      "Admin dashboard with analytics & moderation",
    ],
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Firebase",
      "Socket.io",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    liveLink: "https://flybook.com.bd",
    clientCode: "https://github.com/codewithToufikul/fly-book-client",
    serverCode: "https://github.com/codewithToufikul/fly-book-server",
    gradient: "from-indigo-500 to-purple-600",
  }
  ,
  {
    title: "Service Pro",
    description:
      "A modern service booking and management platform with real-time chat, secure payments, and interactive dashboards.",
    features: [
      "Service browsing & online booking system",
      "Secure payments via SSLCommerz",
      "Real-time chat with providers & admin",
      "User dashboard with orders & invoices",
      "CMS blogs, FAQs & work showcase",
    ],
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase",
      "Socket.io",
      "React Query",
      "Axios",
    ],
    image: "https://i.ibb.co.com/ymR71cPr/Screenshot-2026-01-19-at-5-42-38-PM.jpg",
    liveLink: "https://www.servicepro24x7.com/",
    clientCode: "https://github.com/codewithToufikul/service-pro-client",
    serverCode: "https://github.com/codewithToufikul/servies-pro-server",
    gradient: "from-emerald-500 to-teal-600",
  }
  ,
  {
    title: "Hidayah",
    description:
      "An emotion-based Quranic Du'a generator that provides personalized verses with Arabic, English, and Bengali translations.",
    features: [
      "Emotion-based Quran & Du'a generation",
      "Multi-language support (Arabic, English, Bengali)",
      "User authentication with Du'a history",
      "Responsive modern UI with glassmorphism",
    ],
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Context API",
      "Axios",
    ],
    image: "https://i.ibb.co.com/3Y45XX7T/Screenshot-2026-01-19-at-5-48-03-PM.jpg",
    liveLink: "https://hidayah-client.vercel.app/",
    clientCode: "https://github.com/codewithToufikul/hidayah-client",
    serverCode: "https://github.com/codewithToufikul/hidayah-server",
    gradient: "from-emerald-500 to-teal-600",
  }

];

const PortfolioTab = () => {
  return (
    <div className="space-y-10 animate-fade-in">
      {/* Section Title */}
      <div>
        <h2 className="section-title">Projects</h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="card-glass overflow-hidden group hover:border-primary/30 transition-all duration-500"
          >
            <div className="grid lg:grid-cols-1 gap-0">
              {/* Project Preview */}
              <div className={`bg-gradient-to-br ${project.gradient} p-1 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-16 h-16 border border-white/30 rounded-xl rotate-12" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 border border-white/30 rounded-full" />
                </div>
                <div className="relative z-10 text-center">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-t-2xl" />
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:col-span-1 p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 8).map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 8 && (
                    <span className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium">
                      +{project.technologies.length - 8} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-primary-foreground transition-all duration-300 hover:scale-105"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <ExternalLink size={14} />
                    Live Site
                  </a>
                  <a
                    href={project.clientCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    <Github size={14} />
                    Client
                  </a>
                  <a
                    href={project.serverCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    <Github size={14} />
                    Server
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioTab;
