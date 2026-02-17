import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { carrefourContent, carrefourService } from "@/data/Bize-Service";
import { CaseData } from "@/data/CaseStudyHero";

function CareerFour() {
  return (
    <div className="max-w-screen">
      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Carrefour KSA"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>

      <div className="xl:mt-32">
        <SecondSectionCase
          caseStudyBottomSection={true}
          data={CaseData}
          bottomVideo="/CaseStudies/CareerFour/video1.webm"
          bottomCenterText="Carrefour, one of the world’s leading retail giants, has a strong presence in Saudi Arabia (KSA) with over 20 branches across the country. As the retail industry rapidly evolves in the digital age, Carrefour recognized the need to enhance its social media presence, ensuring it remains at the forefront of customer engagement, brand visibility, and trade marketing success."
          desciption="Carrefour sought a strategic partner who could bring a fresh, dynamic approach to its digital marketing"
        />
      </div>

      <CaseStudySection2
        heading="Carrefour KSA goes digital"
        sec2Desc="As part of this collaboration, LPS was entrusted with managing all aspects of Carrefour KSA’s social media and brand communication strategy. "
        overviewPara="Carrefour, a leading global retail brand, sought to enhance its social media presence in Saudi Arabia (KSA) to drive engagement, strengthen brand identity, and maximize trade marketing campaigns. LPS, after a competitive selection process, was appointed as the official Social Media MarCom partner, taking charge of all aspects of Carrefour KSA’s social branding, strategy, and content execution. This partnership serves as LPS’s gateway to establishing a strong presence in KSA’s retail market."
        video="/CaseStudies/CareerFour/video2.webm"
        reverse={true}
      />
      <ServicesLists
        textwitshadow="Our Challenges"
        heading="Challenges & how we overcame them"
        isButton={false}
        services={carrefourService}
        content={carrefourContent}
        isArrow={false}
        marginTop={true}
      />
      <CaseStudySection3
        image="/CaseStudies/CareerFour/image1.png"
        image2="/CaseStudies/CareerFour/image2.png"
        isBottom={true}
      />
      <CaseStudySection4 cardData={carrefourContent} />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}

export default CareerFour;
