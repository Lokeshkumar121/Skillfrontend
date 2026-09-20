import React from "react";
import { CheckCircle2 } from "lucide-react";

const skillGroups = [
  {
    title: "Technical Skills",
    description: "The technologies and engineering fundamentals behind your role.",
    skills: [
      "Programming",
      "Data Structures",
      "Algorithms",
      "Databases",
      "APIs",
      "Git & GitHub",
    ],
  },
  {
    title: "Project Skills",
    description: "The ability to turn your knowledge into working applications.",
    skills: [
      "Project Planning",
      "Architecture Basics",
      "Frontend Development",
      "Backend Development",
      "Deployment",
      "Documentation",
    ],
  },
  {
    title: "Professional Skills",
    description: "Skills that help you communicate and work effectively.",
    skills: [
      "Communication",
      "Problem Solving",
      "Teamwork",
      "Time Management",
      "Presentation",
      "Professionalism",
    ],
  },
];

const CareerSkills = () => {
  return (
    <section className="bg-slate-50 px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600">
            What To Build
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            A Career Needs More Than One Skill
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
            Technical knowledge is important, but projects, communication and
            problem-solving also contribute to professional readiness.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-xl font-semibold text-slate-950">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {group.description}
              </p>

              <div className="mt-6 space-y-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3"
                  >
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium text-slate-700">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSkills;