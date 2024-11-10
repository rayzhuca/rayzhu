import Image from "next/image";
import miku from "@/public/imgs/miku.jpg";

export default function Page() {
    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex flex-col gap-2 w-2/3">
                <div className="flex justify-between">
                    <div className="flex flex-col mt-12">
                        <h1 className="text-2xl font-medium">ray zhu</h1>
                        <p className="text-gray-200">junior at uc davis, mathematics and computer science</p>
                    </div>
                    <div className="w-32 h-32 relative mt-12">
                        <Image src={miku} alt="miku" />
                    </div>
                </div>

                <div className="w-full h-52"></div>

                <div className="flex flex-col">
                    <h2 className="text-lg font-medium">favorite classes</h2>
                    <div className="flex flex-col gap-1 text-gray-200">
                        <p>ecs 170 -- artifical intelligence</p>
                        <p>mat 135b -- stochastic processes</p>
                        <p>phy 9c -- eletricity and magnetism</p>
                    </div>
                </div>

                <div className="mt-4 mb-8">
                    <h2 className="text-lg font-medium">Book Shelf</h2>
                    <div className="grid grid-cols-[2fr,1fr] gap-4 text-gray-200 mt-2">
                        <p className="w-auto">Designing Data Intensive Applications</p>
                        <div className="text-right">27 / 544</div>
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
