import { Blog } from "@/app/(screens)/blog/data";
import Image from "next/image";

const FirstSection = ({ data }: { data: Blog }) => {
  return (
    <section className="sm:pt-40 lg:pt-60 xl:pt-40 2xl:pt-32 mb-10 font-futuru tracking-widest">
      <div className="max-w-[90%] mx-auto">
        <div className="flex justify-between items-center mb-20 gap-10 xl:gap-0 flex-col lg:flex-row">
          <div className="flex items-center gap-6 md:w-[40%]">
            <Image
              src={"/HomePage/X-Logo.png"}
              alt="Blog"
              width={500}
              height={500}
              className="object-contain w-16 h-16 rounded-2xl"
            />
            <div className="flex flex-col gap-2">
              <span className="text-gray-400 text-sm">Written By</span>
              <div className="flex gap-4 items-center text-white">
                <span>Tehreem</span>
                <span>{data.publishedDate}</span>
                <span>{data.readTime}</span>
              </div>
            </div>
          </div>
          <div className="lg:w-[60%] w-[96%]">
            <p className="xl:text-4xl text-2xl text-white">
              {data.metaDescription || data.description}
            </p>
          </div>
        </div>
        <Image
          src={data.bannerImageURL || ""}
          alt="Blog"
          width={1200}
          height={1200}
          className="object-contain w-full h-full"
        />
        <div className="mt-10">
          <span className="bg-[#ffffff1a] p-2 rounded-3xl text-sm text-white">
            {data.category || "Development"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
