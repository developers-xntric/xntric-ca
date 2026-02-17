import BlogHeader from "@/components/blog/blog-header";
import CaseStudySection2 from "@/components/case-study/Bize-Section-2";
import CaseStudySection3 from "@/components/case-study/Bize-Section-3";
import CaseStudySection4 from "@/components/case-study/Bize-Section-4";
import CaseStudySection7 from "@/components/case-study/Bize-Section-7";
import SecondSectionCase from "@/components/case-study/SecondSectionCase";
import ServicesLists from "@/components/case-study/ServicesList";
import ContactForm from "@/components/common/contact-form";
import { foodContent, foodService } from "@/data/Bize-Service";
import { CaseData } from "@/data/CaseStudyHero";

function Food() {
  return (
    <div className="max-w-screen">
      
      <div className="w-screen p-4 rounded-[10px]">
        <BlogHeader
          description=""
          title="Food Ninja delivery app"
          videoSrc="/Blog/hero-video.webm"
          join={false}
        />
      </div>

      <SecondSectionCase
        caseStudyBottomSection={true}
        data={CaseData}
        bottomImage="/CaseStudies/FoodNinja/image1.png"
        bottomCenterText="Food Ninja is a next-generation food delivery app that redefines the way users experience online food ordering. In today’s fast-paced digital world, customers expect speed, convenience, and a seamless journey from craving to consumption. Food Ninja recognized the need for a platform that not only simplifies ordering but also enhances it through smart technology."
        desciption="By integrating AI-powered meal recommendations, real-time tracking, and a smooth checkout process, we created a robust digital ecosystem where users can explore, order, and enjoy their favorite meals without hassle."
      />

      <CaseStudySection2
        heading="Bringing food to your fingertips"
        sec2Desc="Whether it’s a late-night snack, a gourmet feast, or a quick lunch break meal, Food Ninja ensures that every order is delivered with precision, speed, and reliability. Food Ninja makes ordering meals as smooth as scrolling through your cravings. We created a lightning-fast app with AI-powered meal recommendations, real-time order tracking, and a hassle-free checkout system."
        overviewPara="Food Ninja is a next-generation food delivery app designed to make ordering meals effortless and enjoyable. With a rapidly growing demand for seamless digital experiences, Food Ninja needed a platform that combined speed, personalization, and efficiency. The goal was to create an intuitive app that catered to users’ cravings with AI-powered meal recommendations, real-time tracking, and a frictionless checkout process."
        image="/CaseStudies/FoodNinja/image2.png"
        image2="/CaseStudies/FoodNinja/image3.png"
      />
      <ServicesLists
        textwitshadow="Our challenges"
        heading="TSmart, fast, and hassle-free food delivery!"
        isButton={false}
        services={foodService}
        content={foodContent}
        isArrow={false}
      />
      <CaseStudySection3 image="/CaseStudies/FoodNinja/image4.png" />
      <CaseStudySection4
        image1="/CaseStudies/FoodNinja/image5.png"
        image2="/CaseStudies/FoodNinja/image6.png"
      />
      <CaseStudySection7 />
      <ContactForm />
    </div>
  );
}

export default Food;
