import React, { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    Code2,
    GraduationCap,
    Lightbulb,
    MessageCircle,
    Sparkles,
    BookOpen,
    Users,
    Workflow,
    HelpCircle,
    Tags,
    Link2,
    Image as ImageIcon,
    Quote,
    Rocket,
    ShieldCheck,
    Layers,
    ChevronLeft,
    ChevronRight,
     Briefcase,
  Clock,
  Target,
  DollarSign,
  Info,
  BarChart3,
  AlertTriangle,
  Download,
} from "lucide-react";

import projectCategories from "../../data/projectCategories";
import RelatedContent from "./RelatedContent";
import SEO from "../../components/seo/SEO";

const ProjectDetailPage = () => {
    const { slug } = useParams();
    const scrollRef = useRef(null);

    const project = projectCategories.find((item) => item.slug === slug);

    const relatedServiceLinks = (project?.internalLinking || [])
    .map((serviceName) => {
        return projectCategories.find(
            (item) =>
                item.title.toLowerCase() === serviceName.toLowerCase()
        );
    })
    .filter(Boolean);

    // Update document title + meta description for SEO
   

    // Scroll handlers for the related services carousel
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -340, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
        }
    };

    // If slug does not exist
    if (!project) {
        return (
            <main className="min-h-screen bg-white">
                <section className="flex min-h-[70vh] items-center justify-center px-6">
                    <div className="text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                            <Code2 className="h-7 w-7" />
                        </div>

                        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-950">
                            Project Category Not Found
                        </h1>

                        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
                            The project category you are looking for does not exist or may
                            have been moved.
                        </p>

                        <Link
                            to="/projects"
                            className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Projects
                        </Link>
                    </div>
                </section>
            </main>
        );
    }

    // All 20 categories for the scrollable row
    const allCategories = projectCategories;

    return (
        <main className="min-h-screen bg-white text-slate-900">
            <SEO
    title={project.seoTitle || project.title}
    description={
        project.metaDescription ||
        project.description ||
        `Explore ${project.title} projects, development services, guidance and practical project solutions with SkillPilot.`
    }
    canonical={`https://skillpilot.in/projects/${project.slug}`}
    ogTitle={project.seoTitle || project.title}
    ogDescription={
        project.metaDescription ||
        project.description ||
        `Explore ${project.title} projects, development services, guidance and practical project solutions with SkillPilot.`
    }
/>
            {/* =========================================================
          HERO
      ========================================================= */}
            <section className="relative overflow-hidden bg-slate-950">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-[-180px] top-[-180px] h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-3xl" />
                    <div className="absolute right-[-150px] top-[100px] h-[400px] w-[400px] rounded-full bg-indigo-500/20 blur-3xl" />
                    <div className="absolute bottom-[-200px] left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-8 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24 lg:pt-10">
                    <nav
    aria-label="Breadcrumb"
    className="mb-6 flex flex-wrap items-center gap-2 text-sm"
>
    <Link
        to="/"
        className="text-slate-400 transition-colors hover:text-white"
    >
        Home
    </Link>

    <span className="text-slate-600">/</span>

    <Link
        to="/projects"
        className="text-slate-400 transition-colors hover:text-white"
    >
        Projects
    </Link>

    <span className="text-slate-600">/</span>

    <span className="font-medium text-white">
        {project.title}
    </span>
</nav>
                    <Link
                        to="/projects"
                        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                        All Projects
                    </Link>

                    <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
                        <div style={{ animation: "detailReveal 0.8s ease-out both" }}>
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                                <Sparkles className="h-4 w-4" />
                                Project Domain
                            </div>

                            <p className="max-w-3xl text-4xl  leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-5xl">
                                {project.h1 || project.title}
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-300">
                                    <Code2 className="h-4 w-4 text-blue-400" />
                                    Project Development
                                </div>

                                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-300">
                                    <GraduationCap className="h-4 w-4 text-blue-400" />
                                    Student Projects
                                </div>
                            </div>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                <Link
                                    to="/consultation"
                                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
                                >
                                    Start Your Project
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>

                                <a
                                    href="tel:+916396283875"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10"
                                >
                                    <MessageCircle className="h-4 w-4 text-blue-400" />
                                    Talk to an Expert
                                </a>
                            </div>
                        </div>

                        <div
                            className="relative"
                            style={{ animation: "imageReveal 0.9s ease-out 150ms both" }}
                        >
                            <div className="absolute -inset-5 rounded-[36px] bg-blue-500/10 blur-2xl" />

                            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/30">
                                <div className="relative overflow-hidden rounded-[22px]">
                                    <img
                                        src={project.image}
                                        alt={
                                            project.imageAltText?.[0] || `${project.title} services`
                                        }
                                        className="h-[340px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[400px]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          ABOUT THIS DOMAIN
      ========================================================= */}
            <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
                <div className="pointer-events-none absolute right-[-180px] top-[100px] h-[400px] w-[400px] rounded-full bg-blue-50 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                                About This Domain
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                                Build practical projects with the right technology.
                            </h2>
                        </div>

                        <div>
                            <p className="text-base leading-8 text-slate-600 sm:text-lg">
                                {project.description}
                            </p>

                          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
    Whether you are working on an academic project,{" "}
    <Link
        to="/projects/final-year-projects"
        className="font-semibold text-blue-600 underline decoration-blue-200 underline-offset-4 transition-colors hover:text-blue-700"
    >
        final-year project
    </Link>
    , portfolio project or a real-world application, this domain can be
    adapted according to your requirements, skill level and project goals.
    You can also explore related areas such as{" "}
    <Link
        to="/projects/web-development"
        className="font-semibold text-blue-600 underline decoration-blue-200 underline-offset-4 transition-colors hover:text-blue-700"
    >
        Web Development
    </Link>
    ,{" "}
    <Link
        to="/projects/mobile-app-development"
        className="font-semibold text-blue-600 underline decoration-blue-200 underline-offset-4 transition-colors hover:text-blue-700"
    >
        Mobile App Development
    </Link>{" "}
    and other project domains based on your requirements.
