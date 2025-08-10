import skeleton from "@/public/art-blog/skeleton.jpg";
import horse from "@/public/art-blog/horse.jpg";
import { Artwork } from "@/components/Artwork";

export default function Page() {
    return (
        <main className="flex w-full">
            <Artwork src={skeleton} title="skeleton" description="Bridgman pg 23-24 " date={"Apr 29, 2025"} />
            <Artwork src={horse} title="terracota-horse" description="Sketch, Chinese terracota horse" date={"July 2025"} />
        </main>
    );
}
