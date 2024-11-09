import Image from "next/image";

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
                        <Image src="/imgs/miku.jpg" fill={true} alt="miku" />
                    </div>
                </div>

                <div className="w-full h-64"></div>

                <div className="flex flex-col">
                    <h2 className="text-lg font-medium">favorite classes</h2>
                    <div className="flex flex-col gap-1 text-gray-200">
                        <p>ecs 170 -- artifical intelligence</p>
                        <p>mat 135b -- stochastic processes</p>
                        <p>phy 9c -- eletricity and magnetism</p>
                    </div>
                </div>

                <div className="flex flex-col mt-4">
                    <h2 className="text-lg font-medium">book shelf</h2>
                    <div className="flex flex-col gap-1 text-gray-200">
                        <div className="flex justify-between">
                            <p>designing data intensive applications</p>
                            <div>27 / 544</div>
                        </div>
                        <div className="flex justify-between">
                            <p>operating systems: three easy pieces</p>
                            <div>0 / 686</div>
                        </div>
                        <div className="flex justify-between">
                            <p>introduction to algorithms</p>
                            <div>0 / 1136</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
