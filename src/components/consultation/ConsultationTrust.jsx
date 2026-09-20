import React from "react";
import {
  CheckCircle2,
  FileCheck2,
  Headphones,
  ShieldCheck,
  Target,
} from "lucide-react";

const points = [
  {
    icon: Target,
    title: "Requirement First",
    description:
      "We focus on understanding what you actually need before suggesting a solution.",
  },
  {
    icon: ShieldCheck,
    title: "Practical Guidance",
    description:
      "Recommendations are based on project scope, learning goals and implementation requirements.",
  },
  {
    icon: FileCheck2,
    title: "Complete Project Support",
    description:
      "Guidance can cover development, documentation, presentation and final submission.",
  },
  {
    icon: Headphones,
    title: "Clear Communication",
    description:
      "You can discuss your doubts and understand the next step before moving forward.",
  },
];

const ConsultationTrust = () => {
  return (
    <section className="bg-slate-950 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
              Why Talk to SkillPilot?
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Make Your Project Decisions With
              <span className="text-blue-400"> More Clarity</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              A good project starts with a clear understanding of the problem,
              technology and expected outcome. Our consultation is designed to
              help you make those decisions before development begins.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Understand what to build",
                "Know which technology fits your project",
                "Avoid unnecessary features and complexity",
                "Get a practical development direction",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((point) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-white">
                    {point.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationTrust;