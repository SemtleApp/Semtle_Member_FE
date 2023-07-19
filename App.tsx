import React from 'react';
// @ts-ignore
import {NavigationContainer} from '@react-navigation/native';
// @ts-ignore
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen/index'; // LoginScreen 컴포넌트의 경로에 맞게 수정해주세요
import HomeScreen from './src/screens/HomeScreen';
import Header from './src/components/Header/Header';
import Footer from "@components/Footer/Footer";


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: () => <Header />,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
