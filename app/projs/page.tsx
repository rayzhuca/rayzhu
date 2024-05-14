"use client";

import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/projs/project-card";
import { projects } from "@/lib/projs";

export default function Home() {
    return (
        <div className="my-12 flex flex-col gap-6">
            <Hero src="/pink-art.jpg" alt="Expressionist art in pink" title="Projects" />
            {projects.map((v) => (
                <ProjectCard key={v.title} {...v} />
            ))}
        </div>
    );
}
