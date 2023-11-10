import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"


const Featured = () => {
    return (

        <div className="hero my-20 bg-fixed" style={{ backgroundImage: `url(${featuredImg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">

                <div>
                    <SectionTitle
                        heading={"Featured Item"}
                        subHeading={"Check It Out"}
                    ></SectionTitle>
                    <div className="md:flex justify-center items-center pt-8 pb-12 px-16">
                        <div className="flex-1">
                            <img src={featuredImg} alt="" className="w-[650px]" />
                        </div>
                        <div className="md:ml-10 text-left flex-1">
                            <p className=" text-xl">Aug 20, 2024</p>
                            <p className="uppercase text-xl">where can i get some?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laboriosam sequi a iusto. Rem quam quisquam incidunt cum qui officia quibusdam quaerat, repudiandae ad quasi beatae eos architecto ex adipisci?</p>
                            <button className="btn btn-outline mt-5 text-white border-0 border-b-4">Order Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Featured;