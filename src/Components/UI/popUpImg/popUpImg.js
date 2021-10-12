import React from "react";
import classes from "./popUpImg.module.css";

const PopUpImg = ({ closeModal, img }) => {
  return (
    <div className={classes.modal} onClick={closeModal}>
      <div className={classes.img}>
        <img src={img} alt="Photo" />
      </div>
    </div>
  );
};

export default PopUpImg;
