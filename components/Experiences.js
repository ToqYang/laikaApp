import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../styles/colors';
import ExperiencesCard from './ExperiencesCard';
import Title from './Title';

const Experiences = () => {
  return (
    <View style={xp.container}>
      <View style={xp.titleContainer}>
        <Title isLowTitle={1} content="Experiencias de" />
        <Title isLowTitle={1} isUppercase={1} content=" laika " />
        <Title
          isLowTitle={1}
          isUppercase={0}
          isHighlight={1}
          isCapitalize={1}
          content="members "
        />
      </View>
      <View style={xp.spaceEnd}>
        <ExperiencesCard
          urlLocal={require('../assets/first.png')}
          titleContent="Me converti en LaikaMember y todo se volvio más fácil."
          content="Con los beneficios de LaikaMember asegro los mejores precios sumado de regalos que le encantan a mi perro y la comodidad que todo llega a la puerta de mi casa."
        />
        <ExperiencesCard
          urlLocal={require('../assets/second.png')}
          titleContent="Soy LaikaMember y nunca habia logrado ahorrar tanto en las compras para mis mascotas."
          content="Con el descuento de la membresía me ahorra más de 50 mil pesos al mes y 600 mil pesos al año."
        />
        <ExperiencesCard
          urlLocal={require('../assets/third.png')}
          titleContent="Me encanta ser parte del club LaikaMember."
          content="Logro consentir mucho a mi mascota y además se que con mis compras, ayudo a mascotas necesitadas"
        />
      </View>
    </View>
  );
};

export default Experiences;

const xp = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
    marginTop: 40,
    marginBottom: 15,
  },
  spaceEnd: {
    marginBottom: 30,
  },
});
