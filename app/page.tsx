import Image from "next/image";
import miku from "@/public/imgs/miku.jpg";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex flex-col gap-2 w-2/3">
                <div className="flex justify-between">
                    <div className="flex flex-col mt-12">
                        <h1 className="text-2xl font-medium">Ray Zhu</h1>
                        <p className="text-gray-200">Junior at UC Davis, computer science and mathematics</p>
                        <p className="text-gray-400">My goal is to learn as much as possible</p>
                    </div>
                    <div className="w-32 h-32 relative mt-12">
                        <Image src={miku} alt="miku" />
                    </div>
                </div>

                <div className="w-full mt-4 h-44"></div>

                <div className="flex flex-col">
                    <h2 className="text-lg font-medium">Notes</h2>
                    <div className="flex flex-col gap-1 text-gray-200 mt-1">
                        <Link href="/notes/ddia-book-review">Is Designing Data Intensive Applications Worth Reading?</Link>
                        <Link href="/notes/what-i-learned-from-haskell">What I learned from Haskell</Link>
                    </div>
                </div>

                <div className="flex flex-col mt-4">
                    <h2 className="text-lg font-medium">Favorite classes</h2>
                    <div className="flex flex-col gap-1 text-gray-200 mt-1">
                        <p>ECS 170 -- artifical intelligence</p>
                        <p>MAT 135B -- stochastic processes</p>
                        <p>PHY 9C -- eletricity and magnetism</p>
                    </div>
                </div>

                <div className="mt-4 mb-8">
                    <h2 className="text-lg font-medium">Reading progress</h2>
                    <div className="grid grid-cols-[2fr,1fr] gap-1 text-gray-200 mt-1">
                        <p className="w-auto">Designing Data Intensive Applications</p>
                        <div className="text-right">544 / 544</div>
                        <p className="w-auto">Operating Systems: Three Easy Pieces</p>
                        <div className="text-right">0 / 686</div>
                        <p className="w-auto">Introduction to Algorithms</p>
                        <div className="text-right">0 / 1136</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
