import React, { useContext, useEffect, useState } from "react";
import classes from "./houseCard.module.css";
import { GlobalState } from "../../../Context/globalState";
import PopUpImg from "../popUpImg/popUpImg";
import { useHistory } from "react-router";

const HouseCard = ({ house, type }) => {
  const [modal, setModal] = useState(false);
  const [src, setSrc] = useState(null);

  const openModal = (imgSrc) => {
    setModal(true);
    setSrc(imgSrc);
  };

  const closeModal = () => {
    setModal(false);
  };

  const history = useHistory();

  const checkoutHandler = (id) => {
    history.push(`/view/checkout/${id}`);
    setHouseId(id);
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    }
    return () => (document.body.style.overflow = "unset");
  }, [modal, src]);

  const { addHouseTofavHouses, favHouses, removeHouseTofavHouses, setHouseId } =
    useContext(GlobalState);

  let storedHouses = favHouses.find((elem) => elem.id === house.id);
  const disabledBtn = storedHouses ? true : false;

  return house.type === "detailedCard" ? (
    <div className={classes.card} style={{ maxWidth: "300px" }}>
      <div className={classes.img} style={{ minHeight: "250px" }}>
        <img src={house.src} alt={house.src} />
        {type === "fav" ? (
          <div className={classes.search}>
            <i
              onClick={() => removeHouseTofavHouses(house.id)}
              className="fas fa-trash-alt"
              title="Remove House"
            ></i>
          </div>
        ) : null}

        {type === "fav" ? null : (
          <button
            disabled={disabledBtn}
            onClick={() => addHouseTofavHouses(house)}
          >
            {disabledBtn ? "Added" : "Add to Fav"}
          </button>
        )}
      </div>
      <div className={classes.text}>
        <h4>{house.name} </h4>
        <span>
          <i className="fas fa-map-marker-alt"></i>
          {house.place}
        </span>
        <p>
          Every person is looking to build a life on their own needs an
          apartment to live on their own terms.
        </p>
        <div>
          <span className={classes.price}>{house.price} $</span>
          <button onClick={() => checkoutHandler(house.id)}>Buy Now</button>
        </div>
      </div>
    </div>
  ) : (
    <div className={classes.card} style={{ maxWidth: "400px" }}>
      <div className={classes.img}>
        <img
          src={house.src}
          alt={house.src}
          onClick={() => openModal(house.src)}
        />
        <div className={classes.search}>
          <i
            className="fas fa-search-plus"
            title="Full Image"
            onClick={() => openModal(house.src)}
          ></i>
        </div>
      </div>
      <div className={classes.text}>
        <h4>{house.name} </h4>
        <span>
          <i className="fas fa-map-marker-alt"></i>
          {house.place}
        </span>
      </div>
      {modal ? <PopUpImg closeModal={closeModal} img={src} /> : null}
    </div>
  );
};

export default HouseCard;
