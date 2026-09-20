import React from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Code2,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold">
                S
              </div>

              <div>
                <h2 className="text-lg font-bold">
                  Skill<span className="text-blue-400">Pilot</span>
                </h2>

                <p className="text-[10px] uppercase tracking-wider text-slate-500">
                  Learn • Build • Succeed
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Helping students turn project ideas into practical,
              well-structured and technology-focused solutions.
            </p>

            {/* Developer Profile */}
            <div className="mt-6">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <Code2 className="h-4 w-4" />
                Developer Profile
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {[
                ["Home", "/"],
                ["Projects", "/projects"],
                ["Consultation", "/consultation"],
                ["Guidance", "/guidance"],
                ["Career", "/career"],
                ["Blogs", "/blogs"],
                ["Contact" , "/contact"],
                  ["Case-Study" , "/case-studies"]
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Popular Services
            </h3>

            <ul className="mt-5 space-y-3">
              {[
                "Web Development",
                "Mobile App Development",
                "AI & Machine Learning",
                "Data Science",
                "Final Year Projects",
                "Project Documentation",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="/projects"
                    className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Get In Touch
            </h3>

            <div className="mt-5 space-y-4">
              <a
                href="mailto:info@skillpilot.in"
                className="flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-blue-400"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span>info@skillpilot.in</span>
              </a>

              <a
                href="tel:+916396283875"
                className="flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-blue-400"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>+91 6396283875</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>India</span>
              </div>
            </div>

            <a
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
            >
              Discuss Your Project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} SkillPilot. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a
                href="/privacy-policy"
                className="text-xs text-slate-500 transition-colors hover:text-slate-300"
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
                className="text-xs text-slate-500 transition-colors hover:text-slate-300"
              >
                Terms & Conditions
              </a>

              <a
                href="/contact"
                className="text-xs text-slate-500 transition-colors hover:text-slate-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;