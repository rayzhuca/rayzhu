interface ExperienceInterface {
    company: string;
    position: string;
    location: string;
    time: string;
    points: string[];
}

const experiences: ExperienceInterface[] = [
    {
        company: "Ramp",
        position: "Software Engineer Intern",
        location: "New York, NY",
        time: "September 2024 – Present",
        points: [
            "Backend software engineering intern at Ramp, working in the workflow automation team, utilizing Python and Rust.",
            "Denormalized millions of payment transactions, which may improve the page hit of some queries by more than 80%.",
            "Developed the workflow validator, utilizing Rust, which ensured the structural integrity and reliability of workflows.",
        ],
    },
    {
        company: "Atoma Media",
        position: "Software Engineer Intern",
        location: "Irvine, CA",
        time: "January 2024 – August 2024",
        points: [
            "Developing a financial news analyzer platform that generates news summaries, sentiment analysis, and financial insights.",
            "Implemented a feature that fetches and plots relevant stock tickers from an article, improving user feedback by 20%.",
            "Built payment transactions with Stripe and saved subscriptions to AWS RDS to reduce Stripe API calls by +75%.",
        ],
    },
    {
        company: "GymBuddy",
        position: "Software Engineer Intern",
        location: "Davis, CA",
        time: "October 2023 – January 2024",
        points: [
            "Created an advertiser dashboard for ads management and metrics tracking for a gym partner app with 10,000+ users.",
            "Designed a database model, linked to Firestore and Realtime DB, and wrote robust and accessible data security rules.",
            "Surfaced 20 bugs and glitches with Jest by conducting rigorous unit testing with 80% coverage with Jest.",
        ],
    },
];

interface AwardBullet {
    name: string;
    description?: string;
}

interface AwardSectionInterface {
    title: string;
    bullets: AwardBullet[];
}

const awards: AwardSectionInterface[] = [
    {
        title: "Competitive Programming",
        bullets: [
            {
                name: "USA Computing Olympiad",
                description: "Gold (2022)",
            },
            {
                name: "International Collegiate Programming Contest",
                description: "Pacific Northwest Regionals, 21st place (2023)",
            },
            {
                name: "Davis Competitive Programming Competition",
                description: "1st place in College Division (2023)",
            },
            {
                name: "MIT Informatics Tournament",
                description: "Top 100 (2023)",
            },
            {
                name: "Sierra Competitive Programming Contest",
                description: "1st place (2023)",
            },
            {
                name: "Columbia Competitive Programming Camp",
                description: "Participant (2024)",
            },
        ],
    },
];

export type { ExperienceInterface, AwardSectionInterface };
export { experiences, awards };
