import { ExperienceInterface } from "@/lib/cv";

const Experience: React.FC<ExperienceInterface> = ({ company, position, location, time, points }) => {
    return (
        <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold font-lora text-black text-opacity-70">{company}</h2>
            <h3 className="text-base italic font-medium font-lora text-black text-opacity-60">{position}</h3>
            <h4 className="text-black text-opacity-60">
                <span>{location}</span>
                <span className="px-2">•</span>
                <span>{time}</span>
            </h4>
            <ul className="list-disc list-inside pt-1 text-black text-opacity-50 *:pt-1">
                {points.map((point) => (
                    <li key={point}>{point}</li>
                ))}
            </ul>
        </div>
    );
};

export { Experience };
