import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { CaseData } from "@/data/CaseStudyHero";

export default function AbuDhabi() {
  return (
    <div className="max-w-screen">

      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Abu Dhabi Islamic Bank"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>

      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/AbuDhabi/image1.png"
        bottomCenterText="Abu Dhabi Islamic bank (ADIB) embarked on a mission to redefine the digital banking experience for the next generation through its amwali initiative. Designed for Gen Z, amwali is a fusion of savings and card functionality, offering a seamless financial journey for young, digitally-savvy users. Xntric by LPS was entrusted with the challenge of reimagining the ADIB (amwali) brand for this unique demographic, building an engaging, culturally resonant, and digitally-driven social media presence."
        desciption="The goal was to position amwali as more than just a banking service—it needed to be a lifestyle brand that seamlessly integrates into the lives of Gen Z."
      />

      <CaseStudySection2
        heading="Influencing the future of finance"
        sec2Desc="As part of this collaboration, Xntric by LPS was entrusted with managing all aspects of Carrefour KSA’s social media and brand communication strategy. Xntric by LPS successfully transformed amwali by ADIB into a digitally-native brand, bridging the gap between traditional banking and modern financial aspirations."
        overviewPara="In today’s fast-evolving digital landscape, banking is no longer just about transactions—it’s about experiences, engagement, and connection. Recognizing this shift, Abu Dhabi Islamic Bank (ADIB) embarked on a transformative mission to redefine digital banking for the next generation through its amwali initiative. Tailored specifically for Gen Z, amwali is more than a banking solution; it’s a fusion of savings, card functionality, and smart financial tools that enable young, digitally-savvy users to seamlessly manage their money while staying true to their lifestyle."
        video="/CaseStudies/AbuDhabi/video.webm"
        reverse={true}
      />
      <ServicesLists
        textwitshadow="Our challenges"
        heading="Challenges & how we overcame them"
        isButton={false}
        services={[
          "A youth-centric social media approach",
          "Influencer-Driven community building",
          "Multi-Platform execution & performance optimization",
        ]}
        content={[
          "Xntric by LPS created a vibrant, relatable, and gen z-friendly content strategy, incorporating localized storytelling – Using culturally relevant narratives that resonated with the UAE’s youth. We used interactive content formats – Polls, quizzes, memes, and short-form videos to drive engagement.",
          "To build trust and familiarity, influencer partnerships played a central role. Xntric by LPS identified macro and micro-influencers whose lifestyles aligned with amwali’s ethos, ensuring authentic brand advocacy – Creators shared real-life experiences of how amwali empowered their financial habits. We led engagement-based campaigns,  challenges, interactive Q&A sessions, and financial education content tailored for Gen Z",
          "Xntric by LPS optimized ADIB’s social media presence with a mix of Arabic and English content across Instagram & TikTok, Snapchat, Twitter, Linkedin creating short, engaging videos showcasing the ease of banking with amwali. Xntric by LPS brought forth exclusive promotions and filters to attract a younger audience.",
        ]}
        isArrow={false}
        marginTop={true}
        width="2xl:w-[40%] lg:w-[45%]"
      />
      <CaseStudySection3
        image="/CaseStudies/AbuDhabi/image2.png"
        image2="/CaseStudies/AbuDhabi/image3.png"
        isBottom={true}
      />
      <CaseStudySection4
        cardData={[
          "Higher engagement rates",
          "Increased app downloads",
          "Event marketing & activations",
          "Stronger brand affinity",
          "Influencer-led growth",
        ]}
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}
