import type Blog from "../../types/Blog.ts";
import { Link } from "react-router";

function BlogItem({ blog }: { blog: Blog }) {
    return (
        <Link to={{ pathname: "/", search: `blog=${blog.slug}` }}
              className="block p-3 border-b border-gray-300 hover:bg-gray-50 transition">
            <h2 className="text-lg font-bold text-gray-900">{blog.name}</h2>
            <p className="text-sm text-gray-600 italic">{blog.date}</p>
            <p className="mt-1 text-gray-800 leading-snug">{blog.desc}</p>
        </Link>
    );
}

export default BlogItem;

