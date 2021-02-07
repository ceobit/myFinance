import React from 'react';
import { connect } from 'react-redux';
import WalletItem from '../WalletItem/WalletItem'; // rewrite using @
import AddWallet from '../AddWallet/AddWallet';
import classes from './Wallets.module.scss';

const Wallets = ({ wallets = [] }) => (
  <div className={classes.Wallets}>
    {wallets.map((wallet) => <WalletItem key={wallet.id} wallet={wallet} />)}
    <AddWallet />
  </div>
);

const mapStateToProps = (state) => ({
  wallets: state.wallets.wallets,
});

export default connect(mapStateToProps, null)(Wallets);
