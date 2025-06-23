import { useState } from "react"
import type { ComponentType } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Code, X } from "lucide-react"
import reactDashImage from '/src/project_icons/react_dash.png';
import studentPro from '/src/project_icons/student_progress.png'
import scriptClean from '/src/project_icons/script_clean.png'
import { 
  SiPython,
  SiPandas,
  SiNumpy,
  SiMysql
} from "react-icons/si"
import { FaMicrosoft, FaNewspaper} from "react-icons/fa";



// Type definitions
type SectionId = 'projects' | 'contact' | 'work' | 'education' | 'about' | 'skills';

type SlideDirection = 'left' | 'right' | 'up' | 'down' | 'bottom-left' | 'top-right';

interface Project {
  id: number;
  title: string;
  description: string;
  github: string;
  image: string;
  tech: string[];
}

interface WorkExperience {
  id: number;
  position: string;
  company: string;
  years: string;
  description: string;
  skills: string[];
  achievements: string[];
}

interface Skill {
  name: string;
  years: number;
}

// Skill icons mapping with proper typing
const skillIcons: Record<string, ComponentType<{ className?: string }>> = {
  "Python": SiPython,
  "SQL": SiMysql,
  "Pandas": SiPandas,
  "NumPy": SiNumpy,
  "Excel": FaMicrosoft,
  "Powerbi": FaMicrosoft
}

const projects: Project[] = [
  {
    id: 1,
    title: "Student Progress",
    description: "Full-stack shopping application with React and Node.js",
    github: "https://github.com/username/ecommerce-platform",
    image: studentPro, 
    tech: ["Python", "Streamlit"]
  },
  {
    id: 2,
    title: "React/Flask Dashboard",
    description: "A dashboard application using React and Flask.",
    github: "https://github.com/username/task-manager",
    image: reactDashImage, 
    tech: ["React", "Flask", "Python"]
  },
  {
    id: 3,
    title: "Data Cleaning Scripts",
    description: "Example of script for client.",
    github: "https://github.com/username/weather-dashboard",
    image: scriptClean,
    tech: ["Python", "Pandas"]
  },
]

const workExperience: WorkExperience[] = [
  {
    id: 1,
    position: "Data Analyst",
    company: "Tech Innovations Inc.",
    years: "Sep 2024 - Present",
    description: "Tasked for data preparation, data exploration, and data visualization for client.",
    skills: ["Python", "Excel", "Powerbi"],
    achievements: [
      "Streamlined data scripts so that dashboards can be viewed.",
      "Improved dashboard layouts for better visual experiences."
    ]
  },
  {
    id: 2,
    position: "Math Tutor",
    company: "Some College",
    years: "Feb 2019 - August 2021",
    description: "Tasksed for math instruction and front desk.",
    skills: ["Excel", "Statistics"],
    achievements: [
      "Improved students' experience creating increased participation in college's program.",
      "As an instructor for college's math accceleration program , I taught statistics and excel ."
    ]
  },
]

const skills: Skill[] = [
  { name: "Python", years: 1.5 },
  { name: "SQL", years: 1 },
  { name: "Powerbi", years: 0.6 },
  { name: "Excel", years: 2 },
]

// Component interfaces
interface SlideOverlayProps {
  isVisible: boolean;
  direction: SlideDirection;
  onClose: () => void;
  children: React.ReactNode;
}

