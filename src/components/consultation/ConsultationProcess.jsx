import React from "react";
import {
  ArrowRight,
  ClipboardList,
  Lightbulb,
  Rocket,
  Search,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tell Us Your Requirement",
    description:
      "Share your project idea, academic requirement, current progress or the problem you are facing.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Understand Your Needs",
    description:
      "We identify your goals, technology level, project scope and what you actually need.",
    icon: Search,
  },
  {
    number: "03",
    title: "Get a Clear Direction",
    description:
      "You get guidance on technology, features, architecture, development and next steps.",
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "Start With Confidence",
    description:
      "Move forward with a clear project plan instead of spending time on the wrong approach.",
    icon: Rocket,
  },
];

const ConsultationProcess = () => {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600">
            Simple & Clear Process
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            From Confusion to
            <span className="text-blue-600"> Clear Direction</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
            You do not need to have everything figured out before contacting
            us. Start with what you know.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-blue-600">
                    {step.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {step.description}
                </p>

                {step.number !== "04" && (
                  <ArrowRight className="absolute -right-4 top-1/2 hidden h-7 w-7 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-1 text-blue-500 lg:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConsultationProcess;