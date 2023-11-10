import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import sliede2 from '../../../assets/home/slide2.jpg'
import sliede3 from '../../../assets/home/slide3.jpg'
import sliede1 from '../../../assets/home/slide1.jpg'
import sliede4 from '../../../assets/home/slide4.jpg'
import sliede5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={'From 11:00am to 10:00pm'}
                heading={'Order Online'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={sliede1} alt="" />
                    <h2 className='text-4xl text-white uppercase -mt-16 text-center'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliede2} alt="" />
                    <h2 className='text-4xl text-white uppercase -mt-16 text-center'>Pizzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliede3} alt="" />
                    <h2 className='text-4xl text-white uppercase -mt-16 text-center'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliede4} alt="" />
                    <h2 className='text-4xl text-white uppercase -mt-16 text-center'>Desserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliede5} alt="" />
                    <h2 className='text-4xl text-white uppercase -mt-16 text-center'>Salads</h2>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;