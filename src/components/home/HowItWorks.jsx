import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  MessageSquareText,
  Rocket,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    icon: MessageSquareText,
    title: "Tell Us Your Idea",
    description:
      "Share your project idea, academic requirements, technology preference or the problem you want to solve.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Plan Your Project",
    description:
      "We help you define the right technology, features, project structure and development approach.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Build & Develop",
    description:
      "Develop your project with practical implementation, clean architecture and continuous technical guidance.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Complete & Learn",
    description:
      "Finalize your project, documentation and presentation while understanding the concepts behind your work.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            How It Works
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            From Idea to
            <span className="text-blue-600"> Completed Project</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            A simple and structured process designed to help you move from
            project idea to implementation with the right guidance at every
            stage.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16">
          {/* Connecting Line - Desktop */}
          <div className="absolute left-[12.5%] right-[12.5%] top-14 hidden h-px bg-slate-200 lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative text-center"
                >
                  {/* Number + Icon */}
                  <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
                    {/* Outer Ring */}
                    <div className="absolute inset-0 rounded-full border border-blue-100 bg-white shadow-sm transition-all duration-300 group-hover:border-blue-200 group-hover:shadow-lg group-hover:shadow-blue-100/50" />

                    {/* Icon */}
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-7 w-7" />
                    </div>

                    {/* Number */}
                    <span className="absolute -right-1 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-900 text-[10px] font-bold text-white shadow-sm">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-6 px-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="flex flex-col gap-6 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />

                <span className="text-sm font-semibold text-blue-600">
                  Ready to get started?
                </span>
              </div>

              <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
                Have a project idea in mind?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Tell us what you want to build and let&apos;s plan the next
                step together.
              </p>
            </div>

           <Link
           
           to={"/contact"}>
            <button
              type="button"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
           </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;