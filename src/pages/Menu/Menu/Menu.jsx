import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertBg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../../assets/menu/pizza-bg.jpg'
import soupBg from '../../../assets/menu/soup-bg.jpg'
import saladBg from '../../../assets/menu/salad-bg.jpg'

const Menu = () => {

    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg}
                title={'our menu'}
            ></Cover>
            <SectionTitle heading={"today's offer"} subHeading={"Don't Miss"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            <MenuCategory items={dessert} title={"Desserts"} coverImg={dessertBg}></MenuCategory>

            <MenuCategory items={pizza} title={"Pizza"} coverImg={pizzaBg}></MenuCategory>

            <MenuCategory items={soup} title={"Soup"} coverImg={soupBg}></MenuCategory>

            <MenuCategory items={salad} title={"Salad"} coverImg={saladBg}></MenuCategory>
        </div>
    );
};

export default Menu;