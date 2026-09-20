import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  FileText,
  ShieldCheck,
  UserCheck,
  BriefcaseBusiness,
  AlertCircle,
  Mail,
} from "lucide-react";
import SEO from "../components/seo/SEO";

const Terms = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      <SEO
        title="Terms & Conditions | SkillPilot"
        description="Read SkillPilot's Terms and Conditions governing the use of our website, project development services, project guidance, consultation and related services."
        canonical="https://skillpilot.in/terms"
        ogTitle="Terms & Conditions | SkillPilot"
        ogDescription="Review the terms and conditions applicable to the use of SkillPilot's website, services, project guidance and consultation."
      />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-950 text-white">

        {/* Background decoration */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-sm"
          >
            <Link
              to="/"
              className="text-slate-400 transition-colors hover:text-white"
            >
              Home
            </Link>

            <span className="text-slate-600">/</span>

            <span className="font-medium text-white">
              Terms & Conditions
            </span>
          </nav>

          <div className="max-w-3xl">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              <FileText className="h-4 w-4" />
              Please read before using our services
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Terms &
              <br />
              <span className="text-blue-400">
                Conditions
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              These Terms & Conditions explain the rules and
              responsibilities that apply when you access the SkillPilot
              website or use our project development, consultation,
              guidance and related services.
            </p>

            <p className="mt-5 text-sm text-slate-400">
              Last updated: September 20, 2026
            </p>

          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <main className="py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">

            {/* =====================================================
                LEFT SIDEBAR
            ===================================================== */}
            <aside className="lg:sticky lg:top-24 lg:self-start">

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                  Legal
                </p>

                <h2 className="mt-3 text-xl font-bold text-slate-950">
                  Terms & Conditions
                </h2>

                <div className="mt-6 space-y-3">

                  <a
                    href="#acceptance"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    Acceptance of Terms
                  </a>

                  <a
                    href="#services"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    Our Services
                  </a>

                  <a
                    href="#user-responsibilities"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    User Responsibilities
                  </a>

                  <a
                    href="#project-work"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    Project Work
                  </a>

                  <a
                    href="#payments"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    Payments & Fees
                  </a>

                  <a
                    href="#intellectual-property"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    Intellectual Property
                  </a>

                  <a
                    href="#disclaimer"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    Disclaimer
                  </a>

                  <a
                    href="#limitation"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    Limitation of Liability
                  </a>

                  <a
                    href="#termination"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    Termination
                  </a>

                  <a
                    href="#changes"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    Changes to Terms
                  </a>

                  <a
                    href="#contact"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    Contact Us
                  </a>

                </div>

              </div>

              {/* Contact box */}
              <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-6">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Mail className="h-5 w-5" />
                </div>

                <h3 className="mt-4 font-semibold text-slate-950">
                  Have a question?
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  If you have questions about these terms or our
                  services, contact the SkillPilot team.
                </p>

                <a
                  href="mailto:support@skillpilot.in"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  support@skillpilot.in
                  <ArrowRight className="h-4 w-4" />
                </a>

              </div>

            </aside>

            {/* =====================================================
                CONTENT
            ===================================================== */}
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-12">

              {/* =====================================================
                  INTRODUCTION
              ===================================================== */}
              <section id="acceptance">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-950">
                      Acceptance of Terms
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                      Agreement between you and SkillPilot
                    </p>
                  </div>

                </div>

                <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">

                  <p>
                    Welcome to SkillPilot. By accessing or using our
                    website, submitting an enquiry or using any of our
                    services, you agree to be bound by these Terms &
                    Conditions.
                  </p>

                  <p>
                    If you do not agree with any part of these terms,
                    please do not use the website or our services.
                  </p>

                  <p>
                    These terms should be read together with our
                    Privacy Policy and any additional terms that may
                    apply to specific services.
                  </p>

                </div>

              </section>

              <div className="my-10 h-px bg-slate-100" />

              {/* =====================================================
                  SERVICES
              ===================================================== */}
              <section id="services">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-950">
                    Our Services
                  </h2>

                </div>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  SkillPilot provides services and guidance related to
                  software projects, academic projects, technology
                  development and student career support. Services may
                  include:
                </p>

                <ul className="mt-5 space-y-3">

                  {[
                    "Final year and academic project development support.",
                    "Web application and website development.",
                    "Mobile application development.",
                    "AI and machine learning project development.",
                    "Data science and programming projects.",
                    "Project consultation and technical guidance.",
                    "Project documentation and development guidance.",
                    "Career, placement and technical preparation guidance.",
                    "Other technology-related services agreed between the client and SkillPilot.",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-base leading-7 text-slate-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}

                </ul>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  The exact scope, features, deliverables, timeline and
                  applicable fees may vary depending on the specific
                  project or service.
                </p>

              </section>

              <div className="my-10 h-px bg-slate-100" />

              {/* =====================================================
                  USER RESPONSIBILITIES
              ===================================================== */}
              <section id="user-responsibilities">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <UserCheck className="h-5 w-5" />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-950">
                    User Responsibilities
                  </h2>

                </div>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  When using SkillPilot's website or services, you agree
                  to provide accurate information and use the services
                  responsibly and lawfully.
                </p>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  You agree not to:
                </p>

                <ul className="mt-5 space-y-3">

                  {[
                    "Provide false, misleading or fraudulent information.",
                    "Use the website for unlawful or unauthorized purposes.",
                    "Attempt to gain unauthorized access to our systems or services.",
                    "Interfere with the operation or security of the website.",
                    "Copy, reproduce or misuse SkillPilot's website content without permission.",
                    "Use our services in a manner that violates applicable laws or regulations.",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-base leading-7 text-slate-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}

                </ul>

              </section>

              <div className="my-10 h-px bg-slate-100" />

              {/* =====================================================
                  PROJECT WORK
              ===================================================== */}
              <section id="project-work">

                <h2 className="text-2xl font-bold text-slate-950">
                  Project Development & Guidance
                </h2>

                <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">

                  <p>
                    Project requirements, technologies, features,
                    deliverables and timelines will be discussed and
                    agreed upon before development begins where
                    applicable.
                  </p>

                  <p>
                    Project timelines may depend on the complexity of
                    the requirements, availability of required
                    information, revisions and other factors outside
                    SkillPilot's reasonable control.
                  </p>

                  <p>
                    Students and clients are responsible for providing
                    accurate project requirements, academic guidelines,
                    technical specifications and other information
                    required for completing the agreed work.
                  </p>

                  <p>
                    Where project guidance is provided for academic
                    purposes, the user remains responsible for
                    understanding, reviewing and appropriately using
                    the resulting work according to their institution's
                    academic rules and policies.
                  </p>

                </div>

              </section>

              <div className="my-10 h-px bg-slate-100" />

              {/* =====================================================
                  PAYMENTS
              ===================================================== */}
              <section id="payments">

                <h2 className="text-2xl font-bold text-slate-950">
                  Payments & Fees
                </h2>

                <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">

                  <p>
                    Fees for services will be communicated before the
                    applicable service or project is started.
                  </p>

                  <p>
                    Depending on the project, payment may be requested
                    fully or in agreed stages. The payment structure
                    will depend on the scope and nature of the service.
                  </p>

                  <p>
                    Any additional requirements, features or changes
                    outside the agreed scope may result in additional
                    charges, which will be communicated before such
                    work is undertaken where reasonably possible.
                  </p>

                  <p>
                    Payment terms, refund conditions or cancellation
                    conditions applicable to a particular project may
                    be separately communicated and agreed with the
                    client.
                  </p>

                </div>

              </section>

              <div className="my-10 h-px bg-slate-100" />

              {/* =====================================================
                  INTELLECTUAL PROPERTY
              ===================================================== */}
              <section id="intellectual-property">

                <h2 className="text-2xl font-bold text-slate-950">
                  Intellectual Property
                </h2>

                <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">

                  <p>
                    Unless otherwise agreed in writing, SkillPilot
                    retains ownership of its website design, branding,
                    original content, reusable components, internal
                    tools, frameworks, templates and other materials
                    developed independently of a specific client
                    project.
                  </p>

                  <p>
                    The ownership and permitted use of project-specific
                    deliverables may depend on the agreement between
                    SkillPilot and the client.
                  </p>

                  <p>
                    Users must not reproduce, distribute, resell or
                    commercially exploit SkillPilot's proprietary
                    materials without appropriate authorization.
                  </p>

                </div>

              </section>

              <div className="my-10 h-px bg-slate-100" />

              {/* =====================================================
                  THIRD PARTY
              ===================================================== */}
              <section>

                <h2 className="text-2xl font-bold text-slate-950">
                  Third-Party Services & Technologies
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  Projects may use third-party services, APIs,
                  libraries, hosting providers, cloud platforms,
                  payment providers or other technologies. Their
                  availability and operation may be subject to the
                  respective provider's terms and policies.
                </p>

              </section>

              <div className="my-10 h-px bg-slate-100" />

              {/* =====================================================
                  DISCLAIMER
              ===================================================== */}
              <section id="disclaimer">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <AlertCircle className="h-5 w-5" />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-950">
                    Disclaimer
                  </h2>

                </div>

                <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">

                  <p>
                    SkillPilot aims to provide accurate and useful
                    information and services; however, we do not
                    guarantee that all website content will always be
                    complete, current or error-free.
                  </p>

                  <p>
                    Project guidance, educational resources and career
                    information are provided for informational and
                    educational purposes and should not be considered
                    a guarantee of academic results, employment,
                    placement or business outcomes.
                  </p>

                  <p>
                    We do not guarantee that a particular project,
                    technology, strategy or service will produce a
                    specific result.
                  </p>

                </div>

              </section>

              <div className="my-10 h-px bg-slate-100" />

              {/* =====================================================
                  LIABILITY
              ===================================================== */}
              <section id="limitation">

                <h2 className="text-2xl font-bold text-slate-950">
                  Limitation of Liability
                </h2>

                <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">

                  <p>
                    To the extent permitted by applicable law, SkillPilot
                    will not be responsible for indirect, incidental,
                    special or consequential losses arising from the
                    use of our website or services.
                  </p>

                  <p>
                    SkillPilot will also not be responsible for delays
                    or interruptions caused by circumstances beyond our
                    reasonable control, including third-party service
                    failures, infrastructure issues, internet outages
                    or other external events.
                  </p>

                </div>

              </section>

              <div className="my-10 h-px bg-slate-100" />

              {/* =====================================================
                  TERMINATION
              ===================================================== */}
              <section id="termination">

                <h2 className="text-2xl font-bold text-slate-950">
                  Termination
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  SkillPilot may suspend or terminate access to its
                  website or services where reasonably necessary,
                  including in cases involving misuse, violation of
                  these terms, unlawful activity or other circumstances
                  requiring termination.
                </p>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  Any outstanding obligations that are intended by
                  their nature to continue after termination will
                  remain applicable.
                </p>

              </section>

              <div className="my-10 h-px bg-slate-100" />

              {/* =====================================================
                  CHANGES
              ===================================================== */}
              <section id="changes">

                <h2 className="text-2xl font-bold text-slate-950">
                  Changes to These Terms
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  We may update these Terms & Conditions from time to
                  time to reflect changes in our services, business
                  practices, technology or applicable legal
                  requirements.
                </p>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  Updated terms will be published on this page along
                  with a revised "Last updated" date. Continued use of
                  the website after an update may constitute acceptance
                  of the revised terms to the extent permitted by
                  applicable law.
                </p>

              </section>

              <div className="my-10 h-px bg-slate-100" />

              {/* =====================================================
                  GOVERNING LAW
              ===================================================== */}
              <section>

                <h2 className="text-2xl font-bold text-slate-950">
                  Governing Law
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  These Terms & Conditions shall be interpreted and
                  governed in accordance with the applicable laws of
                  India, subject to the jurisdiction and legal
                  requirements applicable to the parties and the
                  relevant transaction.
                </p>

              </section>

              <div className="my-10 h-px bg-slate-100" />

              {/* =====================================================
                  CONTACT
              ===================================================== */}
              <section id="contact">

                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <Mail className="h-5 w-5" />
                  </div>

                  <h2 className="mt-5 text-2xl font-bold text-slate-950">
                    Contact Us
                  </h2>

                  <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                    If you have any questions regarding these Terms &
                    Conditions or our services, please contact the
                    SkillPilot team.
                  </p>

                  <div className="mt-6 rounded-xl border border-blue-100 bg-white p-5">

                    <p className="text-sm font-semibold text-slate-900">
                      SkillPilot
                    </p>

                    <a
                      href="mailto:support@skillpilot.in"
                      className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                      support@skillpilot.in
                      <ArrowRight className="h-4 w-4" />
                    </a>

                  </div>

                </div>

              </section>

            </article>

          </div>

        </div>

      </main>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}
      <section className="border-t border-slate-200 bg-white">

        <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:px-8">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <FileText className="h-5 w-5" />
          </div>

          <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Have questions about our terms?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            If anything about our services or these terms is unclear,
            feel free to contact SkillPilot before proceeding.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Contact SkillPilot
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>

      </section>

    </div>
  );
};

export default Terms;