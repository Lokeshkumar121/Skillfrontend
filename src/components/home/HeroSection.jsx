import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Code2,
  BrainCircuit,
  Smartphone,
} from "lucide-react";

const HeroSection = () => {
  const features = [
    "Expert Project Guidance",
    "Real Project Development",
    "Documentation Support",
    "Career-Focused Learning",
  ];

  const projectCards = [
    {
      title: "Web Development",
      description: "MERN, Full Stack & Modern Web Apps",
      icon: Code2,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "AI & Machine Learning",
      description: "Practical AI/ML & Data Science Projects",
      icon: BrainCircuit,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      title: "Mobile App Development",
      description: "Android, iOS & Cross-Platform Apps",
      icon: Smartphone,
      iconBg: "bg-sky-100",
      iconColor: "text-sky-600",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      {/* =========================
          ANIMATED BACKGROUND
      ========================== */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Blue Blob */}
        <div
          className="
            absolute left-[-120px] top-[-120px]
            h-[350px] w-[350px]
            rounded-full bg-blue-100/60 blur-3xl
            animate-[heroBlob_8s_ease-in-out_infinite]
          "
        />

        {/* Indigo Blob */}
        <div
          className="
            absolute right-[-100px] top-[100px]
            h-[300px] w-[300px]
            rounded-full bg-indigo-100/60 blur-3xl
            animate-[heroBlobReverse_10s_ease-in-out_infinite]
          "
        />

        {/* Small Floating Glow */}
        <div
          className="
            absolute left-[45%] top-[20%]
            h-32 w-32
            rounded-full bg-blue-200/20 blur-3xl
            animate-pulse
          "
        />

        {/* Decorative Dots */}
        <div className="absolute right-[8%] top-[18%] hidden sm:block">
          <div className="grid grid-cols-5 gap-2 opacity-40">
            {Array.from({ length: 25 }).map((_, index) => (
              <span
                key={index}
                className="h-1.5 w-1.5 rounded-full bg-blue-300"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div className="animate-[heroLeft_0.9s_ease-out_both]">
            {/* Badge */}
            <div
              className="
                mb-6 inline-flex items-center gap-2
                rounded-full border border-blue-100
                bg-blue-50 px-4 py-2
                text-sm font-medium text-blue-700
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:border-blue-200
                hover:bg-blue-100 hover:shadow-md
              "
            >
              <Sparkles
                className="
                  h-4 w-4
                  animate-[sparkleRotate_3s_ease-in-out_infinite]
                "
              />

              <span>Build. Learn. Grow.</span>
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-3xl
                text-4xl font-bold leading-tight tracking-tight
                text-slate-900
                sm:text-5xl lg:text-6xl
              "
            >
              Build Better Projects.

              <span
                className="
                  mt-2 block
                  bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600
                  bg-[length:200%_auto]
                  bg-clip-text text-transparent
                  animate-[gradientMove_4s_linear_infinite]
                "
              >
                Learn. Develop. Succeed.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-6 max-w-2xl
                text-base leading-7 text-slate-600
                sm:text-lg
                animate-[fadeUp_1s_ease-out_0.2s_both]
              "
            >
              Get expert guidance and practical support for your final-year
              projects, web and mobile applications, AI/ML solutions,
              documentation, and technical career preparation.
            </p>

            {/* Buttons */}
            <div
              className="
                mt-8 flex flex-col gap-3 sm:flex-row
                animate-[fadeUp_1s_ease-out_0.35s_both]
              "
            >
              {/* Primary Button */}
              <button
                type="button"
                className="
                  group relative overflow-hidden
                  inline-flex items-center justify-center gap-2
                  rounded-xl bg-blue-600
                  px-6 py-3.5
                  text-sm font-semibold text-white
                  shadow-lg shadow-blue-600/20
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-blue-700
                  hover:shadow-xl hover:shadow-blue-600/30
                  active:translate-y-0
                "
              >
                {/* Shine */}
                <span
                  className="
                    absolute inset-y-0 -left-10 w-8
                    rotate-[25deg]
                    bg-white/30
                    blur-sm
                    transition-all duration-700
                    group-hover:left-[120%]
                  "
                />

                <span className="relative z-10">
                  Start Your Project
                </span>

                <ArrowRight
                  className="
                    relative z-10 h-4 w-4
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

              {/* Secondary Button */}
              <button
                type="button"
                className="
                  group
                  inline-flex items-center justify-center
                  rounded-xl border border-slate-200
                  bg-white px-6 py-3.5
                  text-sm font-semibold text-slate-700
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-blue-200
                  hover:bg-blue-50
                  hover:text-blue-700
                  hover:shadow-md
                  active:translate-y-0
                "
              >
                Explore Projects
              </button>
            </div>

            {/* Features */}
            <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((item, index) => (
                <div
                  key={item}
                  className="
                    flex items-center gap-2
                    text-sm text-slate-600
                    opacity-0
                    animate-[featureReveal_0.6s_ease-out_both]
                  "
                  style={{
                    animationDelay: `${0.55 + index * 0.12}s`,
                  }}
                >
                  <CheckCircle2
                    className="
                      h-4 w-4 shrink-0 text-blue-600
                      transition-transform duration-300
                      hover:scale-125
                    "
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* =========================
              RIGHT VISUAL
          ========================== */}
          <div
            className="
              relative
              animate-[heroRight_1s_ease-out_0.15s_both]
            "
          >
            {/* Main Card */}
            <div
              className="
                relative mx-auto max-w-lg
                rounded-3xl border border-slate-200
                bg-white p-5
                shadow-2xl shadow-slate-200/60
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-2xl hover:shadow-blue-100
                animate-[dashboardFloat_6s_ease-in-out_infinite]
              "
            >
              {/* Top bar */}
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-400">
                    SKILLPILOT
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-slate-900">
                    Your Project Journey
                  </h3>
                </div>

                <div
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-xl bg-blue-50 text-blue-600
                    animate-[iconPulse_3s_ease-in-out_infinite]
                  "
                >
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>

              {/* Project Cards */}
              <div className="space-y-3">
                {projectCards.map((project, index) => {
                  const Icon = project.icon;

                  return (
                    <div
                      key={project.title}
                      className="
                        group
                        flex items-center gap-4
                        rounded-2xl border border-slate-100
                        bg-slate-50 p-4
                        opacity-0
                        animate-[cardReveal_0.7s_ease-out_both]
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-blue-100
                        hover:bg-white
                        hover:shadow-md
                      "
                      style={{
                        animationDelay: `${0.7 + index * 0.18}s`,
                      }}
                    >
                      <div
                        className={`
                          flex h-12 w-12 shrink-0 items-center
                          justify-center rounded-xl
                          ${project.iconBg}
                          ${project.iconColor}
                          transition-transform duration-300
                          group-hover:scale-110
                          group-hover:rotate-3
                        `}
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <div className="min-w-0">
                        <h4 className="font-semibold text-slate-900">
                          {project.title}
                        </h4>

                        <p className="mt-1 text-sm text-slate-500">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Progress */}
              <div
                className="
                  mt-5 rounded-2xl
                  border border-blue-100
                  bg-blue-50/70 p-4
                  animate-[fadeUp_0.8s_ease-out_1.25s_both]
                "
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-800">
                    Project Progress
                  </span>

                  <span className="text-sm font-bold text-blue-600">
                    75%
                  </span>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-blue-100">
                  <div
                    className="
                      h-full w-[75%]
                      origin-left rounded-full bg-blue-600
                      animate-[progressGrow_1.8s_cubic-bezier(.4,0,.2,1)_1.4s_both]
                    "
                  />
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Development & guidance in progress
                </p>
              </div>
            </div>

            {/* =========================
                FLOATING SUPPORT CARD
            ========================== */}
            <div
              className="
                absolute -bottom-6 -left-4
                hidden rounded-2xl
                border border-slate-200
                bg-white p-4 shadow-xl
                sm:block lg:-left-10
                animate-[floatingCard_4s_ease-in-out_infinite]
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex h-10 w-10 items-center
                    justify-center rounded-full
                    bg-blue-50
                  "
                >
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Support
                  </p>

                  <p className="text-sm font-bold text-slate-900">
                    Expert Guidance
                  </p>
                </div>
              </div>
            </div>

            {/* =========================
                FLOATING SUCCESS BADGE
            ========================== */}
            <div
              className="
                absolute -right-3 -top-5
                hidden rounded-2xl
                border border-slate-200
                bg-white px-4 py-3 shadow-xl
                sm:block lg:-right-8
                animate-[floatingCardReverse_5s_ease-in-out_infinite]
              "
            >
              <p className="text-xs text-slate-400">
                Focused on
              </p>

              <p className="text-sm font-bold text-blue-600">
                Student Success
              </p>
            </div>

            {/* Decorative Ring */}
            <div
              className="
                pointer-events-none
                absolute -right-20 -bottom-20
                hidden h-44 w-44
                rounded-full border border-blue-100
                lg:block
                animate-[ringPulse_5s_ease-in-out_infinite]
              "
            />

            <div
              className="
                pointer-events-none
                absolute -right-12 -bottom-12
                hidden h-28 w-28
                rounded-full border border-blue-100/70
                lg:block
                animate-[ringPulse_5s_ease-in-out_infinite]
              "
              style={{ animationDelay: "0.7s" }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* =========================
          CUSTOM ANIMATIONS
      ========================== */}
      <style>
        {`
          @keyframes heroLeft {
            0% {
              opacity: 0;
              transform: translateX(-45px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes heroRight {
            0% {
              opacity: 0;
              transform: translateX(45px) scale(0.96);
            }
            100% {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }

          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes featureReveal {
            0% {
              opacity: 0;
              transform: translateX(-15px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes cardReveal {
            0% {
              opacity: 0;
              transform: translateX(25px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes dashboardFloat {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          @keyframes floatingCard {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes floatingCardReverse {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(9px);
            }
          }

          @keyframes progressGrow {
            0% {
              transform: scaleX(0);
            }
            100% {
              transform: scaleX(1);
            }
          }

          @keyframes sparkleRotate {
            0%,
            100% {
              transform: rotate(0deg) scale(1);
            }
            50% {
              transform: rotate(15deg) scale(1.15);
            }
          }

          @keyframes iconPulse {
            0%,
            100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
            }
            50% {
              transform: scale(1.08);
              box-shadow: 0 0 0 8px rgba(37, 99, 235, 0.08);
            }
          }

          @keyframes gradientMove {
            0% {
              background-position: 0% center;
            }
            100% {
              background-position: 200% center;
            }
          }

          @keyframes heroBlob {
            0%,
            100% {
              transform: translate(0, 0) scale(1);
            }
            50% {
              transform: translate(45px, 35px) scale(1.1);
            }
          }

          @keyframes heroBlobReverse {
            0%,
            100% {
              transform: translate(0, 0) scale(1);
            }
            50% {
              transform: translate(-40px, 25px) scale(1.12);
            }
          }

          @keyframes ringPulse {
            0%,
            100% {
              transform: scale(1);
              opacity: 0.35;
            }
            50% {
              transform: scale(1.12);
              opacity: 0.7;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;