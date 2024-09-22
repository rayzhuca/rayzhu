import { AwardSection } from "@/components/cv/award-section";
import { Experience } from "@/components/cv/experience";
import { Header } from "@/components/header";
import { experiences, awards } from "@/lib/cv";

interface CVSectionInterface extends React.PropsWithChildren {
    title: string;
    wrapperClasses: string;
}
const CVSection: React.FC<CVSectionInterface> = ({ title, children, wrapperClasses }) => {
    return (
        <div className="flex flex-wrap gap-8 justify-evenly border-t border-black border-opacity-10 *:pt-6">
            <div className="text-black text-opacity-30 w-40">{title}</div>
            <div className={`grow ${wrapperClasses}`}>{children}</div>
        </div>
    );
};

export default function Resume() {
    return (
        <div className="flex flex-col min-h-screen bg-[#fff] pb-24">
            <Header title="Curriculum vitae" titleHref="/cv" />
            <div className="flex flex-col gap-32 mt-24 px-20">
                <CVSection title="Experience" wrapperClasses="flex flex-col gap-8">
                    {experiences.map((exp, i) => (
                        <Experience key={i} {...exp} />
                    ))}
                </CVSection>
                <CVSection title="Education" wrapperClasses="flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold font-lora text-black text-opacity-70">University of California, Davis</h2>
                    <div className="flex justify-between">
                        <h3 className="font-medium italic font-lora text-black text-opacity-60">
                            B.S. in Computer Science and Mathematics
                        </h3>
                        <div className="font-ssp text-black text-opacity-60">2022 – 2026</div>
                    </div>
                </CVSection>
                <CVSection title="Awards" wrapperClasses="flex flex-col gap-2">
                    {awards.map((award, i) => (
                        <AwardSection key={i} {...award} />
                    ))}
                </CVSection>
            </div>
        </div>
    );
}
