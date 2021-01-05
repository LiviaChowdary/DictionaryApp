import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import HomeScreen from './screens/HomeScreen';
import AppHeader from '../components/AppHeader';


export default function App() {
  return (
    <View>
      <AppHeader />
        <HomeScreen/>
    </View>
  );
}
