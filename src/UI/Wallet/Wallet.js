import React, { useContext } from "react";

import Balance from "./Balance/Balance";
import classes from "./Wallet.module.css";
import { FaWallet } from "react-icons/all";
import Context from "../../Context/Context";

export default function Wallet({ balance, id }) {
  const { openWalletSettings } = useContext(Context);
  return (
    <div className={classes.Wallet} onClick={openWalletSettings.bind(null, true, id)}>
      <FaWallet className={classes.walletIcon} />
      <Balance balance={balance} />
    </div>
  );
}
