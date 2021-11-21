import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Header from './components/Header';
import LaikaMember from './components/LaikaMember';
import CardBenefitials from './components/CardBenefitials';
import Savings from './components/Savings';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <StatusBar /> */}
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <LaikaMember />
        <CardBenefitials />
        <Savings />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
