import {createBrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import MainPage from "./pages/MainPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "",
                element: <MainPage/>,
            },
        ],
    },
],{
    basename: "/blog/",
});