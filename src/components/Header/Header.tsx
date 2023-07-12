import {Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const logoImage = require('../../../assets/mobile_semtle_common_asset/header/logo.png');
const notificationImage = require('../../../assets/mobile_semtle_common_asset/header/alarm_icon.png');
const menuImage = require('../../../assets/mobile_semtle_common_asset/header/Vector.png');
const profileImage = require('../../../assets/mobile_semtle_common_asset/header/profile_blue_img.png');

import styles from './styles';
const Header = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.headerImage} source={logoImage} />
      <View style={styles.centerContent}>
        <Text style={styles.headerText}></Text>
      </View>
      <View style={styles.rightContent}>
        <TouchableOpacity style={styles.button}>
          <Image source={profileImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image style={{marginTop: 1}} source={notificationImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image style={{marginTop: 3}} source={menuImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
