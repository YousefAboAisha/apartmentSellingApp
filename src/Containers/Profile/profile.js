import React, { useContext } from "react";
import classes from "./profile.module.css";
import { GlobalState } from "../../Context/globalState";
import HouseCard from "../../Components/UI/houseCards/houseCard";

const Profile = () => {
  const { favHouses } = useContext(GlobalState);
  console.log("FavHouses : ", favHouses);
  return (
    <div className={classes.profile}>
      <div className={classes.header}>
        <h2>Liked Houses:</h2>
        <span>
          {favHouses.length} {favHouses.length === 1 ? "House" : "Houses"}
        </span>
      </div>
      {favHouses.length === 0 || favHouses === null ? (
        <div className={classes.cards}>
          <h2 className={classes.empty}>Add Some Houses !</h2>
        </div>
      ) : (
        <div className={classes.cards}>
          {favHouses.map((house, index) => {
            return <HouseCard house={house} key={index} type="fav" />;
          })}
        </div>
      )}
    </div>
  );
};

export default Profile;
