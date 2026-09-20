import React from "react";
import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

const paths = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Learn frontend, backend, databases, APIs and deployment to build complete web applications.",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "Databases"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Build modern mobile applications and understand the complete mobile development workflow.",
    skills: ["React Native", "APIs", "Authentication", "Firebase", "App Deployment"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description:
      "Build a foundation in Python, data handling, machine learning and practical AI applications.",
    skills: ["Python", "Data", "ML", "AI APIs", "Projects"],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description:
      "Develop skills for working with data, analysis, visualization and data-driven applications.",
    skills: ["Python", "SQL", "Statistics", "Data Analysis", "Visualization"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Understand deployment, cloud infrastructure, application hosting and development workflows.",
    skills: ["Linux", "Git", "Docker", "Cloud", "CI/CD"],
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    description:
      "Explore security fundamentals, web security, networks and secure application development.",
    skills: ["Networking", "Linux", "Web Security", "Security Tools", "Projects"],
  },
];

const CareerPaths = () => {
  return (
    <section
      id="career-paths"
      className="bg-slate-50 px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600">
            Career Paths
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Choose a Direction That Matches Your Goals
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
            You don't need to learn every technology. Start with a clear
            direction and build the skills that support your target career.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {paths.map((path) => {
            const Icon = path.icon;

            return (
              <div
                key={path.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-950">
                  {path.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {path.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {path.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareerPaths;