import React, { useState } from "react";
import {
  ChevronDown,
  MessageCircleQuestion,
} from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What kind of projects can I build with SkillPilot?",
    answer:
      "SkillPilot supports a wide range of academic and practical projects including web development, mobile applications, AI and machine learning, data science, Python, Java, MERN Stack, IoT, cybersecurity, cloud and DevOps projects.",
  },
  {
    question: "Can you help me choose a project idea?",
    answer:
      "Yes. You can discuss your course, interests, technical skills and requirements with us. Based on these details, you can plan a project that matches your academic and learning goals.",
  },
  {
    question: "Do you provide final-year project guidance?",
    answer:
      "Yes. Final-year students can get guidance covering project selection, planning, technology selection, development, documentation, presentation preparation and technical understanding.",
  },
  {
    question: "Can I get help if I already have a project?",
    answer:
      "Yes. If you already have a project, you can get technical guidance for development, debugging, architecture, feature implementation, documentation or other project-related challenges.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "Projects can involve technologies such as React, Node.js, MongoDB, Python, Java, React Native, AI/ML tools, cloud platforms, databases and other modern development technologies depending on the project requirements.",
  },
  {
    question: "Do you provide project documentation?",
    answer:
      "Yes. Documentation support can include project reports, technical documentation, diagrams, presentation material and other academic project requirements.",
  },
  {
    question: "How do I start my project?",
    answer:
      "You can start by sharing your project idea or requirement through the contact or consultation form. The requirement can then be discussed to determine the appropriate next steps.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? -1 : index
    );
  };

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <MessageCircleQuestion className="h-4 w-4" />
            Frequently Asked Questions
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Questions Students
            <span className="block text-blue-600">
              Often Ask
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Find quick answers to common questions about projects,
            development, guidance and documentation.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-14 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-blue-200 bg-blue-50/40 shadow-sm"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6"
                >
                  <span
                    className={`text-sm font-semibold sm:text-base ${
                      isOpen
                        ? "text-blue-700"
                        : "text-slate-900"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                      isOpen
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-blue-100 px-5 pb-5 pt-4 sm:px-6">
                      <p className="max-w-3xl text-sm leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Help Card */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Still have a question?
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Tell us what you need and we&apos;ll help you figure out
                the next step.
              </p>
            </div>

          <Link
          to={"/contact"}
          >
            <button
              type="button"
              className="shrink-0 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700"
            >
              Contact Us
            </button>
          
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;