import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  Loader2,
  X,
} from "lucide-react";

import { getCaseStudyBySlug } from "../../services/caseStudyService";
import SEO from "../../components/seo/SEO";

const CaseStudyDetails = () => {
  const { slug } = useParams();

  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getCaseStudyBySlug(slug);

        const data = response?.data || response?.caseStudy || response;

        setCaseStudy(data);

        // Cover image ko initially selected image rakho
        if (data?.coverImage) {
          setSelectedImage(getImageUrl(data.coverImage));
        }
      } catch (err) {
        console.error("Failed to fetch case study:", err);

        setError(
          err?.response?.data?.message ||
            "Case study could not be found."
        );
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchCaseStudy();
    }
  }, [slug]);

  /*
   * Image URL helper
   *
   * Image object alag-alag format mein aa sakta hai:
   * {
   *   url: "..."
   * }
   *
   * OR
   *
   * {
   *   filePath: "..."
   * }
   *
   * OR
   *
   * {
   *   thumbnailUrl: "..."
   * }
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

  /* Loading */
  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white">
        <div className="flex items-center gap-3 text-slate-600">
          <Loader2 className="animate-spin" size={25} />
          <span>Loading case study...</span>
        </div>
      </main>
    );
  }

  /* Error */
  if (error || !caseStudy) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-6">
        <div className="max-w-lg text-center">
          <h1 className="text-3xl font-bold text-slate-950">
            Case Study Not Found
          </h1>

          <p className="mt-3 text-slate-600">
            {error || "The requested case study does not exist."}
          </p>

          <Link
            to="/case-studies"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <ArrowLeft size={18} />
            Back to Case Studies
          </Link>
        </div>
      </main>
    );
  }

  const coverImage = getImageUrl(caseStudy.coverImage);

  /*
   * Multiple images
   */
  const galleryImages = Array.isArray(caseStudy.images)
    ? caseStudy.images
        .map((image) => getImageUrl(image))
        .filter(Boolean)
    : [];

  /*
   * Cover + gallery images combine
   * duplicate cover remove karne ke liye Set use kiya hai
   */
  const allImages = Array.from(
    new Set(
      [coverImage, ...galleryImages].filter(Boolean)
    )
  );

  const technologies = Array.isArray(caseStudy.technologies)
    ? caseStudy.technologies
    : [];

  const features = Array.isArray(caseStudy.features)
    ? caseStudy.features
    : [];

  return (
    <main className="min-h-screen bg-white">
         <SEO
      title={
        caseStudy.seoTitle ||
        `${caseStudy.title} | Project Case Study | SkillPilot`
      }
      description={
        caseStudy.metaDescription ||
        caseStudy.shortDescription ||
        caseStudy.description ||
        `Explore the ${caseStudy.title} project case study, including technologies, development approach, features, challenges and project results.`
      }
      canonical={`https://skillpilot.in/case-studies/${caseStudy.slug}`}
      ogTitle={
        caseStudy.seoTitle ||
        `${caseStudy.title} | Project Case Study | SkillPilot`
      }
      ogDescription={
        caseStudy.metaDescription ||
        caseStudy.shortDescription ||
        caseStudy.description ||
        `Explore the ${caseStudy.title} project case study on SkillPilot.`
      }
      ogType="article"
    />
      {/* =========================================
          HERO
      ========================================== */}
      <section className="bg-slate-950 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Case Studies
          </Link>

          <div className="mt-10 max-w-4xl">
            {Array.isArray(caseStudy.categories) &&
              caseStudy.categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {caseStudy.categories.map((category, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300"
                    >
                      {typeof category === "string"
                        ? category
                        : category?.name}
                    </span>
                  ))}
                </div>
              )}

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {caseStudy.title}
            </h1>

            {caseStudy.shortDescription && (
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                {caseStudy.shortDescription}
              </p>
            )}

            {caseStudy.clientType && (
              <div className="mt-7">
                <span className="text-sm text-slate-500">
                  Client Type
                </span>

                <p className="mt-1 font-medium text-white">
                  {caseStudy.clientType}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================
          CONTENT
      ========================================== */}
      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          {/* =====================================
              COVER IMAGE
          ====================================== */}
          {coverImage && (
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
              <img
                src={coverImage}
                alt={caseStudy.title}
                className="max-h-[650px] w-full object-cover"
              />
            </div>
          )}

          {/* =====================================
              PROJECT OVERVIEW
          ====================================== */}
          <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_320px]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Case Study
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-950">
                Project Overview
              </h2>

              {caseStudy.description && (
                <p className="mt-6 whitespace-pre-line text-base leading-8 text-slate-600">
                  {caseStudy.description}
                </p>
              )}
            </div>

            {/* TECHNOLOGIES */}
            {technologies.length > 0 && (
              <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-blue-500/10 p-2.5">
                    <Code2
                      size={21}
                      className="text-blue-600"
                    />
                  </div>

                  <h3 className="font-bold text-slate-950">
                    Technologies
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {technologies.map((technology, index) => (
                    <span
                      key={index}
                      className="rounded-lg border border-blue-100 bg-white px-3 py-2 text-sm font-medium text-slate-700"
                    >
                      {typeof technology === "string"
                        ? technology
                        : technology?.name}
                    </span>
                  ))}
                </div>
              </aside>
            )}
          </div>

          {/* =====================================
              CHALLENGE
          ====================================== */}
          {caseStudy.challenge && (
            <section className="mt-16 border-t border-slate-200 pt-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                The Challenge
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-950">
                Challenge
              </h2>

              <p className="mt-5 max-w-4xl whitespace-pre-line text-base leading-8 text-slate-600">
                {caseStudy.challenge}
              </p>
            </section>
          )}

          {/* =====================================
              SOLUTION
          ====================================== */}
          {caseStudy.solution && (
            <section className="mt-16 border-t border-slate-200 pt-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Our Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-950">
                Solution
              </h2>

              <p className="mt-5 max-w-4xl whitespace-pre-line text-base leading-8 text-slate-600">
                {caseStudy.solution}
              </p>
            </section>
          )}

          {/* =====================================
              FEATURES
          ====================================== */}
          {features.length > 0 && (
            <section className="mt-16 border-t border-slate-200 pt-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Key Features
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-950">
                Project Features
              </h2>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <span className="text-slate-700">
                      {typeof feature === "string"
                        ? feature
                        : feature?.name}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* =====================================
              RESULT
          ====================================== */}
          {caseStudy.result && (
            <section className="mt-16 rounded-3xl bg-slate-950 p-8 sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Project Result
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white">
                Result
              </h2>

              <p className="mt-5 max-w-4xl whitespace-pre-line text-base leading-8 text-slate-400">
                {caseStudy.result}
              </p>
            </section>
          )}

          {/* =====================================
              PROJECT IMAGES / GALLERY
          ====================================== */}
          {allImages.length > 0 && (
            <section className="mt-20 border-t border-slate-200 pt-12">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Project Gallery
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-950">
                  Project Images
                </h2>

                <p className="mt-3 text-slate-600">
                  Explore screenshots and visual details from this
                  project.
                </p>
              </div>

              {/* Main selected image */}
              {selectedImage && (
                <div className="relative mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
                  <img
                    src={selectedImage}
                    alt={caseStudy.title}
                    className="max-h-[650px] w-full object-contain"
                  />
                </div>
              )}

              {/* Thumbnails */}
              {allImages.length > 1 && (
                <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {allImages.map((image, index) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() => setSelectedImage(image)}
                      className={`group overflow-hidden rounded-xl border-2 bg-slate-100 transition ${
                        selectedImage === image
                          ? "border-blue-600"
                          : "border-transparent hover:border-blue-300"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${caseStudy.title} ${index + 1}`}
                        className="h-28 w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    </button>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* =====================================
              CTA
          ====================================== */}
          <section className="mt-20 rounded-3xl border border-blue-100 bg-blue-50 p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-slate-950">
              Have a Similar Project Idea?
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Discuss your project requirements with SkillPilot and
              understand the right technology, development approach,
              and next steps.
            </p>

            <Link
              to="/consultation"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Discuss Your Project
              <ArrowRight size={18} />
            </Link>
          </section>
        </div>
      </section>

      {/* =========================================
          IMAGE LIGHTBOX
      ========================================== */}
      {selectedImage && (
        <div className="hidden">
          <button type="button">
            <X />
          </button>
        </div>
      )}
    </main>
  );
};

export default CaseStudyDetails;