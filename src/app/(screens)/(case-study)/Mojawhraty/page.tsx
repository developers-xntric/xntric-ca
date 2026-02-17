import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { streamContent, streamService } from "@/data/Bize-Service";
import { CaseData } from "@/data/CaseStudyHero";

function Mojawhraty() {
  return (
    <div className="max-w-screen">

      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Mojawharty ecommerce website"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>

      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/Mojawhraty/image1.png"
        bottomCenterText="Mojawharty, a prestigious jewellery brand with deep Indian roots, aspired to expand its presence in the Middle East by embracing arabic aesthetics, culture, and art. We crafted a luxury e-commerce website that seamlessly blended the brand’s traditional craftsmanship with a sophisticated arabic-inspired design."
        desciption="From intricate calligraphy motifs to warm, regal color palettes, every element was meticulously curated to resonate with Middle Eastern customers."
      />
      <CaseStudySection2
        sec2Desc="Mojawhraty successfully entered the Middle Eastern luxury jewellery market with a refined digital presence. The new website delivered an immersive shopping experience that resonated with the regional audience, leading to increased engagement, higher conversions, and a stronger brand identity in the Arab world."
        overviewPara="Mojawhraty, a prestigious jewellery brand with deep Indian heritage, aimed to expand its presence in the Middle East. To successfully transition into this new market, they needed an e-commerce platform that embraced Arabic culture, art, and aesthetics while preserving their traditional craftsmanship."
        heading="Designed a culturally immersive experience"
        image="/CaseStudies/Mojawhraty/image2.png"
        reverse={true}
        image2="/CaseStudies/Mojawhraty/image3.png"
      />
      <ServicesLists
        textwitshadow="Our challenges"
        heading="The challenge of crafting a digital expression of luxury"
        isButton={false}
        services={streamService}
        content={streamContent}
        isArrow={false}
      />
      <CaseStudySection3 image="/CaseStudies/Mojawhraty/image4.png" />
      <CaseStudySection4
        image1="/CaseStudies/Mojawhraty/image5.png"
        image2="/CaseStudies/Mojawhraty/image6.png"
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}

export default Mojawhraty;
