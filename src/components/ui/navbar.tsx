"use client";
import { links, services, titles } from "../../data/navbar";
import React from "react";
import { Menu, X, ArrowRight, ArrowUpRight, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface Navbar {
  name: string;
  link: string;
  notIsService?: boolean;
}

interface NavbarProps {
  position?: "top" | "bottom";
  neumorphism?: boolean;
}

const applyNeumorphism = (neumorphism: boolean) =>
  neumorphism
    ? "shadow-lg shadow-gray-400/50 border-none"
    : "border bg-gray-100 border-white";

const Navbar: React.FC<NavbarProps> = ({
  position = "top",
  neumorphism = false,
}) => {
  const [activeLink, setActiveLink] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollCount, setScrollCount] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const serviceLinkRef = useRef<HTMLLIElement>(null);
  const dropdownRef2 = useRef<HTMLDivElement>(null);
  const location = usePathname();

  // Handle dropdown scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsDropdownOpen(false);
    };

    if (isDropdownOpen && typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        if (typeof window !== "undefined") {
          window.removeEventListener("scroll", handleScroll);
        }
      };
    }
    return () => { }; // Empty cleanup if window is undefined
  }, [isDropdownOpen]);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false);
    if (link !== "/services") setIsDropdownOpen(false);
  };

  // Memoize controlNavbar to stabilize useEffect dependencies
  const controlNavbar = useCallback(() => {
    if (typeof window === "undefined") return;

    const currentScrollY = window.scrollY;

    if (position === "top") {
      setIsVisible(currentScrollY <= lastScrollY);
    } else if (position === "bottom") {
      if (currentScrollY > lastScrollY) {
        if (!hasScrolled) setHasScrolled(true);
        if (scrollCount < 1) setScrollCount((prev) => prev + 1);
      } else {
        setScrollCount(0);
      }
      setIsVisible(
        scrollCount >= 1 && currentScrollY > lastScrollY && hasScrolled
      );
    }

    setLastScrollY(currentScrollY);
    if (typeof window !== "undefined") {
      localStorage.setItem("lastScrollY", currentScrollY.toString());
    }
  }, [position, lastScrollY, scrollCount, hasScrolled]);

  // Initialize scroll position
  useEffect(() => {
    if (!isInitialized && typeof window !== "undefined") {
      const savedScrollY = localStorage.getItem("lastScrollY");
      const currentScrollY = savedScrollY
        ? Number.parseInt(savedScrollY, 10)
        : 0;

      if (position === "top") {
        setIsVisible(currentScrollY === 0);
      } else {
        setIsVisible(currentScrollY > 0);
      }

      setLastScrollY(currentScrollY);
      setIsInitialized(true);
    }
  }, [position, isInitialized]);

  // Handle scroll events
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
    return () => { }; // Empty cleanup if window is undefined
  }, [controlNavbar]);

  return (
    <section
      ref={menuRef}
      className={`z-[1000] font-futuru backdrop-blur-[10px] max-w-[1740px] mx-auto !bg-[#FFFFFF0D] fixed flex justify-between font-futuru items-center ${(location.includes("/login") || location.includes("/signup")) &&
        "hidden"
        } ${isDropdownOpen
          ? `${position === "top"
            ? "md:rounded-b-none rounded-[10px]"
            : "rounded-[12px]"
          } `
          : "rounded-[10px]"
        } ${position === "top"
          ? "fixed top-9 left-0 lg:h-[55px] h-[50px] right-0  !border-[#FFFFFF12] mx-auto w-[90%] md:w-[70%] lg:w-[95%] xl:w-[78%] 2xl:w-[64%] 5xl:w-[58%]"
          : "fixed bottom-2 left-0 lg:h-[55px] h-[50px] right-0  !border-[#FFFFFF12] mx-auto w-[75%] sm:w-[62%] md:w-[40%] lg:w-[92%] xl:w-[68%] 2xl:w-[60%] 5xl:w-[48%]"
        } ${isVisible
          ? "translate-y-0 opacity-100"
          : `${position === "top"
            ? "-translate-y-full opacity-0"
            : "scale-50 translate-y-full opacity-0"
          }`
        } ${applyNeumorphism(neumorphism)}`}
    >
      <nav className="py-2 px-4 flex items-center w-full justify-between z-100">
        <div className="flex items-center space-x-5 justify-between -mt-2">
          {position === "top" && (
            <Link href="/" onClick={() => setActiveLink("")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="34"
                viewBox="0 0 115 34"
                fill="none"
              >
                <g clipPath="url(#clip0_1_2040)">
                  <path
                    d="M22.5606 31.2721L7.76436 8.84502L0.294922 8.78802L15.0912 31.2151L22.5606 31.2721Z"
                    fill="#00AA71"
                  />
                  <path
                    d="M15.2637 8.90228L15.1786 20.045L22.7331 8.95928L15.2637 8.90228Z"
                    fill="#00AA71"
                  />
                  <path
                    d="M0.127613 31.1005L7.59705 31.1575L12.6334 23.767L8.7453 18.4546L0.127613 31.1005Z"
                    fill="#00AA71"
                  />
                  <path
                    d="M57.9446 25.1043C55.6485 25.0868 55.3741 24.782 55.3947 22.0858L55.4478 15.125L61.3957 15.1704L61.4408 9.25519L55.493 9.2098L55.5291 4.4776L48.4746 4.42377L48.3264 23.8478C48.2808 29.8181 50.04 31.3173 57.1775 31.3717L61.2718 31.403L61.3197 25.1301L57.9446 25.1043Z"
                    fill="white"
                  />
                  <path
                    d="M70.7556 9.32623L70.7244 13.4256C71.3823 10.5967 73.3838 9.34629 77.0908 9.37458L79.6636 9.39421L79.6158 15.6671L74.6091 15.5464C71.8705 15.498 70.7004 16.5621 70.6817 19.0107L70.5868 31.4465L63.5324 31.3927L63.7012 9.2724L70.7556 9.32623Z"
                    fill="white"
                  />
                  <path
                    d="M89.2088 9.46686L82.1543 9.41302L81.9844 31.6709L89.0389 31.7247L89.2088 9.46686Z"
                    fill="white"
                  />
                  <path
                    d="M91.6132 20.5454C91.6835 11.3286 94.0527 9.03546 103.348 9.10639C112.118 9.17331 114.344 11.1438 114.533 18.9318L107.119 18.8753C107.01 15.0774 106.626 14.6618 103.333 14.6367C99.5157 14.6075 99.0963 15.1821 99.0552 20.5747C99.014 25.9672 99.4246 26.5481 103.242 26.5772C106.507 26.6021 106.87 26.1647 107.093 22.3144L114.507 22.3709C114.253 30.2381 111.97 32.1742 103.172 32.1071C93.8491 32.091 91.5427 29.7897 91.6132 20.5454Z"
                    fill="white"
                  />
                  <path
                    d="M38.5296 8.64007C35.7908 8.61917 33.4007 10.0317 32.0288 12.1673L32.0527 9.03087L25.0259 8.97725L24.8569 31.1251L30.7772 31.1702L31.9114 31.1789L32.012 18.0003C32.0267 16.0744 33.6155 14.5182 35.552 14.5329C37.4885 14.5477 39.0535 16.128 39.0388 18.0539L38.9382 31.2325L45.9927 31.2863L46.1073 16.2644C46.1116 12.0822 42.7346 8.67216 38.5296 8.64007Z"
                    fill="white"
                  />
                  <path
                    d="M89.4387 4.73639C89.4232 6.77234 87.7507 8.41044 85.7035 8.39482C83.6563 8.3792 82.0091 6.71576 82.0246 4.67982C82.0401 2.64387 83.7126 1.00577 85.7598 1.02139C87.807 1.03701 89.4543 2.70045 89.4387 4.73639Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_2040">
                    <rect
                      width="114.286"
                      height="32"
                      fill="white"
                      transform="translate(0.357422 0.728455) rotate(0.437212)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          )}
        </div>
        <div>
          {position === "top" ? (
            <Menu
              size={28}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white lg:hidden block text-center"
            />
          ) : (
            <Link
              href="/"
              onClick={() => setActiveLink("")}
              className="lg:hidden flex justify-between items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="34"
                viewBox="0 0 115 34"
                fill="none"
              >
                <g clipPath="url(#clip0_1_2040)">
                  <path
                    d="M22.5606 31.2721L7.76436 8.84502L0.294922 8.78802L15.0912 31.2151L22.5606 31.2721Z"
                    fill="#00AA71"
                  />
                  <path
                    d="M15.2637 8.90228L15.1786 20.045L22.7331 8.95928L15.2637 8.90228Z"
                    fill="#00AA71"
                  />
                  <path
                    d="M0.127613 31.1005L7.59705 31.1575L12.6334 23.767L8.7453 18.4546L0.127613 31.1005Z"
                    fill="#00AA71"
                  />
                  <path
                    d="M57.9446 25.1043C55.6485 25.0868 55.3741 24.782 55.3947 22.0858L55.4478 15.125L61.3957 15.1704L61.4408 9.25519L55.493 9.2098L55.5291 4.4776L48.4746 4.42377L48.3264 23.8478C48.2808 29.8181 50.04 31.3173 57.1775 31.3717L61.2718 31.403L61.3197 25.1301L57.9446 25.1043Z"
                    fill="white"
                  />
                  <path
                    d="M70.7556 9.32623L70.7244 13.4256C71.3823 10.5967 73.3838 9.34629 77.0908 9.37458L79.6636 9.39421L79.6158 15.6671L74.6091 15.5464C71.8705 15.498 70.7004 16.5621 70.6817 19.0107L70.5868 31.4465L63.5324 31.3927L63.7012 9.2724L70.7556 9.32623Z"
                    fill="white"
                  />
                  <path
                    d="M89.2088 9.46686L82.1543 9.41302L81.9844 31.6709L89.0389 31.7247L89.2088 9.46686Z"
                    fill="white"
                  />
                  <path
                    d="M91.6132 20.5454C91.6835 11.3286 94.0527 9.03546 103.348 9.10639C112.118 9.17331 114.344 11.1438 114.533 18.9318L107.119 18.8753C107.01 15.0774 106.626 14.6618 103.333 14.6367C99.5157 14.6075 99.0963 15.1821 99.0552 20.5747C99.014 25.9672 99.4246 26.5481 103.242 26.5772C106.507 26.6021 106.87 26.1647 107.093 22.3144L114.507 22.3709C114.253 30.2381 111.97 32.1742 103.172 32.1071C93.8491 32.091 91.5427 29.7897 91.6132 20.5454Z"
                    fill="white"
                  />
                  <path
                    d="M38.5296 8.64007C35.7908 8.61917 33.4007 10.0317 32.0288 12.1673L32.0527 9.03087L25.0259 8.97725L24.8569 31.1251L30.7772 31.1702L31.9114 31.1789L32.012 18.0003C32.0267 16.0744 33.6155 14.5182 35.552 14.5329C37.4885 14.5477 39.0535 16.128 39.0388 18.0539L38.9382 31.2325L45.9927 31.2863L46.1073 16.2644C46.1116 12.0822 42.7346 8.67216 38.5296 8.64007Z"
                    fill="white"
                  />
                  <path
                    d="M89.4387 4.73639C89.4232 6.77234 87.7507 8.41044 85.7035 8.39482C83.6563 8.3792 82.0091 6.71576 82.0246 4.67982C82.0401 2.64387 83.7126 1.00577 85.7598 1.02139C87.807 1.03701 89.4543 2.70045 89.4387 4.73639Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_2040">
                    <rect
                      width="114.286"
                      height="32"
                      fill="white"
                      transform="translate(0.357422 0.728455) rotate(0.437212)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          )}
        </div>
        {position !== "top" && (
          <Link
            href="/contact"
            className="text-white text-center lg:text-lg rounded-full no-underline text-sm bg-[#3BE29A] py-2 px-4 lg:hidden block"
          >
            Lets Talk
          </Link>
        )}
        <div
          className={`md:hidden fixed rounded-xl w-[97vw] sm:w-[95vw] -ml-7 bg-white transition-all duration-500 ease-in-out h-screen -top-7 py-8 px-4 ${isMenuOpen
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0 -translate-y-[46%] translate-x-[35%]"
            }`}
        >
          {isMenuOpen && (
            <div className="w-full">
              <div className="flex justify-between items-center">
                <Link
                  href="/"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveLink("");
                  }}
                >
                  <Image
                    src="/Nav-Logo.png"
                    alt="Logo"
                    width="150"
                    height="200"
                  />
                </Link>
                <div className="bg-[#3BE29A] px-6 py-2 rounded-full">
                  <X
                    size={28}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white"
                  />
                </div>
              </div>
              <ul className="flex font-semibold mt-12 text-3xl flex-col items-start -spac ">
                {links.map((link, index) => (
                  <li
                    key={link}
                    className="flex items-center justify-between w-full"
                    ref={link === "/services" ? dropdownRef : undefined}
                  >
                    <Link
                      href={link}
                      className={`px-2 py-2 rounded-3xl text-[18px] font-medium tracking-wide font-futuru text-[#252827] hover:bg-[#3be29a] hover:text-black flex items-center ${activeLink === link
                        ? "bg-[#3be29a] text-black px-4"
                        : ""
                        }`}
                      onClick={() => handleLinkClick(link)}
                    >
                      {titles[index]}
                    </Link>
                    {link === "/services" && (
                      <div
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="bg-[#3be29a] p-1 rounded-full w-fit absolute right-4"
                      >
                        <ArrowDown
                          className={`md:hidden block transition-transform duration-700 ${isDropdownOpen ? "rotate-180" : "rotate-0"
                            }`}
                          size={14}
                        />
                      </div>
                    )}
                    {link === "/services" && isDropdownOpen && (
                      <AnimatePresence>
                        <motion.ul
                          initial={{ height: 0, opacity: 0, y: -20 }}
                          animate={{ height: "auto", opacity: 1, y: 0 }}
                          exit={{ height: 0, opacity: 0, y: -20 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="absolute rounded-xl top-[31%] right-4 w-[92%] bg-white border shadow-lg z-10 overflow-y-scroll"
                        >
                          {services.map((service) => (
                            <li key={service.link}>
                              <Link
                                href={`${!service.notIsService
                                  ? `/services${service.link}`
                                  : service.link
                                  }`}
                                className="px-4 py-2 text-sm tracking-wider font-medium flex justify-between gap-2 font-futuru transition-all duration-300 hover:bg-gray-200"
                                onClick={() => handleLinkClick(service.link)}
                              >
                                {service.name}
                                <ArrowRight
                                  size={16}
                                  className="text-gray-500"
                                />
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      </AnimatePresence>
                    )}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <button className="w-full hover:bg-white hover:text-black transition-colors duration-300 text-white text-center py-3 text-xl rounded-[10px] bg-[#3BE29A] mt-10">
                  Lets Connect
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="hidden lg:flex items-center">
          <ul className="flex font-medium gap-x-2 xl:gap-x-4">
            {links.map((link, index) => (
              <li
                key={link}
                className="flex items-center"
                ref={link === "/services" ? serviceLinkRef : null}
              >
                <Link
                  href={link}
                  className={`px-4 py-2 rounded-[8px] tracking-wider text-[18px] font-medium font-futuru text-[#FFFFFF] hover:bg-[#FFFFFF0F] hover:text-[#FFFFFF] flex items-center  ${activeLink === link
                    ? "bg-[#FFFFFF0Fd] text-[#FFFFFF] px-4"
                    : ""
                    }`}
                  onClick={() => handleLinkClick(link)}
                  onMouseEnter={() => {
                    if (link === "/services") {
                      setIsDropdownOpen(true);
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (link === "/services") {
                      const relatedTarget = e.relatedTarget;
                      if (
                        dropdownRef.current &&
                        !dropdownRef.current.contains(relatedTarget as Node)
                      ) {
                        setIsDropdownOpen(false);
                      }
                    }
                  }}
                >
                  {titles[index]}
                </Link>
                {link === "/services" && (
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ y: -40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        ref={dropdownRef2}
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={(e) => {
                          const relatedTarget = e.relatedTarget;
                          if (
                            serviceLinkRef.current &&
                            !serviceLinkRef.current.contains(relatedTarget as Node)
                          ) {
                            setIsDropdownOpen(false);
                          }
                        }}
                        className={`absolute border-none xl:w-[100%] -ml- lg:w-[100.9%] md:w-[101%] 2xl:w-[100.7%] w-[101.2%] ${isDropdownOpen ? "opacity-100 " : "opacity-0 "
                          } ${position === "top" ? "top-full" : "bottom-full"
                          } -z-[999] left-0 bg-[#000]/90 border ${position === "top"
                            ? "rounded-t-none rounded-3xl"
                            : "rounded-b-none rounded-3xl"
                          } px-8 pb-6 pt-4 shadow-lg`}
                      >
                        <div className="grid grid-cols-2 gap-0">
                          {services.map((service, index) => (
                            <Link
                              key={service.link}
                              href={`${!service.notIsService
                                ? `/services${service.link}`
                                : service.link
                                }`}
                              className={`${index % 2 === 0 ? "border-l-0" : ""
                                } ${index === services.length - 1
                                  ? "border-b-0"
                                  : index === services.length - 2
                                    ? "border-b-0"
                                    : ""
                                } ${index % 2 !== 0
                                  ? "pl-10"
                                  : index % 2 === 0
                                    ? "pr-10"
                                    : ""
                                } flex items-center py-5 justify-between group border border-[#00000026] border-t-0 border-r-0 p-4 hover:text-black hover:bg-gray-50 transition-all duration-300`}
                              onClick={() => handleLinkClick(service.link)}
                            >
                              <div className="flex items-center gap-5">
                                <span className="text-white group-hover:text-black text-sm font-medium">
                                  {index < 9 ? `0${index + 1}` : `${index + 1}`}
                                </span>
                                <span className="text-white group-hover:text-black hover:text-[#3BE29A] transition-colors duration-300">
                                  {service.name}
                                </span>
                              </div>
                              <div className="flex items-center justify-center rounded-full bg-[#3BE29A] p-1 w-6 h-6 overflow-hidden">
                                <motion.div
                                  className="relative"
                                  initial="rest"
                                  whileHover="hover"
                                  animate="rest"
                                  variants={{
                                    hover: {
                                      transition: {
                                        staggerChildren: 0.1,
                                      },
                                    },
                                    rest: {
                                      transition: {
                                        staggerChildren: 0.1,
                                      },
                                    },
                                  }}
                                >
                                  {[1, 2, 3].map((_, i) => (
                                    <motion.div
                                      key={i}
                                      className="absolute -top-1.5 -left-2 z-30"
                                      variants={{
                                        rest: {
                                          x: 0,
                                          y: 0,
                                          opacity: 1,
                                        },
                                        hover: {
                                          x: [0, 8, 0],
                                          y: [0, -8, 0],
                                          opacity: 1,
                                          transition: {
                                            duration: 1,
                                            ease: "easeInOut",
                                            repeat: Infinity,
                                          },
                                        },
                                      }}
                                    >
                                      <ArrowUpRight
                                        size={14}
                                        className="text-black"
                                      />
                                    </motion.div>
                                  ))}
                                </motion.div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex items-center space-x-2">
          <button className="bg-[#00AA71] px-4 py-2 flex items-center rounded-[8px] text-[#FFFFFF] text-[16px] tracking-widest transition-all duration-500 cursor-pointer hover:bg-white hover:text-black ">
            <Link
              href="/contact"
              onClick={() => handleLinkClick("/contact")}
              className="pt-[1px relative md:bottom-[0.5px]"
            >
              LET’S CONNECT
            </Link>
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
