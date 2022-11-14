import { configureStore } from '@reduxjs/toolkit'
import cryptoReducer from './reducers/cryptoReducer'
import priceReducer from './reducers/priceReducer'
import errorReducer from './reducers/errorReducer'

export const store = configureStore({
  reducer: {
    errors: errorReducer,
    cryptos: cryptoReducer,
    prices: priceReducer,
  }
})