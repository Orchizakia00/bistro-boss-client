import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {

    const { name, image, price, recipe, _id } = item;
    const location = useLocation();
    const { user } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart(); 

    const handleAddToCart = () => {
        if (user && user.email) {
            //send item to database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Added to the cart successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch the cart update the cart items count
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You Are Not Logged In",
                text: "You must be logged in to add item to your cart.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="relative"><img className="w-full" src={image} alt="Shoes" /></figure>
            <p className="bg-gray-800 p-3 text-white w-fit absolute right-4 top-4">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={handleAddToCart} className="btn btn-outline border-0 border-b-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;