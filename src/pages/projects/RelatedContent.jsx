import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowUpRight,
    CalendarDays,
    FileText,
    Layers,
    Link2,
} from "lucide-react";

import projectCategories from "../../data/projectCategories";
import { getPublishedBlogs } from "../../services/blogService";
import { getCaseStudies } from "../../services/caseStudyService";

const RelatedContent = ({ projectSlug }) => {
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const [relatedCaseStudies, setRelatedCaseStudies] = useState([]);
    const [loading, setLoading] = useState(true);

    // Get project category using slug
    const project = projectCategories.find(
        (item) => item.slug === projectSlug
    );

    const categoryName = project?.title || "";

    useEffect(() => {
        const fetchRelatedContent = async () => {
            if (!categoryName) {
                setLoading(false);
                return;
            }

            try {
                setLoading(true);

                const [blogsResponse, caseStudiesResponse] = await Promise.all([
                    getPublishedBlogs(),
                    getCaseStudies(),
                ]);

                // -----------------------------
                // BLOG DATA
                // -----------------------------
                const blogsData =
                    blogsResponse?.data ||
                    blogsResponse?.blogs ||
                    blogsResponse ||
                    [];

                // -----------------------------
                // CASE STUDY DATA
                // -----------------------------
                const caseStudiesData =
                    caseStudiesResponse?.data ||
                    caseStudiesResponse?.caseStudies ||
                    caseStudiesResponse ||
                    [];

                const blogs = Array.isArray(blogsData)
                    ? blogsData
                    : [];

                const caseStudies = Array.isArray(caseStudiesData)
                    ? caseStudiesData
                    : [];

                // Normalize category for safe matching
                const normalizedCategory = categoryName
                    .trim()
                    .toLowerCase();

                // -----------------------------
                // RELATED BLOGS
                // -----------------------------
                const matchedBlogs = blogs.filter((blog) => {
                    if (!Array.isArray(blog.categories)) {
                        return false;
                    }

                    return blog.categories.some(
                        (category) =>
                            typeof category === "string" &&
                            category.trim().toLowerCase() ===
                                normalizedCategory
                    );
                });

                // -----------------------------
                // RELATED CASE STUDIES
                // -----------------------------
                const matchedCaseStudies = caseStudies.filter((caseStudy) => {
                    // Only published case studies
                    if (
                        caseStudy.status &&
                        caseStudy.status.toLowerCase() !== "published"
                    ) {
                        return false;
                    }

                    if (!Array.isArray(caseStudy.categories)) {
                        return false;
                    }

                    return caseStudy.categories.some(
                        (category) =>
                            typeof category === "string" &&
                            category.trim().toLowerCase() ===
                                normalizedCategory
                    );
                });

                // Maximum 6 each
                setRelatedBlogs(matchedBlogs.slice(0, 6));
                setRelatedCaseStudies(
                    matchedCaseStudies.slice(0, 6)
                );
            } catch (error) {
                console.error(
                    "Failed to load related content:",
                    error
                );

                setRelatedBlogs([]);
                setRelatedCaseStudies([]);
            } finally {
                setLoading(false);
            }
        };

        fetchRelatedContent();
    }, [categoryName]);

    // Don't render anything while loading
    if (loading) {
        return null;
    }

    // No related content
    if (
        relatedBlogs.length === 0 &&
        relatedCaseStudies.length === 0
    ) {
        return null;
    }

    // Image helper
    const getImageUrl = (image) => {
        if (!image) return "";

        if (typeof image === "string") {
            return image;
        }

        return (
            image.url ||
            image.filePath ||
            image.thumbnailUrl ||
            image.imageUrl ||
            image.src ||
            ""
        );
    };

    return (
        <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
            {/* Background Decoration */}
            <div className="pointer-events-none absolute left-[-180px] top-[100px] h-[400px] w-[400px] rounded-full bg-blue-100/60 blur-3xl" />

            <div className="pointer-events-none absolute right-[-180px] bottom-[-150px] h-[400px] w-[400px] rounded-full bg-indigo-100/50 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

                {/* =====================================================
                    SECTION HEADER
                ===================================================== */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                        <Link2 className="h-5 w-5" />
                    </div>

                    <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                        Related Content
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                        Explore {categoryName} Resources
                    </h2>

                    <p className="mt-4 text-base leading-7 text-slate-500">
                        Explore relevant case studies and helpful articles
                        related to{" "}
                        <span className="font-semibold text-slate-700">
                            {categoryName}
                        </span>
                        .
                    </p>
                </div>

                {/* =====================================================
                    RELATED CASE STUDIES
                ===================================================== */}
                {relatedCaseStudies.length > 0 && (
                    <div className="mt-16">

                        {/* Heading */}
                        <div className="mb-7 flex items-end justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                                        <Layers className="h-5 w-5" />
                                    </div>

                                    <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                                        Related Case Studies
                                    </h3>
                                </div>

                                <p className="mt-2 pl-[52px] text-sm text-slate-500">
                                    Projects and case studies related to{" "}
                                    {categoryName}.
                                </p>
                            </div>

                            <Link
                                to="/case-studies"
                                className="hidden items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-300 hover:gap-3 sm:inline-flex"
                            >
                                View All
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        {/* Cards */}
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {relatedCaseStudies.map(
                                (caseStudy, index) => {
                                    const image = getImageUrl(
                                        caseStudy.coverImage
                                    );

                                    return (
                                        <Link
                                            key={
                                                caseStudy._id ||
                                                caseStudy.id
                                            }
                                            to={`/case-studies/${caseStudy.slug}`}
                                            className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
                                            style={{
                                                animation: `relatedCardReveal 0.7s ease-out ${
                                                    index * 100
                                                }ms both`,
                                            }}
                                        >
                                            {/* Image */}
                                            <div className="relative h-52 overflow-hidden bg-slate-100">
                                                {image ? (
                                                    <img
                                                        src={image}
                                                        alt={
                                                            caseStudy.title ||
                                                            `${categoryName} case study`
                                                        }
                                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                ) : (
                                                    <div className="flex h-full items-center justify-center bg-blue-50 text-blue-600">
                                                        <Layers className="h-10 w-10" />
                                                    </div>
                                                )}

                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                                                <div className="absolute bottom-4 left-4">
                                                    <span className="inline-flex items-center rounded-full border border-white/20 bg-slate-950/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                                                        Case Study
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-6">
                                                <h4 className="line-clamp-2 text-xl font-semibold tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-blue-600">
                                                    {caseStudy.title}
                                                </h4>

                                                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                                                    {caseStudy.shortDescription ||
                                                        caseStudy.description ||
                                                        "Explore this project case study."}
                                                </p>

                                                <div className="mt-6 flex items-center justify-between">
                                                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                                                        View Case Study
                                                    </span>

                                                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                                                        <ArrowUpRight className="h-4 w-4" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                }
                            )}
                        </div>
                    </div>
                )}

                {/* =====================================================
                    RELATED BLOGS
                ===================================================== */}
                {relatedBlogs.length > 0 && (
                    <div className="mt-20">

                        {/* Heading */}
                        <div className="mb-7 flex items-end justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                                        <FileText className="h-5 w-5" />
                                    </div>

                                    <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                                        Related Blogs
                                    </h3>
                                </div>

                                <p className="mt-2 pl-[52px] text-sm text-slate-500">
                                    Articles and insights related to{" "}
                                    {categoryName}.
                                </p>
                            </div>

                            <Link
                                to="/blogs"
                                className="hidden items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-300 hover:gap-3 sm:inline-flex"
                            >
                                View All
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        {/* Cards */}
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {relatedBlogs.map((blog, index) => {
                                const image = getImageUrl(
                                    blog.coverImage
                                );

                                return (
                                    <Link
                                        key={
                                            blog._id ||
                                            blog.id
                                        }
                                        to={`/blogs/${blog.slug}`}
                                        className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
                                        style={{
                                            animation: `relatedCardReveal 0.7s ease-out ${
                                                index * 100
                                            }ms both`,
                                        }}
                                    >
                                        {/* Image */}
                                        <div className="relative h-52 overflow-hidden bg-slate-100">
                                            {image ? (
                                                <img
                                                    src={image}
                                                    alt={
                                                        blog.title ||
                                                        `${categoryName} blog`
                                                    }
                                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center bg-blue-50 text-blue-600">
                                                    <FileText className="h-10 w-10" />
                                                </div>
                                            )}

                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                                            <div className="absolute bottom-4 left-4">
                                                <span className="inline-flex items-center rounded-full border border-white/20 bg-slate-950/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                                                    Blog
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h4 className="line-clamp-2 text-xl font-semibold tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-blue-600">
                                                {blog.title}
                                            </h4>

                                            <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                                                {blog.excerpt ||
                                                    blog.shortDescription ||
                                                    blog.description ||
                                                    "Read this article to learn more."}
                                            </p>

                                            <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
                                                <CalendarDays className="h-4 w-4" />

                                                <span>
                                                    {blog.publishedAt
                                                        ? new Date(
                                                              blog.publishedAt
                                                          ).toLocaleDateString(
                                                              "en-IN",
                                                              {
                                                                  day: "2-digit",
                                                                  month: "short",
                                                                  year: "numeric",
                                                              }
                                                          )
                                                        : blog.createdAt
                                                        ? new Date(
                                                              blog.createdAt
                                                          ).toLocaleDateString(
                                                              "en-IN",
                                                              {
                                                                  day: "2-digit",
                                                                  month: "short",
                                                                  year: "numeric",
                                                              }
                                                          )
                                                        : "Article"}
                                                </span>
                                            </div>

                                            <div className="mt-5 flex items-center justify-between">
                                                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                                                    Read Article
                                                </span>

                                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                                                    <ArrowUpRight className="h-4 w-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Mobile View All */}
                <div className="mt-8 flex flex-col gap-3 sm:hidden">
                    {relatedCaseStudies.length > 0 && (
                        <Link
                            to="/case-studies"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                        >
                            View All Case Studies
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    )}

                    {relatedBlogs.length > 0 && (
                        <Link
                            to="/blogs"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                        >
                            View All Blogs
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    )}
                </div>
            </div>

            <style>
                {`
                    @keyframes relatedCardReveal {
                        from {
                            opacity: 0;
                            transform: translateY(25px);
                        }

                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}
            </style>
        </section>
    );
};

export default RelatedContent;