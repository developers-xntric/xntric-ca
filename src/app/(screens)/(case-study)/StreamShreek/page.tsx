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

function StreamShreek() {
  return (
    <div className="max-w-screen">
      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Streamshreek gaming website"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>

      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/StreamShreek/image1.png"
        bottomCenterText="Streamshreek is revolutionizing gaming marketing by connecting brands with top-tier game streamers and esports communities. We developed a high-performance gaming website that integrates their in-house tech platform, allowing brands to launch large-scale influencer campaigns, track real-time analytics, and engage millions of gamers."
        desciption="Whether it’s media placements, streamer activations, or full-fledged gaming strategies, our digital solution ensures that Streamshreek dominates the gaming ecosystem in MENA."
      />
      <CaseStudySection2
        heading="Designed a culturally immersive experience"
        image="/CaseStudies/StreamShreek/image2.png"
        sec2Desc="We worked closely with Streamshreek to develop a high-performance gaming website that integrates their proprietary tech platform, enabling brands to launch large-scale influencer campaigns and reach millions of gamers with ease. The site incorporates features such as real-time analytics, media placements, and campaign tracking, allowing brands to monitor the success of their influencer activations and measure engagement."
        overviewPara="Whether through streamer campaigns, esports events, or building gaming communities, Streamshreek’s platform is a powerful tool for brands looking to make a mark in the gaming ecosystem. Our goal was to create a user-friendly, data-driven website that supports Streamshreek’s innovative approach to gaming marketing in the MENA region."
        reverse={true}
        image2="/CaseStudies/StreamShreek/image3.png"
      />
      <ServicesLists
        textwitshadow="Our challenges"
        heading="The challenge of creating an ecommerce"
        isButton={false}
        services={streamService}
        content={streamContent}
        isArrow={false}
      />
      <CaseStudySection3 image="/CaseStudies/StreamShreek/image4.png" />
      <CaseStudySection4
        image1="/CaseStudies/StreamShreek/image5.png"
        image2="/CaseStudies/StreamShreek/image6.png"
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}

export default StreamShreek;
