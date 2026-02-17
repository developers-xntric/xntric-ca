import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { CaseData } from "@/data/CaseStudyHero";

function Plenum() {
  return (
    <div className="max-w-screen">
      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Macramé"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>

      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/Macrame/Macram1.jpg"
        bottomCenterText="Macramé is a visionary project that redefines the concept of artistic collaboration by uniting designers, artisans, and creators under one roof. It is not just a boutique or an art gallery—it is a hub of innovation, a platform for emerging Arab artists, and a sanctuary for creativity."
        desciption="Xntric by LPS was entrusted with the challenge to develop the Macramé brand from the ground up, ensuring it visually and conceptually embodied the platform’s mission. From defining the brand’s narrative to creating its logo, visual language, and brand strategy, Xntric by LPS meticulously crafted an identity that positioned Macramé as a beacon of artistic unity and cultural pride."
      />

      <CaseStudySection2
        sec2Desc="Through an intricate process of research, design, and storytelling, we created a brand that resonates with creatives, patrons, and art enthusiasts alike, establishing Macramé as a premier destination for Arab talent.
"
        overviewPara="Macramé is a unique concept in the UAE, blending retail, an art gallery, and a talent center under one roof. Dedicated to championing Arab artistry, Macramé serves as a platform for emerging and established designers in fashion, jewelry, and industrial arts. With a vision to tie together creative talents and propel them into the limelight, Macramé sought a brand identity that reflected its essence—one of unity, artistry, and cultural heritage. Xntric by LPS , was tasked with creating Macramé’s brand identity from the ground up. Our mission was to craft a visual and conceptual identity that symbolized Macramé’s role as the unifying thread of Arabian artistry while ensuring it stood out as a premium creative hub."
        heading="Tying artists together, setting art free"
        image="/CaseStudies/Macrame/Macrame2.png"
        reverse={false}
        image3="/CaseStudies/Macrame/Group.png"
      />
      <ServicesLists
        textwitshadow="Our challenges"
        heading="The challenges faced by Macrame"
        isButton={false}
        services={[
          "Lack of a distinct brand identity",
          "Capturing the spirit of artistic collaboration",
          "Balancing tradition with modernity",
          "Creating a logo with deep symbolism",
        ]}
        content={[
          "Macramé had a powerful vision but lacked a cohesive brand identity that truly reflected its role as a hub for Arab artistry. Without a strong brand presence, it risked being perceived as just another boutique or gallery rather than a transformative platform for creative expression.",
          "Macramé was built on the philosophy of interconnected artistry—bringing together designers from different disciplines under one roof. The challenge was to develop a branding strategy that visually and conceptually represented this fusion while ensuring clarity in messaging.",
          "Macramé aimed to honor the rich heritage of Arabian art and calligraphy while also appealing to contemporary audiences. The challenge was to create a brand identity that felt timeless yet modern, paying homage to the past while remaining relevant in today’s design landscape.",
          "The logo had to encapsulate the essence of interwoven creativity, Arabian aesthetics, and Macramé’s role as a talent incubator. It needed to be versatile yet meaningful, elegant yet bold—something that could stand as a recognizable emblem of the brand.",
        ]}
        isArrow={false}
      />
      <CaseStudySection3 image="/CaseStudies/Macrame/Macrame6.png" />
      <CaseStudySection4
        image1="/CaseStudies/Macrame/Macrame7.png"
        image2="/CaseStudies/Macrame/Macrame8.png"
      />

      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}

export default Plenum;
