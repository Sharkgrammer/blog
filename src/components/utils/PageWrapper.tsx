import InfoView from "../views/InfoView.tsx";
import {useEffect, useState} from "react";
import type BlogFormat from "../../types/BlogFormat.ts";

function PageWrapper({children}: { children: any }) {
    const [blogData, setBlogData] = useState<BlogFormat | null>(null);

    async function getBlogData() {
        // If this ever becomes a network function, it'll need more checks
        // However for now if it can't read the json file we've got bigger problems
        setBlogData(await fetch("/data/blogs.json").then((r) => r.json()))
    }

    useEffect(() => {
        getBlogData().then();
    }, [])

    return (
        <>
            <div className="h-full max-h-screen bg-red-100 w-full px-2 py-5 overflow-y-auto">

                <div className="grid grid-cols-6">

                    <div>
                        <InfoView />
                    </div>

                    <div className="col-span-5">
                        {children(blogData?.blogs ?? null)}
                    </div>
                </div>


            </div>
        </>
    )
}

export default PageWrapper
