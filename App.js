/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Profile from './src/screens/Profile';
import SignUpCode from './src/screens/SignUpCode';
import Welcome_screen from './src/screens/Welcome_screen';


const App = () => {
  return (
    <SafeAreaView>
      <Profile/>
    </SafeAreaView>
  );
};

export default App;
