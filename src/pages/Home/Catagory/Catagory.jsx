import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import Sectiontitle from '../../../Components/Sectiontitle/Sectiontitle';

const Catagory = () => {
    return (
        <section>
            <Sectiontitle
                heading={"From 11:00am to 10:00pm "}
                subheading={"ORDER ONLINE"}
            ></Sectiontitle>
            <div className='mx-auto mt-8'>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-20"
                >


                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h3 className=" text-2xl text-center text-white drop-shadow-lg -mt-12 z-10 uppercase">salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h3 className=" text-2xl text-center text-white drop-shadow-lg -mt-12 z-10 uppercase">pizza</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h3 className=" text-2xl text-center text-white drop-shadow-lg -mt-12 z-10 uppercase">soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h3 className=" text-2xl text-center text-white drop-shadow-lg -mt-12 z-10 uppercase">desserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" /><h3 className=" text-2xl text-center text-white drop-shadow-lg -mt-12 z-10 uppercase">salads</h3>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    );
};

export default Catagory;