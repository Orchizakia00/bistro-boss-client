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
import Payment from "../pages/DashBoard/Payment/Payment";
import PaymentHistory from "../pages/DashBoard/PaymentHistory/PaymentHistory";
import UserHome from "../pages/DashBoard/UserHome/UserHome"
import AdminHome from "../pages/DashBoard/AdminHome/AdminHome"


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
        path: 'userHome',
        element: <UserHome />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'payment',
        element: <Payment />
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory />
      },
      // admin only routes
      {
        path: 'adminHome',
        element: <AdminRoute><AdminHome /></AdminRoute>
      },
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