import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Lock,
  Database,
  UserCheck,
  Mail,
  FileText,
  ArrowRight,
} from "lucide-react";
import SEO from "../components/seo/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      <SEO
        title="Privacy Policy | SkillPilot"
        description="Read SkillPilot's Privacy Policy to understand how we collect, use, protect and manage personal information submitted through our website and services."
        canonical="https://skillpilot.in/privacy-policy"
        ogTitle="Privacy Policy | SkillPilot"
        ogDescription="Learn how SkillPilot handles personal information, enquiries, communication and data submitted through our website."
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
              Privacy Policy
            </span>
          </nav>

          <div className="max-w-3xl">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              <ShieldCheck className="h-4 w-4" />
              Your privacy matters to us
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Privacy
              <br />
              <span className="text-blue-400">
                Policy
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              This Privacy Policy explains how SkillPilot collects,
              uses, stores and protects information when you use our
              website, contact us, submit an enquiry or use our services.
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
                  Privacy
                </p>

                <h2 className="mt-3 text-xl font-bold text-slate-950">
                  Privacy Policy
                </h2>

                <div className="mt-6 space-y-3">

                  <a
                    href="#information-we-collect"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    Information We Collect
                  </a>

                  <a
                    href="#how-we-use-information"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    How We Use Information
                  </a>

                  <a
                    href="#information-sharing"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    Information Sharing
                  </a>

                  <a
                    href="#data-security"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    Data Security
                  </a>

                  <a
                    href="#cookies"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    Cookies
                  </a>

                  <a
                    href="#third-party-links"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    Third-Party Links
                  </a>

                  <a
                    href="#your-rights"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    Your Rights
                  </a>

                  <a
                    href="#contact-us"
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
                  Have a privacy question?
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  If you have questions about this policy or your
                  information, feel free to contact our team.
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

              {/* Introduction */}
              <section>
                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <FileText className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-950">
                      Introduction
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                      About this Privacy Policy
                    </p>
                  </div>

                </div>

                <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">

                  <p>
                    Welcome to SkillPilot. We respect your privacy and
                    are committed to protecting the personal information
                    you provide while using our website and services.
                  </p>

                  <p>
                    This Privacy Policy describes the types of
                    information we may collect, how we use that
                    information, how we protect it and the choices you
                    may have regarding your information.
                  </p>

                  <p>
                    By accessing or using the SkillPilot website, you
                    acknowledge that you have read and understood this
                    Privacy Policy.
                  </p>

                </div>
              </section>

              <div className="my-10 h-px bg-slate-100" />

              {/* =====================================================
                  INFORMATION WE COLLECT
              ===================================================== */}
              <section id="information-we-collect">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Database className="h-5 w-5" />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-950">
                    Information We Collect
                  </h2>

                </div>

                <div className="mt-6 space-y-6">

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Information you provide
                    </h3>

                    <p className="mt-2 text-base leading-8 text-slate-600">
                      When you contact us or submit an enquiry, we may
                      collect information such as your name, email
                      address, phone number, location details, project
                      requirements and any other information you
                      voluntarily provide.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Project information
                    </h3>

                    <p className="mt-2 text-base leading-8 text-slate-600">
                      If you contact us regarding a project, we may
                      collect information about your project type,
                      technical requirements, academic requirements,
                      preferred technologies, timelines and related
                      information necessary to understand your request.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Automatically collected information
                    </h3>

                    <p className="mt-2 text-base leading-8 text-slate-600">
                      When you visit our website, certain technical
                      information may be collected automatically, such
                      as browser type, device information, approximate
                      location, pages visited, referring pages and
                      general usage information.
                    </p>
                  </div>

                </div>

              </section>

              <div className="my-10 h-px bg-slate-100" />

              {/* =====================================================
                  HOW WE USE
              ===================================================== */}
              <section id="how-we-use-information">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <UserCheck className="h-5 w-5" />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-950">
                    How We Use Your Information
                  </h2>

                </div>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  We may use the information we collect for purposes
                  including:
                </p>

                <ul className="mt-5 space-y-3">

                  {[
                    "Responding to your enquiries and requests.",
                    "Understanding your project or service requirements.",
                    "Providing project guidance, consultation or development services.",
                    "Communicating with you regarding your enquiry or project.",
                    "Improving our website, services and user experience.",
                    "Maintaining website security and preventing misuse.",
                    "Managing internal records and business operations.",
                    "Complying with applicable legal or regulatory requirements.",
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
                  INFORMATION SHARING
              ===================================================== */}
              <section id="information-sharing">

                <h2 className="text-2xl font-bold text-slate-950">
                  Information Sharing
                </h2>

                <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">

                  <p>
                    SkillPilot does not sell or rent your personal
                    information to third parties.
                  </p>

                  <p>
                    We may share limited information with trusted
                    service providers when reasonably necessary to
                    operate our website, provide requested services,
                    communicate with you or maintain our technical
                    infrastructure.
                  </p>

                  <p>
                    Information may also be disclosed when required by
                    applicable law, legal proceedings, government
                    authorities or to protect the rights, safety and
                    security of SkillPilot, our users or others.
                  </p>

                </div>

              </section>

              <div className="my-10 h-px bg-slate-100" />

              {/* =====================================================
                  DATA SECURITY
              ===================================================== */}
              <section id="data-security">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Lock className="h-5 w-5" />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-950">
                    Data Security
                  </h2>

                </div>

                <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">

                  <p>
                    We take reasonable technical and organizational
                    measures to protect the information submitted to
                    SkillPilot against unauthorized access, misuse,
                    alteration, disclosure or destruction.
                  </p>

                  <p>
                    However, no internet transmission or electronic
                    storage system can be guaranteed to be completely
                    secure. Therefore, while we work to protect your
                    information, we cannot guarantee absolute security.
                  </p>

                </div>

              </section>

              <div className="my-10 h-px bg-slate-100" />

              {/* =====================================================
                  DATA RETENTION
              ===================================================== */}
              <section>

                <h2 className="text-2xl font-bold text-slate-950">
                  Data Retention
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  We retain personal information only for as long as
                  reasonably necessary for the purposes described in
                  this Privacy Policy, including providing services,
                  maintaining business records, resolving disputes,
                  enforcing agreements and meeting applicable legal
                  obligations.
                </p>

              </section>

              <div className="my-10 h-px bg-slate-100" />

              {/* =====================================================
                  COOKIES
              ===================================================== */}
              <section id="cookies">

                <h2 className="text-2xl font-bold text-slate-950">
                  Cookies and Similar Technologies
                </h2>

                <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">

                  <p>
                    SkillPilot may use cookies and similar technologies
                    to support website functionality, understand
                    website usage and improve the overall user
                    experience.
                  </p>

                  <p>
                    You may be able to control or disable cookies
                    through your browser settings. Disabling certain
                    cookies may affect some website functionality.
                  </p>

                </div>

              </section>

              <div className="my-10 h-px bg-slate-100" />

              {/* =====================================================
                  THIRD PARTY LINKS
              ===================================================== */}
              <section id="third-party-links">

                <h2 className="text-2xl font-bold text-slate-950">
                  Third-Party Links
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  Our website may contain links to third-party
                  websites, services or platforms. SkillPilot is not
                  responsible for the privacy practices, content or
                  security of third-party websites. We recommend
                  reviewing the privacy policies of those websites
                  before providing them with personal information.
                </p>

              </section>

              <div className="my-10 h-px bg-slate-100" />

              {/* =====================================================
                  CHILDREN
              ===================================================== */}
              <section>

                <h2 className="text-2xl font-bold text-slate-950">
                  Children's Privacy
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  Our website and services are intended for users who
                  can legally use such services under applicable law.
                  We do not knowingly request personal information from
                  children in circumstances where such collection is
                  prohibited by applicable law.
                </p>

              </section>

              <div className="my-10 h-px bg-slate-100" />

              {/* =====================================================
                  YOUR RIGHTS
              ===================================================== */}
              <section id="your-rights">

                <h2 className="text-2xl font-bold text-slate-950">
                  Your Rights and Choices
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  Depending on applicable law, you may have rights
                  relating to your personal information, including the
                  ability to request access, correction or deletion of
                  certain information.
                </p>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  If you would like to make a privacy-related request,
                  please contact us using the details provided below.
                </p>

              </section>

              <div className="my-10 h-px bg-slate-100" />

              {/* =====================================================
                  POLICY CHANGES
              ===================================================== */}
              <section>

                <h2 className="text-2xl font-bold text-slate-950">
                  Changes to This Privacy Policy
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  We may update this Privacy Policy from time to time
                  to reflect changes in our services, technology,
                  business practices or applicable legal requirements.
                  Any updated version will be published on this page
                  with a revised "Last updated" date.
                </p>

              </section>

              <div className="my-10 h-px bg-slate-100" />

              {/* =====================================================
                  CONTACT
              ===================================================== */}
              <section id="contact-us">

                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <Mail className="h-5 w-5" />
                  </div>

                  <h2 className="mt-5 text-2xl font-bold text-slate-950">
                    Contact Us
                  </h2>

                  <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                    If you have any questions about this Privacy
                    Policy, your personal information or how SkillPilot
                    handles your information, you can contact us.
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
            <ShieldCheck className="h-5 w-5" />
          </div>

          <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Your information matters.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            We aim to handle your information responsibly and
            transparently while providing SkillPilot's services.
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

export default PrivacyPolicy;