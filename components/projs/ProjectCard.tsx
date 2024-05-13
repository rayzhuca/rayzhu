"use client";

import { Proj } from "@/lib/projs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { Badge } from "../ui/badge";

const ProjectCard: React.FC<Proj> = ({ title, summary, description, tags, github }) => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription className="flex gap-2">
                    <div>{summary}</div>
                    <div className="flex gap-2 flex-wrap">
                        {tags.map((v) => (
                            <Badge key={v} variant="secondary">
                                {v}
                            </Badge>
                        ))}
                    </div>
                </CardDescription>
            </CardHeader>

            <CardContent>
                <div>{description}</div>
            </CardContent>
            {github && (
                <CardFooter className="flex justify-between">
                    {github && (
                        <Button variant="outline" className="p-2 h-8" onClick={() => window.open(github, "_blank")}>
                            <Image src="/github-mark.svg" alt="Github" width={14} height={14} className="mr-1" /> Github
                        </Button>
                    )}
                </CardFooter>
            )}
        </Card>
    );
};

export default ProjectCard;
