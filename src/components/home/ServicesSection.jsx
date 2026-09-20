import React from "react";
import { ArrowUpRight } from "lucide-react";

import projectCategories from "../../data/projectCategories";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            What We Offer
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything You Need to
            <span className="block text-blue-600">
              Build Better Projects
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            From choosing the right project idea to development,
            documentation and technical guidance, SkillPilot helps you
            move forward with confidence.
          </p>

        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {projectCategories.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
            >

              {/* Image */}
              <div className="h-52 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">

                <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                {/* Learn More */}
                <div className="mt-auto pt-6">
<Link
  to={`/projects/${service.slug}`}
  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-all duration-300 hover:gap-2.5"
>
  Learn More
  <ArrowUpRight className="h-4 w-4" />
</Link>

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">

         <Link
           to={"/projects"}
          >
         
            <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
          >
            Explore All Services
            <ArrowUpRight className="h-4 w-4" />
          </button>
         </Link>

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;