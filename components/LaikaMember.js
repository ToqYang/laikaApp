import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import text from '../styles/text';
import colors from '../styles/colors';
import Title from './Title';
import TextDescription from './TextDescription';

const LaikaMember = () => {
  return (
    <View style={laikaMember.container}>
      <View style={laikaMember.infoMemberContainer}>
        <View style={laikaMember.titleContainer}>
          <Title isUppercase={1} content="laika " />
          <Title
            isUppercase={0}
            isHighlight={1}
            isCapitalize={1}
            content="member "
          />
        </View>

        <View style={laikaMember.spaceDescription}>
          <TextDescription
            isFade={1}
            content="Conviértete en miembro, recibe beneficios exclusivos y dale lo mejor a tu mascota"
            optionalStyle={{textAlign: 'center'}}
          />
        </View>
      </View>
      <View style={imageCard.container}>
        <Image
          style={imageCard.img}
          source={require('../assets/card_member.png')}
        />
      </View>
    </View>
  );
};

export default LaikaMember;

const laikaMember = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.backgroundPrimary},
  infoMemberContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  spaceDescription: {
    marginHorizontal: 22,
  },
});

const imageCard = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  img: {
    height: 250,
    width: '100%',
    resizeMode: 'contain',
  },
});
