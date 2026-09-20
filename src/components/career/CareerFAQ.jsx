import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Which career path should I choose?",
    answer:
      "It depends on your interests, current skills, preferred type of work and long-term goals. A clear assessment of these areas can help you narrow down the options.",
  },
  {
    question: "Do I need to learn many programming languages?",
    answer:
      "Not necessarily. It is generally more useful to build a strong foundation in one primary language and then learn the technologies required for your chosen path.",
  },
  {
    question: "How many projects should I build for my portfolio?",
    answer:
      "The number matters less than the quality and relevance of the projects. A few well-built projects that you can confidently explain can demonstrate your practical skills.",
  },
  {
    question: "Should I learn DSA or development first?",
    answer:
      "Both can be developed alongside each other. The balance can depend on your target roles, current level and interview requirements.",
  },
  {
    question: "Can students get career guidance before their final year?",
    answer:
      "Yes. Starting earlier can give you more time to build fundamentals, projects, internships and interview preparation.",
  },
  {
    question: "Can I get help if I am already preparing for placements?",
    answer:
      "Yes. You can focus on specific areas such as projects, resume, DSA, technical interviews or overall preparation strategy.",
  },
];

const CareerFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600">
            Career FAQs
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Common Career Questions
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

export default CareerFAQ;