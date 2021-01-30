import React from "react";
import { connect } from "react-redux";

import walletsArray from "../../tests/dataWallet";
import classes from "./WalletContent.module.css";

const WalletContent = ({ currentWallet }) => {
  const walletData = walletsArray.find((el) => el.id === currentWallet);
  const { name, balance, currency } = walletData;

  return (
    <div className={classes.WalletContent}>
      <h2>{name}</h2>
      <p>
        {balance} {currency}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentWallet: state.wallets.currentWallet,
  };
};

export default connect(mapStateToProps, null)(WalletContent);
