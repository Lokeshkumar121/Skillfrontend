import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import api from "../services/api";
import SEO from "../components/seo/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    state: "",
    district: "",
    city: "",
    projectType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("/contacts", formData);

      console.log("Contact submitted:", response.data);

      alert("Enquiry submitted successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        state: "",
        district: "",
        city: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      console.error(
        "Contact form error:",
        error.response?.data || error.message
      );

      alert(
        error.response?.data?.message ||
          "Failed to submit enquiry."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

            <SEO
      title="Contact SkillPilot | Project Guidance & Development Support"
      description="Contact SkillPilot for final year projects, web development, mobile app development, AI & ML projects, project consultation, career guidance and technical support."
      canonical="https://skillpilot.in/contact"
      ogTitle="Contact SkillPilot | Project Guidance & Development Support"
      ogDescription="Get in touch with SkillPilot for project development, final year project guidance, technical consultation and career support."
    />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-950 text-white">

        {/* Background decoration */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">

          <div className="max-w-3xl">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              <Sparkles className="h-4 w-4" />
              Let’s build something meaningful
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Have an idea?
              <br />
              <span className="text-blue-400">
                Let’s talk about it.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Whether you need a final-year project, web application,
              mobile app, AI solution, or technical guidance, share your
              requirement with us and our team will help you take the
              next step.
            </p>

            {/* Hero points */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">

              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                Project Guidance
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                Development Support
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                Career Guidance
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTACT AREA
      ========================================================= */}
      <section className="relative py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}
            <div className="lg:pt-6">

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                Contact SkillPilot
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                Let’s understand your requirement.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                Every project starts with a conversation. Tell us what
                you are planning, what you need help with, and where you
                are currently stuck.
              </p>

              {/* Contact cards */}
              <div className="mt-10 space-y-4">

                {/* Email */}
                <div className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:border-blue-200 hover:shadow-md">

                  <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Mail className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Email us
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        support@skillpilot.in
                      </p>
                    </div>

                  </div>

                </div>

                {/* Phone */}
                <div className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:border-blue-200 hover:shadow-md">

                  <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Phone className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Call us
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        +91 6396283875
                      </p>
                    </div>

                  </div>

                </div>

                {/* Location */}
                <div className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:border-blue-200 hover:shadow-md">

                  <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Our location
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        India
                      </p>
                    </div>

                  </div>

                </div>

                {/* Working hours */}
                <div className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:border-blue-200 hover:shadow-md">

                  <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Clock3 className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Working hours
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        Monday – Sunday
                      </p>

                      <p className="mt-0.5 text-sm text-slate-400">
                        08 :00 AM – 10:00 PM
                      </p>
                    </div>

                  </div>

                </div>

              </div>

              {/* Small note */}
              <div className="mt-8 flex gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 p-5">

                <MessageSquare className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Not sure what you need?
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    No problem. Just describe your idea in the message
                    box and we’ll help you identify the right direction.
                  </p>
                </div>

              </div>

            </div>

            {/* =====================================================
                FORM
            ===================================================== */}
            <div className="relative">

              {/* Form accent */}
              <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/10 blur-xl" />

              <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8 lg:p-10">

                {/* Form heading */}
                <div className="mb-8">

                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                    <Send className="h-5 w-5" />
                  </div>

                  <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                    Send us an enquiry
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Share a few details and our team will get back to
                    you.
                  </p>

                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  {/* =================================================
                      NAME
                  ================================================= */}
                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        First Name
                      </label>

                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter first name"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Last Name
                      </label>

                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter last name"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>

                  </div>

                  {/* =================================================
                      CONTACT
                  ================================================= */}
                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>

                  </div>

                  {/* =================================================
                      LOCATION
                  ================================================= */}
                  <div className="grid gap-5 sm:grid-cols-3">

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        State
                      </label>

                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="State"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        District
                      </label>

                      <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        placeholder="District"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        City
                      </label>

                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>

                  </div>

                  {/* =================================================
                      PROJECT TYPE
                  ================================================= */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Project Type
                    </label>

                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    >
                      <option value="">
                        Select project type
                      </option>

                      <option value="Web Development">
                        Web Development
                      </option>

                      <option value="Mobile App Development">
                        Mobile App Development
                      </option>

                      <option value="AI & Machine Learning">
                        AI & Machine Learning
                      </option>

                      <option value="Data Science">
                        Data Science
                      </option>

                      <option value="MERN Stack">
                        MERN Stack
                      </option>

                      <option value="Python Projects">
                        Python Projects
                      </option>

                      <option value="Java Projects">
                        Java Projects
                      </option>

                      <option value="IoT Projects">
                        IoT Projects
                      </option>

                      <option value="Final Year Project">
                        Final Year Project
                      </option>

                      <option value="Project Consultation">
                        Project Consultation
                      </option>

                      <option value="Career Guidance">
                        Career Guidance
                      </option>

                      <option value="Other">
                        Other
                      </option>
                    </select>
                  </div>

                  {/* =================================================
                      MESSAGE
                  ================================================= */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Message
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us about your project or requirement..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  {/* =================================================
                      SUBMIT
                  ================================================= */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:bg-blue-700 hover:shadow-blue-600/30 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending Enquiry...
                      </>
                    ) : (
                      <>
                        Send Enquiry

                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs leading-5 text-slate-400">
                    By submitting this form, you agree to be contacted
                    regarding your enquiry.
                  </p>

                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}
      <section className="border-t border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">

          <div className="mx-auto max-w-2xl">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <MessageSquare className="h-5 w-5" />
            </div>

            <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Have a project idea?
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Don’t wait for the perfect plan. Tell us what you have in
              mind and let’s work towards a practical solution together.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;