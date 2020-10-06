import React, { useContext } from "react";
import classes from "./Modal.module.css";
import Context from "../../Context/Context";

export default function Modal({ id }) {
  const { openWalletSettings } = useContext(Context);

  return (
    <>
      <div className={classes.modal}>
        <div className={classes.modalBody}>
          <img
            src={require("../../images/close.png")}
            className={classes.modalClose}
            alt="close modal"
            onClick={openWalletSettings.bind(null, false)}
          />
          <h1>{`Settings wallet № ${id}`} </h1>
        </div>
      </div>
    </>
  );
}
