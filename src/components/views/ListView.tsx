import type Blog from "../../types/Blog.ts";
import BlogItem from "../lists/BlogItem.tsx";

function ListView({blogs}: { blogs: Blog[] }) {

    return (
        <>
            <div className="py-8">
                <div className="grid gap-2">
                    {blogs.map((blog, index) => (
                        <BlogItem blog={blog} key={index} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ListView
