import React from 'react';
import {Text} from 'react-native';
import colors from '../styles/colors';
import text from '../styles/text';

const Title = ({
  isUppercase = 0,
  isCapitalize = 0,
  isHighlight = 0,
  content = 'Empty',
  isLowTitle = 0,
}) => {
  const uppercase = isUppercase
    ? {textTransform: 'uppercase'}
    : isCapitalize
    ? {textTransform: 'capitalize'}
    : {textTransform: 'none'};

  const highlight = isHighlight
    ? {color: colors.sunshineGold}
    : {color: 'white'};
  return (
    <>
      {isLowTitle ? (
        <Text style={[text.sectionTitleLow, uppercase, highlight]}>
          {content}
        </Text>
      ) : (
        <Text style={[text.sectionTitle, uppercase, highlight]}>{content}</Text>
      )}
    </>
  );
};

export default Title;
