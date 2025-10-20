import type Blog from "../../types/Blog.ts";
import Markdown from 'react-markdown'
import {useEffect, useState} from "react";

function BlogView({blog}: { blog: Blog | null }) {
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        if (blog){
            fetch(`/data/blog/${blog.slug}/blog.md`)
                .then((res) => res.text())
                .then(setContent)
        }
    }, [blog]);

    return (
        <>
            {blog &&(
                <div className="">

                    <div className="h-50">
                        <p>{blog.name}</p>

                        <Markdown>{content}</Markdown>
                    </div>

                </div>
            )}
        </>
    )
}

export default BlogView
