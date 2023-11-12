import { Helmet } from "react-helmet-async";
import coverImg from '../../../assets/home/chef-service.jpg';
import Cover from "../../Shared/Cover/Cover";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner/>
            <Category></Category>
            <Cover title={'Bistro Boss'} img={coverImg}></Cover>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;