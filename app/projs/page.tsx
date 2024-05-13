"use client";

import ProjectCard from "@/components/projs/ProjectCard";
import { projects } from "@/lib/projs";

export default function Home() {
    return (
        <div className="my-12 flex flex-col gap-6">
            {projects.map((v) => (
                <ProjectCard key={v.title} {...v} />
            ))}
        </div>
    );
}
