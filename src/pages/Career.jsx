import React from "react";

import CareerHero from "../components/career/CareerHero";
import CareerPaths from "../components/career/CareerPaths";
import CareerRoadmap from "../components/career/CareerRoadmap";
import CareerSkills from "../components/career/CareerSkills";
import CareerPreparation from "../components/career/CareerPreparation";
import CareerFAQ from "../components/career/CareerFAQ";
import CareerCTA from "../components/career/CareerCTA";
import SEO from "../components/seo/SEO";

const Career = () => {
  return (
    <main>
            <SEO
        title="Career Guidance & Placement Preparation for Students | SkillPilot"
        description="Build your career with SkillPilot's guidance for career paths, technical skills, placement preparation, DSA, interviews, projects and industry-ready development."
        canonical="https://skillpilot.in/career"
        ogTitle="Career Guidance & Placement Preparation for Students | SkillPilot"
        ogDescription="Get practical career guidance, skill development, placement preparation, DSA and interview guidance to become industry-ready."
      />
      <CareerHero />
      <CareerPaths />
      <CareerRoadmap />
      <CareerSkills />
      <CareerPreparation />
      <CareerFAQ />
      <CareerCTA />
    </main>
  );
};

export default Career;