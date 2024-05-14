import Image from "next/image";

interface HeroProps {
    src: string;
    alt: string;
    title: string;
}

const Hero: React.FC<HeroProps> = ({ src, alt, title }) => {
    return (
        <div className="relative w-full h-96">
            <Image
                src={src}
                alt={alt}
                fill
                priority={false}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8Xw8AAkMBYCz7bH0AAAAASUVORK5CYII="
                sizes={"60vw"}
                className="object-cover rounded-lg overflow-hidden pointer-events-none select-none"
            />
            <div className="absolute z-10 font-extrabold left-6 bottom-6 tracking-tight text-4xl text-white">{title}</div>
        </div>
    );
};

export { Hero };
