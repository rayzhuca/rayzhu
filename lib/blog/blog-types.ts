interface BlogSummary {
    title: string;
    slug: string;
    date: string;
    description: string;
}

interface ContentElement {
    type: "paragraph" | "section" | "list" | "image" | "text";
}

interface TextSegmentInterface {
    text: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    link?: string;
}

class TextSegment implements ContentElement, TextSegmentInterface {
    type: "text" = "text";
    text: string;
    bold?: boolean | undefined;
    italic?: boolean | undefined;
    underline?: boolean | undefined;
    link?: string | undefined;
    constructor({ text, bold, italic, underline, link }: TextSegmentInterface) {
        this.text = text;
        this.bold = bold;
        this.italic = italic;
        this.underline = underline;
        this.link = link;
    }
}

interface ParagraphInterface {
    content: ContentElement[];
}

class Paragraph implements ContentElement, ParagraphInterface {
    type: "paragraph" = "paragraph";
    content: ContentElement[];
    constructor({ content }: ParagraphInterface) {
        this.content = content;
    }
}

interface SectionInterface {
    title: string;
    content: ContentElement[];
    level?: number; // defaults to one level down from parent. starts from 0
}

class Section implements ContentElement, SectionInterface {
    type: "section" = "section";
    title: string;
    content: ContentElement[];
    level: number;
    constructor({ title, content }: SectionInterface) {
        this.title = title;
        this.content = content;
        this.level = -1;
    }
}

interface ListInterface {
    content: ContentElement[];
}

class List implements ContentElement, ListInterface {
    type: "list" = "list";
    content: ContentElement[];
    constructor({ content }: ListInterface) {
        this.content = content;
    }
}

interface ImageContentInterface {
    src: string;
    alt: string;
}

class ImageContent implements ContentElement, ImageContentInterface {
    type: "image" = "image";
    src: string;
    alt: string;
    constructor({ src, alt }: ImageContentInterface) {
        this.src = src;
        this.alt = alt;
    }
}

interface Blog extends BlogSummary {
    content: ContentElement[];
}

export type { ContentElement, Blog, BlogSummary };

export { TextSegment, Paragraph, Section, List, ImageContent };
