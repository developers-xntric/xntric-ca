import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { CaseData } from "@/data/CaseStudyHero";

function Dabur() {
  return (
    <div className="max-w-screen">

      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Dabur"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>
      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/Dabur/image1.png"
        bottomCenterText="Dabur is a globally recognized brand known for its expertise in natural and herbal personal care solutions. With a legacy built on trust and innovation, the brand continuously evolves to meet the changing needs of consumers."
        desciption="For the launch of Dabur vatika fruitamins, a smoothie-inspired hair mask, the brand wanted to disrupt the beauty and self-care space on TikTok. The goal was to create instant awareness and engagement among a diverse audience, positioning Fruitamins as a fun, effective, and inclusive hair care solution. To achieve this, the campaign needed to be modern, relatable, and culturally relevant—something that would resonate deeply with digital-first consumers and drive real conversions."
      />

      <CaseStudySection2
        heading="A viral beauty disruption on TikTok"
        sec2Desc="Breaking into the beauty and self-care space on tikTok is no easy feat. To launch Dabur Vatika Fruitamins, a smoothie-like hair mask, we needed something fresh, bold, and undeniably catchy. Leveraging TikTok’s love for classic song revivals, we paired the product’s fruity, nourishing essence with Craig David’s hit track What’s Your Flava—creating an irresistible, music-driven campaign."
        overviewPara="Dabur Vatika Fruitamins set out to disrupt the beauty and self-care space on TikTok—a platform where trends make or break brands. By tapping into the viral potential of nostalgic music, we paired the brand’s smoothie-like hair mask with Craig David’s What’s Your Flava, creating a campaign that was fresh, fun, and impossible to ignore. The result? A wave of engagement that not only introduced Fruitamins as a must-have hair care product but also garnered more views than the original track itself."
        video="/CaseStudies/Dabur/video1.webm"
        reverse={true}
      />
      <ServicesLists
        textwitshadow="Our challenges"
        heading="From tikTok trend to shopping carts"
        isButton={false}
        services={[
          "Growth in Sales",
          "Increase in website traffic",
          "Viral events covered",
          "Top-Ranked product on amazon",
        ]}
        content={[
          "Sales skyrocketed as consumers grooved their way to shopping platforms, making Fruitamins a top choice for all hair types.",
          "The campaign drove massive traffic to online shopping channels, boosting product discovery and conversions.",
          "Influencers and creators jumped on the trend, amplifying reach and turning the campaign into a TikTok movement.",
          "With a surge in demand, Fruitamins climbed to the top, solidifying its position as a go-to hair care solution",
        ]}
        isArrow={false}
        marginTop={true}
      />
      <CaseStudySection4
        image1="/CaseStudies/Dabur/image2.png"
        image2="/CaseStudies/Dabur/image3.png"
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}

export default Dabur;
