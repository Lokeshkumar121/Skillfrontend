import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  Loader2,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { getBlogBySlug } from "../../services/blogService";
import SEO from "../../components/seo/SEO";

const BlogDetails = () => {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
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
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getBlogBySlug(slug);

        const data =
          response?.data ||
          response?.blog ||
          response;

        setBlog(data);
      } catch (err) {
        console.error("Failed to fetch blog:", err);

        setError(
          err?.response?.data?.message ||
            "Blog could not be found."
        );
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getReadingTime = (content) => {
    if (!content) return "1 min read";

    const text =
      typeof content === "string"
        ? content
        : JSON.stringify(content);

    const words = text.trim().split(/\s+/).length;

    return `${Math.max(
      1,
      Math.ceil(words / 200)
    )} min read`;
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white">
        <div className="flex items-center gap-3 text-slate-600">
          <Loader2
            className="animate-spin"
            size={25}
          />

          <span>Loading article...</span>
        </div>
      </main>
    );
  }

  if (error || !blog) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-6">
        <div className="max-w-lg text-center">
          <h1 className="text-3xl font-bold text-slate-950">
            Blog Not Found
          </h1>

          <p className="mt-3 text-slate-600">
            {error ||
              "The requested blog does not exist."}
          </p>

          <Link
            to="/blogs"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <ArrowLeft size={18} />
            Back to Blogs
          </Link>
        </div>
      </main>
    );
  }

  const coverImage = getImageUrl(
    blog.coverImage
  );

  const categories = Array.isArray(
    blog.categories
  )
    ? blog.categories
    : [];

  const tags = Array.isArray(blog.tags)
    ? blog.tags
    : [];

  /*
   * Blog content images
   */
  const contentImages = Array.isArray(
    blog.contentImages
  )
    ? blog.contentImages
        .map((image) => getImageUrl(image))
        .filter(Boolean)
    : [];

  return (
    <main className="min-h-screen bg-white">
            <SEO
      title={blog.seoTitle || `${blog.title} | SkillPilot Blog`}
      description={
        blog.metaDescription ||
        blog.shortDescription ||
        blog.excerpt ||
        blog.description ||
        `Read ${blog.title} on SkillPilot for practical insights, project guidance and technology learning.`
      }
      canonical={`https://skillpilot.in/blogs/${blog.slug}`}
      ogTitle={blog.seoTitle || `${blog.title} | SkillPilot Blog`}
      ogDescription={
        blog.metaDescription ||
        blog.shortDescription ||
        blog.excerpt ||
        blog.description ||
        `Read ${blog.title} on SkillPilot.`
      }
      ogType="article"
    />

      {/* =========================================
          HERO
      ========================================== */}
      <section className="bg-slate-950 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Blogs
          </Link>

          <div className="mt-10">
            {/* Categories */}
            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {categories.map(
                  (category, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300"
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

            {/* Title */}
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {blog.title}
            </h1>

            {/* Description */}
            {(blog.shortDescription ||
              blog.excerpt ||
              blog.description) && (
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                {blog.shortDescription ||
                  blog.excerpt ||
                  blog.description}
              </p>
            )}

            {/* Meta */}
            <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-slate-400">
              {(blog.publishedAt ||
                blog.createdAt) && (
                <div className="flex items-center gap-2">
                  <CalendarDays size={16} />

                  <span>
                    {formatDate(
                      blog.publishedAt ||
                        blog.createdAt
                    )}
                  </span>
                </div>
              )}

              
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          BLOG CONTENT
      ========================================== */}
      <article className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          {/* Cover Image */}
          {coverImage && (
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
              <img
                src={coverImage}
                alt={blog.title}
                className="max-h-[650px] w-full object-cover"
              />
            </div>
          )}

          {/* Main content */}
          <div className="mx-auto mt-14 max-w-4xl">
            {/* Actual Blog Content */}
           

            {/* Fallback content */}
          

            {/* Description fallback */}
          {/* Actual Blog Content */}
{blog.content && (
  <div className="blog-content">
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1>{children}</h1>
        ),

        h2: ({ children }) => (
          <h2>{children}</h2>
        ),

        h3: ({ children }) => (
          <h3>{children}</h3>
        ),

        h4: ({ children }) => (
          <h4>{children}</h4>
        ),

        p: ({ children }) => (
          <p>{children}</p>
        ),

        ul: ({ children }) => (
          <ul>{children}</ul>
        ),

        ol: ({ children }) => (
          <ol>{children}</ol>
        ),

        li: ({ children }) => (
          <li>{children}</li>
        ),

        strong: ({ children }) => (
          <strong>{children}</strong>
        ),

        blockquote: ({ children }) => (
          <blockquote>{children}</blockquote>
        ),

        code: ({ inline, children }) =>
          inline ? (
            <code>{children}</code>
          ) : (
            <pre>
              <code>{children}</code>
            </pre>
          ),

        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ),

        img: ({ src, alt }) => (
          <img
            src={src}
            alt={alt || blog.title}
          />
        ),

        hr: () => <hr />,
      }}
    >
      {blog.content}
    </ReactMarkdown>
  </div>
)}
          </div>

          {/* =====================================
              CONTENT IMAGES
          ====================================== */}
          {contentImages.length > 0 && (
            <section className="mx-auto mt-16 max-w-5xl border-t border-slate-200 pt-12">
              <h2 className="text-2xl font-bold text-slate-950">
                Related Images
              </h2>

              <div className="mt-7 grid gap-6 md:grid-cols-2">
                {contentImages.map(
                  (image, index) => (
                    <div
                      key={`${image}-${index}`}
                      className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100"
                    >
                      <img
                        src={image}
                        alt={`${blog.title} ${
                          index + 1
                        }`}
                        className="h-auto w-full object-cover transition duration-500 hover:scale-[1.02]"
                      />
                    </div>
                  )
                )}
              </div>
            </section>
          )}

          {/* =====================================
              TAGS
          ====================================== */}
          {tags.length > 0 && (
            <div className="mx-auto mt-14 max-w-4xl border-t border-slate-200 pt-8">
              <p className="text-sm font-semibold text-slate-950">
                Tags
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-lg bg-blue-500/10 px-3 py-2 text-sm font-medium text-blue-600"
                  >
                    {typeof tag === "string"
                      ? tag
                      : tag?.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* =====================================
              CTA
          ====================================== */}
          <section className="mt-20 rounded-3xl bg-slate-950 p-8 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Need Help?
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Have a Project Idea?
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              If you need guidance with your project,
              technology selection, development, or final-year
              project, discuss your requirements with SkillPilot.
            </p>

            <Link
              to="/consultation"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Start a Consultation
              <ArrowRight size={18} />
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
};

export default BlogDetails;