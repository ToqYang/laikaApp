import React from 'react';
import {View, Pressable, Image, StyleSheet} from 'react-native';
import colors from '../styles/colors';
import TextDescription from './TextDescription';
import Benefitials from './Benefitials';
import Input from './Input';
import Btn from './Btn';
import text from '../styles/text';

const CardBenefitials = () => {
  return (
    <View style={cardbenefits.backgroundContainer}>
      <View style={cardbenefits.cardContainer}>
        <View>
          <TextDescription
            versionLow={0}
            textWeight={1}
            content="Beneficios los 365 dias del año"
          />
        </View>
        {/* Good */}
        <View>
          <Benefitials
            checked={1}
            content={
              <>
                <TextDescription
                  isHighlight={1}
                  textWeight={1}
                  versionLow={1}
                  content="15% "
                />
                <TextDescription
                  textWeight={1}
                  versionLow={1}
                  content="de descuento en todos los productos"
                />
              </>
            }
          />
          <Benefitials
            checked={1}
            content={
              <>
                <TextDescription
                  textWeight={1}
                  versionLow={1}
                  content="Domicilio "
                />
                <TextDescription
                  isHighlight={1}
                  textWeight={1}
                  versionLow={1}
                  content="gratis "
                />
                <TextDescription
                  versionLow={0}
                  textWeight={1}
                  isFade={1}
                  content="*a partir de 120.000"
                />
              </>
            }
          />
        </View>
        <View>
          {/* btn benefitials */}
          <Pressable
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 15,
            }}>
            <TextDescription
              textWeight={1}
              versionLow={0}
              content="Ver otros beneficios"
            />
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
              }}>
              <Image
                style={{
                  height: 20,
                  width: 20,
                  transform: [{rotateX: '180deg'}],
                }}
                source={require('../assets/arrow_down.png')}
              />
            </View>
          </Pressable>
          {/* Without benefitials */}
          <Benefitials
            checked={0}
            content={
              <>
                <TextDescription
                  versionLow={1}
                  isFade={1}
                  content="Regalo de bienvenida"
                  optionalStyle={{
                    fontWeight: 'normal',
                  }}
                />
              </>
            }
          />
          <Benefitials
            checked={0}
            content={
              <>
                <TextDescription
                  isFade={1}
                  versionLow={1}
                  content="Bono de netflix para maratonear"
                  optionalStyle={{
                    fontWeight: 'normal',
                  }}
                />
              </>
            }
          />
          <Benefitials
            checked={0}
            content={
              <>
                <TextDescription
                  isFade={1}
                  versionLow={1}
                  content="Beneficiarios en restaurantes y tiendas"
                  optionalStyle={{
                    fontWeight: 'normal',
                  }}
                />
              </>
            }
          />
          <Benefitials
            checked={0}
            content={
              <>
                <TextDescription
                  versionLow={1}
                  isFade={1}
                  content="Por cada pedido que hagas donaremos un porcentaje a una fundación"
                  optionalStyle={{
                    fontWeight: 'normal',
                  }}
                />
              </>
            }
          />
        </View>
        <View style={cardbenefits.line}></View>
        <View>
          <View>
            <View style={cardbenefits.payUniqueContainer}>
              <View style={cardbenefits.spacePayBtn}>
                <View>
                  <TextDescription versionLow={0} content="Paga únicamente" />
                </View>
                <View style={cardbenefits.textPrice}>
                  <TextDescription
                    textWeight={1}
                    content="$69.900"
                    optionalStyle={{fontSize: 20}}
                  />
                  <TextDescription
                    isFade={1}
                    content="/año"
                    optionalStyle={{fontSize: 20}}
                  />
                </View>
              </View>
              {/* Btn no input */}
              <View>
                <Input content="Lo que equivale a $5.260 el mes" />
              </View>
            </View>
            {/* Btn yellow */}
            <View>
              <Btn content="Adquirir membresia" />
            </View>
            <View style={cardbenefits.terms}>
              <TextDescription
                isHighlight={1}
                content="Aplicar términos y condiciones"
                optionalStyle={text.sectionCaption}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardBenefitials;

const cardbenefits = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: colors.backgroundPrimary,
    flex: 1,
  },
  cardContainer: {
    backgroundColor: colors.laikaColor,
    marginHorizontal: 20,
    borderRadius: 10,
    borderColor: colors.sunshineGold,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  line: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: colors.sunshineGold,
    marginTop: 10,
    marginBottom: 30,
  },
  payUniqueContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },
  spacePayBtn: {
    flex: 1,
    flexDirection: 'column',
  },
  textPrice: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  terms: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
