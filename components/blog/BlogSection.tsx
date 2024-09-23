import { ContentElement, ImageContent, List, Paragraph, Section, TextSegment } from "@/lib/blog/blog-types";
import { sectionLevelToClass, sectionTitleLevelToClass } from "@/lib/blog/blogs";

import Image from "next/image";

const TextSegmentComponent: React.FC<TextSegment> = ({ text }) => {
    return <span>{text}</span>;
};

const ParagraphComponent: React.FC<Paragraph> = ({ content }) => {
    return (
        <p>
            {content.map((v, i) => (
                <ContentElementComponent key={i} {...v} />
            ))}
        </p>
    );
};

const ImageComponent: React.FC<ImageContent> = ({ src, alt }) => {
    return <Image src={src} alt={alt} />;
};

const ListComponent: React.FC<List> = ({ content }) => {
    return (
        <ul>
            {content.map((v, i) => (
                <li key={i}>
                    <ContentElementComponent {...v} />
                </li>
            ))}
        </ul>
    );
};

const SectionComponent: React.FC<Section> = ({ title, content, level }) => {
    return (
        <section className={`${sectionLevelToClass.get(level)}`}>
            <h1 className={`${sectionTitleLevelToClass.get(level)} font-lora text-black text-opacity-80`}>{title}</h1>
            {content.map((v, i) => (
                <ContentElementComponent key={i} {...v} />
            ))}
        </section>
    );
};

const ComponentFromType = new Map<string, React.FC<any>>([
    ["text", TextSegmentComponent],
    ["paragraph", ParagraphComponent],
    ["image", ImageComponent],
    ["list", ListComponent],
    ["section", SectionComponent],
]);

const ContentElementComponent: React.FC<ContentElement> = (props) => {
    console.log(props);
    const Component = ComponentFromType.get(props.type);
    if (Component === undefined) {
        throw TypeError(`Invalid content element type ${props.type}`);
    }
    return <Component {...props} />;
};

export { ContentElementComponent };
