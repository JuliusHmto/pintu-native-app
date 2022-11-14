import { useEffect } from 'react';
import * as actionCreators from '../actionTypes/actionTypes';

//Cryptocurrencies API
export function getCryptos () {
    return (dispatch) => {
        fetch("https://api.pintu.co.id/v2/wallet/supportedCurrencies")
            .then((res) => res.json())
            .then(response =>
            response.payload.map((crypto, i) => ({
                id: i + 1,
                logo: `${crypto.logo}`,
                name: `${crypto.name}`,
                currencySymbol: `${crypto.currencySymbol}`,
                color: `${crypto.color}`,
            }))
            )
            .then(cryptos => {
                dispatch(actionCreators.saveCryptoData(cryptos));
            })
            .catch(error => {
                dispatch(actionCreators.saveError(error));
            });
    }
}

//Crypto Prices API
export function getPrices () {
    return (dispatch) => {
        fetch("https://api.pintu.co.id/v2/trade/price-changes")
            .then((res) => res.json())
            .then(response =>
            response.payload.map((price, i) => ({
                id: i + 1,
                pair: `${price.pair}`,
                latestPrice: `${price.latestPrice}`,
                day: `${price.day}${'%'}`,
                week: `${price.week}${'%'}`,
                month: `${price.month}${'%'}`,
                year: `${price.year}${'%'}`,
            }))
            )
            .then(prices => {
                dispatch(actionCreators.saveCryptoPrice(prices));
            })
            .catch(error => {
                dispatch(actionCreators.saveError(error));
            });
    }
}

export function removeObjectWithCurrencySymbol(arr, currencySymbol) {
    return arr.filter((obj) => obj.currencySymbol !== currencySymbol);
  }

export function thousandSeparator(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}