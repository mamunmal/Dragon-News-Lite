import {createBrowserRouter} from "react-router";
import Home from "../Layout/Home";
import HomePages from "../Pages/HomePages";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layout/AuthLayout";

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
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
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