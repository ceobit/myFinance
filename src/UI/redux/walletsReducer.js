import walletsArray from '../../tests/dataWallet';
import {CREATE_WALLET, SET_CURRENT_WALLET} from './types';

const intialState = {
  wallets: walletsArray,
  fetchedWallets: [],
  currentWallet: 0
}

export const walletsReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_CURRENT_WALLET:
      return {...state, currentWallet: action.payload}
    case CREATE_WALLET:
      console.log(action.payload);
      return {...state, wallets: [...state.wallets, action.payload] }
    default: return state
  }
}