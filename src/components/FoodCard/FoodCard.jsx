
const FoodCard = ({item}) => {

    const { name, image, price, recipe } = item;


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="relative"><img className="w-full" src={image} alt="Shoes" /></figure>
            <p className="bg-gray-800 p-3 text-white w-fit absolute right-4 top-4">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline border-0 border-b-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;