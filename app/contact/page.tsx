"use client";

import Link from "next/link";
import { Hero } from "@/components/hero";

export default function Home() {
    return (
        <div className="w-full my-12 flex flex-col gap-8">
            <Hero src="/pink-blue.avif" alt="Expressionist art in pink and blue" title="Contact" />
            <div className="flex flex-col gap-8 justify-between md:flex-row">
                <h4 className="text-xl font-semibold">Feel free to hit me up</h4>
                <div className="flex flex-col gap-2">
                    <Link href="mailto:rayzhuca@gmail.com" target="_blank" className="hover:underline tracking-tight">
                        rayzhuca@gmail.com
                    </Link>
                    <Link href="https://www.linkedin.com/in/rayzhuca/" target="_blank" className="hover:underline tracking-tight">
                        in/rayzhuca
                    </Link>
                    <Link href="https://github.com/rayzhuca" target="_blank" className="hover:underline tracking-tight">
                        github/rayzhuca
                    </Link>
                </div>
            </div>
        </div>
    );
}
