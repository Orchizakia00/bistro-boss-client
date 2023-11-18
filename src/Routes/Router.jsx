import {
  createBrowserRouter
} from "react-router-dom";
import DashBoard from "../Layout/DashBoard/DashBoard";
import MainLayout from "../Layout/MainLayout/MainLayout";
import AddItems from "../pages/DashBoard/AddItems/AddItems";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import Cart from "../pages/DashBoard/Cart/Cart";
import ManageItems from "../pages/DashBoard/ManageItems/ManageItems";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Secret from "../pages/Shared/Secret/Secret";
import SignUp from "../pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import UpdateItem from "../pages/DashBoard/UpdateItem/UpdateItem"


export const router = createBrowserRouter([
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
    element: <PrivateRoute><DashBoard /></PrivateRoute>,
    children: [
      // normal users routes
      {
        path: 'cart',
        element: <Cart />
      },
      // admin only routes
      {
        path: 'addItems',
        element: <AdminRoute><AddItems /></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems /></AdminRoute>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoute><UpdateItem /></AdminRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path: 'users',
        element: <AdminRoute><AllUsers /></AdminRoute>
      }
    ]
  }
]);