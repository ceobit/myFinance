import {SET_CURRENT_WALLET, CREATE_WALLET} from './types';

export function setCurrentWallet(walletId) {
  return {
    type: SET_CURRENT_WALLET,
    payload: walletId
  }
}

export function createWallet(walletData) {
  return {
    type: CREATE_WALLET,
    payload: walletData
  }
}