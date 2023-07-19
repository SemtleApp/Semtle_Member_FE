import React, {useCallback, useState} from 'react';
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from '@screens/HomeScreen/styles';
import Footer from '@components/Footer/Footer';
import LoginScreen from '@screens/LoginScreen/index';

const btn1 = require('../../../assets/mobile_semtle_page/home/book_button.png');
const btn2 = require('../../../assets/mobile_semtle_page/home/board_button.png');
const btn3 = require('../../../assets/mobile_semtle_page/home/study_button.png');
const btn4 = require('../../../assets/mobile_semtle_page/home/attendance_button.png');
const btn5 = require('../../../assets/mobile_semtle_page/home/notice_button.png');

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLoginButtonPress = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <View style={styles.swipeView}></View>

        <View style={styles.btnListView}>
          <TouchableOpacity
            style={styles.btn1}
            onPress={() => handleLoginButtonPress()}>
            <Image source={btn1} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn1}>
            <Image source={btn2} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn1}>
            <Image source={btn3} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn1}>
            <Image source={btn4} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn1}>
            <Image source={btn5} />
          </TouchableOpacity>
        </View>

        <View style={styles.btnTextView}>
          <Text>책 대여</Text>
          <Text>자유게시판</Text>
          <Text>스터디룸</Text>
          <Text>출석</Text>
          <Text>공지사항</Text>
        </View>

        <Text>공지사항</Text>
        <Text>자유게시판</Text>
        <Text>책 대여</Text>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

export default HomeScreen;
