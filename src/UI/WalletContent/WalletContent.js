import React from 'react';
import { connect } from 'react-redux';

import classes from './WalletContent.module.css';
import NewWallet from '../NewWallet/NewWallet';

const WalletContent = ({ currentWallet, wallets }) => {
  const walletData = wallets.find((el) => el.id === currentWallet);
  return (
    <>
      {walletData !== undefined ? (
        <Content walletData={walletData} />
      ) : (
        <NewWallet />
      )}
    </>
  );
};

const Content = ({ walletData }) => {
  const { name, balance, currency } = walletData;
  return (
    <div className={classes.WalletContent}>
      <h2>{name}</h2>
      <p>
        {balance}
        {' '}
        {currency}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentWallet: state.wallets.currentWallet,
  wallets: state.wallets.wallets,
});

export default connect(mapStateToProps, null)(WalletContent);
