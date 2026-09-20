import React from "react";

import ResourcesHero from "../components/resources/ResourcesHero";
import ResourceCategories from "../components/resources/ResourceCategories";
import FeaturedResources from "../components/resources/FeaturedResources";
import LearningRoadmap from "../components/resources/LearningRoadmap";
import ResourceTips from "../components/resources/ResourceTips";
import ResourcesFAQ from "../components/resources/ResourcesFAQ";
import ResourcesCTA from "../components/resources/ResourcesCTA";
import SEO from "../components/seo/SEO";

const Resources = () => {
  return (
    <main>
         <SEO
        title="Student Resources | Project Ideas, Tutorials & Learning Guides | SkillPilot"
        description="Explore SkillPilot resources for students including project ideas, tutorials, technology guides, learning roadmaps, career resources and practical development tips."
        canonical="https://skillpilot.in/resources"
        ogTitle="Student Resources | Project Ideas, Tutorials & Learning Guides | SkillPilot"
        ogDescription="Explore project ideas, tutorials, learning roadmaps, technology guides and practical resources designed to help students build skills and projects."
      />
      <ResourcesHero />
      <ResourceCategories />
      <FeaturedResources />
      <LearningRoadmap />
      <ResourceTips />
      <ResourcesFAQ />
      <ResourcesCTA />
    </main>
  );
};

export default Resources;