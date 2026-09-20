import React from "react";
import {
  CheckCircle2,
  Code2,
  FileText,
  Target,
} from "lucide-react";

const preparation = [
  {
    icon: FileText,
    title: "Resume & Portfolio",
    description:
      "Present your skills, projects, experience and achievements clearly.",
  },
  {
    icon: Code2,
    title: "DSA & Technical Skills",
    description:
      "Strengthen programming, problem solving and role-specific technical preparation.",
  },
  {
    icon: Target,
    title: "Interview Preparation",
    description:
      "Prepare for technical discussions, project questions and behavioral interviews.",
  },
];

const CareerPreparation = () => {
  return (
    <section className="bg-slate-950 px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              Placement Preparation
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Prepare Before You
              <span className="block text-blue-400">
                Start Applying
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
              A strong application is not only about submitting a resume.
              Build your technical foundation, demonstrate your work and
              prepare to explain what you have built.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Know your projects properly",
                "Be ready to explain your technical decisions",
                "Practice common interview patterns",
                "Keep your resume focused and relevant",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <CheckCircle2 className="h-4 w-4 text-blue-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {preparation.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-blue-400/30"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPreparation;