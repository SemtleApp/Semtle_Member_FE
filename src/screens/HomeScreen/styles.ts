import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 5,
  },
  scrollview: {
    width: '100%',
    borderColor: 'pink',
    borderWidth: 5,
    backgroundColor: '#fff',
    marginBottom: 132,
  },
  swipeView: {
    width: '100%',
    height: 223,
    marginTop : '0.9%',
    backgroundColor: '#A2D8FF73',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnTextView: {
    flexDirection : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 10,
    fontWeight: 'normal',
    color: '#000',
  },

  btnListView: {
    width: '100%',
    borderColor: 'red',
    borderWidth: 5,
    flexDirection : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 10,
    fontWeight: 'normal',
    color: '#000',
  },
  btn1: {
    marginHorizontal: 5,
    paddingVertical: 5,
    paddingHorizontal: 3,
    backgroundColor: '#000',
  },
});

export default styles;
