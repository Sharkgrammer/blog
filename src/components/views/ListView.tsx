import type Blog from "../../types/Blog.ts";

function ListView({blogs}: { blogs: Blog[] }) {

    return (
        <>
            <div className="bg-red-500">

                <div className="h-50">

                    {blogs.map((item, index) => (
                        <p className="whitespace-nowrap select-none" key={index}>{item["name"]}</p>
                    ))}

                </div>

            </div>
        </>
    )
}

export default ListView
