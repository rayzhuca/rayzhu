import { CalendarDays } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Org } from "@/lib/orgs";
import Link from "next/link";

const OrgCard: React.FC<Org> = ({ title, description, icon, link, date }) => {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <span className="font-medium cursor-pointer hover:underline underline-offset-4">{title}</span>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                    <Avatar>
                        <AvatarImage src={icon} onClick={() => link && window.open(link, "_blank")} className="cursor-pointer" />
                        <AvatarFallback>{title}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">
                            <Link href={link} target="_blank" className="cursor-pointer">
                                {title}
                            </Link>
                        </h4>
                        <p className="text-sm">{description}</p>
                        <div className="flex items-center pt-2">
                            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                            <span className="text-xs text-muted-foreground">{date}</span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
};

export { OrgCard };
