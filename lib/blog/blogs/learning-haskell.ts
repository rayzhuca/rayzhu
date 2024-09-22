import { Blog, ContentElement, Section, Paragraph, TextSegment } from "../blog-types";

export const learningHaskellBlog: Blog = {
    title: "Learning Haskell",
    slug: "learning-haskell",
    date: "October 2024",
    description: "A brief piece about the my first steps in learning and writing Haskell",
    content: [
        new Paragraph({
            content: <ContentElement[]>[
                new TextSegment({
                    text: `Haskell, a statically typed, purely functional programming language, 
                    has a reputation for being both elegant and challenging. 
                    Named after the logician Haskell Curry, it is distinct from the more 
                    imperative programming languages like Python or Java that dominate most introductory 
                    programming courses. However, mastering Haskell can open up new paradigms of thinking about 
                    programming, making it an excellent choice for developers looking to deepen their understanding 
                    of functional programming and type systems.`,
                }),
            ],
        }),
        new Section({
            title: "Why Learn Haskell?",
            content: <ContentElement[]>[
                new Section({
                    title: "Functional Programming Paradigm",
                    content: <ContentElement[]>[
                        new TextSegment({
                            text: `Haskell embodies the functional programming paradigm, where functions are first-class citizens. Unlike imperative languages, where you tell the computer how to do things (e.g., step-by-step instructions for sorting an array), functional programming focuses on what needs to be done (e.g., a sorted version of the array). This shift encourages more declarative, cleaner code and minimizes side effects, which can lead to fewer bugs and easier reasoning about programs.`,
                        }),
                    ],
                }),
            ],
        }),
    ],
};
