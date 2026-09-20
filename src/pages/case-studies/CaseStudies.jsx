import React, { useEffect, useState } from "react";
import { ArrowRight, BookOpen, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

import { getCaseStudies } from "../../services/caseStudyService";
import SEO from "../../components/seo/SEO";

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /*
   * Image URL helper
   * Backend se coverImage object aa raha hai.
   */
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

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getCaseStudies();

        const data =
          response?.data ||
          response?.caseStudies ||
          response ||
          [];

        setCaseStudies(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch case studies:", err);

        setError(
          err?.response?.data?.message ||
            "Failed to load case studies. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  return (
    <main className="min-h-screen bg-white">
         <SEO
        title="Project Case Studies | Real Development Projects | SkillPilot"
        description="Explore SkillPilot project case studies covering real development approaches, technologies, challenges, solutions and project outcomes across modern technologies."
        canonical="https://skillpilot.in/case-studies"
        ogTitle="Project Case Studies | Real Development Projects | SkillPilot"
        ogDescription="Explore real project case studies and learn how projects are planned, developed and transformed into practical solutions."
      />
      {/* =========================================
          HERO
      ========================================== */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="absolute inset-0">
          <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              <BookOpen size={16} />
              Project Case Studies
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Real Projects.
              <span className="block text-blue-400">
                Real Development Stories.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Explore project case studies, development approaches,
              technologies used, challenges solved, and project outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          CASE STUDIES
      ========================================== */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">
              Our Work
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Explore Our Case Studies
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              Understand how different project ideas are planned,
              developed, and transformed into practical solutions.
            </p>
          </div>

          {/* =====================================
              LOADING
          ====================================== */}
          {loading && (
            <div className="flex min-h-[300px] items-center justify-center">
              <div className="flex items-center gap-3 text-slate-600">
                <Loader2
                  className="animate-spin"
                  size={24}
                />

                <span>Loading case studies...</span>
              </div>
            </div>
          )}

          {/* =====================================
              ERROR
          ====================================== */}
          {!loading && error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
              <h3 className="text-lg font-semibold text-red-700">
                Unable to load case studies
              </h3>

              <p className="mt-2 text-sm text-red-600">
                {error}
              </p>

              <button
                onClick={() => window.location.reload()}
                className="mt-5 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Try Again
              </button>
            </div>
          )}

          {/* =====================================
              EMPTY
          ====================================== */}
          {!loading &&
            !error &&
            caseStudies.length === 0 && (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-12 text-center">
                <h3 className="text-xl font-semibold text-slate-900">
                  No case studies available
                </h3>

                <p className="mt-2 text-slate-500">
                  Case studies will appear here once they are
                  published.
                </p>
              </div>
            )}

          {/* =====================================
              CARDS
          ====================================== */}
          {!loading &&
            !error &&
            caseStudies.length > 0 && (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {caseStudies.map((study) => {
                  /*
                   * Cover image
                   */
                  const image = getImageUrl(
                    study.coverImage
                  );

                  /*
                   * Categories
                   */
                  const categories = Array.isArray(
                    study.categories
                  )
                    ? study.categories
                    : [];

                  return (
                    <article
                      key={study._id}
                      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      {/* =================================
                          IMAGE
                      ================================== */}
                      <div className="relative h-56 overflow-hidden bg-slate-100">
                        {image ? (
                          <img
                            src={image}
                            alt={
                              study.title ||
                              "Case Study"
                            }
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-slate-950">
                            <BookOpen
                              size={48}
                              className="text-blue-400"
                            />
                          </div>
                        )}

                        {/* =================================
                            CATEGORIES
                        ================================== */}
                        {categories.length > 0 && (
                          <div className="absolute left-4 top-4 flex max-w-[90%] flex-wrap gap-2">
                            {categories
                              .slice(0, 2)
                              .map((category, index) => (
                                <span
                                  key={index}
                                  className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-blue-600 shadow"
                                >
                                  {typeof category ===
                                  "string"
                                    ? category
                                    : category?.name}
                                </span>
                              ))}
                          </div>
                        )}
                      </div>

                      {/* =================================
                          CONTENT
                      ================================== */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-slate-950 transition group-hover:text-blue-600">
                          {study.title}
                        </h3>

                        {/* Short Description */}
                        {study.shortDescription && (
                          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                            {study.shortDescription}
                          </p>
                        )}

                        {/* Description fallback */}
                        {!study.shortDescription &&
                          study.description && (
                            <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                              {study.description}
                            </p>
                          )}

                        {/* =================================
                            CLIENT TYPE
                        ================================== */}
                        {study.clientType && (
                          <div className="mt-4">
                            <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
                              Client Type
                            </span>

                            <p className="mt-1 text-sm font-medium text-slate-700">
                              {study.clientType}
                            </p>
                          </div>
                        )}

                        {/* =================================
                            TECHNOLOGIES
                        ================================== */}
                        {Array.isArray(
                          study.technologies
                        ) &&
                          study.technologies.length > 0 && (
                            <div className="mt-5 flex flex-wrap gap-2">
                              {study.technologies
                                .slice(0, 4)
                                .map(
                                  (
                                    technology,
                                    index
                                  ) => (
                                    <span
                                      key={`${technology}-${index}`}
                                      className="rounded-md bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-600"
                                    >
                                      {typeof technology ===
                                      "string"
                                        ? technology
                                        : technology?.name}
                                    </span>
                                  )
                                )}
                            </div>
                          )}

                        {/* =================================
                            VIEW CASE STUDY
                        ================================== */}
                        <Link
                          to={`/case-studies/${study.slug}`}
                          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                        >
                          View Case Study

                          <ArrowRight
                            size={17}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
        </div>
      </section>
    </main>
  );
};

export default CaseStudies;