function ProjectsGrid() {
  const featuredProjects = projects.slice(0, 3);
  
  return (
    <div className="h-full p-4">
      <h2 className="text-2xl font-bold text-slate-100 mb-4 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 h-[calc(100%-3rem)]">
        {featuredProjects.map((project) => (
          <div key={project.id} className="bg-slate-700 border border-slate-600 hover:border-blue-400 transition-colors duration-300 group overflow-hidden">
            <div className="h-24 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <img src={project.image} alt={project.title} /> 
              </div>
            </div>
            
            <div className="p-3 flex flex-col justify-between h-[calc(100%-6rem)]">
              <div>
                <h3 className="text-sm font-semibold text-slate-100 mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-300 mb-3 line-clamp-2">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {project.tech.slice(0, 2).map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-slate-600 text-slate-200 text-xs border border-slate-500"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 2 && (
                  <span className="px-2 py-1 bg-slate-600 text-slate-400 text-xs border border-slate-500">
                    +{project.tech.length - 2}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ContactSection() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <h2 className="text-xl font-bold text-slate-100 mb-6">Contact</h2>
      <div className="space-y-3 w-full max-w-[200px]">
        <Button
          variant="outline"
          size="sm"
          className="w-full bg-slate-800 border-slate-600 text-slate-100 hover:bg-slate-700 hover:border-blue-400 text-xs"
          onClick={() => window.open('https://github.com/username', '_blank')}
        >
          <Github className="w-3 h-3 mr-2" />
          GitHub
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="w-full bg-slate-800 border-slate-600 text-slate-100 hover:bg-slate-700 hover:border-blue-400 text-xs"
          onClick={() => window.open('https://linkedin.com/in/username', '_blank')}
        >
          <Linkedin className="w-3 h-3 mr-2" />
          LinkedIn
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="w-full bg-slate-800 border-slate-600 text-slate-100 hover:bg-slate-700 hover:border-red-700 text-xs"
          onClick={() => window.open('https://linkedin.com/in/username', '_blank')}
        >
          <FaNewspaper className="w-3 h-3 mr-2" />
          Resume
        </Button>
      </div>
    </div>
  )
}

function WorkExperience() {
  return (
    <div className="h-full p-4">
      <h2 className="text-xl font-bold text-slate-100 mb-4 text-center">Work Experience</h2>
      <div className="grid grid-cols-1 gap-3 h-[calc(100%-3rem)]">
        {workExperience.slice(0, 2).map((work) => (
          <div key={work.id} className="bg-slate-700 border border-slate-600 hover:border-green-400 transition-colors duration-300 rounded-lg overflow-hidden">
            <div className="p-3 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-sm font-semibold text-slate-100 mb-1 line-clamp-1">
                  {work.position}
                </h3>
                <p className="text-xs text-slate-300 mb-1 line-clamp-1">
                  {work.company}
                </p>
                <p className="text-xs text-slate-400 mb-3">
                  {work.years}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {work.skills.slice(0, 3).map((skill, index) => {
                  const IconComponent = skillIcons[skill] || Code;
                  return (
                    <div key={index} className="flex items-center gap-1 px-2 py-1 bg-slate-600 text-slate-200 text-xs rounded border border-slate-500">
                      <IconComponent className="w-3 h-3" />
                      <span>{skill}</span>
                    </div>
                  );
                })}
                {work.skills.length > 3 && (
                  <span className="px-2 py-1 bg-slate-600 text-slate-400 text-xs rounded border border-slate-500">
                    +{work.skills.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Education() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-5">
      <div className="text-center">
        <div className="w-22 h-32 flex items-center justify-center mb-4 mx-auto">
          <img 
            className="text-sm font-bold text-slate-100" 
            src="https://conferences.ucla.edu/wp-content/uploads/2021/01/uclalogo.png" 
            alt="UCLA Logo"
          />
        </div>
        <h3 className="text-base text-sm font-semibold text-slate-100">
          University of California Los Angeles
        </h3>
        <p className="text-sm text-slate-300 mb-1">
          Bachelor of Arts Economics
        </p>
        <p className="text-sm text-slate-400">
          June 2023
        </p>
      </div>
    </div>
  )
}

function AboutSection() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <h2 className="text-md font-bold mb-1 text-slate-100">About Me</h2>
    </div>
  )
}

function SkillsSection() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <h2 className="text-md font-bold mb-1 text-slate-100">Skills</h2>
      <p className="text-xs opacity-80 text-slate-300"></p>
    </div>
  )
}

function SlideOverlay({ isVisible, direction, onClose, children }: SlideOverlayProps) {
  if (!isVisible) return null;

  const getSlideClass = (): string => {
    switch (direction) {
      case 'left':
        return 'animate-slide-in-left';
      case 'right':
        return 'animate-slide-in-right';
      case 'up':
        return 'animate-slide-in-up';
      case 'down':
        return 'animate-slide-in-down';
      case 'bottom-left':
        return 'animate-slide-in-bottom-left';
      case 'top-right':
        return 'animate-slide-in-top-right';
      default:
        return 'animate-slide-in-left';
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900 z-50 overflow-auto">
      <div className={`min-h-screen ${getSlideClass()}`}>
        <button
          onClick={onClose}
          className="fixed top-4 left-4 z-10 bg-orange-700 text-slate-100 p-2 rounded hover:bg-slate-700 transition-colors"
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
}

function App() {
  const [expandedSection, setExpandedSection] = useState<SectionId | null>(null)
  
  const handleSectionClick = (sectionId: SectionId) => {
    setExpandedSection(sectionId)
  }

  const handleClose = () => {
    setExpandedSection(null)
  }

  const getSlideDirection = (sectionId: SectionId): SlideDirection => {
    switch (sectionId) {
      case 'projects':
        return 'left';
      case 'contact':
        return 'right';
      case 'work':
        return 'bottom-left';
      case 'education':
        return 'up';
      case 'about':
        return 'up';
      case 'skills':
        return 'top-right';
      default:
        return 'left';
    }
  };

  // Expanded Projects View
  if (expandedSection === "projects") {
    return (
      <SlideOverlay isVisible={true} direction={getSlideDirection('projects')} onClose={handleClose}>
        <div className="p-8">
          <div className="max-w-6xl mx-auto pt-16">
            <h1 className="text-5xl font-bold mb-8 text-slate-100">
              My Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="bg-slate-800 border border-slate-600 hover:border-blue-400 transition-colors duration-300">
                  <CardContent className="relative p-6">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 bg-orange-700 p-5 text-white hover:text-blue-400 hover:bg-white duration-300"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      Source
                    </Button>
                    <h3 className="text-2xl font-semibold text-slate-100 mb-3 mt-8">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-700 text-slate-200 text-sm rounded border border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </SlideOverlay>
    )
  }

  // Expanded Work Experience View
  if (expandedSection === "work") {
    return (
      <SlideOverlay isVisible={true} direction={getSlideDirection('work')} onClose={handleClose}>
        <div className="p-8">
          <div className="max-w-6xl mx-auto pt-16">
            <h1 className="text-5xl font-bold mb-8 text-slate-100">
              Work Experience
            </h1>
            <div className="space-y-8">
              {workExperience.map((work) => (
                <Card key={work.id} className="bg-slate-800 border border-slate-600 hover:border-green-400 transition-colors duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-semibold text-slate-100 mb-2">
                          {work.position}
                        </h3>
                        <p className="text-lg text-slate-300 mb-1">
                          {work.company}
                        </p>
                        <p className="text-slate-400">
                          {work.years}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {work.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-slate-100 mb-4">Technologies & Skills</h4>
                      <div className="flex flex-wrap gap-3">
                        {work.skills.map((skill, index) => {
                          const IconComponent = skillIcons[skill] || Code;
                          return (
                            <div key={index} className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-slate-200 rounded-lg border border-slate-600 hover:border-green-400 transition-colors">
                              <IconComponent className="w-4 h-4" />
                              <span className="text-sm font-medium">{skill}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-100 mb-4">Key Achievements</h4>
                      <ul className="space-y-2">
                        {work.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-3 text-slate-300">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </SlideOverlay>
    )
  }

  // Expanded About View
  if (expandedSection === "about") {
    return (
      <SlideOverlay isVisible={true} direction={getSlideDirection('about')} onClose={handleClose}>
        <div className="p-8">
          <div className="max-w-4xl mx-auto pt-16">
            <h1 className="text-5xl font-bold mb-6 text-slate-100">
              Some Name
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-300 leading-relaxed mb-6">
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
              </p>
              <p className="text-slate-300 leading-relaxed">
                Also I was an assistant for teaching math class. 
              </p>
            </div>
          </div>
        </div>
      </SlideOverlay>
    )
  }

  if (expandedSection === "skills") {
    return (
      <SlideOverlay isVisible={true} direction={getSlideDirection('skills')} onClose={handleClose}>
        <div className="p-8">
          <div className="max-w-4xl mx-auto pt-16">
            <h1 className="text-5xl font-bold mb-8 text-slate-100">
              Skills
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {skills.map((skill, index) => {
                const IconComponent = skillIcons[skill.name] || Code;
                return (
                  <div key={index} className="bg-slate-800 border border-slate-600 p-8 rounded-lg relative">
                    <div className="absolute top-4 right-4 bg-orange-700 text-slate-100 px-3 py-1 rounded text-sm font-medium">
                      {skill.years} Years
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3 mt-2">
                        <IconComponent className="w-6 h-6 text-slate-300 mt-2" />
                        <span className="text-lg font-semibold text-slate-100">{skill.name}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SlideOverlay>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-100 mb-4">Some Name</h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-4 gap-4 max-w-6xl mx-auto lg:h-[700px]">
        <div
          className="bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-blue-400 text-slate-100 shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-xl sm:col-span-2 lg:col-span-3 lg:row-span-2 rounded-lg overflow-hidden min-h-[400px] lg:min-h-0"
          onClick={() => handleSectionClick("projects")}
        >
          <ProjectsGrid />
        </div>

        <div
          className="bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-blue-400 text-slate-100 shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-xl sm:col-span-2 lg:col-span-1 lg:col-start-4 lg:row-span-2 rounded-lg min-h-[300px] lg:min-h-0"
          onClick={() => handleSectionClick("contact")}
        >
          <ContactSection />
        </div>

        <div
          className="bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-green-400 text-slate-100 shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-xl sm:col-span-2 lg:col-span-2 lg:col-start-1 lg:row-start-3 lg:row-span-2 rounded-lg min-h-[300px] lg:min-h-0"
          onClick={() => handleSectionClick("work")}
        >
          <WorkExperience />
        </div>

        <div
          className="bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-purple-400 text-slate-100 shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-xl sm:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-3 lg:row-span-2 rounded-lg min-h-[250px] lg:min-h-0"
          onClick={() => handleSectionClick("education")}
        >
          <Education />
        </div>

        <div
          onClick={() => handleSectionClick("about")}
          className="bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-orange-400 text-slate-100 shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-xl sm:col-span-1 lg:col-start-4 lg:row-start-3 flex flex-col justify-center items-center text-center p-4 rounded-lg min-h-[200px] lg:min-h-0"
        >
          <AboutSection />
        </div>

        <div
          onClick={() => handleSectionClick("skills")}
          className="bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-cyan-400 text-slate-100 shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-xl sm:col-span-1 lg:col-start-4 lg:row-start-4 flex flex-col justify-center items-center text-center p-4 rounded-lg min-h-[200px] lg:min-h-0"
        >
          <SkillsSection />
        </div>
      </div>
    </div>
  )
}

export default App