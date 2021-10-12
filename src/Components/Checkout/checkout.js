import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../Context/globalState";
import classes from "./checkout.module.css";
import Stars from "../UI/Stars/stars";

const Checkout = () => {
  const housese = [
    {
      src: "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271__340.jpg",
      name: "Empire State Building",
      place: "New York City, USA",
      price: "15,000",
      type: "detailedCard",
      id: 1,
      rate: 3.5,
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187__340.jpg",
      name: "Acropolis Building",
      place: "Athens, Greece",
      price: "70,000",
      type: "detailedCard",
      id: 2,
      rate: 3,
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/06/13/22/42/kitchen-2400367__340.jpg",
      name: "Sydney Opera House",
      place: "Australia, Sydney",
      price: "42,000",
      type: "detailedCard",
      id: 3,
      rate: 4.5,
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/02/19/10/16/villa-1209148__340.jpg",
      name: "Eiffel Tower",
      place: "Paris, France",
      price: "25,000",
      type: "detailedCard",
      id: 4,
      rate: 4,
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972__340.jpg",
      name: "Albatros Hotel",
      place: "Thira, Greece",
      price: "10,000",
      type: "detailedCard",
      id: 5,
      rate: 4,
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/03/26/09/41/condominium-690086__340.jpg",
      name: "Louvre Museum",
      place: "Paris, France",
      price: "22,000",
      type: "detailedCard",
      id: 6,
      rate: 4.5,
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/06/16/15/58/luxury-home-2409518__340.jpg",
      name: "Louvre Museum",
      place: "Paris, France",
      price: "35,000",
      type: "detailedCard",
      id: 7,
      rate: 3.5,
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/07/03/21/35/house-2469067__340.jpg",
      name: "Louvre Museum",
      place: "Paris, France",
      price: "70,000",
      type: "detailedCard",
      id: 8,
      rate: 4,
    },
  ];

  const { id } = useContext(GlobalState);

  const house = housese[id - 1];

  console.log("Checkout ID", id);
  console.log("Checkout ID", house);

  return (
    <div className={classes.checkout}>
      {house ? (
        <div className={classes.offer}>
          <div className={classes.left}>
            <h3>{house.name}</h3>
            <span>
              <i className="fas fa-map-marker-alt"></i>
              {house.place}
            </span>
            <p>
              Every person is looking to build a life on their own needs an
              apartment to live on their own terms,If you are looking to start a
              business in the real estate industry, you need to set up your own
              company first.
            </p>
            <span> {house.price} $ </span>
            <div className={classes.rating}>
              <Stars rate={house.rate} />
            </div>
            <a href="#" target="_blank">
              <button>Add To Cart</button>
            </a>
          </div>
          <div className={classes.right}>
            <img src={house.src} alt="House" />
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Checkout;
