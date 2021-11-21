import React, {useState, useEffect} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import colors from '../styles/colors';
import text from '../styles/text';

const Input = ({content = 'Empty', disabled = true, small = 1}) => {
  const [textForm, onChangeTextForm] = useState('');

  useEffect(() => {
    onChangeTextForm(content);
  }, [content]);

  const isSmall = small ? {width: 120} : {flex: 1, height: 40};
  return (
    <>
      <TextInput
        style={[isSmall, inputFormat.input, text.sectionCaption]}
        onChangeText={onChangeTextForm}
        value={textForm}
        disabled={disabled}
        multiline={true}
      />
    </>
  );
};

export default Input;

const inputFormat = StyleSheet.create({
  input: {
    paddingHorizontal: 20,
    backgroundColor: colors.backgroundPrimary,
    borderRadius: 10,
    textAlign: 'center',
    color: 'white',
  },
});
