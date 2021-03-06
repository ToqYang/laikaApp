import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import colors from '../styles/colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/arrow_down.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.backgroundPrimary,
  },
  tinyLogo: {
    width: 30,
    height: 30,
    transform: [{rotate: '90deg'}],
  },
});

export default Header;
