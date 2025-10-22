import {Outlet} from "react-router-dom";

function App() {

    return (
        <div className="min-h-screen h-screen mx-auto w-5/6 max-w-[500px]">
            <Outlet/>
        </div>
    )
}

export default App
