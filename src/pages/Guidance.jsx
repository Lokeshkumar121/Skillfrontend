import React from "react";

import GuidanceHero from "../components/guidance/GuidanceHero";
import GuidanceAreas from "../components/guidance/GuidanceAreas";
import GuidanceJourney from "../components/guidance/GuidanceJourney";
import GuidanceSupport from "../components/guidance/GuidanceSupport";
import GuidanceFAQ from "../components/guidance/GuidanceFAQ";
import GuidanceCTA from "../components/guidance/GuidanceCTA";
import SEO from "../components/seo/SEO";

const Guidance = () => {
  return (
    <main>
        <SEO
        title="Project & Career Guidance for Students | SkillPilot"
        description="Get practical guidance for final year projects, academic projects, technology selection, project development, documentation, career preparation and student success with SkillPilot."
        canonical="https://skillpilot.in/guidance"
        ogTitle="Project & Career Guidance for Students | SkillPilot"
        ogDescription="Get practical project and career guidance for students, from project planning and technology selection to documentation and career preparation."
      />

      <GuidanceHero />
      <GuidanceAreas />
      <GuidanceJourney />
      <GuidanceSupport />
      <GuidanceFAQ />
      <GuidanceCTA />
    </main>
  );
};

export default Guidance;