import React from "react";
import { Helmet } from "react-helmet-async";

import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import ProjectCategories from "../components/home/ProjectCategories";
import WhySkillPilot from "../components/home/WhySkillPilot";
import HowItWorks from "../components/home/HowItWorks";
import StatsSection from "../components/home/StatsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FAQSection from "../components/home/FAQSection";
import HomeCTA from "../components/home/HomeCTA";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>
                    SkillPilot | Final Year Projects, Project Guidance & Development
                </title>

                <meta
                    name="description"
                    content="SkillPilot helps students with final year projects, academic projects, web and mobile app development, AI & ML projects, project consultation, documentation and career guidance."
                />

                <link
                    rel="canonical"
                    href="https://skillpilot.in/"
                />

                <meta
                    property="og:title"
                    content="SkillPilot | Final Year Projects, Project Guidance & Development"
                />

                <meta
                    property="og:description"
                    content="Get expert guidance for final year projects, academic projects, web and mobile development, AI & ML projects, documentation and career preparation."
                />

                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    property="og:url"
                    content="https://skillpilot.in/"
                />
            </Helmet>

            <main>
                <HeroSection />
                <ServicesSection />
                <ProjectCategories />
                <WhySkillPilot />
                <HowItWorks />
                <StatsSection />
                <TestimonialsSection />
                <FAQSection />
                <HomeCTA />
            </main>
        </>
    );
};

export default Home;




// Ab ye sequence follow karo
// ✅ React Helmet / metadata
// ✅ Project detail SEO
// ✅ Blog SEO
// ✅ Case Study SEO
// ✅ Related Content / internal linking
// 🔜 Sitemap.xml
// 🔜 robots.txt
// 🔜 Google Search Console
// 🔜 Sitemap submit
// 🔜 Indexing + SEO monitoring