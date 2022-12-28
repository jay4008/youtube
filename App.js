import React, { useState } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Button,
  Dimensions, TouchableOpacity, Alert
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import MyStack from './src/navigation/StackNav';
// import MyTabs from './src/navigation/BottomTabNav';
import MyTabs from './src/navigation/TopTabNav';
import Drawer from './src/navigation/RootDrawerNav';
const App: () => Node = () => {
  return (
    <View style={styles.container}>
  <NavigationContainer>
    {/* <MyStack/> */}
    {/* <MyTabs/> */}
    {/* <MyTabs/> */}
    <Drawer/>
  </NavigationContainer>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerView: {
    backgroundColor: "#000",
    height: 100, 
    width: 100
  }
})

export default App;
