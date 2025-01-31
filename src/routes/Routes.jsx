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
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/Payment/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome";

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
            path: 'userHome',
            element: <UserHome></UserHome>
          },
        {
            path: "cart",
            element: <Cart></Cart>
        },
        {
            path: "payment",
            element: <Payment></Payment>
        },
        {
            path: 'paymentHistory',
            element: <PaymentHistory></PaymentHistory>
          },

        // admin routes
        {
            path: 'adminHome',
            element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
          },
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
            loader: ({params})=>fetch(`https://bistro-boss-server-eta-ashy.vercel.app/menu/${params.id}`)
        },
        {
            path: "users",
            element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
        },
        
    ]
  }
]);
