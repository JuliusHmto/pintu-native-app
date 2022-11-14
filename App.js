import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';

import MarketPage from './pages/Market.page';
import styles from './css/App.style';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import homeIcon from './images/home.png';
import homeFocusIcon from './images/homeFocus.png';

import discoverFocusIcon from './images/discoverFocus.png';
import discoverIcon from './images/discover.png';

import marketIcon from './images/market.png';
import marketFocusIcon from './images/marketFocus.png';

import walletIcon from './images/wallet.png';
import walletFocusIcon from './images/walletFocus.png';

import accountIcon from './images/account.png';
import accountFocusIcon from './images/accountFocus.png';

function HomeScreen() {
  return (
    <View style={{ backgroundColor: '#ffffff', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pintu Home</Text>
    </View>
  );
}

function DiscoverScreen() {
  return (
    <View style={{ backgroundColor: '#ffffff', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pintu Discover</Text>
    </View>
  );
}

function MarketScreen() {
  return <MarketPage/>;
}

function WalletScreen() {
  return (
    <View style={{ backgroundColor: '#ffffff', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pintu Wallet</Text>
    </View>
  );
}

function AccountScreen() {
  return (
    <View style={{ backgroundColor: '#ffffff', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pintu Account</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
      initialRouteName="Market"
      screenOptions={({ route }) =>({
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'dimgrey',
        tabBarStyle: {
          height: 70,
          position: 'absolute',
        },
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? homeFocusIcon : homeIcon;
          } else if (route.name === 'Discover') {
            iconName = focused ? discoverFocusIcon : discoverIcon;
          } else if (route.name === 'Market') {
            iconName = focused ? marketFocusIcon : marketIcon;
          } else if (route.name === 'Wallet') {
            iconName = focused ? walletFocusIcon : walletIcon;
          }else if (route.name === 'Account') {
            iconName = focused ? accountFocusIcon : accountIcon;
          }
          return <Image source={iconName} style={styles.bottomTabIcon} />;
        }
      })}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Discover' component={DiscoverScreen} />
      <Tab.Screen name='Market' component={MarketScreen} />
      <Tab.Screen name='Wallet' component={WalletScreen} />
      <Tab.Screen name='Account'component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      {/* <View style={styles.container}>
        <MarketPage />
      </View> */}
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  );
}

