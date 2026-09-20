import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "I don't know what project to build. Can you help?",
    answer:
      "Yes. You can discuss your academic requirements, interests, skills and preferred technology so you can narrow down suitable project directions.",
  },
  {
    question: "Can I get guidance for my existing project?",
    answer:
      "Yes. You can discuss an existing project, its current stage, technical challenges and the areas where you need direction.",
  },
  {
    question: "Can you guide me about technologies?",
    answer:
      "You can discuss technology choices, frameworks, databases and development approaches based on your project or learning goal.",
  },
  {
    question: "Is guidance only for final-year students?",
    answer:
      "No. Guidance can be useful for students working on mini projects, academic projects, final-year projects, internships and placement preparation.",
  },
  {
    question: "Can you help me create a learning roadmap?",
    answer:
      "Yes. Your current level and target can be used to structure the technologies, concepts and practical projects you should focus on.",
  },
  {
    question: "What happens after I request guidance?",
    answer:
      "Your requirement can be reviewed first so the discussion can focus on your actual project, learning or career-related need.",
  },
];

const GuidanceFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Questions Students Usually Ask
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

export default GuidanceFAQ;