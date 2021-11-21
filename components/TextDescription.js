import React from 'react';
import {Text} from 'react-native';
import text from '../styles/text';
import colors from '../styles/colors';

const TextDescription = ({
  isHighlight = 0,
  isFade = 0,
  textWeight = 0,
  content = 'Empty',
  versionLow = 1,
  optionalStyle = {},
}) => {
  const highlight = isHighlight
    ? {color: colors.sunshineGold}
    : isFade
    ? {color: 'white', opacity: 0.7}
    : {color: 'white'};

  const textBold = textWeight ? {fontWeight: 'bold'} : {fontWeight: '400'};
  return (
    <>
      {versionLow ? (
        <Text style={[text.sectionDescription, highlight, textBold]}>
          {content}
        </Text>
      ) : (
        <Text
          style={[
            text.sectionDescriptionLow,
            textBold,
            highlight,
            optionalStyle,
          ]}>
          {content}
        </Text>
      )}
    </>
  );
};

export default TextDescription;
