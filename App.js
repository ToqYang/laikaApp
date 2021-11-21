import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Header from './components/Header';
import LaikaMember from './components/LaikaMember';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <LaikaMember />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
