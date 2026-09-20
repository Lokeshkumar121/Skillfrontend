import React from "react";
import {
  ArrowUpRight,
  BookOpen,
  Code2,
  FileText,
} from "lucide-react";

const resources = [
  {
    icon: Code2,
    category: "Development",
    title: "Web Development",
    description:
      "Learn the fundamentals of frontend, backend and full-stack application development.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    icon: BookOpen,
    category: "Projects",
    title: "Project Ideas & Tutorials",
    description:
      "Discover practical project ideas and understand how to turn them into working applications.",
    tags: ["Mini Projects", "Final Year", "MERN", "AI"],
  },
  {
    icon: FileText,
    category: "Career",
    title: "Interview & Placement Preparation",
    description:
      "Prepare your technical skills, projects, resume and interview communication.",
    tags: ["DSA", "Resume", "Projects", "Interview"],
  },
];

const FeaturedResources = () => {
  return (
    <section className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600">
              Featured Resources
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Start With These Learning Areas
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-500">
              A simple starting point for students who want to improve their
              technical and career preparation.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {resources.map((resource) => {
            const Icon = resource.icon;

            return (
              <article
                key={resource.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                    <Icon className="h-5 w-5" />
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-slate-300 transition-colors group-hover:text-blue-500" />
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-blue-500">
                  {resource.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-slate-950">
                  {resource.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {resource.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedResources;