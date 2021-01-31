import React, { useState } from "react";
import {connect} from 'react-redux';
import { FaWallet } from "react-icons/all";

import classes from "./WalletItem.module.css";
import Modal from "../Modal/Modal";
import {setCurrentWallet} from '../redux/actions';


const WalletItem = (props) => { // Как переделать action, чтобы не использовать props
  const [isOpen, setIsOpen] = useState(false);

  const {name, balance, currency, id} = props.wallet;

  const handleModal = () => {
    setIsOpen(!isOpen);
    props.setCurrentWallet(!isOpen ? id : 0);
  };

  return (
    <>
      <div className={classes.WalletItem} onClick={handleModal}>
        <p className={classes.WalletName}> {name}</p>
        <FaWallet className={classes.walletIcon} />
        <p className={classes.WalletBalance}>
          {`${balance} ${currency}`}{" "}
        </p>
      </div>
      {isOpen && <Modal handleModal={handleModal}/>}
    </>
  );
}

const mapDispatchToProps = {
  setCurrentWallet
}

export default connect(null, mapDispatchToProps)(WalletItem);