import React from "react";
import {
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  FileText,
  GraduationCap,
  Lightbulb,
  LockKeyhole,
  Smartphone,
  Terminal,
  Workflow,
  Cpu,
  Globe2,
  Layers3,
  BookOpen,
  Users,
  Target,
  Blocks,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Build responsive and scalable websites and web applications.",
    icon: Code2,
  },
  {
    title: "Mobile App Development",
    description:
      "Plan and develop Android and iOS applications with modern technologies.",
    icon: Smartphone,
  },
  {
    title: "AI & Machine Learning",
    description:
      "Get guidance for AI, ML models, automation and intelligent applications.",
    icon: BrainCircuit,
  },
  {
    title: "Data Science",
    description:
      "Work on data analysis, visualization, prediction and practical data projects.",
    icon: Database,
  },
  {
    title: "Python Projects",
    description:
      "Develop Python-based academic, automation and real-world projects.",
    icon: Terminal,
  },
  {
    title: "Java Projects",
    description:
      "Build Java applications with proper project structure and implementation.",
    icon: Workflow,
  },
  {
    title: "MERN Stack",
    description:
      "Plan full-stack applications using MongoDB, Express, React and Node.js.",
    icon: Layers3,
  },
  {
    title: "IoT Projects",
    description:
      "Get guidance for connected devices, sensors and IoT applications.",
    icon: Cpu,
  },
  {
    title: "Blockchain & Web3",
    description:
      "Understand blockchain concepts and build practical Web3 projects.",
    icon: Blocks,
  },
  {
    title: "Cyber Security",
    description:
      "Plan academic and practical cybersecurity projects with the right approach.",
    icon: LockKeyhole,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Learn deployment, cloud infrastructure and modern development workflows.",
    icon: Cloud,
  },
  {
    title: "Final Year Projects",
    description:
      "Get complete guidance for selecting, planning and completing your final-year project.",
    icon: GraduationCap,
  },
  {
    title: "Mini Projects",
    description:
      "Find manageable project ideas suitable for academic learning and practice.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Project Consultation",
    description:
      "Discuss your idea and get direction before starting development.",
    icon: MessageCircleIcon,
  },
  {
    title: "Career Guidance",
    description:
      "Understand the skills and project experience needed for your career path.",
    icon: Target,
  },
  {
    title: "Internship Guidance",
    description:
      "Prepare your projects, skills and profile for internship opportunities.",
    icon: Users,
  },
  {
    title: "Placement Preparation",
    description:
      "Get structured guidance for technical preparation and placement readiness.",
    icon: Globe2,
  },
  {
    title: "DSA & Interview Preparation",
    description:
      "Build a practical preparation path for coding and technical interviews.",
    icon: ShieldCheck,
  },
  {
    title: "Project Documentation",
    description:
      "Get guidance for reports, documentation, diagrams and project presentation.",
    icon: FileText,
  },
  {
    title: "Project Ideas & Tutorials",
    description:
      "Explore project concepts, technology choices and learning resources.",
    icon: BookOpen,
  },
];

function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
    </svg>
  );
}

const ConsultationServices = () => {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            What Can We Help With?
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Guidance Across
            <span className="text-blue-600"> Multiple Technology Domains</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
            Whether you have a project idea, an unfinished project or simply
            do not know where to start, choose the area where you need help.
          </p>
        </div>

        {/* Services */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-900/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-base font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConsultationServices;