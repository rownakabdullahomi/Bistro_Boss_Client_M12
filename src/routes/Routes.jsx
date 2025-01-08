import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../pages/shared/Secret";
import Dashboard from "../layouts/Dashboard";
import Cart from "../pages/Dashboard/Cart";
import AllUsers from "../pages/Dashboard/AllUsers";
import AddItems from "../pages/Dashboard/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../pages/Dashboard/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/menu",
            element: <Menu></Menu>
        },
        {
            path: "/order/:category",
            element: <Order></Order>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
        {
            path: "/secret",
            element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
        }
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [

        // normal user routes
        {
            path: "cart",
            element: <Cart></Cart>
        },

        // admin routes
        {
            path: "addItems",
            element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
        },
        {
            path: "manageItems",
            element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
        },
        {
            path: "update/:id",
            element: <AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>,
            loader: ({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
            path: "users",
            element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
        },
        
    ]
  }
]);
