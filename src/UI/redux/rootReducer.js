import {combineReducers} from 'redux';
import {walletsReducer} from './walletsReducer';

export const rootReducer = combineReducers({
  wallets: walletsReducer,
})