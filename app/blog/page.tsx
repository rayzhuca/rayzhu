import { Header } from "@/components/header";
import { blogs } from "@/lib/blog/blogs";

import Image from "next/image";

interface BlogInterface {
    title: string;
    slug: string;
    date: string;
    description: string;
}
const BlogSection: React.FC<BlogInterface> = ({ title, slug, date, description }) => {
    return (
        <div className="w-1/2 flex flex-col gap-2">
            <div className="flex flex-wrap gap-8 justify-between items-baseline">
                <div className="grow flex gap-2 text-xl font-semibold font-lora text-black text-opacity-70 w-40">
                    <a href={`/blog/${slug}`}>{title}</a>
                    <a href={`/blog/${slug}`}>
                        <Image width={26} height={26} src="/icon/link.svg" alt="link icon" />
                    </a>
                </div>
                <div className="text-black text-opacity-50">{date}</div>
            </div>
            <div className="italic text-black text-opacity-70">{description}</div>
        </div>
    );
};

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen bg-[#fff] pb-24">
            <Header title="Blog" titleHref="/cv" />
            <div className="flex flex-col items-center gap-12 mt-24">
                {blogs.map((blog, i) => (
                    <BlogSection key={i} {...blog} />
                ))}
            </div>
        </div>
    );
}
