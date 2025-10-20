import PageWrapper from "../components/utils/PageWrapper.tsx";
import ListView from "../components/views/ListView.tsx";
import type Blog from "../types/Blog.ts";
import { useSearchParams } from "react-router-dom";

function MainPage() {
    const [searchParams] = useSearchParams();

    return (
        <PageWrapper>
            {(blogData:Blog[] | null) => (
                <div>
                    <p>hello {searchParams.get("blog")}</p>
                    {blogData && <ListView blogs={blogData} />}
                </div>
            )}
        </PageWrapper>
    )
}

export default MainPage