</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          WHAT IS THIS SERVICE
      ========================================================= */}
            <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                                <BookOpen className="h-4 w-4" />
                                Overview
                            </div>

                            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                                What is {project.title}?
                            </h2>
                        </div>

                        <div>
                            <p className="text-base leading-8 text-slate-600 sm:text-lg">
                                {project.whatIsService || project.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {relatedServiceLinks.length > 0 && (
    <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                    Related Services
                </p>

                <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                    Explore Related Project Domains
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-600">
                    Depending on your project requirements, you can also
                    explore these related domains for development,
                    implementation and project guidance.
                </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
                {relatedServiceLinks.map((service) => (
                    <Link
                        key={service.id}
                        to={`/projects/${service.slug}`}
                        className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                        {service.title}

                        <ArrowUpRight
                            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </Link>
                ))}
            </div>
        </div>
    </section>
)}

            {/* =========================================================
          BENEFITS
      ========================================================= */}
            {project.benefits && project.benefits.length > 0 && (
                <section className="bg-white py-20 sm:py-24 lg:py-28">
                    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
                        <div className="mx-auto max-w-3xl text-center">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                                <ShieldCheck className="h-5 w-5" />
                            </div>

                            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                                Key Advantages
                            </p>

                            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                                Benefits
                            </h2>

                            <p className="mt-4 text-base leading-7 text-slate-500">
                                Understand the value this service brings to your project and
                                learning goals.
                            </p>
                        </div>

                        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {project.benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="group rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
                                    style={{
                                        animation: `projectCardReveal 0.7s ease-out ${index * 80
                                            }ms both`,
                                    }}
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                        <CheckCircle2 className="h-5 w-5" />
                                    </div>

                                    <p className="mt-5 text-sm leading-6 text-slate-600">
                                        {benefit}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}
            {project.whyChooseUs && (
                <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
                    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
                        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-white to-blue-50/40">
                            <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:p-16">
                                <div>
                                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                                        <Users className="h-4 w-4" />
                                        Why Choose Us
                                    </div>

                                    <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                                        A team that cares about your outcome.
                                    </h2>

                                    <div className="mt-8 flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                                            <Quote className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900">
                                                Our Commitment
                                            </p>
                                            <p className="text-xs text-slate-500">
                                                Quality, clarity and support at every step.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-base leading-8 text-slate-600 sm:text-lg">
                                        {project.whyChooseUs}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* =========================================================
          PROCESS / HOW IT WORKS
      ========================================================= */}
            {project.process && project.process.length > 0 && (
                <section className="bg-slate-950 py-20 sm:py-24 lg:py-28">
                    <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
                        <div className="mx-auto max-w-3xl text-center">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                                <Workflow className="h-5 w-5" />
                            </div>

                            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                                Our Approach
                            </p>

                            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                                How it works
                            </h2>

                            <p className="mt-4 text-base leading-7 text-slate-400">
                                A clear, step-by-step process to move from idea to a working
                                result.
                            </p>
                        </div>

                        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {project.process.map((step, index) => (
                                <div
                                    key={index}
                                    className="group relative rounded-[24px] border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/10"
                                    style={{
                                        animation: `projectCardReveal 0.7s ease-out ${index * 80
                                            }ms both`,
                                    }}
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/30">
                                        {step.step}
                                    </div>

                                    <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">
                                        {step.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-400">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* =========================================================
          WHAT YOU CAN BUILD
      ========================================================= */}
            <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                            <Lightbulb className="h-5 w-5" />
                        </div>

                        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                            Project Possibilities
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                            What you can build
                        </h2>

                        <p className="mt-4 text-base leading-7 text-slate-500">
                            Create projects that are practical, presentable and aligned with
                            your academic or career objectives.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-6 md:grid-cols-3">
                        {[
                            {
                                title: "Academic Projects",
                                text: "Build structured projects suitable for college assignments, mini projects and final-year submissions.",
                            },
                            {
                                title: "Portfolio Projects",
                                text: "Create polished projects that demonstrate your development skills and technical understanding.",
                            },
                            {
                                title: "Real-World Applications",
                                text: "Work on practical applications with meaningful features, scalable architecture and modern technologies.",
                            },
                        ].map((item, index) => (
                            <div
                                key={item.title}
                                className="group rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
                                style={{
                                    animation: `projectCardReveal 0.7s ease-out ${index * 120
                                        }ms both`,
                                }}
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                    <CheckCircle2 className="h-5 w-5" />
                                </div>

                                <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-slate-500">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
          FAQs
      ========================================================= */}
            {project.faqs && project.faqs.length > 0 && (
                <section className="bg-white py-20 sm:py-24 lg:py-28">
                    <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
                        <div className="mx-auto max-w-3xl text-center">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                                <HelpCircle className="h-5 w-5" />
                            </div>

                            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                                Common Questions
                            </p>

                            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                                Frequently Asked Questions
                            </h2>

                            <p className="mt-4 text-base leading-7 text-slate-500">
                                Quick answers to help you understand how we work and what to
                                expect.
                            </p>
                        </div>

                        <div className="mt-14 space-y-4">
                            {project.faqs.map((faq, index) => (
                                <details
                                    key={index}
                                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 open:border-blue-200 open:shadow-md hover:border-blue-200"
                                >
                                    <summary className="flex cursor-pointer list-none items-start gap-4">
                                        <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-700 group-open:bg-blue-600 group-open:text-white">
                                            {index + 1}
                                        </span>

                                        <span className="flex-1 text-base font-semibold text-slate-900 sm:text-lg">
                                            {faq.question}
                                        </span>

                                        <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-transform duration-300 group-open:rotate-45 group-open:border-blue-300 group-open:text-blue-600">
                                            +
                                        </span>
                                    </summary>

                                    <p className="mt-4 pl-11 text-sm leading-7 text-slate-600 sm:text-base">
                                        {faq.answer}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <RelatedContent projectSlug={slug} />
            {/* =========================================================
    REAL PROJECTS
========================================================= */}
{project.realProjects && project.realProjects.length > 0 && (
  <section className="bg-white py-20 sm:py-24 lg:py-28">
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
          <Briefcase className="h-5 w-5" />
        </div>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
          Real Work
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Projects We've Built
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-500">
          Real examples of projects we've delivered for clients like you.
        </p>
      </div>

      <div className="mt-14 space-y-8">
        {project.realProjects.map((proj, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm"
            style={{ animation: `projectCardReveal 0.7s ease-out ${index * 100}ms both` }}
          >
            <div className="grid gap-0 lg:grid-cols-[1fr_1.5fr]">
              <div className="bg-slate-950 p-8 text-white">
                <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
                  Project {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{proj.name}</h3>
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Users className="mt-0.5 h-4 w-4 flex-none text-blue-400" />
                    <div>
                      <p className="text-slate-400">Client</p>
                      <p className="font-medium">{proj.client}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="mt-0.5 h-4 w-4 flex-none text-blue-400" />
                    <div>
                      <p className="text-slate-400">Duration</p>
                      <p className="font-medium">{proj.duration}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-wider text-slate-400">Tech Stack</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {proj.techStack.map((tech, i) => (
                      <span key={i} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-500">
                      <Target className="h-4 w-4 text-red-500" /> Challenge
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{proj.challenge}</p>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-500">
                      <Lightbulb className="h-4 w-4 text-amber-500" /> Solution
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{proj.solution}</p>
                  </div>
                  <div className="rounded-2xl border border-green-100 bg-green-50/60 p-4">
                    <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-green-700">
                      <CheckCircle2 className="h-4 w-4" /> Result
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-green-800">{proj.result}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)}

{/* =========================================================
    PRICING
========================================================= */}
{project.pricing && (
  <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
          <DollarSign className="h-5 w-5" />
        </div>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
          Transparent Pricing
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Pricing & Packages
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-500">
          Clear pricing based on project scope. No hidden charges.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {project.pricing.packages.map((pkg, index) => (
          <div
            key={index}
            className={`rounded-[28px] border p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
              index === 1
                ? "border-blue-300 bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-blue-600/20"
                : "border-slate-200 bg-white hover:border-blue-200"
            }`}
            style={{ animation: `projectCardReveal 0.7s ease-out ${index * 100}ms both` }}
          >
            {index === 1 && (
              <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
                Most Popular
              </span>
            )}
            <h3 className={`mt-3 text-2xl font-semibold tracking-tight ${index === 1 ? "text-white" : "text-slate-950"}`}>
              {pkg.name}
            </h3>
            <p className={`mt-2 text-sm ${index === 1 ? "text-blue-100" : "text-slate-500"}`}>
              {pkg.bestFor}
            </p>
            <div className="mt-6">
              <p className={`text-3xl font-bold ${index === 1 ? "text-white" : "text-slate-950"}`}>
                {pkg.price}
              </p>
              <p className={`mt-1 text-sm ${index === 1 ? "text-blue-100" : "text-slate-500"}`}>
                Timeline: {pkg.timeline}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[24px] border border-green-200 bg-green-50/50 p-8">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-green-800">
            <CheckCircle2 className="h-5 w-5" /> What's Included
          </h3>
          <ul className="mt-4 space-y-2">
            {project.pricing.included.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-green-800">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[24px] border border-amber-200 bg-amber-50/50 p-8">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-amber-800">
            <Info className="h-5 w-5" /> Not Included
          </h3>
          <ul className="mt-4 space-y-2">
            {project.pricing.notIncluded.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-amber-800">
                <span className="mt-0.5 h-4 w-4 flex-none text-center">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
)}

{/* =========================================================
    TECHNOLOGIES
========================================================= */}
{project.technologies && (
  <section className="bg-white py-20 sm:py-24 lg:py-28">
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
          <Code2 className="h-5 w-5" />
        </div>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
          Our Tech Stack
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Technologies We Use
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-500">
          We choose the right tools for your project, not just what's trending.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(project.technologies).map(([category, items], index) => (
          <div
            key={category}
            className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl"
            style={{ animation: `projectCardReveal 0.7s ease-out ${index * 80}ms both` }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((tech, i) => (
                <span key={i} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)}

{/* =========================================================
    TIMELINE
========================================================= */}
{project.timeline && project.timeline.length > 0 && (
  <section className="bg-slate-950 py-20 sm:py-24 lg:py-28">
    <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
          <Clock className="h-5 w-5" />
        </div>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
          Timeline
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Typical Delivery Timeline
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-400">
          A clear week-by-week breakdown of what happens when.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {project.timeline.map((phase, index) => (
          <div
            key={index}
            className="rounded-[24px] border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/30 hover:bg-white/10"
            style={{ animation: `projectCardReveal 0.7s ease-out ${index * 80}ms both` }}
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                {phase.duration}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">{phase.phase}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{phase.deliverables}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)}

{/* =========================================================
    TEAM
========================================================= */}
{project.team && project.team.length > 0 && (
  <section className="bg-white py-20 sm:py-24 lg:py-28">
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
          <Users className="h-5 w-5" />
        </div>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
          Your Team
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Who Works On Your Project
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-500">
          A dedicated team handles every project. You'll know exactly who's working on what.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {project.team.map((member, index) => (
          <div
            key={index}
            className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl"
            style={{ animation: `projectCardReveal 0.7s ease-out ${index * 80}ms both` }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-950">{member.role}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)}

{/* =========================================================
    COMPARISON
========================================================= */}
{project.comparison && project.comparison.length > 0 && (
  <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
          <BarChart3 className="h-5 w-5" />
        </div>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
          Comparison
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          How We Compare
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-500">
          Quality of an agency, flexibility of a freelancer.
        </p>
      </div>

      <div className="mt-14 overflow-x-auto rounded-[24px] border border-slate-200 bg-white shadow-sm">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="p-4 text-left text-sm font-semibold text-slate-700">Feature</th>
              <th className="p-4 text-left text-sm font-semibold text-blue-700">Us</th>
              <th className="p-4 text-left text-sm font-semibold text-slate-700">Freelancers</th>
              <th className="p-4 text-left text-sm font-semibold text-slate-700">Large Agencies</th>
            </tr>
          </thead>
          <tbody>
            {project.comparison.map((row, index) => (
              <tr key={index} className="border-b border-slate-100 last:border-0">
                <td className="p-4 text-sm font-medium text-slate-900">{row.feature}</td>
                <td className="p-4 text-sm font-semibold text-blue-700">{row.us}</td>
                <td className="p-4 text-sm text-slate-600">{row.freelancers}</td>
                <td className="p-4 text-sm text-slate-600">{row.agencies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
)}

{/* =========================================================
    CASE STUDY
========================================================= */}
{project.caseStudy && (
  <section className="bg-white py-20 sm:py-24 lg:py-28">
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
      <div className="overflow-hidden rounded-[32px] bg-slate-950">
        <div className="relative px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute right-[-100px] top-[-120px] h-[350px] w-[350px] rounded-full bg-blue-600/20 blur-3xl" />
          
          <div className="relative">
            <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
              <BookOpen className="mr-2 h-4 w-4" /> Case Study
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {project.caseStudy.title}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400">
              {project.caseStudy.background}
            </p>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-red-400">
                  <Target className="h-4 w-4" /> The Challenge
                </h3>
                <ul className="mt-4 space-y-3">
                  {project.caseStudy.challenge.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-red-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-amber-400">
                  <Lightbulb className="h-4 w-4" /> Our Approach
                </h3>
                <ol className="mt-4 space-y-3">
                  {project.caseStudy.approach.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-amber-400">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-green-400/20 bg-green-500/10 p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-green-400">
                <CheckCircle2 className="h-4 w-4" /> Results
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.caseStudy.results.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm leading-6 text-green-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 border-l-4 border-blue-500 pl-6">
              <Quote className="h-6 w-6 text-blue-400" />
              <p className="mt-3 text-lg italic leading-8 text-white">
                "{project.caseStudy.testimonial.text}"
              </p>
              <p className="mt-4 text-sm font-semibold text-blue-300">
                — {project.caseStudy.testimonial.author}, {project.caseStudy.testimonial.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)}

{/* =========================================================
    COMMON MISTAKES
========================================================= */}
{project.commonMistakes && project.commonMistakes.length > 0 && (
  <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-600/20">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
          Avoid These
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Common Mistakes To Avoid
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-500">
          Learn from others' mistakes so you don't repeat them.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {project.commonMistakes.map((item, index) => (
          <div
            key={index}
            className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm"
            style={{ animation: `projectCardReveal 0.7s ease-out ${index * 80}ms both` }}
          >
            <h3 className="flex items-start gap-3 text-lg font-semibold text-slate-950">
              <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700">✕</span>
              {item.mistake}
            </h3>
            <div className="mt-4 space-y-3 pl-9">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-red-600">Problem</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.problem}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-green-600">Solution</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.solution}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)}

{/* =========================================================
    RESOURCES
========================================================= */}
{project.resources && project.resources.length > 0 && (
  <section className="bg-white py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
          <Download className="h-5 w-5" />
        </div>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
          Free Resources
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Helpful Downloads
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-500">
          No email required. Just useful content to help you plan better.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {project.resources.map((res, index) => (
          <a
            key={index}
            href={res.link}
            className="group rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            style={{ animation: `projectCardReveal 0.7s ease-out ${index * 80}ms both` }}
          >
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              {res.type}
            </span>
            <h3 className="mt-4 text-base font-semibold text-slate-950 group-hover:text-blue-700">
              {res.name}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">{res.description}</p>
            <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600">
              Download <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
)}

            {/* =========================================================
          SEMANTIC + RELATED KEYWORDS
      ========================================================= */}
            <section className="bg-slate-50 py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
                    <div className="grid gap-10 lg:grid-cols-2">
                        {project.semanticKeywords?.length > 0 && (
                            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                        <Tags className="h-5 w-5" />
                                    </div>

                                    <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                                        Semantic Keywords
                                    </h3>
                                </div>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.semanticKeywords.map((keyword, index) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-medium text-blue-700"
                                        >
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {project.relatedKeywords?.length > 0 && (
                            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                        <Layers className="h-5 w-5" />
                                    </div>

                                    <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                                        Related Keywords
                                    </h3>
                                </div>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.relatedKeywords.map((keyword, index) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3.5 py-1.5 text-xs font-medium text-indigo-700"
                                        >
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* =========================================================
          EXPLORE ALL SERVICES  (all 20 in one scrollable row)
      ========================================================= */}
            <section className="bg-white py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
                    {/* Header + Arrows */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                                <Link2 className="h-5 w-5" />
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                                    Explore All Services
                                </h2>
                                <p className="mt-1 text-sm text-slate-500">
                                    Browse all 20 project domains we work with.
                                </p>
                            </div>
                        </div>

                        {/* Scroll Buttons */}
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={scrollLeft}
                                aria-label="Scroll left"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>

                            <button
                                type="button"
                                onClick={scrollRight}
                                aria-label="Scroll right"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    {/* Horizontal Scroll Row */}
                    <div
                        ref={scrollRef}
                        className="mt-10 flex gap-5 overflow-x-auto pb-4 scroll-smooth"
                        style={{
                            scrollbarWidth: "thin",
                            scrollbarColor: "#cbd5e1 transparent",
                        }}
                    >
                        {allCategories.map((category, index) => {
                            const isActive = category.slug === project.slug;

                            return (
                                <Link
                                    key={category.id}
                                    to={`/projects/${category.slug}`}
                                    className={`group flex w-[300px] flex-none flex-col justify-between rounded-2xl border p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-100/50 ${isActive
                                            ? "border-blue-300 bg-blue-50/60"
                                            : "border-slate-200 bg-white hover:border-blue-200"
                                        }`}
                                    style={{
                                        animation: `projectCardReveal 0.6s ease-out ${index * 40
                                            }ms both`,
                                    }}
                                >
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-500">
                                                {String(category.id).padStart(2, "0")}
                                            </span>

                                            {isActive && (
                                                <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-[11px] font-semibold text-white">
                                                    Current
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950 group-hover:text-blue-700">
                                            {category.title}
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-slate-500 line-clamp-3">
                                            {category.description}
                                        </p>
                                    </div>

                                    <div className="mt-6 flex items-center justify-between">
                                        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                                            View Service
                                        </span>

                                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                                            <ArrowUpRight className="h-4 w-4" />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================================
          IMAGE ALT TEXT SUGGESTIONS
      ========================================================= */}
            {project.imageAltText?.length > 0 && (
                <section className="bg-slate-50 py-16">
                    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
                        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                    <ImageIcon className="h-5 w-5" />
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                                        Suggested Image Alt Text
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-500">
                                        Helpful alt text ideas for images related to this service.
                                    </p>
                                </div>
                            </div>

                            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                                {project.imageAltText.map((alt, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-3 text-sm text-slate-600"
                                    >
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-blue-500" />
                                        <span>{alt}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            )}

            {/* =========================================================
          STRONG CALL TO ACTION
      ========================================================= */}
            <section className="bg-white pb-24 pt-4 sm:pb-28">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
                    <div className="relative overflow-hidden rounded-[32px] bg-slate-950">
                        <div className="relative px-7 py-14 sm:px-12 sm:py-20 lg:px-16">
                            <div className="pointer-events-none absolute right-[-100px] top-[-120px] h-[350px] w-[350px] rounded-full bg-blue-600/20 blur-3xl" />
                            <div className="pointer-events-none absolute bottom-[-140px] left-[-100px] h-[300px] w-[300px] rounded-full bg-indigo-500/20 blur-3xl" />

                            <div className="relative mx-auto max-w-3xl text-center">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                                    <Rocket className="h-5 w-5" />
                                </div>

                                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                                    Ready to Begin?
                                </p>

                                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
                                    Let's turn your idea into a working project.
                                </h2>

                                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
                                    Get help with planning, development, documentation and
                                    implementation for your{" "}
                                    {project.title.toLowerCase()} project.
                                </p>

                                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                                    <Link
                                        to="/consultation"
                                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
                                    >
                                        Get Consultation
                                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>

                                    <a
                                        href="tel:+916396283875"
                                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10"
                                    >
                                        <MessageCircle className="h-4 w-4 text-blue-400" />
                                        Talk to an Expert
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>
                {`
          @keyframes detailReveal {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes imageReveal {
            from { opacity: 0; transform: translateX(30px) scale(0.97); }
            to { opacity: 1; transform: translateX(0) scale(1); }
          }

          @keyframes projectCardReveal {
            from { opacity: 0; transform: translateY(25px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* Hide scrollbar for cleaner look (optional) */
          .overflow-x-auto::-webkit-scrollbar {
            height: 8px;
          }
          .overflow-x-auto::-webkit-scrollbar-track {
            background: transparent;
          }
          .overflow-x-auto::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 999px;
          }
          .overflow-x-auto::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
          }
        `}
            </style>
        </main>
    );
};

export default ProjectDetailPage;