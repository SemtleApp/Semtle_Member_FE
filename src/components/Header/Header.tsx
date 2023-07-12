import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const logoImage = require('../../../assets/mobile_semtle_common_asset/header/logo.png');
const notificationImage = require('../../../assets/mobile_semtle_common_asset/header/alarm_icon.png');
const menuImage = require('../../../assets/mobile_semtle_common_asset/header/Vector.png');
const profileImage = require('../../../assets/mobile_semtle_common_asset/header/profile_blue_img.png');

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

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '17%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#C3C3C3',
  },
  headerText: {
    fontWeight: '400',
    fontSize: 17,
    color: '#333',
    letterSpacing: 1,
  },
  headerImage: {
    height: 20,
    width: 75,
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

export default Header;
