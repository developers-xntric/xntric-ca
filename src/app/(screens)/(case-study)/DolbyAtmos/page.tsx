import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { CaseData } from "@/data/CaseStudyHero";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dolby Atmos Project – Creative Campaigns",
  description: "Explore Xntric’s work with Dolby Atmos, delivering innovative campaigns and creative storytelling that amplify sound and brand impact.",
};
export default function DolbyAtmos() {
  return (
    <div className="max-w-screen">

      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Dolby Atmos"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>
      <div className="xl:mt-32"><SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomVideo="/CaseStudies/DolbyAtmos/video1.webm"
        bottomCenterText="Dolby, a global leader in audio-visual innovation, sought to strengthen its presence in the middle east & North Africa (MENA) region. The goal was to create a compelling digital strategy that would resonate with audiences while maintaining the brand’s premium and immersive storytelling experience."
        desciption="We took charge of Dolby MENA’s social media, digital, paid campaigns, and influencer collaborations, ensuring a seamless blend of local engagement and global brand identity."
      /></div>

      <CaseStudySection2
        heading="Bringing sound & vision to life"
        sec2Desc="The Xntric by LPS implemented a 360-degree digital strategy, combining social media, paid campaigns, and influencer collaborations to amplify Dolby s presence in MENA. Through content creation & storytelling, we crafted high-quality social templates, video production, and interactive narratives. Our engaging Dolby campaigns showcased the immersive experiences of Dolby Atmos and Dolby Vision, capturing audience interest. This resulted in a stronger digital presence, reinforcing Dolby’s leadership in entertainment technology across the region."
        overviewPara="Our efforts spanned from movie premiere promotions to interactive social media experiences, emphasizing the unparalleled quality of Dolby’s technology. Through bespoke digital assets, influencer collaborations, and engaging templates, we reinforced Dolby’s status as the gold standard for entertainment in the region."
        video="/CaseStudies/DolbyAtmos/video2.webm"
        reverse={true}
      />
      <ServicesLists
        textwitshadow="Challenges & how we overcame them"
        heading="Challenges & how we overcame them"
        isButton={false}
        services={[
          "Establishing regional relevance",
          "Showcasing Dolby's immersive experience digitally",
          "Maintaining brand consistency across platforms",
        ]}
        content={[
          "The challenge was that Dolby had a strong global presence but needed a tailored strategy to connect with MENA audiences.",
          "The challenge of translating Dolby’s sensory-rich experience into digital platforms was complex.",
          "Ensuring that Dolby MENA’s digital assets aligned with its global brand guidelines while appealing to regional tastes.",
        ]}
        isArrow={false}
        marginTop={true}
        width="lg:w-[25%] 2xl:w-[30%]"
      />
      <CaseStudySection3
        image="/CaseStudies/DolbyAtmos/image3.png"
        video="/CaseStudies/DolbyAtmos/video3.webm"
        isBottom={true}
      />
      <CaseStudySection4
        cardData={[
          "360-degree digital strategy",
          "Content creation & storytelling",
          "Engaging Dolby campaigns",
          "Stronger digital presence",
          "Increased Registrations & Awareness",
        ]}
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}
