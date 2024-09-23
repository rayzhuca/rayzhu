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
            <div className="flex justify-center mt-24">
                <div className="w-1/2 flex flex-col gap-4">
                    <div className="flex justify-between">
                        <h1 className="text-3xl font-lora font-bold text-black text-opacity-80">{blog.title}</h1>
                        <div className="text-black text-opacity-50">{blog.date}</div>
                    </div>
                    <div className="flex flex-col gap-4 mt-12">
                        {blog.content.map((v, i) => (
                            <ContentElementComponent key={i} {...v} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
