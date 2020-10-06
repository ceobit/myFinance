import React from "react";

import Wallet from "../Wallet/Wallet";
import classes from "./Wallets.module.css";

export default function Wallets() {
  const walletsArray = new Array(3).fill(100); // Этот массив будем получать из базы данных

  return (
    <div className={classes.Wallets}>
      <h1 className={classes.WalletsTitle}>Wallets</h1>
      {walletsArray.map((wallet, index) => (
        <Wallet key={index} balance={`${wallet}$`} id={index+1}/>
      ))}
    </div>
  );
}
