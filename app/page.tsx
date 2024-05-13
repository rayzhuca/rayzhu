"use client";

import Link from "next/link";

export default function Home() {
    return (
        <div className="mt-12 grid gap-4">
            <h2 className="text-xl font-semibold">Hi! Nice to meet you.</h2>
            <p>{`I'm Ray, a computer science student studying at UC Davis.`}</p>
            <p>
                {`
                My experiences include two full-stack internships at Atoma Media and GymBuddy, 
                undergraduate research in fairness in ML and DNA visualization tool,
                and a variety of school clubs including #Include and Competitive Programming Club.
                `}
            </p>
            <p>
                Outside of school, I enjoy watching movies, hanging out with friends, grabbing In-n-Out, and hitting the gym. If you want to
                talk, add me on LinkedIn or any of my other{" "}
                <Link href="/contact" className="hover:underline italic">
                    socials
                </Link>
                .
            </p>
        </div>
    );
}
