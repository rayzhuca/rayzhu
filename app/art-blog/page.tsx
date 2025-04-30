import skeleton from "@/public/art-blog/skeleton.jpg";
import { Artwork } from "@/components/Artwork";

export default function Page() {
    return (
        <main className="flex flex-col w-full p-4">
            <Artwork src={skeleton} title="skeleton" description="Bridgman pg 23-24 " date={"Apr 29, 2025"} />
        </main>
    );
}
