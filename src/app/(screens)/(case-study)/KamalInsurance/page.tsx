import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { CaseData } from "@/data/CaseStudyHero";

export default function Kamal() {
  return (
    <div className="max-w-screen">
      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Kamal Insurance"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>
      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/Kamal/image1.png"
        bottomCenterText="Insurance isn’t just about policies; it’s about trust, protection, and reliability. Kamal Insurance set out to redefine its brand with a fresh, engaging identity that resonates with modern consumers. From branding to 360-degree marketing and digital transformation, LPS played a crucial role in shaping Kamal Insurance into a dynamic and relatable brand."
        desciption="Kamal Insurance aimed to break the mold by establishing itself as a modern, relatable, and digitally savvy brand. To achieve this vision, LPS was brought on board as the lead agency for branding, 360° marketing communications, SFV video production, and digital services. From the very start, LPS played an integral role in shaping Kamal Insurance’s brand identity, voice, and positioning, ensuring that it became more than just an insurance provider—it became a brand that people could engage with, trust, and relate to."
      />
      <CaseStudySection2
        heading="Building a Bold & Engaging Brand Presence"
        sec2Desc="The Kamal Insurance and LPS collaboration wasn’t just about marketing—it was about redefining an industry. We turned a traditionally corporate and rigid sector into an engaging, customer-friendly space that resonated with modern consumers."
        overviewPara="The digital transformation spearheaded by LPS ensured that Kamal Insurance was not just relevant today but primed for the future. By embracing creativity, social engagement, and digital storytelling, we helped future-proof the brand in an ever-evolving landscape.This collaboration is a testament to what happens when strategic thinking meets creative execution. The success of Kamal Insurance’s brand evolution showcases how bold ideas, executed well, can revolutionize any industry—even one as traditional as insurance."
        video="/CaseStudies/Kamal/video2.webm"
        reverse={true}
      />
      <ServicesLists
        textwitshadow="Our Challenges"
        heading="Insurance, But Making It Engaging!"
        isButton={false}
        services={[
          "500% Increase in Social Media Engagement",
          "300% Growth in Brand Awareness",
          "High Video Retention Rates – Over 80% Completion Rate",
          "Improved Lead Generation & Conversions",
          "A Deeper Customer Connection",
        ]}
        content={[
          "Social media is the heartbeat of modern brand communication, and we ensured that Kamal Insurance not only had a presence but owned the conversation. By creating highly shareable, witty, and informative content, we turned insurance—a traditionally dry topic—into a subject of interest and engagement. Our efforts resulted in a 500% spike in engagement rates, proving that the right creative direction can transform even the most traditional industries into highly interactive and engaging brands.",
          "A strong digital presence means being seen, remembered, and recognized—and LPS ensured Kamal Insurance stood out in the crowded insurance market. Our goal was to not just reach people but to make a lasting impression. Through this approach, brand recall and recognition skyrocketed by 300%, positioning Kamal Insurance as a forward-thinking, modern brand that customers trust.",
          "Video content is the most powerful tool in digital marketing, and LPS leveraged Short-Form Videos (SFVs) to simplify complex insurance concepts and make them engaging. As a result, Kamal Insurance’s video content outperformed industry standards, with an 80%+ video completion rate, showing that audiences found the content valuable, engaging, and worth watching till the end.",
          "While engagement and awareness are key, the ultimate measure of success is conversion—turning audience interest into real customers. LPS’s data-driven approach ensured that every campaign was optimized for lead generation, directly impacting Kamal Insurance’s bottom line. These strategies resulted in higher inquiries, policy sign-ups, and overall revenue growth, proving that a well-crafted digital strategy directly impacts business success.",
          "Beyond numbers, what truly set this campaign apart was how Kamal Insurance evolved from a traditional insurer to a relatable, approachable, and engaging brand. By blending storytelling, digital innovation, and strategic marketing, LPS positioned Kamal Insurance as an industry leader that not only sells policies but builds relationships with customers.",
        ]}
        isArrow={false}
        marginTop={true}
      />
      <CaseStudySection3
        image="/CaseStudies/Kamal/image2.png"
        video="/CaseStudies/Kamal/video2.webm"
        isBottom={true}
      />
      <CaseStudySection4
        cardData={[
          "ncreased Customer Engagement",
          "Strengthened Brand Positioning",
          "Boosted Product Visibility",
          "Emotional Brand Connection",
          "Higher Sales & Trials",
        ]}
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}
