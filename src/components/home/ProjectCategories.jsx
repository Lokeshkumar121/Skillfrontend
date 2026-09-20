import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe,
  LockKeyhole,
  Network,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "01",
    icon: Code2,
    title: "Web Development",
    description: "Modern websites and full-stack web applications.",
    technologies: ["React", "Node.js", "MERN"],
  },
  {
    id: "02",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Android, iOS and cross-platform mobile applications.",
    technologies: ["React Native", "Android", "iOS"],
  },
  {
    id: "03",
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description: "Real-world artificial intelligence and ML projects.",
    technologies: ["Python", "ML", "AI"],
  },
  {
    id: "04",
    icon: Database,
    title: "Data Science",
    description: "Data analysis, visualization and predictive solutions.",
    technologies: ["Python", "Pandas", "Analytics"],
  },
  {
    id: "05",
    icon: Code2,
    title: "Python Projects",
    description: "Academic and practical projects using Python.",
    technologies: ["Python", "Django", "Flask"],
  },
  {
    id: "06",
    icon: Globe,
    title: "Java Projects",
    description: "Java-based academic and application projects.",
    technologies: ["Java", "Spring", "APIs"],
  },
  {
    id: "07",
    icon: Network,
    title: "MERN Stack",
    description: "Complete full-stack applications using the MERN ecosystem.",
    technologies: ["MongoDB", "Express", "React", "Node"],
  },
  {
    id: "08",
    icon: Cpu,
    title: "IoT Projects",
    description: "Connected systems combining hardware and software.",
    technologies: ["IoT", "Sensors", "Cloud"],
  },
  {
    id: "09",
    icon: LockKeyhole,
    title: "Cyber Security",
    description: "Security-focused academic and practical projects.",
    technologies: ["Security", "Networks", "Systems"],
  },
  {
    id: "10",
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Deployment, cloud infrastructure and DevOps projects.",
    technologies: ["AWS", "Docker", "CI/CD"],
  },
];

const ProjectCategories = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-180px] top-[180px] h-[380px] w-[380px] rounded-full bg-blue-100/50 blur-3xl" />

        <div className="absolute right-[-180px] top-[500px] h-[420px] w-[420px] rounded-full bg-indigo-100/40 blur-3xl" />

        <div className="absolute left-1/2 top-[-200px] h-[350px] w-[650px] -translate-x-1/2 rounded-full bg-sky-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-3xl">

            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>

              Project Domains
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
              Explore Projects Across
              <span className="mt-1 block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Multiple Technologies
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              Choose a technology or domain that matches your academic
              requirements, interests and career goals.
            </p>
          </div>

          {/* View All */}
          <Link
          
          to={"/projects"}
          >
             <button
            type="button"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md"
          >
            View All Projects

            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
          
          </Link>
        </div>

        {/* Categories */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.slice(0, 6).map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/60"
                style={{
                  animation: `projectCardReveal 0.7s ease-out ${
                    index * 100
                  }ms both`,
                }}
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100/0 blur-3xl transition-all duration-500 group-hover:bg-blue-100/80" />

                {/* Number */}
                

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/25">
                  <Icon className="h-6 w-6 transition-transform duration-500 group-hover:scale-110" />
                </div>

                {/* Content */}
                <div className="relative mt-7">

                  <h3 className="text-xl font-semibold tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-blue-600">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {category.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-semibold text-slate-600 transition-all duration-300 group-hover:border-blue-100 group-hover:bg-blue-50 group-hover:text-blue-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Explore */}
                  <div className="mt-7 border-t border-slate-100 pt-5">
                    <button
                      type="button"
                      className="group/link inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors duration-300 hover:text-blue-600"
                    >
                      Explore Projects

                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 group-hover/link:border-blue-200 group-hover/link:bg-blue-600 group-hover/link:text-white">
                        <ArrowUpRight
                          className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:rotate-6"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-12 overflow-hidden rounded-[28px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-7 shadow-sm sm:p-9">

          {/* CTA Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-200/40 blur-3xl" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <div className="mb-2 text-sm font-semibold text-blue-600">
                Need Something Different?
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                Have a different project idea?
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Tell us what you want to build. We can help you choose the
                right technology, architecture and development approach.
              </p>
            </div>
            <Link
            
            to={"/contact"}
            >


            <button
              type="button"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25"
            >
              Discuss Your Idea

              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
            
            </Link>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes projectCardReveal {
            0% {
              opacity: 0;
              transform: translateY(24px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default ProjectCategories;