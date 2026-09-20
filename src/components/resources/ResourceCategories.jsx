import React from "react";
import {
  BookOpen,
  Code2,
  FileText,
  Lightbulb,
  Target,
  BriefcaseBusiness,
  Database,
  MessageCircle,
} from "lucide-react";

const categories = [
  {
    icon: Lightbulb,
    title: "Project Ideas",
    description:
      "Explore ideas for mini projects, final-year projects and practical applications.",
  },
  {
    icon: Code2,
    title: "Development Tutorials",
    description:
      "Learn frontend, backend, mobile and full-stack development concepts.",
  },
  {
    icon: Database,
    title: "Technology Guides",
    description:
      "Understand programming languages, frameworks, databases and development tools.",
  },
  {
    icon: FileText,
    title: "Project Documentation",
    description:
      "Learn about project reports, documentation, presentations and academic deliverables.",
  },
  {
    icon: Target,
    title: "DSA & Interview Prep",
    description:
      "Improve problem solving and prepare for technical interview discussions.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career Resources",
    description:
      "Explore resources for resumes, internships, placements and career preparation.",
  },
  {
    icon: BookOpen,
    title: "Learning Guides",
    description:
      "Follow structured learning directions instead of jumping randomly between topics.",
  },
  {
    icon: MessageCircle,
    title: "Expert Guidance",
    description:
      "When you cannot find the right direction, discuss your requirement with us.",
  },
];

const ResourceCategories = () => {
  return (
    <section
      id="resource-categories"
      className="bg-slate-50 px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600">
            Explore Categories
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Resources For Your Next Step
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
            Find practical learning material based on what you are currently
            trying to learn, build or prepare for.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-950">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {category.description}
                </p>

                <button
                  type="button"
                  className="mt-5 text-sm font-semibold text-blue-500 transition-colors hover:text-blue-600"
                >
                  Explore →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResourceCategories;