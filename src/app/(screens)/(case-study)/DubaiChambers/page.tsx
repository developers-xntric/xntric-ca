import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { CaseData } from "@/data/CaseStudyHero";

export default function DubaiChambers() {
  return (
    <div className="max-w-screen">

      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Dubai Chambers"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>

      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/DubaiChambers/image1.png"
        bottomCenterText="We enlisted 8 gaming streamers to amplify the campaign’s reach. Two micro-streamers integrated Dynamic Ads within their Live Streams twice a week."
        desciption="We enlisted 8 gaming streamers to amplify the campaign’s reach. Two micro-streamers integrated Dynamic Ads within their Live Streams twice a week."
      />
      <CaseStudySection2
        heading="A Campaign That Spoke the Audience’s Language"
        sec2Desc="The Dubai Chamber of Digital Economy launched the App Olympics Competition, a groundbreaking initiative to empower Emirati coders and cultivate digital innovation. The objective was to maximize registrations and create widespread awareness, positioning the competition as a premier platform for aspiring developers. However, with a competitive digital landscape and multiple initiatives vying for attention, engaging the right audience effectively was a key challenge."
        overviewPara="The Dubai Chamber of Digital Economy introduced the App Olympics Competition to empower Emirati coders and foster digital innovation. Aimed at maximizing registrations and positioning the competition as a premier platform for aspiring developers, the challenge lay in cutting through a competitive digital landscape and capturing the right audience’s attention. To tackle this, we implemented a multi-channel marketing strategy that combined gaming influencer partnerships, interactive live sessions, bilingual dynamic ads, and precision-targeted digital campaigns. By leveraging highly engaged gaming communities, we ensured the initiative resonated with tech-savvy participants, leading to unprecedented engagement and record-breaking registrations."
        video="/CaseStudies/DubaiChambers/video1.webm"
        reverse={true}
      />
      <ServicesLists
        textwitshadow="Challenges & How We Overcame Them"
        heading="Challenges & How We Overcame Them"
        isButton={false}
        services={[
          "Limited Awareness",
          "Capturing Interest in a Competitive Space",
          "Language & Cultural Relevance",
        ]}
        content={[
          "The App Olympic competition was a new initiative, and many Emirati coders were unaware of its existence..",
          "With numerous digital initiatives running simultaneously, standing out was a major challenge. Instead of relying on traditional promotions.",
          "The diverse Emirati audience required a campaign that resonated with both Arabic and English speakers.",
        ]}
        isArrow={false}
        marginTop={true}
      />
      <CaseStudySection3
        image="/CaseStudies/DubaiChambers/image2.png"
        video="/CaseStudies/DubaiChambers/video2.webm"
        isBottom={true}
      />
      <CaseStudySection4
        cardData={[
          "Influencer-Led Campaign",
          "Dynamic Ad Integration.",
          "Live Streaming Strategy",
          "Bilingual Content Execution",
          "Increased Registrations & Awareness",
        ]}
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}
