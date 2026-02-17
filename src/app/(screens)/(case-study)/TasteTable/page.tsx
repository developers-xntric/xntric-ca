import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { CaseData } from "@/data/CaseStudyHero";

function TasteTable() {
  return (
    <div className="max-w-screen">

      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Taste Table"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>

      <div className="max-w-[1740px] mx-auto">
        <SecondSectionCase
          caseStudyBottomSection={true}
          data={CaseData}
          bottomImage="/CaseStudies/Taste/1.jpg"
          bottomCenterText="Taste Table, a charming UK-based café, envisioned a bold transformation to better reflect its evolving identity and attract a wider audience. The brand aimed to step away from its traditional look and embrace a modern, sophisticated, and inviting aesthetic that would resonate with both loyal customers and new visitors."
          desciption="With a refreshed identity, cohesive brand storytelling, and a strong online presence, Taste Table has successfully positioned itself as a go-to café destination, appealing to both casual coffee lovers and refined food enthusiast."
        />
        <CaseStudySection2
          sec2Desc="Through a strategic and creative branding revamp, Xntric by LPS successfully transformed Taste Table into a modern, memorable, and customer-centric café brand. Our work has not only refreshed its aesthetic but also strengthened its market presence, paving the way for long-term success."
          overviewPara="Recognizing the need for a complete brand overhaul, Taste Table partnered with Xntric by Xntric by LPS to revamp its branding from the ground up. Our mission was to create a compelling visual identity and strategic brand presence that would establish Taste Table as a memorable, standout café in the competitive UK food and beverage market.From logo design and typography to packaging, menu aesthetics, and digital presence, we redefined every aspect of Taste Table’s brand identity. The focus was on blending warmth and sophistication—ensuring that every brand element exuded quality, comfort, and a premium café experience."
          heading="Redefining café culture"
          image="/CaseStudies/Taste/2.png"
          reverse={false}
          image2="/CaseStudies/Taste/3.png"
        />
        <ServicesLists
          textwitshadow="Our challenges"
          heading="The challenges faced by taste table"
          isButton={false}
          services={[
            "Outdated and inconsistent brand identity",
            "Lack of digital presence",
            "Uninspiring customer experience",
            "Competitive market in the UK’s F&B industry",
            "No clear brand story & strategy",
          ]}
          content={[
            "Taste Table’s original branding lacked a cohesive identity, making it difficult to establish a strong market presence. The logo, color palette, typography, and packaging did not reflect the café’s evolving vision, leading to brand confusion and weak customer recall.",
            "The café had minimal online visibility, with an outdated website and limited social media engagement. In today’s competitive market, where customers rely on online reviews, Instagram-worthy aesthetics, and seamless digital experiences, this was a major setback for customer attraction and retention.",
            "The café’s ambiance and branding did not align with its high-quality offerings. The lack of visually appealing packaging, menu design, and in-store branding meant that customers weren’t as engaged with the brand, affecting word-of-mouth marketing and repeat visits.",
            "With the UK’s highly saturated café industry, standing out was a challenge. Competitors had well-established brand identities, strong community engagement, and trendy aesthetics that attracted modern-day café-goers. Taste Table needed a distinctive brand identity to carve its niche and compete with leading coffee chains and artisanal cafés.",
            "Taste Table lacked a compelling narrative that communicated its values, uniqueness, and customer experience. Without a clear positioning strategy, it struggled to establish an emotional connection with its audience, limiting its ability to build brand loyalt",
          ]}
          isArrow={false}
        />
        <CaseStudySection3 image="/CaseStudies/Taste/4.png" />
        <CaseStudySection4
          image1="/CaseStudies/Taste/5.png"
          image2="/CaseStudies/Taste/6.png"
        />
        <CaseStudySection7 />
        <ContactForm />
      </div>
    </div>
  );
}

export default TasteTable;
