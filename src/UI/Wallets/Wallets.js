import React from 'react';
import {connect} from 'react-redux'
import WalletItem from '../WalletItem/WalletItem'; //rewrite using @
import NewWallet from '../NewWallet/NewWallet';
import classes from './Wallets.module.css';

const Wallets = ({Wallets = []}) => {
  return (
    <div className={classes.Wallets}>
      {Wallets.map((wallet, i) => <WalletItem key={wallet.id} wallet={wallet} /> )}
      <NewWallet />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    Wallets: state.wallets.wallets
  };
}

export default connect(mapStateToProps, null)(Wallets);