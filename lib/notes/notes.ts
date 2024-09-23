interface NoteInterface {
    title: string;
    slug: string;
    date: string;
    description: string;
}

const notes: NoteInterface[] = [
    {
        title: "ECS 150: Operating Systems & System Programming",
        slug: "ecs-150",
        date: "July 25, 2024",
        description:
            "An overview of fundamental concepts in operating systems including processes, threads, synchronization, and system programming.",
    },
];

export { notes };

export type { NoteInterface };
