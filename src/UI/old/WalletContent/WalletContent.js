//Rename it to ModalContent

import React, { useContext } from "react";
import { walletsArray } from "../../../tests/dataWallet";
import Context from "../../../Context/Context";
import WalletName from "../Wallet/WalletName/WalletName";

// import classes from "./WalletContent.module.css";
import objectTypes from "../../../constants/objectTypes";
import NewWalletContent from "../NewWalletContent/NewWalletContent";

export default function WalletContent({ id }) {
  const { objectType } = useContext(Context);

  //Переделать на JSON после БД
  const getWalletDataFromJSON = id => walletsArray.filter((item) => item.id === id);

  const walletData = getWalletDataFromJSON(id);

  // Content is objectType dependent
  const renderSwitch = () => {
    switch (objectType) {
      case objectTypes.wallet:
        return <WalletName name={walletData[0].name} />;
      case objectTypes.newWallet:
        return <NewWalletContent name="Create a new wallet" />;
      default:
        return null;
    }
  };

  return <div>{renderSwitch()}</div>;
}
