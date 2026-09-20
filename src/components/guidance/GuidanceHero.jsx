import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const GuidanceHero = () => {
  return (
    <section className="bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left */}
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600">
              <Compass className="h-4 w-4" />
              Student Guidance
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Confused About Your
              <span className="block text-blue-500">
                Project or Career?
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
              Get practical guidance to understand what to build, which
              technology to learn, how to develop your project and what steps
              to take next in your academic and professional journey.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Project planning guidance",
                "Technology selection support",
                "Career direction",
                "Internship & placement guidance",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-700"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-500" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-600"
              >
                Get Guidance
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#guidance-areas"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-blue-300 hover:bg-blue-50"
              >
                Explore Guidance
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="relative rounded-3xl border border-slate-200 bg-slate-950 p-6 shadow-2xl sm:p-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Compass className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm font-medium text-blue-300">
                    Your Guidance Journey
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-white">
                    From Confusion to Clarity
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                {[
                  ["01", "Understand", "Identify your actual requirement."],
                  ["02", "Plan", "Create a practical learning or project plan."],
                  ["03", "Build", "Move forward with the right approach."],
                  ["04", "Grow", "Prepare for your next academic or career step."],
                ].map(([number, title, description]) => (
                  <div key={number} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10 text-xs font-semibold text-blue-300">
                      {number}
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="mt-7 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-blue-400/30 hover:bg-blue-500/10"
              >
                <MessageCircle className="h-4 w-4 text-blue-400" />
                Talk About Your Goal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidanceHero;