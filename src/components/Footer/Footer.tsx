import {View, Text, Image} from 'react-native';
import React from 'react';

const facebookImage = require('../../../assets/mobile_semtle_common_asset/footer/footer_facebook_icon.png');
const instaImage = require('../../../assets/mobile_semtle_common_asset/footer/footer_insta_icon.png');

import styles from './styles';
const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        셈틀쟁이 : 가톨릭대 성심교정 다솔관 D408
      </Text>
      <Text style={styles.footerText}>회장 김대현 010-3249-7669</Text>
      <View style={styles.footerIcon}>
        <Image source={facebookImage} />
        <View style={styles.iconSeparator} />
        <Image source={instaImage} />
      </View>
    </View>
  );
};

export default Footer;
