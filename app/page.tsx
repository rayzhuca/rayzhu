import Image from "next/image";
import miku from "@/public/imgs/miku.jpg";

export default function Page() {
    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex flex-col gap-2 w-2/3">
                <div className="flex justify-between">
                    <div className="flex flex-col mt-12">
                        <h1 className="text-2xl font-medium">ray zhu</h1>
                        <p className="text-gray-200">junior at uc davis, computer science and mathematics</p>
                        <p className="text-gray-400">my goal is to learn as much as possible</p>
                    </div>
                    <div className="w-32 h-32 relative mt-12">
                        <Image src={miku} alt="miku" />
                    </div>
                </div>

                <div className="w-full mt-4 h-48"></div>

                <div className="flex flex-col">
                    <h2 className="text-lg font-medium">favorite classes</h2>
                    <div className="flex flex-col gap-1 text-gray-200 mt-1">
                        <p>ecs 170 -- artifical intelligence</p>
                        <p>mat 135b -- stochastic processes</p>
                        <p>phy 9c -- eletricity and magnetism</p>
                    </div>
                </div>

                <div className="mt-4 mb-8">
                    <h2 className="text-lg font-medium">reading progress</h2>
                    <div className="grid grid-cols-[2fr,1fr] gap-1 text-gray-200 mt-1">
                        <p className="w-auto">designing data intensive applications</p>
                        <div className="text-right">120 / 544</div>
                        <p className="w-auto">operating systems: three easy pieces</p>
                        <div className="text-right">0 / 686</div>
                        <p className="w-auto">introduction to algorithms</p>
                        <div className="text-right">0 / 1136</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
