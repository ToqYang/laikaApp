import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import colors from '../styles/colors';
import TextDescription from './TextDescription';

const ExperiencesCard = ({
  urlLocal = '',
  titleContent = 'Title',
  content = 'Empty',
}) => {
  return (
    <View style={cardXP.container}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Image style={imgBenefitials.img} source={urlLocal} />
        </View>
        <View style={cardXP.textContainer}>
          <View>
            <TextDescription
              textWeight={1}
              versionLow={0}
              content={titleContent}
              optionalStyle={{textAlign: 'left'}}
            />
          </View>
          <View>
            <TextDescription
              isFade={1}
              versionLow={0}
              content={content}
              optionalStyle={{marginTop: 5}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExperiencesCard;

const cardXP = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.laikaColor,
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
    minHeight: 150,
  },
  textContainer: {
    flex: 2,
    flexDirection: 'column',
    marginLeft: 10,
  },
});

const imgBenefitials = StyleSheet.create({
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
