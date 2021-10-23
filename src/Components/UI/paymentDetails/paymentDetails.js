import React, { useState, forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import classes from "./paymentDetails.module.css";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const date = new Date();
  const expireYears = [];
  let currentYear = date.getFullYear();

  for (let x = currentYear; x < currentYear + 10; x++) {
    expireYears.push(x);
  }

  console.log("Current Year => ", currentYear);
  console.log("Years => ", expireYears);

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.box}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add to Cart
        </Button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle className={classes.title}>
            {"Add Payment Method Details"}
          </DialogTitle>
          <DialogContent>
            <div className={classes.input}>
              <span>Card Number</span>
              <input
                type="tel"
                placeholder="XXXX-XXXX-XXXX-XXXX"
                onChange={(e) => setCardNumber(e.target.value)}
                value={cardNumber}
                maxLength={16}
                required
                pattern="[0-9]*"
              />
            </div>

            <div className={classes.input}>
              <span>Expire Date</span>
              <div className={classes.expireDate}>
                <select>
                  <option value="" defaultValue hidden>
                    Month
                  </option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>

                <select>
                  <option value="" defaultValue hidden>
                    Year
                  </option>
                  {expireYears.map((year, index) => {
                    return (
                      <option key={index} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className={classes.input}>
              <span>CVV</span>
              <input
                type="tel"
                placeholder="XXX"
                onChange={(e) => setCardCVV(e.target.value)}
                value={cardCVV}
                maxLength={3}
                required
                pattern="[0-9]*"
              />
            </div>
          </DialogContent>
          <DialogActions className={classes.btns}>
            <Button onClick={handleClose}>Cancel</Button>
            <input type="submit" value="Confirm" />
          </DialogActions>
        </Dialog>
      </div>
    </form>
  );
}
