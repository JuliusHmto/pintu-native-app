import { Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

export default {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    padding: 20
  },
  headerLeftContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  headerRightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  indiButton: {
    paddingHorizontal: 10
  },
  filterButton: {
    paddingLeft: 5
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(158, 150, 150, .1)'
  },
  leftContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 10
  },
  priceMovement: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  textBold: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  green: {
    color: 'limegreen'
  },
  red: {
    color: 'red'
  },
  caretContainer: {
    justifyContent: 'center'
  },
  caretStyle: {
    height: 15,
    width: 15,
    marginRight: 5,
  },
  bigIconSize: {
    height: 25,
    width: 25
  },
  smallIconSize: {
    height: 20,
    width: 20
  },
  filterIcon: {
    height: 25,
    width: 25,
    tintColor: 'black',
    marginRight: 10
  },
  categoryFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginRight: 5,
    borderColor: 'rgba(158, 150, 150, .2)'
  }
};
  