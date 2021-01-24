import walletsArray from '../../tests/dataWallet';

const intialState = {
  wallets: walletsArray,
  fetchedWallets: []
}

export const walletsReducer = (state = intialState, action) => {
  return state;
}