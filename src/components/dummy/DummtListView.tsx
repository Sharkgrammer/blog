import DummyBlogItem from "./DummyBlogItem.tsx";

function DummyListView() {

    return (
        <>
            <div className="py-8">
                <div className="grid gap-2">
                    {[...Array(3)].map((_, index) => (
                        <DummyBlogItem key={index} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default DummyListView
