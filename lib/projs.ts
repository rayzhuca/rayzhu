export interface Proj {
    title: string;
    summary: string;
    description: string;
    tags: string[];
    github?: string;
    images?: string[];
}

export const projects: Proj[] = [
    {
        title: "Newton Notes",
        summary: "An AI powered app that generates Cornell notes",
        description:
            "Newton Notes records lecture audio in real-time and generates summarized key points and Cornell notes. These curated notes are available in a public gallery so anybody who missed class can access them.",
        tags: ["HackDavis2024", "Next.js", "MongoDB", "React", "Tailwind"],
        github: "https://github.com/rayzhuca/newton-notes",
    },
    {
        title: "Fit Check",
        summary: "An virutal try-on AI model",
        description:
            "Fit Check is an AI model that allows people to try on clothing in the internet. It works by uploading a picture of themselves and a new piece of clothing to try-on. The model generates a high-fidelity picture of the user in the new clothing.",
        tags: ["PyTorch", "Python", "FastAPI"],
    },
    {
        title: "Eggshell DB",
        summary: "Custom key-value database",
        description:
            "Eggshell DB is a custom key-value database built from scratch. The database is designed to be extremely efficient both time and space wise, utilizing B+-trees. The database could also handle concurrent requests via reader-writer lock.",
        tags: ["C++"],
        github: "https://github.com/rayzhuca/eggshell-db",
    },
    {
        title: "TypeCS",
        summary: "Typing web app",
        description:
            "TypeCS is a personalized typing application that utilizes machine learning to help typers grow and improve their typing speed.",
        tags: ["AWS", "Flask", "Python", "Typescript", "CSS", "HTML"],
        github: "https://github.com/rayzhuca/typecs",
    },
    {
        title: "Roblox Themes",
        summary: "Roblox Chrome extension",
        description:
            "Roblox Themes allows users to customize the Roblox website. It allows users to pick custom colors, save themes, and load themes. The extension has accumulated over 327,000 installs.",
        tags: ["Javascript", "CSS", "HTML"],
    },
];
