import React, { useState } from "react";

import classes from "./NewWallet.module.css";
import { BsPlusSquare } from "react-icons/all";
import Modal from "../Modal/Modal";

export default function NewWallet() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={classes.NewWallet} onClick={handleModal}>
        <BsPlusSquare className={classes.NewWalletIcon} />
      </div>
      {isOpen && <Modal handleModal={handleModal} />}
    </>
  );
}
