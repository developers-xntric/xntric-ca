"use client"

import PopupTrigger from "../services/popup-trigger"

const NewGreen = ({ text = "Research-Backed Development That Powers Business Growth", bg = true, buttonText, showSocialLinks, isPopupOpen }: { text?: string, bg?: boolean, buttonText?: string, showSocialLinks?: boolean, isPopupOpen?: boolean }) => {
    return (
        <div className={`mx-auto w-[88.5%] 2xl:w-[90%] 2xl:max-w-[1740px]  ${bg ? "lg:h-24 2xl:h-28 bg-gradient-to-r from-emerald-600 to-emerald-900" : "lg:h-28 2xl:h-36 bg-[url('/service-inner/sv-bg.png')] border border-white/50 bg-cover bg-no-repeat"} rounded-[14px] ${bg ? "px-4 lg:px-16 my-8" : "lg:px-8 lg:py-0 my-10 md:my-20"} gap-4 py-5 flex flex-col lg:flex-row items-center lg:justify-between `}>
            <div className="flex gap-6 items-center">
                {bg && <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 74 74" fill="none">
                    <foreignObject x="-2.21364" y="-2.21364" width="78.4273" height="78.4273"><div style={{
                        backdropFilter: "blur(1.26px);clip-path:url(#bgblur_0_519_3658_clip_path)", height: "100%", width: "100%",
                    }}></div></foreignObject><circle data-figma-bg-blur-radius="2.52809" cx="37" cy="37" r="35.8427" fill="white" fill-opacity="0.1" stroke="url(#paint0_linear_519_3658)" stroke-width="1.68539" />
                    <path d="M51.9994 23.6157C51.6341 23.3088 51.1921 23.1072 50.7209 23.0324C50.2497 22.9577 49.767 23.0127 49.3246 23.1915L22.3292 33.9967C21.9356 34.1602 21.5994 34.4366 21.3628 34.791C21.1262 35.1454 21 35.562 21 35.9881C21 36.4142 21.1262 36.8308 21.3628 37.1852C21.5994 37.5396 21.9356 37.816 22.3292 37.9795L24.0731 38.6983C24.3606 38.8199 24.6847 38.8224 24.9741 38.7054C25.2635 38.5883 25.4946 38.3611 25.6167 38.0737C25.6766 37.9306 25.7076 37.7771 25.708 37.622C25.7084 37.4669 25.6782 37.3132 25.6191 37.1698C25.56 37.0264 25.4731 36.8961 25.3635 36.7863C25.2539 36.6765 25.1237 36.5895 24.9804 36.5301L23.6842 35.9999L50.2084 25.3949C50.2492 25.3699 50.2961 25.3567 50.3439 25.3567C50.3917 25.3567 50.4386 25.3699 50.4794 25.3949C50.5179 25.4276 50.5469 25.47 50.5635 25.5176C50.58 25.5653 50.5835 25.6165 50.5737 25.666L45.7307 48.2663C45.7149 48.3468 45.6782 48.4217 45.6245 48.4837C45.5708 48.5457 45.5018 48.5926 45.4244 48.6198C45.3484 48.6499 45.2658 48.6593 45.185 48.6468C45.1042 48.6344 45.0282 48.6007 44.9648 48.5491L35.5382 41.1963L44.7645 31.8757C44.9616 31.6713 45.0782 31.4025 45.0929 31.1188C45.1075 30.8352 45.0193 30.5558 44.8443 30.3321C44.6693 30.1084 44.4195 29.9554 44.1407 29.9013C43.8619 29.8472 43.5729 29.8956 43.3269 30.0376L29.7998 38.0502C29.6495 38.1181 29.5152 38.2168 29.4055 38.3398C29.2958 38.4629 29.2131 38.6076 29.1628 38.7646C29.1125 38.9217 29.0958 39.0875 29.1136 39.2514C29.1315 39.4153 29.1835 39.5737 29.2664 39.7162C29.3492 39.8587 29.4611 39.9823 29.5947 40.0789C29.7283 40.1755 29.8807 40.2429 30.0421 40.2769C30.2034 40.3109 30.3701 40.3107 30.5313 40.2762C30.6925 40.2418 30.8447 40.1739 30.9781 40.0769L36.6694 36.7187L33.9003 39.5349C33.647 39.7729 33.4495 40.064 33.3219 40.3873C33.1943 40.7107 33.1398 41.0582 33.1623 41.4051C33.1849 41.7519 33.2838 42.0895 33.4522 42.3936C33.6205 42.6978 33.854 42.9609 34.136 43.1641L43.5626 50.4108C44.0588 50.7937 44.668 51.001 45.2948 51C45.6285 50.9976 45.9593 50.9378 46.2728 50.8232C46.7229 50.6617 47.124 50.3872 47.4376 50.0261C47.7512 49.665 47.9668 49.2295 48.0638 48.7612L52.8714 26.1844C52.9734 25.7174 52.9462 25.2315 52.7925 24.7788C52.6389 24.3262 52.3647 23.924 51.9994 23.6157Z" fill="white" />
                    <defs>
                        <clipPath id="bgblur_0_519_3658_clip_path" transform="translate(2.21364 2.21364)"><circle cx="37" cy="37" r="35.8427" />
                        </clipPath><linearGradient id="paint0_linear_519_3658" x1="37" y1="2" x2="37" y2="72" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#3BE29A" />
                            <stop offset="1" stop-color="#207C54" />
                        </linearGradient>
                    </defs>
                </svg>}
                <div className={`justify-start text-white ${bg == false ? "text-[17px] lg:text-[25px] 2xl:text-[35px] text-center" : "text-sm lg:text-[25px]"} font-medium font-['Futuru'] tracking-wider px-6`} dangerouslySetInnerHTML={{ __html: text }}></div>
            </div>
            <PopupTrigger size='lg' bg={bg} isPopupOpen={isPopupOpen} showSocialLinks={showSocialLinks} buttonText={buttonText || "FREE AUDIT"} />
        </div>
    )
}

export default NewGreen;
