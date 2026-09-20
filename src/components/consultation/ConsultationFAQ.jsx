import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What should I discuss during a consultation?",
    answer:
      "You can discuss your project idea, technology choice, features, development problems, documentation, final-year requirements, career-related projects or any other technical concern.",
  },
  {
    question: "I don't have a project idea. Can you help?",
    answer:
      "Yes. You can discuss your academic requirements, interests and preferred technology, and use the consultation to understand suitable project directions.",
  },
  {
    question: "Can you help with an already existing project?",
    answer:
      "Yes. You can discuss an unfinished project, technical issue, architecture problem, feature requirement or documentation requirement.",
  },
  {
    question: "Which technologies can I discuss?",
    answer:
      "You can discuss areas including web development, mobile applications, AI and ML, data science, Python, Java, MERN, IoT, blockchain, cybersecurity, cloud and DevOps.",
  },
  {
    question: "Is consultation only for final-year students?",
    answer:
      "No. Consultation can also be useful for mini projects, learning projects, internships, placement preparation and personal development projects.",
  },
  {
    question: "What happens after I submit my requirement?",
    answer:
      "Your requirement can be reviewed so the appropriate next step can be discussed based on your project needs.",
  },
];

const ConsultationFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600">
            Frequently Asked Questions
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Have Questions?
            <span className="text-blue-600"> We Have Answers.</span>
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-slate-900 sm:text-base">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-5 pb-5 pt-4">
                    <p className="text-sm leading-6 text-slate-500">
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

export default ConsultationFAQ;