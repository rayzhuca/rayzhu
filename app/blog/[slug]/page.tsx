import { ContentElementComponent } from "@/components/blog/BlogSection";
import { Header } from "@/components/header";
import { blogSlugMap } from "@/lib/blog/blogs";
import { notFound } from "next/navigation";

export default function Page({ params: { slug } }: { params: { slug: string } }) {
    const blog = blogSlugMap.get(slug);
    if (blog === undefined) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-[#fff] pb-24">
            <Header title="Blog" titleHref="/blog" />
            <div className="flex flex-col gap-6 mt-24 px-20">
                {blog.content.map((v, i) => (
                    <ContentElementComponent key={i} {...v} />
                ))}
            </div>
        </div>
    );
}
