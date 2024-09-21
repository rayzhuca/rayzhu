import { AwardSectionInterface } from "@/lib/cv";

const AwardSection: React.FC<AwardSectionInterface> = ({ title, bullets }) => {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="font-lora font-semibold text-lg text-black text-opacity-70">{title}</h3>
            <ul>
                {bullets.map(({ name, description }, i) => (
                    <li key={i} className="pt-1 text-black text-opacity-50">
                        <span className="font-medium text-black text-opacity-60 pr-2">{name}:</span>
                        <span>{description}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export { AwardSection };
