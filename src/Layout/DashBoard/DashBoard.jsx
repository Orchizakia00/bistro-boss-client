import { FaAd, FaHome } from "react-icons/fa";
import { FaCalendar, FaCartShopping, FaList } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";

const DashBoard = () => {

    const [cart] = useCart();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    <li>
                        <NavLink to={'/dashboard/userHome'}><FaHome /> User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/reservation'}><FaCalendar /> Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/cart'}><FaCartShopping /> My Cart {cart.length} </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/review'}><FaAd /> Reviews</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/bookings'}><FaList /> My Bookings</NavLink>
                    </li>

                    <div className="divider"></div>

                    <li>
                        <NavLink to={'/'}><FaHome /> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/menu'}><FaList /> Menu</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;