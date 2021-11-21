import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Header from './components/Header';
import LaikaMember from './components/LaikaMember';
import CardBenefitials from './components/CardBenefitials';
import Savings from './components/Savings';
import Experiences from './components/Experiences';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <StatusBar /> */}
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <LaikaMember />
        <CardBenefitials />
        <Savings />
        <Experiences />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
