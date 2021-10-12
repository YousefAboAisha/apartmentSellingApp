import React from "react";
import classes from "./view.module.css";
import HouseCard from "../../Components/UI/houseCards/houseCard";
import Slider from "../../Components/UI/swiper/swiper";
import { Route } from "react-router";
import Checkout from "../../Components/Checkout/checkout";

const View = () => {
  const housese = [
    {
      src: "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271__340.jpg",
      name: "Empire State Building",
      place: "New York City, USA",
      price: "15,000",
      type: "detailedCard",
      id: 1,
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187__340.jpg",
      name: "Acropolis Building",
      place: "Athens, Greece",
      price: "70,000",
      type: "detailedCard",
      id: 2,
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/06/13/22/42/kitchen-2400367__340.jpg",
      name: "Sydney Opera House",
      place: "Australia, Sydney",
      price: "42,000",
      type: "detailedCard",
      id: 3,
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/02/19/10/16/villa-1209148__340.jpg",
      name: "Eiffel Tower",
      place: "Paris, France",
      price: "25,000",
      type: "detailedCard",
      id: 4,
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972__340.jpg",
      name: "Albatros Hotel",
      place: "Thira, Greece",
      price: "10,000",
      type: "detailedCard",
      id: 5,
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/03/26/09/41/condominium-690086__340.jpg",
      name: "Louvre Museum",
      place: "Paris, France",
      price: "22,000",
      type: "detailedCard",
      id: 6,
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/06/16/15/58/luxury-home-2409518__340.jpg",
      name: "Louvre Museum",
      place: "Paris, France",
      price: "35,000",
      type: "detailedCard",
      id: 7,
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/07/03/21/35/house-2469067__340.jpg",
      name: "Louvre Museum",
      place: "Paris, France",
      price: "70,000",
      type: "detailedCard",
      id: 8,
    },
  ];

  return (
    <div className={classes.view}>
      <div className={classes.img}>
        <div className={classes.text}>
          <h2>Start Selling and Buying Houses Now.</h2>
          <p>
            " Every person is looking to build a life on their own needs an
            apartment to live on their own terms "
          </p>
        </div>
      </div>

      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.left}>
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-chevron-right"></i>
          </div>

          <div className={classes.right}>
            <input
              list="sorting"
              name="sorting"
              id="browser"
              placeholder="Sort By"
            />

            <datalist id="sorting">
              <option value="Name">Name</option>
              <option value="Price">Price</option>
              <option value="Area">Area</option>
            </datalist>
          </div>
        </div>

        <div className={classes.cards}>
          {housese.map((house, index) => {
            return <HouseCard key={index} house={house} type="detailedCard" />;
          })}
        </div>
      </div>

      <div className={classes.slider}>
        <h3>Special Offers</h3>
        <Slider />
      </div>
      <Route exact path="/view/checkout" component={Checkout} />
    </div>
  );
};

export default View;
