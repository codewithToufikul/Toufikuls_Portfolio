import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Languages, Sparkles, Code, Smartphone, Database, Palette, Briefcase, Award, BookOpen, FolderGit2 } from "lucide-react";
import { AxiosIcon, BootstrapIcon, BunIcon, ExpressIcon, FirebaseIcon, FramerMotionIcon, GitIcon, HTMLIcon, JsIcon, JWTIcon, MaterialUiIcon, MongodbIcon, MongooseIcon, NetlifyIcon, NextIcon, NodeJsIcon, NpmIcon, PnpmIcon, PostgresqlIcon, PostmanIcon, PrismaIcon, ReactIcon, ReduxIcon, RenderIcon, RestApiIcon, ShadcnIcon, SupabaseIcon, TsIcon, TysIcon, VercelIcon, VisualStudioIcon, YarnIcon } from "../ui/skills-icon";

const skillCategories = {
  frontend: [
    { name: "HTML/CSS", icon: HTMLIcon },
    { name: "Tailwind CSS", icon: TsIcon },
    { name: "Bootstrap", icon: BootstrapIcon },
    { name: "JavaScript", icon: JsIcon },
    { name: "TypeScript", icon: TysIcon },
    { name: "React.js", icon: ReactIcon },
    { name: "Next.js", icon: NextIcon },
    { name: "Material UI", icon: MaterialUiIcon },
    { name: "Shadcn UI", icon: ShadcnIcon },
    { name: "Redux", icon: ReduxIcon },
    { name: "Axios", icon: AxiosIcon },
    { name: "Framer Motion", icon: FramerMotionIcon },
  ],
  backend: [
    { name: "Node.js", icon: NodeJsIcon },
    { name: "Express.js", icon: ExpressIcon },
    { name: "Prisma", icon: PrismaIcon },
    { name: "Mongoose", icon: MongooseIcon },
    { name: "Rest API", icon: RestApiIcon },
    { name: "JWT", icon: JWTIcon },
  ],
  database: [
    { name: "MongoDB", icon: MongodbIcon },
    { name: "PostgreSQL", icon: PostgresqlIcon },
    { name: "Firebase", icon: FirebaseIcon },
  ],
  app: [
    { name: "React Native", icon: ReactIcon },
  ],
  tools: [
    { name: "Npm", icon: NpmIcon },
    { name: "Yarn", icon: YarnIcon },
    { name: "Pnpm", icon: PnpmIcon },
    { name: "Bun", icon: BunIcon },
    { name: "Render", icon: RenderIcon },
    { name: "Netlify", icon: NetlifyIcon },
    { name: "Vercel", icon: VercelIcon },
    { name: "Supabase", icon: SupabaseIcon },
    { name: "Visual Studio Code", icon: VisualStudioIcon },
    { name: "Postman", icon: PostmanIcon },
    { name: "Git/GitHub", icon: GitIcon },
  ],
};

const tabs = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "app", label: "App" },
  { id: "tools", label: "Tools" },
];

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive and dynamic web applications using React.js and modern technologies.",
  },
  {
    icon: Smartphone,
    title: "Frontend Development",
    description: "Creating beautiful user interfaces with pixel-perfect designs and smooth animations.",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Developing robust APIs and server-side logic using Node.js, Express, and MongoDB.",
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description: "Transforming designs into functional, accessible, and responsive web experiences.",
  },
];

const stats = [
  { icon: Briefcase, label: "Experience", value: "1+", suffix: "Year" },
  { icon: Sparkles, label: "Skills", value: "45+", suffix: "Technologies" },
  { icon: FolderGit2, label: "Projects", value: "40+", suffix: "Completed" },
  { icon: BookOpen, label: "Blogs", value: "2+", suffix: "Articles" },
  { icon: Award, label: "Awards", value: "0", suffix: "Coming Soon" },
];

const AboutTab = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Section Title */}
      <div>
        <h2 className="section-title">About Me</h2>
      </div>



      {/* Bio Card */}
      <div className="card-glass p-6 lg:p-8">
        <p className="text-muted-foreground leading-relaxed text-lg">
          Hey! I'm <span className="text-primary font-semibold">Toufikul Islam</span> 👋
          A results-driven Full Stack Developer who loves turning complex problems into clean, scalable web solutions.

          I work across the stack—crafting responsive, user-focused interfaces with React, and building reliable, secure backends using Node.js, Express, and modern databases. I care deeply about performance, code quality, and building systems that are easy to maintain and scale.

          To me, great software isn't flashy—it's purposeful, reliable, and quietly powerful.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Location</p>
              <p className="text-foreground font-medium">Joypurhat, Rajshahi, Bangladesh</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Languages size={18} />
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Languages</p>
              <p className="text-foreground font-medium">Bangla, English</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="card-glass p-3 sm:p-5 text-center group hover:border-primary/40 transition-all duration-300"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 text-primary mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
              <stat.icon size={20} className="sm:w-6 sm:h-6" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-foreground mb-1">
              {stat.value}
            </div>
            <div className="text-[10px] sm:text-xs text-muted-foreground font-medium truncate px-1">
              {stat.suffix}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-xl font-bold section-title mb-6 flex items-center gap-2">
          <Sparkles className="text-primary" size={20} />
          Skills
        </h3>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-300 ${activeTab === tab.id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary/10 border border-primary/30 rounded-lg"
                  transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {skillCategories[activeTab].map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
              >
                <skill.icon size={16} className="text-primary" />
                <span className="text-foreground font-medium text-sm">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-xl section-title mb-6">My Services</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-glass p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={24} />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">{service.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTab;