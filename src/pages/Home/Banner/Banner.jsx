import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
    const slides = [
        {
            id: 1,
            image:
                "https://images.unsplash.com/photo-1550592704-6c76defa9985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            title: "Welcome to Our Website",
            subtitle: "Discover the Best Classes",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1631205767853-13a8d5885488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGxhbmd1YWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            title: "Learn from Top Instructors",
            subtitle: "Get Expert Guidance",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1516496874588-a55d0b4126ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGxhbmd1YWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            title: "Join Our Community",
            subtitle: "Connect with Like-minded People",
        },
        {
            id: 4,
            image: "https://i.ibb.co/Jdpzg8q/my-img6-2.jpg",
            title: "Boost Your Skills",
            subtitle: "Unlock Your Potential",
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1455884981818-54cb785db6fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxsYW5ndWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            title: "Stay Fit and Healthy",
            subtitle: "Get Active with Our Fitness Classes",
        },
    ];


    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative">
                            <img className="w-full h-96" src={slide.image} alt="" />
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
                            <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                                <h2 className="text-2xl">{slide.subtitle}</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
