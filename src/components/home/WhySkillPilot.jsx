import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  FileCheck2,
  Headphones,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: Lightbulb,
    title: "Right Project Guidance",
    description:
      "Get help choosing a project idea based on your course, interests, technology and career goals.",
  },
  {
    icon: Code2,
    title: "Practical Development",
    description:
      "Work on practical projects with modern technologies and development practices.",
  },
  {
    icon: FileCheck2,
    title: "Complete Documentation",
    description:
      "Get structured technical documentation and supporting materials for your academic submission.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description:
      "Get technical assistance during planning, development, debugging and project completion.",
  },
];

const highlights = [
  "Project planning and architecture",
  "Modern technology stack",
  "Clean and responsive UI",
  "Development and debugging support",
  "Project documentation assistance",
  "Presentation and project guidance",
];

const WhySkillPilot = () => {
  return (
    <section className="overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Top Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              Why SkillPilot?
            </div>

            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              More Than Just a
              <span className="block text-blue-400">
                Project Development Service
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              We help students understand what they are building, why they
              are building it and how the technology works — not just deliver
              a project.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
           
        <Link
        to={"/contact"}>
            <button
              type="button"
              className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition-all duration-300 hover:bg-blue-500"
            >
              Talk to an Expert
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
        
        </Link>
          </div>

          {/* RIGHT - BENEFITS */}
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.07]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Strip */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Quality Focused
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Structured development approach
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <Headphones className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Dedicated Support
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Assistance throughout your project
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <Code2 className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Modern Technology
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Current tools and development practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySkillPilot;