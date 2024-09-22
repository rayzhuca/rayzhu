import { learningHaskellBlog } from "./blogs/learning-haskell";

const blogs = [learningHaskellBlog];

const blogSlugMap = new Map(blogs.map((blog) => [blog.slug, blog]));

export { blogs, blogSlugMap };
