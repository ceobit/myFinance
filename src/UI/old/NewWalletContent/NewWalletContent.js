import React, { useRef, useState, useContext } from "react";
import { walletsArray } from "../../../tests/dataWallet";
import classes from "./NewWalletContent.module.css";
import Context from "../../../Context/Context";

export default function NewWalletContent({ name }) {
  const [walletSetting, setWalletSetting] = useState(false);

  const inputName = useRef("");
  const inputBalance = useRef(0);

  const { closeModal } = useContext(Context);

  const handleSubmit = (event) => {
    event.preventDefault();
    setWalletSetting(true);

    walletsArray.push({
      id: walletsArray.length + 1,
      name: inputName.current.value,
      currency: "RUR",
      balance: +inputBalance.current.value,
    });

    closeModal();
  };

  return (
    <div>
      <h3>{name}</h3>
      <form onSubmit={handleSubmit} className={classes.NewWalletContent}>
        <label>
          Name:
          <input type="text" ref={inputName} name="name" required />
        </label>
        <label>
          Current balance:
          <input type="number" ref={inputBalance} name="balance" required />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
