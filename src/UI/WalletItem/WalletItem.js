import React, { useState } from "react";
import { FaWallet } from "react-icons/all";

import classes from "./WalletItem.module.css";
import Modal from "../Modal/Modal";

export default function WalletItem({ wallet }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={classes.WalletItem} onClick={handleModal}>
        <p className={classes.WalletName}> {wallet.name}</p>
        <FaWallet className={classes.walletIcon} />
        <p className={classes.WalletBalance}>
          {`${wallet.balance} ${wallet.currency}`}{" "}
        </p>
      </div>
      {isOpen && <Modal handleModal={handleModal}/>}
    </>
  );
}