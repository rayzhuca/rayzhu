import { ProjectProps } from "@/lib/projs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";

const ProjectCard: React.FC<ProjectProps> = ({ title, summary, description, github }) => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription>{summary}</CardDescription>
            </CardHeader>
            <CardContent>{description}</CardContent>
            {github && (
                <CardFooter className="flex justify-between">
                    {github && (
                        <Button variant="outline" className="p-2 h-8">
                            <Image src="/github-mark.svg" alt="Github" width={14} height={14} className="mr-1" /> Github
                        </Button>
                    )}
                </CardFooter>
            )}
        </Card>
    );
};

export default ProjectCard;
