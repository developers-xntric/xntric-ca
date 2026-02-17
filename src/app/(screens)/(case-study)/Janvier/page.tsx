import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { CaseData } from "@/data/CaseStudyHero";

function Janvier() {
  return (
    <div className="max-w-screen">
      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Janviere"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>
      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/Janvier/1.png"
        bottomCenterText="Janvier is a premium yet affordably priced luxury perfume brand catering to the upper-middle-class men and women who appreciate style, fashion, and exclusivity. The brand was envisioned as an international occidental range, leveraging the prestige of French craftsmanship to differentiate itself from competitors."
        desciption="With a focus on simplicity, elegance, and French sophistication, Janvier aimed to embody the Magician brand archetype, promising to transform lives through fragrance. Our goal was to create a brand that resonated with the aspirational lifestyle of its target audience, reinforcing the idea that a touch of French is a touch of class."
      />
      <CaseStudySection2
        sec2Desc="The goal was to create a perfume brand that offers an aspirational lifestyle, not just a fragrance. Janvier’s customers are individuals who appreciate fine craftsmanship, have a flair for fashion, and understand that luxury is more than just an indulgence—it is a statement of identity."
        overviewPara="Janvier successfully blends French luxury with modern affordability, carving out a distinctive place in the perfume market. Through strategic branding, elegant design, and a deep understanding of its target audience, Janvier embodies the philosophy that a touch of French is a touch of class"
        heading="Parisian Perfection, Captured in a Bottle"
        image="/CaseStudies/Janvier/3.png"
        reverse={false}
        image2="/CaseStudies/Janvier/2.png"
        image3="/CaseStudies/Janvier/4.png"
      />
      <ServicesLists
        textwitshadow="Our challenges"
        heading="Challenges Faced By The French-Inspired Luxury Perfume Brand"
        isButton={false}
        services={[
          "Establishing a Strong French Identity",
          "Choosing a Name with Impact",
          "Balancing Luxury with Affordability",
          "Capturing the Essence of the Magician Archetype",
        ]}
        content={[
          "Janvier needed to stand out in the luxury fragrance market while being recognized as a French-inspired brand. Many competing brands claim European elegance, so we had to ensure that Janvier’s identity was authentic and unmistakably French.",
          "The proposed names J by J and J lacked the strong French association needed for the brand’s positioning. A name like Janvier (meaning “January” in French) was chosen to evoke the sophistication of French heritage while being stylish, unique, and memorable.",
          "Janvier falls into the affordable luxury category, meaning it competes with both high-end designer fragrances and mid-range brands. The challenge was to create branding that felt premium and luxurious while justifying a slightly lower price point.",
          "The brand follows the Magician archetype, meaning its core promise is transformation. The challenge was to create visual and verbal storytelling that conveyed this transformative experience, making users feel that Janvier was more than just a perfume—it was an elevated lifestyle choice.",
        ]}
        isArrow={false}
      />
      <CaseStudySection3 image="/CaseStudies/Janvier/8.png" />
      <CaseStudySection4
        image1="/CaseStudies/Janvier/9.png"
        image2="/CaseStudies/Janvier/10.png"
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}

export default Janvier;
