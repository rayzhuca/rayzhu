import { Header } from "@/components/header";
import { NoteInterface, notes } from "@/lib/notes/notes";

import Image from "next/image";

const NoteSection: React.FC<NoteInterface> = ({ title, slug, date, description }) => {
    return (
        <div className="w-1/2 flex flex-col gap-2">
            <div className="flex flex-wrap gap-8 justify-between items-baseline">
                <div className="grow flex gap-2 text-xl font-semibold font-lora text-black text-opacity-70 w-40">
                    <a href={`/notes/${slug}`}>{title}</a>
                    <a href={`/notes/${slug}`}>
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
            <Header title="Note" titleHref="/cv" />
            <div className="flex flex-col items-center gap-12 mt-24">
                {notes.map((note, i) => (
                    <NoteSection key={i} {...note} />
                ))}
            </div>
        </div>
    );
}
