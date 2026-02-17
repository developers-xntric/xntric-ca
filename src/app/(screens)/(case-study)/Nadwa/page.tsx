import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { CaseData } from "@/data/CaseStudyHero";

function Nadwa() {
  return (
    <div className="max-w-screen">

      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Nadwa"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>
      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/Nadwa/1.png"
        bottomCenterText="Nadwa, a UAE-based education platform, required a complete digital transformation to enhance user experience, performance, and scalability. The platform, which connects students and tutors globally, was previously built on an outdated system with poor optimization, slow performance, and limited functionality."
        desciption="Xntric by LPS took on the challenge of revamping both Nadwa’s website and web application, replacing the legacy system with a modern, high-performance solution. By leveraging the latest technologies such as React 18, Python Django, Tailwind CSS, ShadCN UI, and AWS hosting, we delivered a fully optimized, SEO-friendly, and feature-rich education platform."
      />
      <CaseStudySection2
        sec2Desc="Nadwa, a UAE-based education platform, required a complete revamp of its website and web application to enhance performance, scalability, and user experience. The existing system was outdated, slow, and lacked key functionalities for tutors and students."
        overviewPara="Xntric by LPS modernized Nadwa by rebuilding the website with React and Tailwind CSS, implementing Arabic SEO, and optimizing speed from 30% to 90%. The web application was completely restructured using React 18 and Django, introducing real-time messaging, online classrooms, tutor-student booking, and secure Stripe payments.With a mobile-first, scalable, and AI-enhanced approach, Nadwa now offers a seamless, user-friendly experience, making it a leading education platform in the region."
        heading="Transforming education through digital innovation"
        image="/CaseStudies/Nadwa/2.png"
        reverse={true}
        image2="/CaseStudies/Nadwa/3.png"
      />
      <ServicesLists
        textwitshadow="Our challenges"
        heading="The challenges faced by the leading global tutoring platform"
        isButton={false}
        services={[
          "Outdated technology stack",
          "Slow website performance",
          "Lack of arabic support",
          "Limited features & poor user experience",
          "Payment & booking challenges",
        ]}
        content={[
          "The legacy system was built on an inefficient framework, causing scalability issues, frequent bugs, and maintenance difficulties.",
          "With a 30% speed score, the website suffered from long load times, poor navigation, and high bounce rates, negatively impacting user retention.",
          "The platform was not properly localized for Arabic-speaking users, limiting accessibility, engagement, and visibility in UAE and the wider MENA region.",
          "The web app lacked key educational tools, intuitive dashboards, and modern UI components, making navigation and interactions difficult for both students and tutors.",
          "The absence of automated tutor booking, job postings, and secure payment gateways led to a cumbersome process for both tutors and students.",
        ]}
        isArrow={false}
      />
      <CaseStudySection3 image="/CaseStudies/Nadwa/4.png" />
      <CaseStudySection4
        image1="/CaseStudies/Nadwa/5.png"
        image2="/CaseStudies/Nadwa/6.png"
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}

export default Nadwa;
