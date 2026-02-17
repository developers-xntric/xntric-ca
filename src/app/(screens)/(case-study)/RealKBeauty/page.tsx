import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { rkContent, rkService } from "@/data/Bize-Service";
import { CaseData } from "@/data/CaseStudyHero";

function RealKBeauty() {
  return (
    <div className="max-w-screen">

      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Real K Beauty"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>
      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/RealKBeauty/image1.png"
        bottomCenterText="RealKBeauty brings premium Korean beauty products to a global audience, and they needed an e-commerce website that reflected the essence of their brand. We crafted a visually stunning, mobile-optimized store with smooth navigation, smart product recommendations, and an ultra-secure checkout process."
        desciption="With interactive product displays, skincare guides, and an intuitive user journey, we helped RealKBeauty build an engaging and user-friendly online store."
      />
      <CaseStudySection2
        sec2Desc="We developed a sleek, mobile-optimized eCommerce platform that enhances the shopping experience and maximizes conversions."
        overviewPara="RealKBeauty is a premium Korean beauty brand that aims to deliver authentic K-beauty products to customers worldwide. With a focus on high-quality skincare, innovative cosmetics, and trend-driven beauty solutions, the brand needed a robust eCommerce platform to showcase its products and streamline online sales."
        heading="A thriving global beauty brand"
        image="/CaseStudies/RealKBeauty/image2.png"
        reverse={true}
        image2="/CaseStudies/RealKBeauty/image3.png"
      />
      <ServicesLists
        textwitshadow="Our challenges"
        heading="The challenge of Creating a Seamless eCommerce Experience"
        isButton={false}
        services={rkService}
        content={rkContent}
        isArrow={false}
      />
      <CaseStudySection3 image="/CaseStudies/RealKBeauty/image4.png" />
      <CaseStudySection4
        image1="/CaseStudies/RealKBeauty/image5.png"
        image2="/CaseStudies/RealKBeauty/image6.png"
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}

export default RealKBeauty;
