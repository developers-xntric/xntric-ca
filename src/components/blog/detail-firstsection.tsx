import Image from "next/image";
import PortableTextRenderer from "./portable-text-renderer";

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
}

const FirstSection = ({ data }: { data: Blog }) => {
  // Handle both string and PortableText array for description
  const getDescription = (desc: string | any[]) => {
    if (typeof desc === "string") return desc;
    if (Array.isArray(desc)) {
      // Extract text from PortableText blocks
      return desc
        .filter((block) => block._type === "block")
        .map((block) =>
          block.children?.map((child: any) => child.text).join(""),
        )
        .join(" ");
    }
    return "";
  };

  return (
    <section className="sm:pt-40 lg:pt-28 xl:pt-20 2xl:pt-20 mb-10 font-futuru tracking-widest">
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
                <span>{new Date(data.publishedDate).toDateString()}</span>
                <span>{data.readTime}</span>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={data.bannerImageURL || ""}
          alt="Blog"
          width={1200}
          height={1200}
          className="object-contain w-full h-full"
        />
        <div className="mt-10 mb-10">
          <span className="bg-[#ffffff1a] p-2 rounded-3xl text-sm text-white">
            {data.category || "Development"}
          </span>
        </div>
        {data.description && (
          <PortableTextRenderer content={data.description} />
        )}
      </div>
    </section>
  );
};

export default FirstSection;
