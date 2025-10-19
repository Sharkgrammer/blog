import InfoView from "../views/InfoView.tsx";

function PageWrapper({children}: { children: any }) {

    return (
        <div className="h-full max-h-screen bg-red-100 w-full px-2 py-5 overflow-y-auto">

            <div className="grid grid-cols-6">

                <div>
                    <InfoView />
                </div>

                <div className="col-span-5">
                    {children}
                </div>
            </div>


        </div>
    )
}

export default PageWrapper
