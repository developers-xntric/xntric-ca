import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { CaseData } from "@/data/CaseStudyHero";

function London() {
  return (
    <div className="max-w-screen">

      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="London Dairy"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>

      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/London/image1.png"
        bottomCenterText="London Dairy, a premium ice cream brand, wanted to introduce its three new flavors in a way that felt fresh, exciting, and hyper-relevant to modern audiences. The challenge? Breaking into the gaming space—a community known for its loyalty and authenticity. Instead of taking the conventional ad route, we tapped into the power of game streamers to blend the love for ice cream with the thrill of gaming."
        desciption="By partnering with 55 nano and micro game streamers across the UAE and KSA, we launched a three-month interactive campaign powered by our proprietary game streaming adtech, StreamShreek. These streamers showcased London Dairy’s new flavors across 124 different games on Twitch, creating seamless, organic brand placements that felt natural and engaging. The result? A massive wave of brand awareness, driving conversations, engagement, and conversions—all while keeping it cool."
      />

      <CaseStudySection2
        heading="Scooping up the gaming community"
        sec2Desc="London Dairy’s flavor-packed gaming campaign proved that with the right strategy, any brand can enter new territories and win big. This wasn’t just about promoting ice cream; it was about making London Dairy the go-to snack for every gaming session. The campaign blended brand love with gaming passion, proving that premium flavors and premium gameplay are a perfect match."
        overviewPara="London Dairy took an unconventional route to launch its three new flavors—by stepping into the gaming universe. Instead of traditional advertising, we decided to speak the language of gamers, collaborating with 55 nano and micro-streamers across the UAE and KSA. These creators didn’t just promote the brand; they wove London Dairy into their gaming experiences, making it an organic part of their content.By using StreamShreek, our proprietary game-streaming adtech, we ensured that London Dairy was front and center across 124 games on Twitch, engaging players and viewers in a way that felt authentic, fun, and fresh. Whether it was a high-stakes battle, an intense strategy moment, or a casual chill session, our campaign turned every gaming experience into an opportunity to crave London Dairy’s premium flavors."
        image="/CaseStudies/London/image2.png"
        reverse={true}
      />
      <ServicesLists
        textwitshadow="Our challenges"
        heading="London Dairy x gaming - a flavorful revolution"
        isButton={false}
        services={[
          "55 influential game streamers",
          "Hundreds of thousands of views",
          "124 different games featured",
          "Strong brand awareness & connection",
        ]}
        content={[
          "We partnered with 55 nano and micro-streamers across the UAE and KSA, tapping into authentic voices within the gaming community. These influencers weren’t just promoting the brand; they integrated London Dairy into their gaming routines, making it a natural and engaging experience for their viewers. By leveraging their credibility, we were able to establish real connections between the brand and the gaming audience.",
          "Our campaign generated massive visibility, accumulating hundreds of thousands of organic views. This extensive reach ensured that London Dairy’s new flavors were seen by a highly engaged audience, driving excitement and awareness within a younger, digital-first demographic. By meeting the audience where they naturally engage—live-streaming platforms like Twitch—we maximized brand exposure in an authentic and non-intrusive way.",
          "London Dairy was seamlessly integrated into 124 different games across multiple genres, including action, adventure, sports, and simulation. This variety ensured that we reached a diverse player base, from casual mobile gamers to hardcore console enthusiasts. No matter what the game, London Dairy was there, making every gaming session cooler and more enjoyable.",
          "The campaign successfully positioned London Dairy as a trendy, relevant, and innovative brand in an industry that traditionally doesn’t associate with gaming. By aligning with the gaming culture, we strengthened the brand’s emotional connection with younger audiences, reinforcing the idea that London Dairy isn’t just about ice cream—it’s about enhancing life’s fun moments.",
        ]}
        isArrow={false}
        marginTop={true}
      />
      <CaseStudySection4 bigImage="/CaseStudies/London/image3.png" />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}

export default London;
