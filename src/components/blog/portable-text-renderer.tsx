import { PortableText as PortableTextComponent } from '@portabletext/react'

interface PortableTextRendererProps {
  content: any;
  className?: string;
}

// Custom components for PortableText rendering
const customComponents: any = {
  block: {
    normal: ({ children }: any) => (
      <p className="text-lg text-white blog-content tracking-wider [&>a]:text-[#00aa71] mb-4">
        {children}
      </p>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-3xl lg:text-4xl font-semibold text-white my-6">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl lg:text-3xl font-semibold text-white my-5">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl lg:text-2xl font-semibold text-white my-4">
        {children}
      </h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#00AA71] pl-4 italic text-gray-300 my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside text-lg text-white blog-content tracking-wider [&>a]:text-[#00aa71] mb-4 space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside text-lg text-white blog-content tracking-wider [&>a]:text-[#00aa71] mb-4 space-y-2">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="ml-4">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="ml-4">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-white">{children}</em>
    ),
    link: ({ value, children }: any) => (
      <a href={value?.href} className="text-[#00aa71] hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
}

export default function PortableTextRenderer({ content, className }: PortableTextRendererProps) {
  if (!content) return null;

  // If content is a string, render it directly
  if (typeof content === 'string') {
    return (
      <div
        className={className || "text-lg text-white blog-content [&>a]:text-[#00aa71]"}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  // If content is an array (PortableText), use PortableText component
  if (Array.isArray(content)) {
    return (
      <div className={className || ""}>
        <PortableTextComponent value={content} components={customComponents} />
      </div>
    );
  }

  return null;
}
