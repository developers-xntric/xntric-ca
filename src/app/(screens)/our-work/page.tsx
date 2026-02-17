import { Metadata } from "next";
import ContactForm from "../../../components/common/contact-form";
import OurWorkHero from "../../../components/our-work/our-work-hero";
import OurWorkSections from "../../../components/our-work/our-work-section";

export const metadata: Metadata = {
  title: "Our Work – Portfolio of Creative Projects | Xntric",
  description: "Explore Xntric’s portfolio of successful projects across marketing, branding, design, and technology, delivering exceptional results for global brands.",
};
 function OurWork() {
  return (
    <div className="max-w-screen  font-futuru">
      <OurWorkHero videoUrl="/Work/ourwork-bg.mov" isPara={false} />
      <OurWorkSections />
      <ContactForm isPaddingTop={true}/>
    </div>
  );
}
export default OurWork;
