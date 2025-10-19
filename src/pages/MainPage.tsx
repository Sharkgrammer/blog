import PageWrapper from "../components/utils/PageWrapper.tsx";
import ListView from "../components/views/ListView.tsx";
import type Blog from "../types/Blog.ts";

function MainPage() {

    return (
        <PageWrapper>
            {(blogData:Blog[] | null) => (
                <div>
                    <p>hello?</p>
                    {blogData && <ListView blogs={blogData} />}
                </div>
            )}
        </PageWrapper>
    )
}

export default MainPage
