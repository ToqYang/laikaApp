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
import CardBenefitials from './components/CardBenefitials';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <StatusBar /> */}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{backgroundColor: 'yellow', height: 10000000}}>
        <Header />
        <LaikaMember />
        <CardBenefitials />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
