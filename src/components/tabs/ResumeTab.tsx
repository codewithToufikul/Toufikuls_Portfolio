import { GraduationCap, Award, Briefcase, Code, Wrench } from "lucide-react";
import { useEffect, useState, useRef } from "react";

type SkillLevel = "Advanced" | "Intermediate" | "Beginner";

interface Skill {
  name: string;
  level: SkillLevel;
}

const skillLevelMap: Record<SkillLevel, number> = {
  Advanced: 100,
  Intermediate: 70,
  Beginner: 40,
};

const frontendSkills: Skill[] = [
  { name: "React.js", level: "Advanced" },
  { name: "JavaScript (ES6+)", level: "Advanced" },
  { name: "HTML5 & CSS3", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "Next.js", level: "Intermediate" },
  { name: "Redux", level: "Intermediate" },
  { name: "React Native", level: "Beginner" },
];

const backendSkills: Skill[] = [
  { name: "Node.js", level: "Intermediate" },
  { name: "Express.js", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "REST API", level: "Intermediate" },
  { name: "Firebase", level: "Intermediate" },
  { name: "PostgreSQL", level: "Beginner" },
  { name: "JWT Authentication", level: "Intermediate" },
];

const toolCategories = {
  "Development": ["VS Code", "Chrome DevTools", "WebStorm", "Git"],
  "Deployment": ["Vercel", "Firebase Hosting", "Netlify", "Render", "Heroku", "AWS", "DigitalOcean", "Vps"],
  "Design": ["Figma", "Canva", "Adobe XD"],
  "Version Control": ["GitHub", "Git"],
};

const ResumeTab = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getSkillBarColor = (category: "frontend" | "backend") => {
    return category === "frontend"
      ? "bg-gradient-to-r from-primary to-blue-400"
      : "bg-gradient-to-r from-emerald-500 to-teal-400";
  };

  return (
    <div className="space-y-10 animate-fade-in" ref={sectionRef}>
      {/* Section Title */}
      <div>
        <h2 className="section-title">Resume</h2>
      </div>

      {/* Education & Experience Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Education */}
        <div className=" w-full">
          <div className="w-full">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="text-primary" size={20} />
              </div>
              Education
            </h3>

            <div className="space-y-4">
              <div className="card-glass p-5 relative border-l-4 border-l-primary">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  2023 - Present
                </span>
                <h4 className="text-lg font-bold text-foreground mt-3">Diploma in Engineering</h4>
                <p className="text-primary font-medium text-sm">Computer Science & Technology</p>
                <p className="text-muted-foreground text-sm mt-2">Currently in 7th Semester</p>
              </div>
            </div>
          </div>

          <div className="w-full mt-6">
            <h3 className="text-xl w-full font-bold mb-6 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10">
                <Award className="text-emerald-400" size={20} />
              </div>
              Certifications
            </h3>

            <div className="w-full">
              <div className="card-glass p-5 relative border-l-4 border-l-emerald-500">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                  2023
                </span>
                <h4 className="text-lg font-bold text-foreground mt-3">
                  Complete Web Development Course
                </h4>
                <p className="text-emerald-400 font-medium text-sm mb-2">
                  Programming Hero
                </p>
                <p className="text-muted-foreground text-sm">
                  Comprehensive MERN stack curriculum covering React, Node.js, MongoDB, and deployment
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Experience */}
        <div className="w-full">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10">
              <Briefcase className="text-blue-400" size={20} />
            </div>
            Experience
          </h3>

          <div className="space-y-4">
            <div className="card-glass p-5 relative border-l-4 border-l-blue-500">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">
                  2024 - Present
                </span>
              </div>
              <h4 className="text-lg font-bold text-foreground">MERN Stack Developer</h4>
              <p className="text-blue-400 font-medium text-sm mb-3">NexaTech</p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Developed and maintained responsive web applications using React.js, Node.js, Express.js, and MongoDB</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Built RESTful APIs and integrated third-party services to enhance application functionality</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Collaborated with cross-functional teams to deliver features on schedule and improve user experience</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Implemented authentication and authorization using JWT and Firebase Auth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Certificates */}


      {/* Skills */}
      <div>
        <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Code className="text-primary" size={20} />
          </div>
          Technical Skills
        </h3>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Frontend Skills */}
          <div className="card-glass p-6">
            <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Frontend Development</h4>
            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground font-medium text-sm">{skill.name}</span>
                    <span className="text-primary text-xs font-medium px-2 py-1 rounded bg-primary/10">
                      {skill.level}
                    </span>
                  </div>
                  <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getSkillBarColor("frontend")} transition-all duration-1000 ease-out rounded-full`}
                      style={{
                        width: isVisible ? `${skillLevelMap[skill.level]}%` : "0%",
                        transitionDelay: `${index * 80}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="card-glass p-6">
            <h4 className="text-sm font-semibold text-emerald-400 mb-4 uppercase tracking-wider">Backend Development</h4>
            <div className="space-y-4">
              {backendSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground font-medium text-sm">{skill.name}</span>
                    <span className="text-emerald-400 text-xs font-medium px-2 py-1 rounded bg-emerald-500/10">
                      {skill.level}
                    </span>
                  </div>
                  <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getSkillBarColor("backend")} transition-all duration-1000 ease-out rounded-full`}
                      style={{
                        width: isVisible ? `${skillLevelMap[skill.level]}%` : "0%",
                        transitionDelay: `${index * 80}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tools & Technologies */}
      <div>
        <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-purple-500/10">
            <Wrench className="text-purple-400" size={20} />
          </div>
          Tools & Technologies
        </h3>

        <div className="card-glass p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(toolCategories).map(([category, tools]) => (
              <div key={category}>
                <h4 className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-lg bg-secondary/50 text-foreground text-sm font-medium border border-border/50 hover:border-primary/30 transition-colors duration-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTab;