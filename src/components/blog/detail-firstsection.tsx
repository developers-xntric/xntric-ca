import Image from "next/image";

export interface Blog {
  _id: string;
  title: string;
  description: string | any[];
  metaDescription?: string;
  publishedDate: string;
  readTime?: string;
  bannerImageURL: string;
  slug: string;
  blogCategory: string;
  category: string;
  subsections?: any[];
  conclusion?: string;
  faqs?: any[];
  keyTakeaways?: string[];
}

const FirstSection = ({ data }: { data: Blog }) => {
  return (
    <section className="sm:pt-40 lg:pt-28 xl:pt-20 2xl:pt-20 mb-6 md:mb-10 font-futuru tracking-widest">
      <div className="max-w-[90%] mx-auto">
        {/* Writer + X-Logo */}
        <div className="flex items-center gap-6 mb-8">
          <Image
            src={"/HomePage/X-Logo.png"}
            alt="Xntric"
            width={500}
            height={500}
            className="object-contain w-14 h-14 md:w-16 md:h-16 rounded-2xl"
          />
          <div className="flex flex-col gap-1">
            <span className="text-gray-400 text-xs md:text-sm tracking-wider">Written By</span>
            <span className="text-white text-sm md:text-base font-medium tracking-wider">Tehreem Fazal Qureshi</span>
          </div>
        </div>

        {/* Banner Image */}
        <Image
          src={data.bannerImageURL || ""}
          alt="Blog"
          width={1200}
          height={1200}
          className="object-contain w-full h-full"
        />
      </div>
    </section>
  );
};

export default FirstSection;
