import React from "react";
import { CheckCircle2, Code2, Target } from "lucide-react";

const GuidanceSupport = () => {
  return (
    <section className="bg-slate-950 px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              Practical Support
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Guidance That Connects
              <span className="block text-blue-400">
                Learning With Real Projects
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Learning becomes more useful when you know where to apply it.
              We help connect your learning goals with projects, practical
              development and career preparation.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Learn with a clear objective",
                "Build relevant projects",
                "Understand your technology stack",
                "Prepare for real opportunities",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-400" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                <Code2 className="h-6 w-6 text-blue-400" />

                <h3 className="mt-4 font-semibold text-white">
                  Project Focus
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Turn academic requirements and ideas into practical project
                  directions.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                <Target className="h-6 w-6 text-blue-400" />

                <h3 className="mt-4 font-semibold text-white">
                  Career Focus
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Understand which skills and preparation areas to prioritize.
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
              <p className="text-sm font-medium text-blue-300">
                The goal is simple
              </p>

              <p className="mt-2 text-lg font-semibold leading-7 text-white">
                Know what to do next — and why you are doing it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidanceSupport;