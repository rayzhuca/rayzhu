"use client";

import OrgCard from "@/components/OrgCard";
import { acpc, atomaMedia, gymBuddy, includeClub } from "@/lib/orgs";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <div className="mt-12 grid gap-4">
            <div className="w-20 h-20 relative">
                <Image
                    src="/pfp.jpg"
                    alt="My friend and I winning 2nd place at a competitive programming contest"
                    fill
                    className="object-contain rounded-full overflow-hidden pointer-events-none select-none"
                />
            </div>

            <h2 className="text-xl font-semibold">Hi! Nice to meet you.</h2>
            <p>I&apos;m Ray, a computer science student studying at UC Davis.</p>
            <div>
                My experiences include two full-stack internships at <OrgCard {...atomaMedia} /> and <OrgCard {...gymBuddy} />,
                undergraduate research in fairness in ML and DNA visualization tools, as well as a variety of school clubs such as{" "}
                <OrgCard {...includeClub} /> and <OrgCard {...acpc} />.
            </div>
            <p>
                Outside of school, I enjoy watching movies, hanging out with friends, grabbing In-n-Out, and hitting the gym. If you want to
                talk, add me on{" "}
                <Link
                    href="https://www.linkedin.com/in/rayzhuca/"
                    target="_blank"
                    className="font-medium hover:underline underline-offset-4"
                >
                    LinkedIn
                </Link>{" "}
                or any of my other{" "}
                <Link href="/contact" className="font-medium hover:underline underline-offset-4">
                    socials
                </Link>
                .
            </p>
        </div>
    );
}
