// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import categorySlide1 from "../../assets/home/slide1.jpg";
import categorySlide2 from "../../assets/home/slide2.jpg";
import categorySlide3 from "../../assets/home/slide3.jpg";
import categorySlide4 from "../../assets/home/slide4.jpg";
import categorySlide5 from "../../assets/home/slide5.jpg";

const Categories = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={false}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-24"
    >
      <SwiperSlide>
        <img src={categorySlide1} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white ">Salads</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={categorySlide2} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white ">Pizzas</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={categorySlide3} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white ">Soups</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={categorySlide4} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white ">Desserts</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={categorySlide5} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white ">Salads</h3>
      </SwiperSlide>
    </Swiper>
  );
};

export default Categories;
