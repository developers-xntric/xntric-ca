import BlogHeader from "@/components/blog/blog-header";
import Section1 from "@/components/contact/Section1";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Xntric – Let’s Build Something Great",
  description: "Contact Xntric to discuss your next big idea and explore creative, data-driven strategies designed to help your business grow faster.",
};
const Contact: React.FC = () => {
  return (
    <>
      <div className="w-screen p-3 md:p-4 rounded-[10px]">
        <BlogHeader
          description="Get in touch with Xntric"
          title="Contact"
          videoSrc="/Blog/hero-video.webm"
        />
      </div>
      <div className="w-full mt-10 2xl:mt-20  mb-20 3xl:mb-0 bg-cover bg-top bg-no-repeat relative overflow-hidden pt-20 sm:pt-0">
        <div className="max-w-[1740px] mx-auto">
          <div className=" flex flex-col space-y-10 ">
            <Section1 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
