import React from "react";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const GuidanceCTA = () => {
  return (
    <section className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                <MessageCircle className="h-4 w-4" />
                Need Direction?
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Don't Let Confusion
                <span className="block text-blue-400">
                  Stop Your Progress.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                Share what you are trying to achieve and get a clearer
                direction for your next step.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Project guidance",
                  "Technology direction",
                  "Career guidance",
                  "Internship & placement support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <CheckCircle2 className="h-4 w-4 text-blue-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-400"
            >
              Get Guidance
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidanceCTA;