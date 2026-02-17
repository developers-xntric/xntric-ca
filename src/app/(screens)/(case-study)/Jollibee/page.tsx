import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { CaseData } from "@/data/CaseStudyHero";

export default function Jollibee() {
  return (
    <div className="max-w-screen">

      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Jollibee’s flavorful evolution"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>
      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/Jollibee/image1.png"
        bottomCenterText="Jollibee sought to make its iconic Chickenjoy experience even more exciting by introducing four new sauces. The goal was to appeal to a wider audience while staying true to the brand’s joyful essence. Xntric by LPS developed a creative campaign and a brand film to highlight these new flavors, ensuring they resonated with diverse taste preferences."
        desciption="We explored global flavors to craft unique sauces that stood out. By incorporating engaging storytelling, immersive visuals, and an emotional connection with food, we positioned these sauces as more than just condiments—they became part of the Jollibee experience."
      />
      <CaseStudySection2
        heading="Bringing new flavors to an iconic favorite"
        sec2Desc="Jollibee’s Chickenjoy has been a beloved classic for years, but the brand wanted to add a fresh twist to the experience by introducing four new sauces. The challenge was to create excitement while staying true to Jollibee’s fun, family-friendly brand identity. Through a visually rich and emotionally engaging campaign, we highlighted how these sauces could elevate the Chickenjoy experience, making every bite even more delightful"
        overviewPara="Jollibee wanted to elevate its iconic Chickenjoy experience by introducing four new sauces that catered to diverse taste preferences. The goal was to create excitement, drive engagement, and reinforce Jollibee’s reputation as a brand that continuously innovates while staying true to its fun, family-oriented identity. Our strategy blended creative storytelling, high-quality video production, and an immersive brand film that highlighted the joy of eating, making the new sauces an irresistible addition to the Jollibee experience."
        video="/CaseStudies/Jollibee/video1.webm"
        reverse={true}
      />
      <ServicesLists
        textwitshadow="Our Challenges"
        heading="Challenges & How We Overcame Them"
        isButton={false}
        services={[
          "Maintaining brand authenticity",
          "Creating visual appeal",
          "Enhancing customer excitement",
        ]}
        content={[
          "Jollibee is synonymous with happiness and togetherness, and any new product introduction had to align with this core identity. We developed a campaign that highlighted shared moments of joy, ensuring the new sauces felt like a natural extension of the Chickenjoy experience. By focusing on family, fun, and Filipino pride, we ensured the messaging remained authentic and relatable.",
          "Food is best experienced through sight and emotion, so we crafted a visually compelling campaign that made the sauces look as delicious as they tasted. Using high-quality SFV (Short-Form Video) production, close-up shots, and slow-motion sequences of dipping and swirling, we transformed the simple act of eating into an immersive and mouth watering experience.",
          "Rather than just introducing new flavors, we created an emotional connection by showcasing the sensory joy of eating—dipping, dunking, and swirling. Each scene was designed to evoke cravings and nostalgia, making customers eager to try the new sauces and enhance their Chickenjoy experience.",
        ]}
        isArrow={false}
        marginTop={true}
      />
      <CaseStudySection3
        video="/CaseStudies/Jollibee/video2.webm"
        video2="/CaseStudies/Jollibee/video3.webm"
        isBottom={true}
      />
      <CaseStudySection4
        cardData={[
          "Increased customer engagement",
          "Strengthened brand positioning",
          "Boosted product visibility",
          "Emotional brand connection",
          "Higher sales & trials",
        ]}
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}
