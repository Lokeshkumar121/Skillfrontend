import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const HomeCTA = () => {
  return (
    <section className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Background Effects */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          {/* Decorative Elements */}
          <div className="absolute right-10 top-10 hidden h-20 w-20 rounded-2xl border border-white/10 sm:block" />

          <div className="absolute bottom-10 right-32 hidden h-12 w-12 rounded-full border border-blue-400/20 sm:block" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            {/* Content */}
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                <Sparkles className="h-4 w-4" />
                Start Your Project Journey
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Have a Project Idea?
                <span className="block text-blue-400">
                  Let&apos;s Build It Together.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                Whether you have a complete project requirement or just an
                idea, get the right guidance to plan, develop and complete
                your project.
              </p>

              {/* Highlights */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Discuss your project idea",
                  "Choose the right technology",
                  "Get development guidance",
                  "Get documentation support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col">
            <Link
            to={"/contact"}>
              <button
                type="button"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:bg-blue-400"
              >
                Start Your Project

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            
            </Link>

              <button
                type="button"
                
              >
                <a
  href="tel:+916396283875"
  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10"
>
  <MessageCircle className="h-4 w-4 text-blue-400" />
  Talk to an Expert
</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;