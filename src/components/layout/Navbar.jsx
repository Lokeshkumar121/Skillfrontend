import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const projectCategories = [
    "Web Development",
    "Mobile App Development",
    "AI & Machine Learning",
    "Data Science",
    "Python Projects",
    "Java Projects",
    "MERN Stack",
    "IoT Projects",
    "Cyber Security",
    "Cloud & DevOps",
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-sm">
            S
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900">
              Skill<span className="text-blue-600">Pilot</span>
            </h1>

            <p className="hidden text-[10px] font-medium uppercase tracking-wider text-slate-400 sm:block">
              Learn • Build • Succeed
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          <a
            href="/"
            className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
          >
            Home
          </a>

          {/* Projects Dropdown */}
          <div
            className="relative"
            
          >
           <Link
            to={"/projects"}
           >
            <button
              type="button"
              className="flex items-center gap-1.5 text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
            >
              Projects
           
            </button>
           </Link>

           
          </div>

          <a
            href="/consultation"
            className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
          >
            Consultation
          </a>

          <a
            href="/guidance"
            className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
          >
            Guidance
          </a>

          <a
            href="/career"
            className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
          >
            Career
          </a>

          <a
            href="/resources"
            className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
          >
            Resources
          </a>

          <a
            href="/blogs"
            className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
          >
            Blogs
          </a>
            <a
            href="/case-studies"
            className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
          >
            CaseStudy
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-blue-700"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl px-6 py-5 sm:px-8">
            <div className="flex flex-col">
              <a
                href="/"
                onClick={() => setMobileOpen(false)}
                className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700"
              >
                Home
              </a>

              <button
                type="button"
                onClick={() => setProjectsOpen(!projectsOpen)}
                className="flex items-center justify-between border-b border-slate-100 py-3 text-sm font-medium text-slate-700"
              >
                Projects
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    projectsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {projectsOpen && (
                <div className="border-b border-slate-100 bg-slate-50 px-3 py-2">
                  {projectCategories.map((category) => (
                    <a
                      key={category}
                      href="/projects"
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-sm text-slate-600 hover:text-blue-600"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              )}

              <a
                href="/consultation"
                onClick={() => setMobileOpen(false)}
                className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700"
              >
                Consultation
              </a>

              <a
                href="/guidance"
                onClick={() => setMobileOpen(false)}
                className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700"
              >
                Guidance
              </a>

              <a
                href="/career"
                onClick={() => setMobileOpen(false)}
                className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700"
              >
                Career
              </a>

              <a
                href="/resources"
                onClick={() => setMobileOpen(false)}
                className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700"
              >
                Resources
              </a>

              <a
                href="/blogs"
                onClick={() => setMobileOpen(false)}
                className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700"
              >
                Blogs
              </a>

              <a
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;