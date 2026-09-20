import React from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

const ResourcesHero = () => {
  return (
    <section className="bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left */}
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600">
              <BookOpen className="h-4 w-4" />
              Student Resources
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Learn Better.
              <span className="block text-blue-500">
                Build Better Projects.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
              Explore practical resources for learning technologies, finding
              project ideas, improving development skills and preparing for
              internships, placements and interviews.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Project ideas & tutorials",
                "Development resources",
                "Career & interview preparation",
                "Documentation & learning guides",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-700"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-500" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#resource-categories"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-600"
              >
                Explore Resources
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-blue-300 hover:bg-blue-50"
              >
                Need Help Choosing?
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative rounded-3xl border border-slate-200 bg-slate-950 p-6 shadow-2xl sm:p-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Search className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm font-medium text-blue-300">
                    Learning Hub
                  </p>

                  <h2 className="mt-1 text-xl font-semibold text-white">
                    Find What You Need
                  </h2>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Project Ideas",
                  "Tutorials",
                  "Blogs",
                  "Documentation",
                  "Interview Prep",
                  "Career Resources",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-slate-300 transition-colors hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-blue-400/20 bg-blue-500/10 p-4">
                <p className="text-sm leading-6 text-blue-200">
                  Start with one topic, learn the fundamentals and apply what
                  you learn through a practical project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesHero;