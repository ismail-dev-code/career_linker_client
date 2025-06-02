import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import bgImage from "../assets/sliderImg/bg-banner.avif";
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
      title: "Build Your Career",
      desc: "Connect with top companies.",
      img: slider2,
    },
    {
      id: 4,
      title: "Build Your Career",
      desc: "Connect with top companies.",
      img: slider2,
    },
    {
      id: 5,
      title: "Get Hired Faster",
      desc: "Stand out with our smart tools.",
      img: slider3,
    },
    {
      id: 6,
      title: "Explore New Horizons",
      desc: "Discover exciting job markets.",
      img: slider4,
    },
    {
      id: 7,
      title: "Achieve Your Goals",
      desc: "Step into a brighter future.",
      img: slider5,
    },
  ];

  return (
    <>
      <div className="text-center my-12">
        {/* Text section */}

        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Your Career Starts Here
        </h1>
        <p className="text-base text-gray-500 mb-6">
          Discover opportunities, connect with companies, and step confidently
          into your future.
        </p>

        <div
          className="py-16 px-4 bg-cover bg-center bg-no-repeat text-white"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(49, 46, 129, 0.7)",
          }}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* Swiper slider */}
            <div className="w-full flex-1">
              <Swiper
                modules={[EffectCoverflow, Autoplay]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                speed={100}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  480: { slidesPerView: 1.2 },
                  640: { slidesPerView: 1.5 },
                  768: { slidesPerView: 2.5 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 4 },
                }}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 250,
                  modifier: 2.5,
                  slideShadows: false,
                }}
                className="w-full"
              >
                {banners.map((banner) => (
                  <SwiperSlide
                    key={banner.id}
                    className="!flex justify-center items-center"
                  >
                    <div className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[420px] xl:w-[460px] relative bg-white text-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={banner.img}
                        alt={banner.title}
                        className="w-full h-64 md:h-72 lg:h-80 xl:h-[22rem] object-cover"
                      />
                      <div className="absolute bottom-0 w-full bg-black bg-opacity-70 p-5 text-center text-white">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-1">
                          {banner.title}
                        </h2>
                        <p className="text-sm md:text-base">{banner.desc}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
