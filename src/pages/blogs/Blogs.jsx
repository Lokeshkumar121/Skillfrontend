import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";

import { getPublishedBlogs } from "../../services/blogService";
import SEO from "../../components/seo/SEO";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getPublishedBlogs();

        const data =
          response?.data ||
          response?.blogs ||
          response ||
          [];

        setBlogs(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);

        setError(
          err?.response?.data?.message ||
            "Failed to load blogs. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-white">

         <SEO
        title="SkillPilot Blog | Project Ideas, Tutorials & Technology Guides"
        description="Explore SkillPilot blogs covering project ideas, programming tutorials, web development, AI & ML, mobile apps, career preparation, technology insights and practical development guides."
        canonical="https://skillpilot.in/blogs"
        ogTitle="SkillPilot Blog | Project Ideas, Tutorials & Technology Guides"
        ogDescription="Read practical articles on project development, programming, modern technologies, career preparation and software development."
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
              SkillPilot Blog
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Learn.
              <span className="block text-blue-400">
                Build. Grow.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Explore practical guides, project ideas, development
              tutorials, technology insights, and career resources
              for students and developers.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          BLOGS
      ========================================== */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">
              Latest Articles
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Explore Our Blogs
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              Learn about technologies, project development,
              programming, career preparation, and practical
              software development.
            </p>
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex min-h-[300px] items-center justify-center">
              <div className="flex items-center gap-3 text-slate-600">
                <Loader2
                  className="animate-spin"
                  size={24}
                />

                <span>Loading blogs...</span>
              </div>
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
              <h3 className="text-lg font-semibold text-red-700">
                Unable to load blogs
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

          {/* Empty */}
          {!loading &&
            !error &&
            blogs.length === 0 && (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-12 text-center">
                <BookOpen
                  size={40}
                  className="mx-auto text-blue-500"
                />

                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                  No blogs available
                </h3>

                <p className="mt-2 text-slate-500">
                  Published blogs will appear here.
                </p>
              </div>
            )}

          {/* Blog Cards */}
          {!loading &&
            !error &&
            blogs.length > 0 && (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => {
                  const image = getImageUrl(
                    blog.coverImage
                  );

                  const categories = Array.isArray(
                    blog.categories
                  )
                    ? blog.categories
                    : [];

                  return (
                    <article
                      key={blog._id}
                      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden bg-slate-100">
                        {image ? (
                          <img
                            src={image}
                            alt={
                              blog.title ||
                              "Blog"
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

                        {/* Categories */}
                        {categories.length > 0 && (
                          <div className="absolute left-4 top-4 flex max-w-[90%] flex-wrap gap-2">
                            {categories
                              .slice(0, 2)
                              .map(
                                (
                                  category,
                                  index
                                ) => (
                                  <span
                                    key={index}
                                    className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-blue-600 shadow"
                                  >
                                    {typeof category ===
                                    "string"
                                      ? category
                                      : category?.name}
                                  </span>
                                )
                              )}
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Date */}
                        {(blog.publishedAt ||
                          blog.createdAt) && (
                          <div className="flex items-center gap-2 text-xs text-slate-400">
                            <CalendarDays size={14} />

                            <span>
                              {formatDate(
                                blog.publishedAt ||
                                  blog.createdAt
                              )}
                            </span>
                          </div>
                        )}

                        {/* Title */}
                        <h3 className="mt-3 text-xl font-bold leading-7 text-slate-950 transition group-hover:text-blue-600">
                          {blog.title}
                        </h3>

                        {/* Description */}
                        {(blog.shortDescription ||
                          blog.excerpt ||
                          blog.description) && (
                          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                            {blog.shortDescription ||
                              blog.excerpt ||
                              blog.description}
                          </p>
                        )}

                        {/* Tags */}
                        {Array.isArray(
                          blog.tags
                        ) &&
                          blog.tags.length > 0 && (
                            <div className="mt-5 flex flex-wrap gap-2">
                              {blog.tags
                                .slice(0, 4)
                                .map(
                                  (
                                    tag,
                                    index
                                  ) => (
                                    <span
                                      key={index}
                                      className="rounded-md bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-600"
                                    >
                                      {typeof tag ===
                                      "string"
                                        ? tag
                                        : tag?.name}
                                    </span>
                                  )
                                )}
                            </div>
                          )}

                        {/* Read */}
                        <Link
                          to={`/blogs/${blog.slug}`}
                          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                        >
                          Read Article

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

export default Blogs;