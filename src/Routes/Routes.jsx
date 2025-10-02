import {createBrowserRouter} from "react-router";
import Home from "../Layout/Home";
import HomePages from "../Pages/HomePages";
import CategoryNews from "../Pages/CategoryNews";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children:[
            {
                path: "",
                element: <HomePages></HomePages>,

            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch("/news.json"),

            }
        ]
    },
    {
        path: "/auth",
        element: <h2>Authentication Layout</h2>,
    },
    {
        path: "/news",
        element: <h2>News Layout</h2>,
    },
    {
        path: "/*",
        element: <h2>Error404</h2>,
    }

]);
export default Routes;