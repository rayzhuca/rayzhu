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
        <div className="flex flex-row w-full">
            <div className="md:w-40 pr-4 md:flex-shrink-0">
                <div>{description}</div>
                <em>{date}</em>
            </div>
            <div className="flex-grow">
                <Image src={src} className="w-full" alt={title} />
            </div>
            <div className="md:w-40 md:pl-4 flex-shrink-0"></div>
        </div>
    );
};
