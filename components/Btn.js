import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import TextDescription from './TextDescription';
import colors from '../styles/colors';
import text from '../styles/text';

const Btn = ({content = 'Press'}) => {
  return (
    <Pressable style={[btn.container]}>
      <TextDescription
        textWeight={1}
        content={content}
        optionalStyle={[{color: 'black'}, text.button]}
      />
    </Pressable>
  );
};

export default Btn;

const btn = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.sunshineGold,
    borderRadius: 6,
    padding: 15,
    marginTop: 15,
    marginBottom: 10,
  },
});
