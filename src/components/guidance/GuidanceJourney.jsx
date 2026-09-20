import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Know Where You Are",
    description:
      "We first understand your current skills, academic level, project status and immediate requirement.",
  },
  {
    number: "02",
    title: "Define Your Goal",
    description:
      "Identify whether your priority is a project, skill development, internship, placement or career direction.",
  },
  {
    number: "03",
    title: "Create a Direction",
    description:
      "Break the goal into technologies, learning areas, development tasks and practical next steps.",
  },
  {
    number: "04",
    title: "Move Forward",
    description:
      "Follow the direction step-by-step and get support when you need clarity on the next stage.",
  },
];

const GuidanceJourney = () => {
  return (
    <section className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600">
              How Guidance Works
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A Clear Path Instead of Random Learning
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-500">
              Students often know that they need to learn or build something,
              but are unsure about where to begin. Guidance helps turn that
              confusion into an actionable direction.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Personalized direction",
                "Practical next steps",
                "Technology-focused guidance",
                "Academic and career support",
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

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group grid gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 sm:grid-cols-[64px_1fr_auto] sm:items-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-sm font-bold text-blue-500">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <ArrowRight className="hidden h-5 w-5 text-blue-400 sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidanceJourney;