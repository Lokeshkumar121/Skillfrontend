import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import projectCategories from "../../data/projectCategories";
import { Helmet } from "react-helmet-async";
import SEO from "../../components/seo/SEO";

const Projects = () => {
  return (
    <main className="min-h-screen bg-white text-slate-900">
        <SEO
    title="Project Categories | Final Year, Web, AI, Python & More | SkillPilot"
    description="Explore SkillPilot project categories including final year projects, web development, mobile apps, AI & machine learning, Python, Java, MERN, IoT, cybersecurity, cloud and more."
    canonical="https://skillpilot.in/projects"
    ogTitle="Project Categories | Final Year, Web, AI, Python & More | SkillPilot"
    ogDescription="Explore practical project categories across web development, mobile apps, AI & ML, Python, Java, MERN, IoT, cybersecurity, cloud and other modern technologies."
/>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-white">

        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-180px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />

          <div className="absolute right-[-180px] top-[250px] h-[350px] w-[350px] rounded-full bg-indigo-100/40 blur-3xl" />

          <div className="absolute left-[-180px] top-[450px] h-[350px] w-[350px] rounded-full bg-sky-100/40 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 text-center sm:px-8 lg:px-10 lg:pb-28 lg:pt-32">

          {/* Small Label */}
          <div className="mb-7 inline-flex items-center rounded-full border border-blue-100 bg-blue-50/70 px-4 py-2 text-sm font-medium text-blue-600 backdrop-blur-sm">
            SkillPilot Projects
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-5xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
            Build something
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              worth building.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            Explore practical project categories across modern technologies,
            academic projects, career preparation and real-world development.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <Link
              to="/consultation"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25"
            >
              Start Your Project

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href="#project-categories"
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50"
            >
              Explore Categories
            </a>

          </div>

        </div>
      </section>


      {/* =====================================================
          PROJECT CATEGORIES
      ====================================================== */}
      <section
        id="project-categories"
        className="border-t border-slate-100 bg-[#fafafa]"
      >

        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">

          {/* Section Header */}
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
                Explore
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Choose your direction.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                Find the technology or project category that matches your
                learning goals and requirements.
              </p>
            </div>

           

          </div>


          {/* =================================================
              3 COLUMN APPLE STYLE GRID
          ================================================== */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {projectCategories.map((category) => (
              <article
                key={category.id}
                className="group overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-2xl hover:shadow-slate-200/60"
              >

                {/* Image */}
                <Link
                  to={`/projects/${category.slug}`}
                  className="block"
                >
                  <div className="relative h-[260px] overflow-hidden bg-slate-100">

                    <img
                      src={category.image}
                      alt={category.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-70" />

                    {/* Arrow */}
                    <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                      <ArrowUpRight
                        size={19}
                        className="transition-transform duration-300 group-hover:rotate-6"
                      />
                    </div>

                   

                  </div>
                </Link>


                {/* Content */}
                <div className="p-6">

                  <h3 className="text-xl font-semibold tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-blue-600">
                    {category.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                    {category.description}
                  </p>

                  {/* Bottom Link */}
                  <Link
                    to={`/projects/${category.slug}`}
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors duration-300 hover:text-blue-600"
                  >
                    Explore

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CONSULTATION CTA
      ====================================================== */}
      <section className="bg-slate-950">

        <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:px-8 lg:px-10 lg:py-24">

          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            Need Help?
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Not sure which project is right for you?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
            Get guidance based on your technology, academic requirements,
            interests and career goals.
          </p>

          <Link
            to="/consultation"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
          >
            Get Project Consultation

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>

      </section>

    </main>
  );
};

export default Projects;