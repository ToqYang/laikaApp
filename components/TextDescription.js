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
    ? {color: 'rgba(255, 255, 255, 0.7)'}
    : {color: 'rgba(255, 255, 255, 1)'};

  const textBold = textWeight ? {fontWeight: 'bold'} : {fontWeight: '500'};
  return (
    <>
      {versionLow ? (
        <Text
          style={[
            {textAlign: 'justify'},
            text.sectionDescription,
            highlight,
            textBold,
            optionalStyle,
          ]}>
          {content}
        </Text>
      ) : (
        <Text
          style={[
            {textAlign: 'justify'},
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
