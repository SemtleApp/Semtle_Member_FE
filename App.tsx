import React from 'react';
// @ts-ignore
import {NavigationContainer} from '@react-navigation/native';
// @ts-ignore
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen/index'; // LoginScreen 컴포넌트의 경로에 맞게 수정해주세요

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        {/* 다른 화면들을 여기에 추가할 수 있습니다 */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
