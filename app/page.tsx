import { Header } from "@/components/header";
import Link from "next/link";

interface ReferenceItemInterface {
    title: string;
    titleLink: string;
    items: string[];
    itemLinks: string[];
    parentClasses?: string;
}

const ReferenceItem: React.FC<ReferenceItemInterface> = ({ title, titleLink, items, itemLinks, parentClasses = "" }) => {
    return (
        <div className={"flex justify-between " + parentClasses}>
            <div>
                <Link href={titleLink} className="text-lg text-black text-opacity-30">
                    {title}
                </Link>
            </div>
            <div className="flex flex-col gap-2 text-xl *:text-right *:font-medium font-lora *:text-black *:text-opacity-70">
                {items.map((item, i) => (
                    <Link key={item} href={itemLinks[i]}>
                        {item}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default function Page() {
    return (
        <div className="flex flex-col justify-between min-h-screen bg-[#FBDD80]">
            <Header title="" titleHref="/" />
            <div className="flex grow px-16 py-10 pt-32 *:border-t *:border-black *:border-opacity-10 gap-28">
                <section className="flex-1 flex flex-col justify-between">
                    <div className="mt-8">
                        <p className="select-none text-xl font-mono font-extralight text-black text-opacity-30">
                            life :: Journey
                            <br />
                            life = (growing, exploring)
                        </p>
                    </div>

                    <div>
                        <h1 className="text-3xl font-medium text-black text-opacity-60">Software Engineer</h1>
                        <h2 className="mt-[-1rem] mb-12 text-[6rem] font-bold text-black text-opacity-80">Ray Zhu</h2>
                    </div>
                </section>

                <section className="flex-1 flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <Link href="/cv" className="text-black text-opacity-30 mt-8">
                            Curriculum vitae
                        </Link>
                        <ReferenceItem
                            title="Experience"
                            titleLink="/cv"
                            items={["Ramp", "Atoma Media", "GymBuddy"]}
                            itemLinks={["/cv", "/cv", "/cv"]}
                        />
                        <ReferenceItem
                            title="Education"
                            titleLink="/cv"
                            items={["University of California, Davis"]}
                            itemLinks={["/cv"]}
                            parentClasses="mt-8"
                        />
                    </div>
                    <div className="w-full border-b border-black border-opacity-10"></div>
                    <ReferenceItem
                        title="Blogs"
                        titleLink="/blogs"
                        items={["A Month at Ramp", "Learning Haskell"]}
                        itemLinks={["/blogs", "/blogs"]}
                    />
                    <div className="w-full border-b border-black border-opacity-10"></div>
                    <ReferenceItem title="Notes" titleLink="/notes" items={["Operating Systems"]} itemLinks={["/notes"]} />
                </section>
            </div>
        </div>
    );
}
