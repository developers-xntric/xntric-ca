import BlogHeader from "@/components/blog/blog-header";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Privacy Policy – How Xntric Protects Your Data",
  description: "Read Xntric’s privacy policy to learn how we responsibly collect, store, and safeguard your personal data while delivering our digital services.",
};
const PrivcayPage = () => {
  return (
    <main>
      <div className="w-full h-[70vh] lg:bg-cover bg-top bg-no-repeat relative">
        <BlogHeader
          description=""
          title="Privacy Policy"
          videoSrc="/Blog/hero-video.webm"
        />
      </div>
      <div className="lg:max-w-[92%] max-w-[96%] mx-auto pb-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6 text-white">
            <h2 className="text-3xl font-bold">Privacy Policy</h2>
            <p className="lg:text-xl">
              Our first concern is your personal information and privacy. This
              policy outlines our methods of collecting, using, and protecting
              personal data to ensure your confidence in our processes.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-6 text-white">
            <h2 className="text-3xl font-bold">
              Gathering and Applied Use of Personal Data
            </h2>
            <ul className="flex flex-col gap-4 text-lg text-white">
              <li>
                We clearly state the reason for gathering any personal data
                either prior to or during data acquisition.
              </li>
              <li>
                Our data only covers what is required for our business goals,
                service delivery, or enhancement of your experience.
              </li>
              <li>
                We guarantee that all the information you provide is used
                legally and ethically in line with your permission and the
                relevant legal system.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 text-white">
            <h2 className="text-3xl font-bold">Data Sharing and Disclosure</h2>
            <ul className="flex flex-col gap-4 text-lg decoration-dotted decoration-white decoration-4  text-white">
              <li>
                Your personal data is never shared with other parties except in
                legal compliance requirements.
              </li>
              <li>
                To satisfy contractual responsibilities under your express
                agreement.
              </li>
              <li>
                Any data exchange is done under tight confidentiality agreements
                to protect your privacy.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 text-white">
            <h2 className="text-3xl font-bold">Accuracy and Relevance</h2>
            <ul className="flex flex-col gap-4 text-lg decoration-dotted decoration-white decoration-4  text-white">
              <li>
                We strive to keep accurate, comprehensive, and current records
                of your personal data.
              </li>
              <li>
                Any useless, out-of-date, non-compliant with relevant
                legislation data will be removed or updated right away
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 text-white">
            <h2 className="text-3xl font-bold">
              Protection of Personal Information
            </h2>
            <p className="lg:text-xl">
              We use strong security policies including encryption, safe
              servers, and limited access to protect your information against:{" "}
            </p>
            <ul className="flex flex-col gap-4 text-lg decoration-dotted decoration-white decoration-4  text-white">
              <li>Loss or theft</li>
              <li>
                Unauthorized access; disclosure; duplication; or alteration.
              </li>
              <li>Misuse or abuse.</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 text-white">
            <h2 className="text-3xl font-bold">Your Consent</h2>
            <ul className="flex flex-col gap-4 text-lg decoration-dotted decoration-white decoration-4  text-white">
              <li>
                By providing your personal information, you consent to its
                collection and use as outlined in this policy.
              </li>
              <li>
                Subject to legal or contractual restrictions, you are entitled
                to revoke permission at any point.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 text-white">
            <h2 className="text-3xl font-bold">Your Rights</h2>
            <ul className="flex flex-col gap-4 text-lg decoration-dotted decoration-white decoration-4  text-white">
              <li>
                You might access, change, or ask for deletion of your personal
                data whenever you want.
              </li>
              <li>Please call us for questions or requests.</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 text-white">
            <h2 className="text-3xl font-bold">
              Updates to This Privacy Policy
            </h2>
            <ul className="flex flex-col gap-4 text-lg decoration-dotted decoration-white decoration-4  text-white">
              <li>
                Periodically, we may amend this policy to better reflect
                developments in our legal obligations, procedures, or offerings.
              </li>
              <li>
                Any major changes will be shared via our website or other direct
                channels.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 text-white">
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <ul className="flex flex-col gap-4 text-lg decoration-dotted decoration-white decoration-4  text-white">
              <li>
                Should you have questions, issues, or comments about our Privacy
                Policy, please contact us.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivcayPage;
