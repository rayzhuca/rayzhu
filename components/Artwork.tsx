import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface ArtworkProps {
    title: string;
    date: string;
    description: string;
    src: string | StaticImport;
}

export const Artwork: React.FC<ArtworkProps> = ({ title, date, description, src }) => {
    return (
        <div className="flex flex-col w-1/2">
            <div className="">
                <Image src={src} className="" alt={title} />
            </div>
            <div className="flex justify-between">
                <span>{description}</span>
                <em>{date}</em>
            </div>
        </div>
    );
};
