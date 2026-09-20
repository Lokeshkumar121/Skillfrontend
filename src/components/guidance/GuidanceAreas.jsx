import React from "react";
import {
  BookOpen,
  BriefcaseBusiness,
  Code2,
  FileText,
  GraduationCap,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";

const areas = [
  {
    icon: Lightbulb,
    title: "Project Ideas",
    description:
      "Understand which project idea matches your skills, academic requirements and interests.",
  },
  {
    icon: Code2,
    title: "Technology Guidance",
    description:
      "Choose suitable technologies, frameworks and tools instead of learning everything at once.",
  },
  {
    icon: FileText,
    title: "Project Documentation",
    description:
      "Understand project reports, documentation, presentations and other academic requirements.",
  },
  {
    icon: GraduationCap,
    title: "Final Year Guidance",
    description:
      "Get direction for planning, developing and presenting your final-year project.",
  },
  {
    icon: BookOpen,
    title: "Learning Roadmap",
    description:
      "Build a practical learning path based on your current level and your target technology.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Internship Guidance",
    description:
      "Understand what skills, projects and preparation can help you approach internship opportunities.",
  },
  {
    icon: Target,
    title: "Placement Preparation",
    description:
      "Get direction for DSA, development, projects, resume preparation and interview readiness.",
  },
  {
    icon: Users,
    title: "Career Direction",
    description:
      "Explore possible development and technology paths and understand what to focus on next.",
  },
];

const GuidanceAreas = () => {
  return (
    <section
      id="guidance-areas"
      className="bg-slate-50 px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600">
            Areas We Cover
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Guidance For Every Important Step
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
            Whether you are choosing your first project or preparing for
            placements, get direction based on what you want to achieve.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => {
            const Icon = area.icon;

            return (
              <div
                key={area.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-950">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GuidanceAreas;