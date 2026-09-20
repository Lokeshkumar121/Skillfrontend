import React from "react";
import {
  CheckCircle2,
  Code2,
  FileText,
  Target,
} from "lucide-react";

const tips = [
  {
    icon: Target,
    title: "Set a Clear Goal",
    description:
      "Know whether you are learning for a project, internship, placement or long-term career development.",
  },
  {
    icon: Code2,
    title: "Practice Through Projects",
    description:
      "Don't stop after watching tutorials. Build small applications to turn concepts into practical skills.",
  },
  {
    icon: FileText,
    title: "Keep Notes & Documentation",
    description:
      "Maintain useful notes, project documentation and references so you can revise efficiently.",
  },
];

const ResourceTips = () => {
  return (
    <section className="bg-slate-950 px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              Learn Effectively
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Resources Are Useful When
              <span className="block text-blue-400">
                You Put Them Into Practice
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
              The objective is not to collect hundreds of tutorials. It is to
              understand concepts, apply them and gradually build confidence.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Avoid tutorial overload",
                "Practice consistently",
                "Build while learning",
                "Review your progress",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <CheckCircle2 className="h-4 w-4 text-blue-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {tips.map((tip) => {
              const Icon = tip.icon;

              return (
                <div
                  key={tip.title}
                  className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-blue-400/30"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {tip.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {tip.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceTips;