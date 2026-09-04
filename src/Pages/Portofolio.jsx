import React, { useState, useEffect } from "react";
import { 
  Code, 
  Boxes, 
  ExternalLink, 
  Github, 
  Cloud, 
  Container, 
  Cpu, 
  ShieldCheck, 
  Terminal, 
  Server,
  Database,
  Globe,
  CheckCircle2
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Projects fully translated into English
const initialProjects = [
  {
    id: 1,
    title: "AWS Infrastructure with Terraform & CI/CD",
    description: "Complete cloud infrastructure provisioning (VPC, Subnets, Internet Gateway, Security Groups, EC2) as IaC using Terraform. Automated CI/CD pipeline via GitHub Actions with zero-cost simulation using Docker and LocalStack.",
    technologies: ["Terraform", "AWS", "Docker", "LocalStack", "GitHub Actions"],
    github: "https://github.com",
    demo: "#",
  },
  {
    id: 2,
    title: "FaaS Platform “Mini Lambda” (On-Demand Code Execution)",
    description: "Multi-client server executing arbitrary code received via TCP sockets. Implementation of a synchronized priority queue using mutexes and semaphores, with resource isolation via Linux namespaces and cgroups.",
    technologies: ["C", "Python", "TCP Sockets", "Docker", "Linux Namespaces", "cgroups"],
    github: "https://github.com",
    demo: "#",
  },
  {
    id: 3,
    title: "3-Tier Cloud Architecture (Management System)",
    description: "RESTful API (Spring Boot) hosted on Render, PostgreSQL database managed via Supabase (DBaaS), and frontend distributed on Vercel Edge Network with continuous deployment via GitHub.",
    technologies: ["Spring Boot", "Supabase", "Render", "Vercel", "PostgreSQL", "GitHub"],
    github: "https://github.com",
    demo: "#",
  },
  {
    id: 4,
    title: "Containerized ERP Deployment",
    description: "Deployment and configuration of an Odoo-based ERP system within a containerized Docker environment, including database simulation for an ICT enterprise.",
    technologies: ["Docker", "Odoo", "PostgreSQL", "Linux"],
    github: "https://github.com",
    demo: "#",
  }
];

// All skills extracted from CV, translated and categorized in English
const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Java", "JavaScript", "TypeScript", "Python", "C", "C++"]
  },
  {
    title: "Cloud & IaC",
    icon: Cloud,
    skills: ["Terraform", "AWS (VPC, EC2, RDS, Security Groups)", "LocalStack"]
  },
  {
    title: "DevOps & Deployment",
    icon: Container,
    skills: ["Docker", "Kubernetes", "GitHub Actions (CI/CD)", "Render (PaaS)", "Vercel"]
  },
  {
    title: "Frameworks & Backend",
    icon: Server,
    skills: ["Spring Boot", "Node.js"]
  },
  {
    title: "Web Development & APIs",
    icon: Boxes,
    skills: ["Angular", "HTML / CSS", "Tailwind CSS", "RESTful APIs", "CORS"]
  },
  {
    title: "System & Network Programming",
    icon: Terminal,
    skills: ["TCP/UDP Sockets", "IPC", "POSIX Threads (pthreads)", "fork/exec", "POSIX System Calls"]
  },
  {
    title: "Concurrency & Synchronization",
    icon: Cpu,
    skills: ["Mutexes", "Semaphores", "Condition Variables", "Synchronized Queues"]
  },
  {
    title: "Security & Isolation",
    icon: ShieldCheck,
    skills: ["Linux Namespaces", "cgroups", "Sandboxing", "Resource Limits (setrlimit)"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "Supabase (DBaaS)", "MySQL", "SQL"]
  },
  {
    title: "Tools & Systems",
    icon: Terminal,
    skills: ["Git", "GitHub", "Linux (Red Hat, Kali Linux)", "VS Code", "Google Colab", "Odoo"]
  },
  {
    title: "Soft Skills & Languages",
    icon: Globe,
    skills: [
      "Problem Solving", 
      "Fast Learner", 
      "Adaptability", 
      "Teamwork", 
      "Analytical Mindset", 
      "Arabic (Native)", 
      "English (B2)", 
      "French (B2)"
    ]
  }
];

const Portofolio = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    AOS.init({ once: false });
    const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    setProjects(storedProjects.length > 0 ? storedProjects : initialProjects);
  }, []);

  const tabs = [
    { id: "projects", label: "Projects", icon: Code },
    { id: "skills", label: "Skills", icon: Boxes },
  ];

  return (
    <section className="py-16 px-[5%] sm:px-[10%] text-white min-h-screen" id="Portofolio">
      {/* Title Header */}
      <div className="text-center mb-10">
        <h2 
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
          data-aos="zoom-in-up"
          data-aos-duration="600"
        >
          Portfolio Showcase
        </h2>
        <p 
          className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          Explore my journey through engineering projects and technical skill sets.
        </p>
      </div>

      {/* Navigation Tabs Bar */}
      <div 
        className="max-w-xl mx-auto mb-12"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="bg-[#0b0c1b]/80 border border-white/10 p-2 rounded-2xl backdrop-blur-xl grid grid-cols-2 gap-2 shadow-2xl">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#2a245c] to-[#1e1b4b] text-white border border-[#a855f7]/40 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? "text-[#a855f7]" : ""}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* PROJECTS TAB */}
        {activeTab === "projects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div 
                key={project.id || index}
                className="group relative bg-gray-900/40 border border-white/10 rounded-2xl overflow-hidden hover:border-[#a855f7]/50 transition-all duration-500 hover:-translate-y-2 p-6 flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#a855f7] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-[#6366f1]/10 text-[#a855f7] border border-[#6366f1]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4 pt-6 mt-4 border-t border-white/10">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-[#a855f7] hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" /> Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SKILLS TAB */}
        {activeTab === "skills" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const CategoryIcon = category.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-900/40 border border-white/10 rounded-2xl p-6 space-y-4 hover:border-[#a855f7]/50 transition-all duration-300 flex flex-col justify-between"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                      <div className="p-2.5 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/20 text-[#a855f7]">
                        <CategoryIcon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {category.skills.map((skill, i) => (
                        <span 
                          key={i}
                          className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-[#a855f7]/40 transition-colors flex items-center gap-1.5"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#a855f7]" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portofolio;