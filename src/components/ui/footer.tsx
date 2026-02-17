"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className=" text-white relative py-14 2xl:bg-cover font-futuru border-t bg-no-repeat overflow-hidden flex flex-col md:items-center items-start"
      
    >
      <Image
        src="/HomePage/footer-mob.svg"
        alt="Union Image"
        width={100}
        height={100}
        className="md:hidden w-screen absolute bottom-0 -z-10"
      />
      <Image
        src="/HomePage/footer-mob.svg"
        alt="Union Image"
        width={400}
        height={100}
        className="md:block hidden w-screen h-[80%] absolute bottom-0 -z-10"
      />

      <div className="w-[86%] md:w-[95%] xl:max-w-[1740px] mx-auto">
        {/* Footer for desktop (xl, lg, etc.) */}
        <div
          id="footer"
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-16 gap-y-10 xl:space-x-20 md:grid hidden"
        >
          {/* Contact Us */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-1 h-6 mt-2 bg-[#00AA71] mr-2"></div>
              <h3 className="text-[#00AA71] font-regular text-[26px] whitespace-nowrap">
                Contact us
              </h3>
            </div>
            <address className="not-italic text-[16px] font-light tracking-widest xl:leading-[24px] leading-[22px] space-y-6 xl:space-y-8">
              <div>
                <p>Costra Business park - G47</p>
                <p>Sheikh mohammed min zayed rd</p>
                <p>Dubai production city - Dubai</p>
                <p>Dubai - UAE</p>
              </div>
              <div>
                <p>
                  <a
                    href="tel:+9710569280670"
                    className="text-[13px] sm:text-[16px] font-light tracking-widest"
                  >
                    +971 (0) 569280670
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+97145464465"
                    className="text-[13px] sm:text-[16px] font-light tracking-widest"
                  >
                    +971 4 546 4465
                  </a>
                </p>
              </div>
            </address>
          </div>

          {/* Overview */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-1 h-6 mt-2 bg-[#00AA71] mr-2"></div>
              <h3 className="text-[#00AA71] font-regular text-[26px] whitespace-nowrap">
                Overview
              </h3>
            </div>
            <ul className="text-[16px] leading-relaxed font-light tracking-wider space-y-2">
              <li>
                <Link href="/about" className="hover:text-[#00AA71]">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#00AA71]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="hover:text-[#00AA71]">
                  Case studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#00AA71]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#00AA71]">
                  Terms & conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#00AA71]">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Web Solutions */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-1 h-6 mt-2 bg-[#00AA71] mr-2"></div>
              <h3 className="text-[#00AA71] font-regular text-[26px] whitespace-nowrap">
                Solutions
              </h3>
            </div>
            <ul className="text-[16px] leading-[26px] font-light tracking-wider space-y-4 ">
              <li>
                <Link
                  href="/services/website-development"
                  className="hover:text-[#00AA71]"
                >
                  Web development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/UI-UX-Design"
                  className="hover:text-[#00AA71]"
                >
                  UI/UX design
                </Link>
              </li>

              <li>
                <Link
                  href="/services/mobile-application"
                  className="hover:text-[#00AA71]"
                >
                  Mobile app development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/branding"
                  className="hover:text-[#00AA71]"
                >
                  Branding
                </Link>
              </li>
              <li>
                <Link
                  href="/services/video-production"
                  className="hover:text-[#00AA71]"
                >
                  Production
                </Link>
              </li>
            </ul>
          </div>

          {/* Digital Marketing Services */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-0.5 h-6 mt-2 bg-[#00AA71] mr-2"></div>
              <h3 className="text-[#00AA71] font-regular text-[26px] whitespace-nowrap">
                Marketing services
              </h3>
            </div>
            <ul className="text-[16px] leading-[26px] font-light tracking-wider space-y-4">
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="hover:text-[#00AA71]"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="hover:text-[#00AA71]">
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/SMM" className="hover:text-[#00AA71]">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/SEM" className="hover:text-[#00AA71]">
                  SEM
                </Link>
              </li>
              <li>
                <Link
                  href="/services/app-store-optimization"
                  className="hover:text-[#00AA71]"
                >
                  App Store Optimization
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="footer"
          className="grid-cols-1 md:grid-cols-4 lg:gap-x-16 gap-y-10 md:space-x-20 grid md:hidden"
        >
          {/* Contact Us */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-0.5 h-6 mt-2 bg-[#00AA71] mr-2"></div>
              <h3 className="text-[#00AA71] font-regular text-[22px] md:text-[26px] whitespace-nowrap">
                Contact us
              </h3>
            </div>
            <address className="not-italic text-[16px] font-light tracking-widest xl:leading-[24px] leading-[22px] space-y-4 xl:space-y-8">
              <div>
                <p>
                  Costra Business park - G47 Sheikh mohammed min zayed rd Dubai
                  production city - Dubai Dubai - UAE
                </p>
              </div>
              <div className="flex gap-6">
                <p>
                  <a
                    href="tel:+9710569280670"
                    className="text-[13px] sm:text-[16px] font-light tracking-widest"
                  >
                    +971 (0) 569280670
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+97145464465"
                    className="text-[13px] sm:text-[16px] font-light tracking-widest"
                  >
                    +971 4 546 4465
                  </a>
                </p>
              </div>
            </address>
            {/* <div className="flex space-x-6 xl:space-x-6 2xl:space-x-10 mt-5">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  typeof window !== "undefined" ? window.location.href : ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00AA71] text-[11px] lg:text-[13px] tracking-widest"
              >
                Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  typeof window !== "undefined" ? window.location.href : ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00AA71] text-[11px] lg:text-[13px] tracking-widest"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00AA71] text-[11px] lg:text-[13px] tracking-widest"
              >
                Instagram
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
                  typeof window !== "undefined" ? window.location.href : ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00AA71] text-[11px] lg:text-[13px] tracking-widest"
              >
                LinkedIn
              </a>
            </div> */}
          </div>

          {/* Overview */}
          <div className=" flex gap-5">
            <ul className="text-[16px] leading-relaxed font-light tracking-wider space-y-2">
              <div className="flex items-center mb-6">
                <div className="w-0.5 h-6 mt-2 bg-[#00AA71] mr-2"></div>
                <h3 className="text-[#00AA71] font-regular text-[22px] md:text-[26px] whitespace-nowrap">
                  Overview
                </h3>
              </div>
              <li>
                <Link href="/about" className="hover:text-[#00AA71]">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#00AA71]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="hover:text-[#00AA71]">
                  Case studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#00AA71]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#00AA71]">
                  Terms & conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#00AA71]">
                  Privacy policy
                </Link>
              </li>
            </ul>
            {/* Web Solutions */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-0.5 h-6 mt-2 bg-[#00AA71] mr-2"></div>
                <h3 className="text-[#00AA71] font-regular text-[22px] md:text-[26px] whitespace-nowrap">
                  Solutions
                </h3>
              </div>
              <ul className="text-[16px] leading-[26px] font-light tracking-wider space-y-4 ">
                <li>
                  <Link
                    href="/services/website-development"
                    className="hover:text-[#00AA71]"
                  >
                    Web development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/UI-UX-Design"
                    className="hover:text-[#00AA71]"
                  >
                    UI/UX design
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services/mobile-application"
                    className="hover:text-[#00AA71]"
                  >
                    Mobile app development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/branding"
                    className="hover:text-[#00AA71]"
                  >
                    Branding
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/video-production"
                    className="hover:text-[#00AA71]"
                  >
                    Production
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Digital Marketing Services */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-0.5 h-6 mt-2 bg-[#00AA71] mr-2"></div>
              <h3 className="text-[#00AA71] font-regular text-[22px] md:text-[26px] whitespace-nowrap">
                Marketing services
              </h3>
            </div>
            <ul className="text-[16px] leading-[26px] font-light tracking-wider space-y-4">
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="hover:text-[#00AA71]"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="hover:text-[#00AA71]">
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/SMM" className="hover:text-[#00AA71]">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/SEM" className="hover:text-[#00AA71]">
                  SEM
                </Link>
              </li>
              <li>
                <Link
                  href="/services/app-store-optimization"
                  className="hover:text-[#00AA71]"
                >
                  App Store Optimization
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer for mobile screens */}

        {/* Footer Bottom */}
        <div className="mt-10 w-[92%] flex flex-col xl:flex-row xl:justify-between items-start text-[13px] md:text-[15px] text-[#FFF]">
          <p className="text-center lg:text-left tracking-widest">
            © ALL RIGHTS RESERVED,{" "}
            <span className="text-[#00AA71]">XNTRIC</span> 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
