"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <title>Ray</title>
            </head>
            <body className={inter.className}>
                <div className="flex justify-center w-full">
                    <div className="w-1/2">
                        <header className="mt-8 flex flex-row justify-between">
                            <h2 className="text-xl font-semibold">
                                <Link href="/">Ray Zhu</Link>
                            </h2>
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                                            about me
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink href="/projs" className={navigationMenuTriggerStyle()}>
                                            projects
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink href="/contact" className={navigationMenuTriggerStyle()}>
                                            contact
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </header>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
