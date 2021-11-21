import React from 'react';
import {View, Text} from 'react-native';
import text from '../styles/text';

const TextDescription = ({
  isHighlight = 0,
  isFade = 0,
  textWeight = 0,
  content = 'Empty',
}) => {
  const highlight = isHighlight
    ? {color: colors.sunshineGold}
    : isFade
    ? {color: 'white', opacity: 0.7}
    : {color: 'white'};

  const textBold = textWeight ? {fontWeight: '500'} : {};
  return (
    <>
      <Text style={[text.sectionDescription, highlight, textBold]}>
        {content}
      </Text>
    </>
  );
};

export default TextDescription;
