"use client";

import { Header } from "@/components/header";

export default function Resume() {
    return (
        <div className="flex flex-col justify-between min-h-screen bg-[#FBDD80]">
            <Header title="" titleHref="/" />
            <div className="flex grow px-16 py-10 pt-32 *:border-t *:border-black *:border-opacity-20 gap-28"></div>
        </div>
    );
}
