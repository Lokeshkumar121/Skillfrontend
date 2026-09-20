import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    course: "B.Tech CSE",
    initials: "RS",
    project: "MERN Stack Project",
    review:
      "The guidance helped me understand how to structure my project properly. I was able to work through the development process with much more confidence.",
  },
  {
    name: "Priya Verma",
    course: "BCA",
    initials: "PV",
    project: "AI & Machine Learning",
    review:
      "I needed help selecting the right project idea and technology. The consultation made the entire process much clearer and easier to plan.",
  },
  {
    name: "Aditya Kumar",
    course: "MCA",
    initials: "AK",
    project: "Web Application",
    review:
      "The project guidance was practical and easy to understand. It helped me improve both my project implementation and my understanding of the technologies.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              Student Experiences
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              What Students Say
              <span className="block text-blue-600">
                About Their Experience
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Hear how students use project guidance and technical support to
              move forward with their academic and development goals.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60 sm:p-7"
            >
              {/* Quote Icon */}
              <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Quote className="h-5 w-5" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-current text-amber-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-6 text-sm leading-7 text-slate-600">
                “{testimonial.review}”
              </p>

              {/* Project */}
              <div className="mt-6 inline-flex rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                {testimonial.project}
              </div>

              {/* User */}
              <div className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {testimonial.initials}
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {testimonial.course}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Your project journey can start with a simple conversation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;