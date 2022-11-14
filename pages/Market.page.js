import { result } from 'lodash';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import MarketComponent from '../components/Market.component';
import { getCryptos, getPrices } from '../functions/App.functions';
import { removeObjectWithCurrencySymbol } from '../functions/App.functions';

class MarketPage extends Component {
    state = {  } 
    render() {
        const {cryptoList, priceList, getCryptoList, getPriceList} = this.props;

        const removeNoDataCrypto = removeObjectWithCurrencySymbol(cryptoList, 'Rp');
        const cryptoAndPrice = removeNoDataCrypto.map(crypto => ({ 
            ...crypto, 
            ...priceList.find(price => price.pair.includes(crypto.currencySymbol.toLowerCase())) 
          }));

        return (
            <MarketComponent  cryptoAndPrice={cryptoAndPrice} getCryptoList={getCryptoList} getPriceList={getPriceList}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cryptoList: result(state, 'cryptos.payload', []),
        priceList: result(state, 'prices.payload', []),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCryptoList: () => {
            dispatch(getCryptos());
        },
        getPriceList: () => {
            dispatch(getPrices());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketPage);