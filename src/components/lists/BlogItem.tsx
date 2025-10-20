import type Blog from "../../types/Blog.ts";
import { Link } from "react-router";

function BlogItem({blog}: { blog: Blog }) {

    function openSlug(){

    }

    return (
        <>
            <Link to={{pathname: "/", search: `b=${blog.slug}`}} className="border-black border-2 rounded-2xl p-2 cursor-pointer" onClick={openSlug}>
                <p className="whitespace-nowrap select-none">{blog.name}</p>
                <p className="whitespace-nowrap select-none">{blog.desc}</p>
                <p className="whitespace-nowrap select-none">{blog.slug}</p>
                <p className="whitespace-nowrap select-none">{blog.id}</p>
                <p className="whitespace-nowrap select-none">{blog.date}</p>
            </Link>
        </>
    )
}

export default BlogItem
