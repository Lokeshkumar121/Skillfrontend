import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Consultation from "./pages/Consultation";
import Guidance from "./pages/Guidance";
import Career from "./pages/Career";
import Resources from "./pages/Resources";
import CaseStudies from "./pages/case-studies/CaseStudies";
import CaseStudyDetails from "./pages/case-studies/CaseStudyDetails";
import BlogDetails from "./pages/blogs/BlogDetails";
import Blogs from "./pages/blogs/Blogs";
import ScrollToTop from "./components/common/ScrollToTop";
import Projects from "./pages/projects/Projects";
import ProjectDetailPage from "./pages/projects/ProjectDetailPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/guidance" element={<Guidance />} />
        <Route path="/career" element={<Career />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route
          path="/blogs/:slug"
          element={<BlogDetails />}
        />
        <Route
  path="/privacy-policy"
  element={<PrivacyPolicy />}
/>
<Route
  path="/terms"
  element={<Terms />}
/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;