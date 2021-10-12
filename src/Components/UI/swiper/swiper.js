import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./swiper.css";

import SwiperCore, { Pagination, EffectCoverflow } from "swiper";

SwiperCore.use([EffectCoverflow, Pagination]);

export default function App() {
  const famousBuildings = [
    {
      src: "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271__340.jpg",
      name: "Empire State Building",
      place: "New York City, USA",
      price: "15,000",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187__340.jpg",
      name: "Acropolis Building",
      place: "Athens, Greece",
      price: "70,000",
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/06/13/22/42/kitchen-2400367__340.jpg",
      name: "Sydney Opera House",
      place: "Australia, Sydney",
      price: "42,000",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/02/19/10/16/villa-1209148__340.jpg",
      name: "Eiffel Tower",
      place: "Paris, France",
      price: "25,000",
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972__340.jpg",
      name: "Albatros Hotel",
      place: "Thira, Greece",
      price: "10,000",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/03/26/09/41/condominium-690086__340.jpg",
      name: "Louvre Museum",
      place: "Paris, France",
      price: "22,000",
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/06/16/15/58/luxury-home-2409518__340.jpg",
      name: "Louvre Museum",
      place: "Paris, France",
      price: "35,000",
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/07/03/21/35/house-2469067__340.jpg",
      name: "Louvre Museum",
      place: "Paris, France",
      price: "70,000",
    },
  ];
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        {famousBuildings.map((elem, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="discount">
                <span> {Math.floor(Math.random() * (50 - 10) + 10)}% </span>
              </div>
              <img src={elem.src} alt={elem.name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
