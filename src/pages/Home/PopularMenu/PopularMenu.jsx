import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular');

    return (
        <div className="mb-12">
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Check It Out"}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-10">
                {
                    popularItems.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="my-6 text-center">
                <button className="btn btn-outline border-0 border-b-4">View Full Menu</button>
            </div>

        </div>
    );
};

export default PopularMenu;