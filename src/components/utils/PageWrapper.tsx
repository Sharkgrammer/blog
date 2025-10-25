import InfoView from "../views/InfoView.tsx";
import {useEffect, useState} from "react";
import type BlogFormat from "../../types/BlogFormat.ts";
import {Link} from "react-router";
import type Blog from "../../types/Blog.ts";

function PageWrapper({children}: { children: any }) {
    const [blogData, setBlogData] = useState<BlogFormat | null>(null);

    async function getBlogData() {
        // If this ever becomes a network function, it'll need more checks
        // However for now if it can't read the json file we've got bigger problems
        setBlogData(await fetch("/blog/data/blogs.json").then((r) => r.json()))
    }

    function sortBlogsByDate(blogs: Blog[] | undefined){
        if (blogs == undefined) return null;

        return blogs.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
    }

    useEffect(() => {
        getBlogData().then();
    }, [])

    return (
        <div className="font-serif">
            <div className="min-h-[100dvh] flex flex-col w-full px-2 py-5">
                <div className="border-b-2 flex justify-center px-2 border-black hover:border-gray-800">
                    <Link to="/" className="text-2xl font-bold px-2 hover:text-gray-800">
                        <h1>An interesting blog name</h1>
                    </Link>
                </div>

                <div className="grid grid-cols-6 flex-grow">

                    {/* TODO are we keeping this? */ }
                    <div className="hidden">
                        <InfoView />
                    </div>

                    <div className="col-span-6">
                        {children(sortBlogsByDate(blogData?.blogs))}
                    </div>
                </div>

                <div className="border-black border-t-2 text-center pb-4 px-2">
                    <div className="text-xs pt-2 px-2">
                        <p>© 2025 Daniel Keane Kelly — A personal collection of weekly writings</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PageWrapper
