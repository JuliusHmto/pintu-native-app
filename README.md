# pintu-native-app
Pintu Mobile Engineer Technical Test - React Native Mobile (Android)

# Project Assumptions

- Yearly change in [Price API](https://api.pintu.co.id/v2/trade/price-changes) was set to null, so I removed the yearly column on the website.
- For [React JS App (Website)](https://github.com/JuliusHmto/pintu-reactjs-app), I'm using [Redux Toolkit](https://redux.js.org/introduction/why-rtk-is-redux-today) to show a simpler way to use Redux without boilerplate-y code as said in the documentation.
- For This React Native app (Android) I'm using regular Redux with actionCreators and actionTypes. 

# How to Run
- Environment setup here: [React Native setup](https://reactnative.dev/docs/environment-setup).
- On your desired terminal, run:
  - `npm install`
  - `npx react-native run-android`
