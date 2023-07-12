import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 132,
    backgroundColor: '#f5f5f5',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 9,
    lineHeight: 16,
    fontWeight: '400',
  },
  footerIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerImage: {
    width: 12,
    height: 12,
  },
  iconSeparator: {
    width: 10, // 간격을 조정하기 위한 너비
  },
});

export default styles;
