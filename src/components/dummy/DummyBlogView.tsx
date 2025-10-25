function DummyBlogView() {
    return (
        <div className="animate-pulse p-4">
            <div className="h-8 bg-gray-300 rounded w-2/3 mb-6"></div>

            {[...Array(4)].map((_, index) => (
                <div className="space-y-2 mb-4" key={index}>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-11/12"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
            ))}
        </div>
    );
}

export default DummyBlogView
