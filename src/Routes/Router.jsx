import {
  createBrowserRouter
} from "react-router-dom";
import DashBoard from "../Layout/DashBoard/DashBoard";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Cart from "../pages/DashBoard/Cart/Cart";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Secret from "../pages/Shared/Secret/Secret";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
  
  
    export  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/menu",
            element: <Menu />
        },
        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp />
        },
        {
          path: '/secret',
          element: <PrivateRoute><Secret /></PrivateRoute>
        }
      ]
    },
    {
      path: "dashboard",
      element: <DashBoard />,
      children: [
        {
          path: 'cart',
          element: <Cart />
        }
      ]
    }
  ]);