import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { CaseData } from "@/data/CaseStudyHero";

function Mentos() {
  return (
    <div className="max-w-screen">
      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Mentos"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>

      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/Mentos/image1.png"
        bottomCenterText="Mentos wanted to capitalize on the global excitement of the FIFA World Cup without the hefty price tag of an official sponsorship. The challenge was to strategically position the brand alongside the tournament in a way that felt authentic, engaging, and impactful"
        desciption="Instead of traditional sponsorship, we leveraged real-time, in-stream advertising through StreamShreek, delivering tailored creatives and dynamic messaging during key moments of the matches. This innovative approach ensured that Mentos was not just present during the World Cup but was an active part of the conversation, resonating with fans worldwide."
      />
      <CaseStudySection2
        heading="Mentos & FIFA – A winning strategy without sponsorship"
        sec2Desc="Mentos wanted to make a powerful brand statement during the FIFA World Cup, but without the heavy investment of an official sponsorship. The challenge? Capturing the energy, excitement, and global fanfare of the tournament while ensuring that Mentos remained top-of-mind for millions."
        overviewPara="Mentos set out to own the FIFA World Cup without the constraints of official sponsorship. Instead of following the traditional path, we took a bold, unconventional approach, using real-time in-stream advertising to place the brand at the heart of the action. Through dynamic, tailored creatives that aired during key game moments, we ensured that Mentos wasn’t just a spectator—it was part of the experience. This seamless integration made the brand feel like a natural companion to the excitement of the tournament, driving massive visibility and engagement across multiple digital platforms."
        image="/CaseStudies/Mentos/image2.png"
        reverse={true}
      />
      <ServicesLists
        textwitshadow="Our challenges"
        heading="Tackling engagement, scoring visibility"
        isButton={false}
        services={[
          "Millions of impressions across the GCC",
          "Significant growth in Website visits",
          "20% share of voice on twitch for FIFA '23",
          "Higher click-through rates & engagement",
        ]}
        content={[
          "Through precision-targeted digital ads, we ensured Mentos was seen by millions, strategically placing the brand within the world cup conversation across multiple markets.",
          "By aligning ads with key match moments, we didn’t just boost awareness we turned it into action, driving thousands of users to engage directly with the brand online",
          "Tapping into the massive FIFA gaming audience on Twitch, we made Mentos one of the most talked-about brands on the platform, increasing interaction with a digitally-savvy, sports-loving audience.",
          "Instead of passive ads, we delivered interactive, real-time content, making sure fans didn’t just see Mentos—they engaged with it",
        ]}
        isArrow={false}
        marginTop={true}
      />
      <CaseStudySection4 bigImage="/CaseStudies/Mentos/image3.png" />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}

export default Mentos;
