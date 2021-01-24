import React from 'react';
import {connect} from 'react-redux'
import WalletItem from '../WalletItem/WalletItem'; //rewrite using @
import classes from './Wallets.module.css';

const Wallets = ({defaultWallets}) => {

  return (
    <div className={classes.Wallets}>
      {defaultWallets.map((wallet, i) => <WalletItem key={i} wallet={wallet} /> )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    defaultWallets: state.wallets.wallets
  };
}

export default connect(mapStateToProps, null)(Wallets);