import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const ConsultationCTA = () => {
  return (
    <section
      id="consultation-form"
      className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Background */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                <Sparkles className="h-4 w-4" />
                Start With a Conversation
              </div>

              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Have a Project in Mind?
                <span className="block text-blue-400">
                  Let&apos;s Discuss It.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                You do not need to know everything before reaching out. Share
                your idea or problem and start with a clear conversation.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Discuss your project idea",
                  "Get technology guidance",
                  "Understand the development path",
                  "Plan your next step",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10"
              >
                <MessageCircle className="h-4 w-4 text-blue-400" />
                Talk About Your Idea
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;