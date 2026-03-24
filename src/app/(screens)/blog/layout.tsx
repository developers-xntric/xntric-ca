import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Xntric",
  description: "Explore the latest insights, ideas, and updates from Xntric on AI, design, technology, and innovation.",
  alternates: {
    canonical: "https://xntric.ca/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}