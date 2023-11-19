import Sectiontitle from "../../../Components/Sectiontitle/Sectiontitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";


const Testimonial = () => {
    const [reviws, setReviws] = useState([])

    useEffect(() => {
        fetch('reviws.json')
            .then(res => res.json())
            .then(data => setReviws(data))
    }, [])
    return (
        <section className="py-10 mt-8">
            <Sectiontitle
                heading={'What Our Clients Say'}
                subheading={'TESTIMONIALS'}
            ></Sectiontitle>
            <div className="mt-8">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviws.map(reviw => <SwiperSlide
                            key={reviw._id}
                        >
                            <div className="px-20 flex flex-col items-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={reviw.rating}
                                    readOnly
                                />
                                <p className="text-center mt-5">{reviw.details}</p>
                                <h4 className="text-2xl text-center text-yellow-600">{reviw.name}</h4>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>

        </section>
    );
};

export default Testimonial;