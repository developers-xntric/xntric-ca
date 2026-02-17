"use client";

import Image from "next/image";

export default function OurSocial() {
  const officeImages = [
    "/about/social-1.svg",
    "/about/social-2.svg",
    "/about/social-3.svg",
    "/about/social-4.svg",
    "/about/social-5.svg",
  ];

  const socialLinks = [
    {
      name: "INSTAGRAM",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="30"
          viewBox="0 0 31 30"
          fill="none"
        >
          <path
            d="M15.3357 7.19727C11.1018 7.19727 7.59375 10.6448 7.59375 14.9392C7.59375 19.2336 11.0413 22.6811 15.3357 22.6811C19.63 22.6811 23.0776 19.1731 23.0776 14.9392C23.0776 10.7053 19.5696 7.19727 15.3357 7.19727ZM15.3357 19.8989C12.6139 19.8989 10.376 17.661 10.376 14.9392C10.376 12.2174 12.6139 9.97952 15.3357 9.97952C18.0575 9.97952 20.2954 12.2174 20.2954 14.9392C20.2954 17.661 18.0575 19.8989 15.3357 19.8989Z"
            fill="white"
          />
          <path
            d="M23.379 8.77027C24.3478 8.77027 25.1331 7.98496 25.1331 7.01624C25.1331 6.04751 24.3478 5.26221 23.379 5.26221C22.4103 5.26221 21.625 6.04751 21.625 7.01624C21.625 7.98496 22.4103 8.77027 23.379 8.77027Z"
            fill="white"
          />
          <path
            d="M27.9166 2.47984C26.344 0.846774 24.1061 0 21.5658 0H9.1061C3.844 0 0.335938 3.50806 0.335938 8.77016V21.1694C0.335938 23.7702 1.18271 26.0081 2.87626 27.6411C4.50932 29.2137 6.68674 30 9.16658 30H21.5053C24.1061 30 26.2835 29.1532 27.8561 27.6411C29.4892 26.0685 30.3359 23.8306 30.3359 21.2298V8.77016C30.3359 6.22984 29.4892 4.05242 27.9166 2.47984ZM27.6746 21.2298C27.6746 23.1048 27.0093 24.6169 25.9206 25.6452C24.8319 26.6734 23.3198 27.2177 21.5053 27.2177H9.16658C7.35207 27.2177 5.83997 26.6734 4.75126 25.6452C3.66255 24.5565 3.1182 23.0444 3.1182 21.1694V8.77016C3.1182 6.95564 3.66255 5.44355 4.75126 4.35484C5.77949 3.32661 7.35207 2.78226 9.16658 2.78226H21.6263C23.4408 2.78226 24.9529 3.32661 26.0416 4.41532C27.0698 5.50403 27.6746 7.01613 27.6746 8.77016V21.2298Z"
            fill="white"
          />
        </svg>
      ),
      href: "https://www.instagram.com/xntric_global/",
    },
    {
      name: "FACEBOOK",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="31"
          viewBox="0 0 32 31"
          fill="none"
        >
          <g clip-path="url(#clip0_1_2250)">
            <path
              d="M25.6297 0H5.47969C2.48354 0 0.0546875 2.42886 0.0546875 5.425V25.575C0.0546875 28.5711 2.48354 31 5.47969 31H25.6297C28.6258 31 31.0547 28.5711 31.0547 25.575V5.425C31.0547 2.42886 28.6258 0 25.6297 0Z"
              fill="white"
            />
            <path
              d="M26.4031 14.3374H21.5594V10.6562C21.5594 9.75521 22.5959 9.6874 22.9156 9.6874H26.2094V4.6499H22.9156C19.2683 4.6499 16.5219 7.23162 16.5219 10.6562V14.3374H12.4531V19.3749H16.5219V30.9999H21.5594V19.3749H25.6281L26.4031 14.3374Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_2250">
              <rect
                width="31"
                height="31"
                fill="white"
                transform="translate(0.0546875)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      href: "https://www.facebook.com/",
    },
    {
      name: "LINKEDIN",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="31"
          viewBox="0 0 32 31"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.7611 0H4.70767C2.5245 0 0.734375 1.79031 0.734375 3.97323V27.0267C0.734375 29.2096 2.5245 31 4.70767 31H27.761C29.9444 31 31.7344 29.2096 31.7344 27.0268V3.97323C31.7344 1.79031 29.9444 0 27.7611 0ZM11.3906 14.9712V24.5417H7.19271V15.6852V12.4646H11.3906V14.9712ZM9.28327 10.6645C8.11541 10.6645 7.16778 9.7176 7.16778 8.54902C7.16778 7.38026 8.11541 6.4345 9.28327 6.4345C10.4527 6.4345 11.3995 7.38032 11.3995 8.54902C11.3995 9.7176 10.4528 10.6645 9.28327 10.6645ZM25.276 17.9542V24.5417H21.6594V18.6754C21.6594 17.2707 21.5073 15.464 19.5821 15.464C17.6277 15.464 17.3323 16.9933 17.3323 18.5741V24.5417H13.8448V14.7973V12.4646H17.2031V14.0792H17.2389C17.7398 13.175 18.967 12.4633 20.7943 12.4633C23.8731 12.4633 24.9193 13.9192 25.2056 16.197C25.2736 16.7315 25.2998 17.3083 25.2998 17.9542H25.276Z"
            fill="white"
          />
        </svg>
      ),
      href: "https://www.linkedin.com/",
    },
    {
      name: "YOUTUBE",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="30"
          viewBox="0 0 41 30"
          fill="none"
        >
          <path
            d="M40.0875 6.47375C40.0875 6.47375 39.6975 3.5325 38.4987 2.2375C36.9775 0.54 35.2738 0.53 34.4925 0.43375C28.8962 1.49012e-07 20.5025 0 20.5025 0H20.4838C20.4838 0 12.09 1.49012e-07 6.495 0.43375C5.71375 0.53 4.01125 0.54 2.48875 2.2375C1.29125 3.5325 0.9 6.47375 0.9 6.47375C0.9 6.47375 0.5 9.925 0.5 13.3763V16.6112C0.5 20.065 0.9 23.515 0.9 23.515C0.9 23.515 1.29 26.455 2.48875 27.7475C4.01125 29.445 6.0075 29.3937 6.8975 29.5712C10.0963 29.8988 20.4937 30 20.4937 30C20.4937 30 28.8962 29.985 34.4925 29.5563C35.2738 29.4563 36.9775 29.4462 38.4987 27.7487C39.6963 26.4562 40.0875 23.5163 40.0875 23.5163C40.0875 23.5163 40.4875 20.065 40.4875 16.6125V13.3775C40.4875 9.925 40.0875 6.47375 40.0875 6.47375Z"
            fill="white"
          />
          <path d="M15.5 7.5V22.5L28 15L15.5 7.5Z" fill="black" />
        </svg>
      ),
      href: "https://www.youtube.com/",
    },
  ];

  return (
    <section className="bg-black text-white pb-24 lg:pb-12 lg:py-16 font-futuru">
      <div className="2xl:max-w-[1740px] md:w-[90%] mx-auto space-y-6">
        <div className="space-y-16 md:space-y-24">
          <div className="text-center w-[63%] mx-auto md:w-[100%]">
            <h2 className="text-[34px] md:text-5xl lg:text-[60px] font-semibold leading-[34px] md:leading-[46px] tracking-wide">
              CONNECT ON <span className="text-[#00AA71]">OUR</span> SOCIAL
            </h2>
          </div>

          <div className="mb-1">
            {/* Mobile Scrolling Images */}
            <div className="md:hidden overflow-hidden">
              <div className="flex animate-scroll gap-x-[2px]">
                {[...officeImages, ...officeImages].map((src, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[200px] h-[200px] overflow-hidden rounded-lg"
                  >
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`Office environment ${index + 1}`}
                      width={200}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-2 md:grid-cols-5 gap-[1px]">
              {officeImages.map((src, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden rounded-lg"
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Office environment ${index + 1}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-[90%] mx-auto md:w-[100%]">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 2xl:py-4 py-2 px-6 rounded-[8px] outline outline-1 outline-[#00aa71] hover:outline-none bg-transparent hover:bg-[#00aa71] transition-colors duration-500 group"
            >
              <div>{social.icon}</div>
              <span className="font-light text-sm tracking-widest">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 6s linear infinite;
        }
      `}</style>
    </section>
  );
}