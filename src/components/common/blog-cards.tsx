import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  desc: string;
  date: string;
  min: string;
  image: string;
  id?: string | number;
  border?: boolean
  isBlog?: boolean
}

export default function BlogCards({ title, desc, date, min, image, id, border, isBlog }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${id ?? ''}`} // Safer handling of optional id
      className={`lg:w w-full ${isBlog ? "h-[98%] md:h-[95%]" : ""}  ${border ? "border border-[#FFFFFF33]" : ""}`}
      id="hovchange"
    >
      <div className="w-full h-[50%] md:h-[60%] lg:h-[40%] xl:h-[56%] 2xl:h-[65%]" id="hovchangeimg">
        <Image
          src={image}
          alt="Blog"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className={`w-full md:p-7  p-4 space-y-3  ${isBlog ? "lg:h-40 2xl:h-[40%] xl:mt-4" : ""}`}>
        <div className="h-[33px] md:p-[11px] p-2 bg-white/10 rounded-[30px] border border-[#ededed]/20 backdrop-blur-[1.90px] justify-center items-center gap-2.5 inline-flex">
          <div className="text-[#cecece] text-[12px] md:text-base tracking-widest line-clamp-2 font-light font-futuru leading-none">
            {title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}
          </div>
        </div>
        <div
          className={`text-white lg:min-h-16 xl:min-h-0 text-[19px] leading-[26px] 2xl:leading-[32px]  xl:text-[23px] 2xl:text-[30px] ${isBlog ? "2xl:text-[32px]" : "2xl:text-[30px]"} tracking-wider font-regular md:font-semibold font-futuru `} // Fixed typo: texl-2xl -> text-2xl
          id="hovchangedecs"
        >
          {desc}
        </div>
        <div className=" flex-col md:pt-4 justify-end items-start inline-flex">
          <div className="justify-start items-center inline-flex">
            <div className="text-white text-[10px] md:text-sm 2xl:text-[16px] tracking-wider font-light font-futuru uppercase leading-tight">
              {date}
            </div>
          </div>
          <div className="justify-start items-start inline-flex">
            <div className="text-white text-[10px] md:text-sm 2xl:text-[16px] tracking-wider font-light font-futuru uppercase leading-tight">
              {min}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
