import React from 'react';
import {View, StyleSheet} from 'react-native';
import Title from './Title';
import TextDescription from './TextDescription';
import colors from '../styles/colors';
import Input from './Input';
import Btn from './Btn';

const Savings = () => {
  return (
    <View style={savings.container}>
      <View style={savings.titleContainer}>
        <Title
          isLowTitle={1}
          content="Calcula tu ahorro con la membresía"
          optionalStyle={{
            textAlign: 'center',
            marginHorizontal: 100,
          }}
        />
      </View>
      <View styles={savings.subtitleContainer}>
        <TextDescription
          content="¿Cuánto gastas al mes en tu peludo?"
          optionalStyle={{textAlign: 'center', marginVertical: 10}}
        />
      </View>
      <View style={savings.buttonsContainer}>
        <View>
          <Input
            light={1}
            disabled={false}
            optionalStyle={{fontSize: 22}}
            content="$98.000"
          />
        </View>
        <Btn content="Calcular" />
      </View>

      <View style={savings.infoSavingContainer}>
        <TextDescription content="Te ahorras" />
        <Title
          isHighlight={1}
          isLowTitle={1}
          content="$0"
          optionalStyle={{
            textAlign: 'center',
          }}
        />
        <TextDescription content="al año" />
      </View>
    </View>
  );
};

export default Savings;

const savings = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
  titleContainer: {
    marginTop: 40,
    marginHorizontal: 50,
    flex: 1,
    justifyContent: 'space-between',
  },
  subtitleContainer: {
    marginTop: 60,
    flex: 1,
  },
  buttonsContainer: {
    flex: 1,
    marginHorizontal: 40,
    marginVertical: 15,
  },
  infoSavingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
