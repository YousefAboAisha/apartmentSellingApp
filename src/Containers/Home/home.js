import React, { useEffect, useRef, useState } from "react";
import classes from "./home.module.css";
import img1 from "../../Photos/1.jpg";
import img2 from "../../Photos/2.jpg";
import img4 from "../../Photos/4.jpg";
import img5 from "../../Photos/5.jpg";
import offerImg from "../../Photos/offerImg.jpg";
import ServicesCard from "../../Components/UI/servicesCards/sCard";
import HouseCard from "../../Components/UI/houseCards/houseCard";
import PopUpImg from "../../Components/UI/popUpImg/popUpImg";

const Home = () => {
  const [url, setUrl] = useState(img1);
  const [current, setCurrent] = useState(0);
  const photos = [img1, img2, img4, img5];
  const sCards = [
    {
      title: "Beautiful ",
      details: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley.`,
      icon: "fas fa-building",
    },
    {
      title: "Accurate",
      details: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley.`,
      icon: "fas fa-calendar-check",
    },
    {
      title: "Economical",
      details: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley.`,
      icon: "fas fa-hand-holding-usd",
    },
    {
      title: "Partnership",
      details: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley.`,
      icon: "fas fa-users",
    },
  ];
  const famousBuildings = [
    {
      src: "https://cdn.pixabay.com/photo/2015/07/02/10/28/empire-state-building-828777__340.jpg",
      name: "Empire State Building",
      place: "New York City, USA",
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/09/07/16/50/acropolis-2725918__340.jpg",
      name: "Acropolis Building",
      place: "Athens, Greece",
    },
    {
      src: "https://cdn.pixabay.com/photo/2014/06/06/09/36/sydney-opera-house-363244__340.jpg",
      name: "Sydney Opera House",
      place: "Australia, Sydney",
    },
    {
      src: "https://cdn.pixabay.com/photo/2019/08/19/15/13/eiffel-tower-4416700__340.jpg",
      name: "Eiffel Tower",
      place: "Paris, France",
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/01/30/07/54/church-2020258__340.jpg",
      name: "Albatros Hotel",
      place: "Thira, Greece",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/03/26/10/06/the-louvre-690929__340.jpg",
      name: "Louvre Museum",
      place: "Paris, France",
    },
  ];
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(() =>
        current === photos.length - 1 ? setCurrent(0) : setCurrent(current + 1)
      );

      setUrl(() => photos[current]);
    };

    timeout.current = setTimeout(nextSlide, 3000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [photos, current]);

  return (
    <div className={classes.home}>
      <div className={classes.img}>
        <img src={url} alt="img2" />
        <div className={classes.imgs}>
          {photos.map((img) => {
            return (
              <img
                src={img}
                alt={img}
                onClick={() => setUrl(img)}
                className={img === url ? classes.active : null}
              />
            );
          })}
        </div>
        <div className={classes.details}>
          <h2>Make Your Desicion, And Own Your Dream House. </h2>
          <h3>" Yousef Rashad Aisha "</h3>
          <p>
            Every person is looking to build a life on their own needs an
            apartment to live on their own terms,If you are looking to start a
            business in the real estate industry, you need to set up your own
            company first.
          </p>
        </div>
      </div>

      <div className={classes.cards}>
        {sCards.map((elem, index) => {
          return (
            <ServicesCard
              title={elem.title}
              details={elem.details}
              icon={elem.icon}
              key={index}
            />
          );
        })}
      </div>

      <div className={classes.offer}>
        <div className={classes.right}>
          <img src={offerImg} alt="Best House" />
        </div>
        <div className={classes.left}>
          <h3>Why To Choose Us ?</h3>
          <p>
            Every person is looking to build a life on their own needs an
            apartment to live on their own terms,If you are looking to start a
            business in the real estate industry, you need to set up your own
            company first, Every person is looking to build a life on their own
            needs an apartment to live on their own terms,If you are looking to
            start a business in the real estate industry, you need to set up
            your own company first.
          </p>
          <a href="#" target="_blank">
            <button>More Details</button>
          </a>
        </div>
      </div>

      <div className={classes.join}>
        <h2>Join Our Company Now.</h2>
        <p>
          Every person is looking to build a life on their own needs an
          apartment to live on their own terms,If you are looking to start a
          business in the real estate industry, you need to set up your own
          company first,
        </p>
        <a href="#" target="_blank">
          <button>Participate In</button>
        </a>
      </div>

      <div className={classes.famous}>
        <h3>Famous Buildings</h3>
        <div className={classes.houseCards}>
          {famousBuildings.map((house, index) => {
            return <HouseCard key={index} house={house} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
