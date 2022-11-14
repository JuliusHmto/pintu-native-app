import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { thousandSeparator } from '../functions/App.functions';
import {result} from 'lodash';
import { SvgUri } from 'react-native-svg';
import styles from '../css/Market.style';

import caretUp from '../images/caret-up.png';
import caretDown from '../images/caret-down.png';
import star from '../images/star.png';
import search from '../images/search.png';
import arrowDown from '../images/arrow-down.png';

import terbaru from '../images/terbaru.png';
import defi from '../images/defi.png';
import nftgaming from '../images/nftgaming.png';
import cex from '../images/cex.png';
import dex from '../images/dex.png';
import layer1 from '../images/layer1.png';
import infrastructure from '../images/infrastructure.png';
import lending from '../images/lending.png';
import layer2 from '../images/layer2.png';
import stablecoin from '../images/stablecoin.png';

class MarketComponent extends Component {
    state = {  } 

    componentDidMount = () => {
        const {getCryptoList, getPriceList} = this.props;
        getCryptoList();
        getPriceList();
    }

    renderCryptoList = (crypto) => {
        const color = result(crypto, 'color', '');
        const logo = result(crypto, 'logo', '');
        const currencySymbol = result(crypto, 'currencySymbol', '');
        const name = result(crypto, 'name', '');
        const latestPrice = thousandSeparator(result(crypto, 'latestPrice', ''));
        const day = result(crypto, 'day', '');
        return(
            <View style={styles.itemContainer} key={crypto.id}>

                {/* logo */}
                <View style={styles.leftContainer}>
                    <View style={{backgroundColor: color, borderRadius: 100}}>
                        <SvgUri
                            width="40"
                            height="40"
                            uri={logo}
                        />
                    </View>
                </View>

                {/* currency symbol */}
                <View style={styles.centerContainer}>
                    <Text style={styles.textBold}>{name}</Text>
                    <Text>{currencySymbol}</Text>
                </View>
                
                {/* price */}
                <View style={styles.rightContainer}>
                    <Text style={styles.textBold}>Rp {latestPrice}</Text>
                    <View style={styles.priceMovement}>
                        <View style={styles.caretContainer}>
                            <Image style={styles.caretStyle} source={day.includes('-') ? caretDown : caretUp}/>
                        </View>
                        <Text style={[styles.textBold, day.includes('-') ? styles.red : styles.green,]}>{day}</Text>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        const {cryptoAndPrice} = this.props;
        return (
            <View style={styles.container}>
                {/* market title */}
                <View style={styles.headerContainer}>
                    <View style={styles.headerLeftContainer}>
                        <Text style={styles.title}>Market</Text>
                    </View>

                    <View style={styles.headerRightContainer}>
                        <TouchableOpacity style={styles.indiButton}>
                            <Image source={star} style={styles.bigIconSize}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.indiButton}>
                            <Image source={search} style={styles.bigIconSize}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.headerContainer}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={styles.categoryFilter}>
                            <Image source={terbaru} style={styles.filterIcon}/>
                            <Text style={styles.subtitle}>New</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryFilter}>
                            <Image source={defi} style={styles.filterIcon}/>
                            <Text style={styles.subtitle}>DeFi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryFilter}>
                            <Image source={nftgaming} style={styles.filterIcon}/>
                            <Text style={styles.subtitle}>NFT/Gaming</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryFilter}>
                            <Image source={cex} style={styles.filterIcon}/>
                            <Text style={styles.subtitle}>CEX</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryFilter}>
                            <Image source={dex} style={styles.filterIcon}/>
                            <Text style={styles.subtitle}>DEX</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryFilter}>
                            <Image source={layer1} style={styles.filterIcon}/>
                            <Text style={styles.subtitle}>Layer-1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryFilter}>
                            <Image source={infrastructure} style={styles.filterIcon}/>
                            <Text style={styles.subtitle}>Infrastructure</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryFilter}>
                            <Image source={lending} style={styles.filterIcon}/>
                            <Text style={styles.subtitle}>Lending</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryFilter}>
                            <Image source={layer2} style={styles.filterIcon}/>
                            <Text style={styles.subtitle}>Layer-2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryFilter}>
                            <Image source={stablecoin} style={styles.filterIcon}/>
                            <Text style={styles.subtitle}>Stablecoiin Ecosystem</Text>
                        </TouchableOpacity>
                        
                    </ScrollView>
                </View>

                {/* sort by */}
                <View style={styles.headerContainer}>
                    <View style={styles.headerLeftContainer}>
                        <Text style={styles.subtitle}>Sort By</Text>
                    </View>

                    <View style={styles.headerRightContainer}>
                        <Text style={styles.subtitle}>Default</Text>

                        <TouchableOpacity style={styles.filterButton}>
                            <Image source={arrowDown} style={styles.smallIconSize}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView>
                    {cryptoAndPrice.map(this.renderCryptoList)}
                </ScrollView>
            </View>
        );
    }
}
 
export default MarketComponent;