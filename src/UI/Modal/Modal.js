import React from "react";
import classes from "./Modal.module.css";
import WalletContent from "../WalletContent/WalletContent";

export default function Modal({id, handleModal}) {
  return (
    <div className={classes.modal}>
      <div className={classes.modalBody}>
        <img
          src={require("../../images/close.png")}
          className={classes.modalClose}
          alt="close modal"
          onClick={handleModal}
        />
        <WalletContent id={id}/>
      </div>
    </div>
  );
}
