import {Outlet} from "react-router-dom";

function App() {

    return (
        <div className="min-h-screen h-screen mx-auto max-w-[500px]">
            <Outlet/>
        </div>
    )
}

export default App
