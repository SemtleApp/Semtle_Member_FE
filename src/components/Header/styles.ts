import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 61,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#C3C3C3',
    backgroundColor: '#fff',
  },
  headerText: {
    marginLeft: 18,
    fontWeight: '400',
    fontSize: 17,
    color: '#333',
    letterSpacing: 1,
  },
  headerImage: {
    height: 21,
    width: 76,
    marginLeft: 10,
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
  },
  rightContent: {
    marginLeft: 'auto',
    marginRight: 10,
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 5,
    paddingVertical: 5,
    paddingHorizontal: 3,
    backgroundColor: '#00000000',
    borderRadius: 5,
  },
});

export default styles;
