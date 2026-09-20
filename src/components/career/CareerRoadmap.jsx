import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const roadmap = [
  {
    number: "01",
    title: "Foundation",
    duration: "Start Here",
    items: [
      "Programming fundamentals",
      "Problem solving",
      "Git & GitHub basics",
      "Basic computer science concepts",
    ],
  },
  {
    number: "02",
    title: "Core Skills",
    duration: "Build Skills",
    items: [
      "Choose one technology path",
      "Learn the core framework",
      "Work with APIs and databases",
      "Build small applications",
    ],
  },
  {
    number: "03",
    title: "Real Projects",
    duration: "Build Proof",
    items: [
      "Build 2–4 meaningful projects",
      "Use real development workflows",
      "Deploy your applications",
      "Document your work",
    ],
  },
  {
    number: "04",
    title: "Career Preparation",
    duration: "Get Ready",
    items: [
      "Resume preparation",
      "Portfolio development",
      "DSA & technical preparation",
      "Mock interview practice",
    ],
  },
];

const CareerRoadmap = () => {
  return (
    <section className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600">
              Career Roadmap
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A Practical Path From Learning to Placement
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-500">
              Career preparation becomes easier when your learning, projects
              and interview preparation are connected instead of being treated
              as separate activities.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Build fundamentals first",
                "Choose one career direction",
                "Create proof through projects",
                "Prepare before applying",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-slate-700"
                >
                  <CheckCircle2 className="h-4 w-4 text-blue-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {roadmap.map((step, index) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-xs font-bold text-blue-500">
                    {step.number}
                  </span>

                  <span className="text-xs font-medium text-slate-400">
                    {step.duration}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-950">
                  {step.title}
                </h3>

                <div className="mt-4 space-y-2.5">
                  {step.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-500"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                      {item}
                    </div>
                  ))}
                </div>

                {index < roadmap.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 text-blue-400 sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerRoadmap;