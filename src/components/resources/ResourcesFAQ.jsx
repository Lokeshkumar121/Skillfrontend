import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What kind of resources will be available?",
    answer:
      "The resources section can include project ideas, tutorials, technology guides, blogs, documentation, interview preparation material and career-related content.",
  },
  {
    question: "Are these resources suitable for beginners?",
    answer:
      "Yes. Resources can be organized by difficulty so beginners can start with fundamentals before moving to advanced topics.",
  },
  {
    question: "Can I find resources for final-year projects?",
    answer:
      "Yes. Project ideas, technology guidance, development tutorials and documentation resources can help with final-year project preparation.",
  },
  {
    question: "Can I use the resources for placement preparation?",
    answer:
      "Yes. Technical concepts, DSA, projects, resume preparation and interview-related resources can support placement preparation.",
  },
  {
    question: "What if I don't know which resource to start with?",
    answer:
      "Start with your current goal. If you are unsure about the right direction, you can use the Guidance or Consultation section to discuss your requirement.",
  },
  {
    question: "Can resources replace project guidance?",
    answer:
      "Resources are useful for learning and reference, while personalized guidance can help when your requirement involves specific project or career decisions.",
  },
];

const ResourcesFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600">
            Resources FAQ
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Common Questions
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-sm font-semibold text-slate-900 sm:text-base">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-blue-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-5 pb-5 pt-4 sm:px-6">
                    <p className="text-sm leading-7 text-slate-500">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResourcesFAQ;