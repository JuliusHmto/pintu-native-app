import { Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

export default {
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  bottomTabIcon: {
    height: 25,
    width: 25,
  }
};
  