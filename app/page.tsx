import Image from "next/image";
import miku from "@/public/imgs/miku.jpg";
import mazda from "@/public/imgs/mazda.jpg";
import chudrotating from "@/public/imgs/chudrotating.gif";
import bully from "@/public/imgs/bully.png";
import loringtu from "@/public/imgs/loringtu.jpg";
import street from "@/public/imgs/street.jpg";
import sleeping from "@/public/imgs/sleeping.jpg";
import racing from "@/public/imgs/racing.jpg";
import somedayfree from "@/public/imgs/somedayfree.jpg";
import argo from "@/public/imgs/argo.jpg";
import Link from "next/link";

export default function Page() {
    const quotes = [
        "“Man ought to know that in the theater of human life, it is only for Gods and angels to be spectators.”",
        "A great leader should only ever ask themselves two questions: “Do I want to do this?” and “Would this look cool?”!",
    ];
    const randomQuoteIndex = 1;

    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex flex-col gap-2 w-4/5 sm:w-1/2">
                <div className="flex justify-between">
                    <div className="flex flex-col mt-12 mr-4">
                        <h1 className="text-2xl font-medium">Ray Zhu</h1>
                        <p className="text-gray-200">20 — Gamer — Artist — Single Father — UCD </p>
                        <p className="text-gray-400">
                            <em>{quotes[randomQuoteIndex]}</em>
                        </p>
                    </div>
                    <div className="w-32 h-32 relative mt-12">
                        <Image src={miku} alt="miku" />
                    </div>
                </div>

                <div className="flex flex-col mb-1">
                    <div className="flex gap-4">
                        <Link href="/art-blog" className="underline">
                            art-blog
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col mt-1">
                    <h2 className="text-lg font-medium">Jottings</h2>
                    <div className="flex flex-col gap-1 text-gray-200 mt-1">
                        <div>
                            <Link href="/notes/is-ddia-worth-reading">
                                Is <em>Designing Data-Intensive Applications</em> Worth Reading?
                            </Link>
                        </div>
                        <div>
                            <Link href="/notes/what-i-learned-from-haskell">What I learned from Haskell</Link>
                        </div>
                    </div>
                </div>

                <div className="h-12"></div>

                <Gallery />

                <div className="h-12"></div>

                {/* <div className="flex flex-col mt-4">
                    <h2 className="text-lg font-medium">Favorite classes</h2>
                    <div className="flex flex-col gap-1 text-gray-200 mt-1">
                        <p>ECS 170 -- artifical intelligence</p>
                        <p>MAT 135B -- stochastic processes</p>
                        <p>PHY 9C -- eletricity and magnetism</p>
                    </div>
                </div> */}

                {/* <div className="mt-2">
                    <h2 className="text-lg font-medium mb-1">Facts About Me</h2>

                    <ul className="list-disc mt-1 *:mb-1">
                        <li>
                            <em>I like to listen to</em>{" "}
                            <Link className="underline" target="_blank" href="https://open.spotify.com/track/5mOKXtTlX20JWVla2Kx9D7">
                                Kanye
                            </Link>
                            , jazz (Nujabes),{" "}
                            <Link className="underline" target="_blank" href="https://open.spotify.com/track/6Leg4EGkFTZoeLfkXZHLvy">
                                rock
                            </Link>
                            , chill R&B
                        </li>
                        <li>
                            <em>In my free time,</em> I enjoy reading, drawing, doom-scrolling, gyming, playing tennis
                        </li>
                        <li>
                            <em>My favorite movies are</em> Minecraft Movie, Joker, American Psycho
                        </li>
                    </ul>
                </div> */}

                <div className="mt-4 mb-8">
                    <h2 className="text-lg font-medium">Bookshelf</h2>
                    <div className="grid grid-cols-[2fr,1fr] gap-1 text-gray-200 mt-1">
                        <p className="w-auto">An Introduction to Manifolds</p>
                        <div className="text-right">48 / 316</div>
                        <p className="w-auto">The Story of Philosophy</p>
                        <div className="text-right">122 / 578</div>
                        <p className="w-auto">Designing Data Intensive Applications</p>
                        <div className="text-right">544 / 544</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Gallery() {
    return (
        <div className="relative" style={{ width: "100%", height: "300px" }}>
            {/* Background image */}
            <div className="absolute inset-0" style={{ zIndex: -10 }}>
                <Image src={racing} alt="racing background" className="w-full h-full object-cover opacity-40" fill />
            </div>

            {/* <div className="absolute" style={{ left: "20%", top: 200, width: "20%", height: "90px", zIndex: 50 }}>
                <Image src={youngray} alt="young ray" className="w-full h-full object-contain" fill />
            </div> */}

            {/* Mazda - large image in top left */}
            <div className="absolute" style={{ left: 0, top: -10, width: "50%", height: "200px", zIndex: 20 }}>
                <Image src={mazda} alt="mazda" className="w-full h-full object-contain" fill />
            </div>

            {/* LTG - top right */}
            {/* <div className="absolute" style={{ left: "45%", top: 100, width: "20%", height: "100px", zIndex: 50 }}>
                <Image src={ltg} alt="v" className="w-full h-full object-contain" fill />
            </div> */}

            {/* Argo - top right */}
            <div className="absolute" style={{ left: "40%", top: -20, width: "50%", height: "150px", zIndex: 30 }}>
                <Image src={argo} alt="argo" className="w-full h-full object-contain" fill />
            </div>

            {/* Chud rotating - top far right */}
            <div
                className="absolute"
                style={{
                    left: "80%",
                    top: 30,
                    width: "25%",
                    height: "130px",
                    zIndex: 40,
                    marginLeft: "-24px",
                }}
            >
                <Image src={chudrotating} alt="chud rotating" className="w-full h-full object-contain" fill />
            </div>

            {/* Bully - middle far right */}
            <div
                className="absolute"
                style={{
                    left: "58%",
                    top: "160px",
                    width: "25%",
                    height: "200px",
                    zIndex: 20,
                    marginLeft: "-40px",
                    marginTop: "-32px",
                }}
            >
                <Image src={bully} alt="bully" className="w-full h-full object-contain" fill />
            </div>

            {/* Loring Tu - bottom left */}
            <div className="absolute" style={{ left: -10, top: "190px", width: "25%", height: "160px", zIndex: 30, marginTop: "-32px" }}>
                <Image src={loringtu} alt="loring tu" className="w-full h-full object-contain" fill />
            </div>

            {/* Someday Free - bottom left-center */}
            <div
                className="absolute"
                style={{
                    left: "30%",
                    top: "200px",
                    width: "25%",
                    height: "160px",
                    zIndex: 30,
                    marginLeft: "-24px",
                    marginTop: "-32px",
                }}
            >
                <Image src={somedayfree} alt="someday free" className="w-full h-full object-contain" fill />
            </div>

            {/* Street - bottom right-center */}
            <div
                className="absolute"
                style={{
                    left: "35%",
                    top: "40px",
                    width: "35%",
                    height: "300px",
                    zIndex: 10,
                    marginLeft: "-40px",
                    marginTop: "-32px",
                }}
            >
                <Image src={street} alt="street" className="w-full h-full object-contain" fill />
            </div>

            {/* Sleeping - bottom far right */}
            <div
                className="absolute"
                style={{
                    left: "75%",
                    top: "180px",
                    width: "25%",
                    height: "100px",
                    zIndex: 40,
                    marginLeft: "-24px",
                    marginTop: "16px",
                }}
            >
                <Image src={sleeping} alt="sleeping" className="w-full h-full object-contain" fill />
            </div>
        </div>
    );
}
