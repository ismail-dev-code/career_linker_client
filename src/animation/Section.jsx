import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

import slider1 from "../assets/sliderImg/slider1.jpg";
import slider2 from "../assets/sliderImg/slider2.jpg";
import slider3 from "../assets/sliderImg/slider3.jpg";
import slider4 from "../assets/sliderImg/slider4.jpeg";
import slider5 from "../assets/sliderImg/slider5.jpg";

const Section = () => {
  const banners = [
    {
      id: 1,
      title: "Find Your Dream Job",
      desc: "Thousands of opportunities await!",
      img: slider1,
    },
    {
      id: 2,
      title: "Build Your Career",
      desc: "Connect with top companies.",
      img: slider2,
    },
    {
      id: 3,
      title: "Get Hired Faster",
      desc: "Stand out with our smart tools.",
      img: slider3,
    },
    {
      id: 4,
      title: "Explore New Horizons",
      desc: "Discover exciting job markets.",
      img: slider4,
    },
    {
      id: 5,
      title: "Achieve Your Goals",
      desc: "Step into a brighter future.",
      img: slider5,
    },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-800 to-blue-800 py-20 px-4">
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5} // <-- show 5 slides total
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 250,
          modifier: 2.5,
          slideShadows: false,
        }}
        className="w-full max-w-6xl"
      >
        {banners.map((banner) => (
          <SwiperSlide
            key={banner.id}
            className="!flex justify-center items-center scale-100 transition-transform duration-500"
            style={{
              zIndex: 1,
            }}
          >
            <div className="w-[300px] md:w-[350px] lg:w-[400px] relative bg-white text-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={banner.img}
                alt={banner.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-60 p-4 text-center text-white">
                <h2 className="text-xl font-bold mb-1">{banner.title}</h2>
                <p className="text-sm">{banner.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Section;
