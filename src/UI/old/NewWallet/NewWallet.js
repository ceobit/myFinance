import React, { useContext } from "react";

import classes from "./NewWallet.module.css";
import { BsPlusSquare } from "react-icons/all";
import objectTypes from "../../../constants/objectTypes";
import Context from "../../../Context/Context";

export default function NewWallet() {
  const { openModal } = useContext(Context);
  return (
    <div
      className={classes.NewWallet}
      onClick={openModal.bind(null, {
        objectType: objectTypes.newWallet,
      })}
    >
      <BsPlusSquare className={classes.NewWalletIcon} />
    </div>
  );
}
