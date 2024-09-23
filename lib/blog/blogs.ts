import { ContentElement, Section } from "./blog-types";
import { learningHaskellBlog } from "./blogs/learning-haskell";

const sectionTitleLevelToClass = new Map([
    [0, "text-2xl font-bold"],
    [1, "text-xl font-semibold"],
    [2, "text-lg font-semibold"],
    [3, "font-semibold"],
]);

const sectionLevelToClass = new Map([
    [0, "flex flex-col gap-4"],
    [1, "flex flex-col gap-2"],
    [2, "flex flex-col gap-2"],
    [3, "flex flex-col gap-2"],
]);

const maxLevel = Array.from(sectionTitleLevelToClass.keys()).reduce((acc, k) => Math.max(acc, k));

function processContent(blog: ContentElement, level: number) {
    if (blog.type === "section") {
        if (level > maxLevel) {
            throw Error(`Max level ${maxLevel} reached`);
        }
        (blog as Section).level = level;
    }
    let content: ContentElement[] = (<any>blog).content || [];
    for (const element of content) {
        processContent(element, level + 1);
    }
}

const blogs = [learningHaskellBlog];
blogs.forEach((blog) => {
    for (const element of blog.content) {
        processContent(element, 0);
    }
});

const blogSlugMap = new Map(blogs.map((blog) => [blog.slug, blog]));

export { blogs, blogSlugMap, sectionLevelToClass, sectionTitleLevelToClass };
