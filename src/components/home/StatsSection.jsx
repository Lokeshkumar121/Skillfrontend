import React from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Layers3,
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  {
    icon: Code2,
    value: "100+",
    label: "Project Ideas",
    description: "Across multiple technology domains",
  },
  {
    icon: Layers3,
    value: "20+",
    label: "Technology Domains",
    description: "From web development to AI and cloud",
  },
  {
    icon: GraduationCap,
    value: "360°",
    label: "Project Guidance",
    description: "From idea selection to final submission",
  },
  {
    icon: BriefcaseBusiness,
    value: "End-to-End",
    label: "Project Support",
    description: "Development, documentation and guidance",
  },
];

const StatsSection = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Main Stats Box */}
        <div className="overflow-hidden rounded-3xl bg-slate-950">
          <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            {/* Background Effects */}
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />

            <div className="relative">
              {/* Header */}
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-4 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                    SkillPilot at a Glance
                  </div>

                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Built Around Your
                    <span className="text-blue-400"> Project Journey</span>
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                    Whether you are looking for a project idea, development
                    support or technical guidance, SkillPilot brings the
                    essential pieces together.
                  </p>
                </div>

             <Link
             
             to={"/projects"}>
                   <button
                  type="button"
                  className="group inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10"
                >
                  Explore SkillPilot
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
             
             </Link>
              </div>

              {/* Stats */}
              <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="bg-slate-950 p-6 transition-colors duration-300 hover:bg-white/[0.04] sm:p-7"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="mt-6">
                        <p className="text-3xl font-bold tracking-tight text-white">
                          {stat.value}
                        </p>

                        <h3 className="mt-2 text-sm font-semibold text-slate-200">
                          {stat.label}
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-slate-500">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Message */}
              <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-400">
                  Have a project requirement that is not listed?
                </p>

               <Link
               
               to={"/contact"}>
                <button
                  type="button"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors duration-300 hover:text-blue-300"
                >
                  Discuss your requirement
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
               </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;