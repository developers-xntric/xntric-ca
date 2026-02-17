/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  desc: string;
  date: string;
  min: string;
  image: string;
  id?: number | string;
  border?: boolean;
  isBlog?: boolean;
  blog: any;
}

export default function BlogListingCards({
  title,
  date,
  min,
  image,
  id,
  border,
  // isBlog,
  blog,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${id ?? ""}`}
      className={`w-full h-full flex flex-col ${
        border ? "border border-[#FFFFFF33] " : ""
      }`}
      id="hovchange"
    >
      {/* Image */}
      <div className="w-full">
        <Image
          src={image}
          alt="Blog"
          width={500}
          height={300}
          className="w-full h-auto object-cover "
        />
      </div>

      {/* Content */}
      <div
        className={`w-full md:p-7 p-4 space-y-3 flex flex-col justify-between`}
      >
        {/* Category */}
        <div className="h-[33px] w-fit md:p-[11px] p-2 bg-white/10 rounded-[30px] border border-[#ededed]/20 backdrop-blur-[1.90px] justify-center items-center gap-2.5 inline-flex">
          <div className="text-[#cecece] text-[14px] tracking-widest font-light font-futuru leading-none line-clamp-1">
            {blog.category}
          </div>
        </div>

        {/* Title */}
        <div
          className={`text-white text-[22px] leading-[28px] 2xl:leading-[36px] xl:text-[23px] 2xl:text-[30px] tracking-wider font-regular md:font-semibold font-futuru`}
          id="hovchangedecs"
        >
          {title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}
        </div>

        {/* Date & Time */}
        <div className="flex flex-col md:pt-4 justify-end items-start gap-1">
          <div className="text-white text-[10px] md:text-sm 2xl:text-[16px] tracking-wider font-light font-futuru uppercase leading-tight">
            {new Date(date).toLocaleString("default", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
          <div className="text-white text-[10px] md:text-sm 2xl:text-[16px] tracking-wider font-light font-futuru uppercase leading-tight">
            {min}
          </div>
        </div>
      </div>
    </Link>
  );
}
