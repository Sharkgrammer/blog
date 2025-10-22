import PageWrapper from "../components/utils/PageWrapper.tsx";
import ListView from "../components/views/ListView.tsx";
import type Blog from "../types/Blog.ts";
import { useSearchParams } from "react-router-dom";
import BlogView from "../components/views/BlogView.tsx";

function MainPage() {
    const [searchParams] = useSearchParams();

    function getBlog(blogData:Blog[] | null){
        if (!blogData) return null;
        let slug:string = searchParams.get("p")!;

        let blog = blogData.find(b => b.slug === slug);
        return blog === undefined ? null : blog;
    }

    return (
        <PageWrapper>
            {(blogData:Blog[] | null) => (
                <div>
                    {searchParams.has("p") ? (
                        <BlogView blog={getBlog(blogData)} />
                    ) : (
                        blogData && (<ListView blogs={blogData} />)
                    )}
                </div>
            )}
        </PageWrapper>
    )
}

export default MainPage
