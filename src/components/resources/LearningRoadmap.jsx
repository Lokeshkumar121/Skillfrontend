import React from "react";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose One Topic",
    description:
      "Start with one technology or career goal instead of trying to learn everything simultaneously.",
  },
  {
    number: "02",
    title: "Learn The Fundamentals",
    description:
      "Understand the core concepts before moving into advanced frameworks and tools.",
  },
  {
    number: "03",
    title: "Apply Through Projects",
    description:
      "Use what you learn by building practical projects and solving real problems.",
  },
  {
    number: "04",
    title: "Document & Share",
    description:
      "Maintain your code, documentation and portfolio so your work becomes visible.",
  },
];

const LearningRoadmap = () => {
  return (
    <section className="bg-slate-50 px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600">
              How To Use Resources
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Learn With a Process, Not Randomly
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-500">
              Having access to learning material is useful, but knowing how to
              use it is equally important. Follow a simple cycle of learning,
              building and improving.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Learn one concept at a time",
                "Practice what you learn",
                "Build something practical",
                "Review and improve",
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
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-xs font-bold text-blue-500">
                  {step.number}
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
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

export default LearningRoadmap;