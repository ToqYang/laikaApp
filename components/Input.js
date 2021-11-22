import React, {useState, useEffect} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import text from '../styles/text';
import colors from '../styles/colors';

const Input = ({
  content = 'Empty',
  disabled = true,
  light = 0,
  optionalStyle,
}) => {
  const [textForm, onChangeTextForm] = useState('');

  useEffect(() => {
    onChangeTextForm(content);
  }, [content]);

  const colorBack = light
    ? {backgroundColor: '#bf93f1'}
    : {backgroundColor: colors.slatePurpleLight};
  return (
    <TextInput
      style={[inputFormat.input, text.sectionCaption, colorBack, optionalStyle]}
      onChangeText={onChangeTextForm}
      value={textForm}
      editable={!disabled}
      multiline={true}
    />
  );
};

export default Input;

const inputFormat = StyleSheet.create({
  input: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    borderRadius: 10,
    textAlign: 'center',
    color: 'white',
  },
});
