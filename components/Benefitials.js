import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Benefitials = ({checked = 0, content = 'Empty'}) => {
  return (
    <View style={benefitials.container}>
      <View style={imgBenefitials.container}>
        {checked ? (
          <Image
            style={imgBenefitials.img}
            source={require('../assets/arrow_check.png')}
          />
        ) : (
          <Image
            style={imgBenefitials.img}
            source={require('../assets/arrow.png')}
          />
        )}
      </View>
      <View style={benefitials.textContainer}>
        <Text style={benefitials.textLeftSpace}>{content}</Text>
      </View>
    </View>
  );
};

export default Benefitials;

const benefitials = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  textContainer: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  textLeftSpace: {
    marginLeft: 10,
  },
});

const imgBenefitials = StyleSheet.create({
  container: {
    marginTop: 4,
  },
  img: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
});
