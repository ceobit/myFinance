import {SET_CURRENT_WALLET} from './types';

export function setCurrentWallet(walletId) {
  return {
    type: SET_CURRENT_WALLET,
    payload: walletId
  }
}