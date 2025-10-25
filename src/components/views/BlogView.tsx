import type Blog from "../../types/Blog.ts";
import Markdown from 'react-markdown'
import fm from 'front-matter'
import {useEffect, useState} from "react";
import '../../assets/page.css';
import DummyBlogView from "../dummy/DummyBlogView.tsx";

function BlogView({blog}: { blog: Blog | null }) {
    const [body, setBody] = useState<string>("");
    //const [attributes, setAttributes] = useState<{}>("");

    async function setData(data: any){
        let rawData = fm(data);
        setBody(rawData.body)
        //setAttributes(rawData.attributes)
    }

    useEffect(() => {
        if (blog){
            fetch(`/blog/data/blog/${blog.slug}.md`)
                .then((res) => res.text())
                .then(setData)
        }
    }, [blog]);

    return (
        <>
            {(blog && body) ? (
                <div className="markdown">
                    <Markdown>{body}</Markdown>
                </div>
            ) : (
                <DummyBlogView />
            )}
        </>
    )
}

export default BlogView
