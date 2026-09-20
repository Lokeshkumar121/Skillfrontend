import React from "react";

import ConsultationHero from "../components/consultation/ConsultationHero";
import ConsultationServices from "../components/consultation/ConsultationServices";
import ConsultationProcess from "../components/consultation/ConsultationProcess";
import ConsultationTrust from "../components/consultation/ConsultationTrust";
import ConsultationFAQ from "../components/consultation/ConsultationFAQ";
import ConsultationCTA from "../components/consultation/ConsultationCTA";
import SEO from "../components/seo/SEO";

const Consultation = () => {
  return (
    <main>
          <SEO
        title="Project Consultation | Get Expert Guidance | SkillPilot"
        description="Get expert project consultation from SkillPilot for final year projects, web development, mobile apps, AI & ML, documentation, technology selection and career-focused project planning."
        canonical="https://skillpilot.in/consultation"
        ogTitle="Project Consultation | Get Expert Guidance | SkillPilot"
        ogDescription="Get expert guidance for your academic, final year, web, mobile, AI & ML and technology projects with SkillPilot."
      />
      <ConsultationHero />
      <ConsultationServices />
      <ConsultationProcess />
      <ConsultationTrust />
      <ConsultationFAQ />
      <ConsultationCTA />
    </main>
  );
};

export default Consultation;