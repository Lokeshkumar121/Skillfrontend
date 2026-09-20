import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const ConsultationHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-slate-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              <Sparkles className="h-4 w-4" />
              Project Consultation
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Not Sure How to
              <span className="block text-blue-600">
                Start Your Project?
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Get practical guidance from idea selection and technology
              decisions to development, documentation and final submission.
              Tell us what you are trying to build and we will help you
              understand the right direction.
            </p>

            {/* Trust Points */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Understand your requirements",
                "Choose the right technology",
                "Plan your project properly",
                "Get clear technical guidance",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-slate-700"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                  {item}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#consultation-form"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <MessageCircle className="h-4 w-4" />
                How It Works
              </a>
            </div>
          </div>

          {/* Consultation Card */}
          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-400">
                    Consultation
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-slate-900">
                    Your Project. Clearly Planned.
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <ShieldCheck className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  ["01", "Understand", "Your idea and requirements"],
                  ["02", "Recommend", "Technology and project approach"],
                  ["03", "Plan", "Features, architecture and development"],
                  ["04", "Guide", "Documentation and final submission"],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">
                      {number}
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Small floating card */}
            <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-lg sm:block">
              <p className="text-xs font-medium text-slate-400">
                Guidance focused on
              </p>

              <p className="mt-1 text-sm font-bold text-slate-900">
                Your actual requirements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationHero;