import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import colors from '../styles/colors';
import TextDescription from './TextDescription';
import Benefitials from './Benefitials';

const CardBenefitials = () => {
  return (
    <View
      style={{
        backgroundColor: colors.backgroundPrimary,
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: colors.laikaColor,
          marginHorizontal: 20,
          borderRadius: 10,
          borderColor: colors.sunshineGold,
          borderWidth: 1,
          paddingHorizontal: 20,
          paddingVertical: 25,
        }}>
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
          {/* btn benefitials */}
          <Pressable
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <TextDescription
              textWeight={1}
              versionLow={0}
              content="Ver otros beneficios"
            />
            <View style={{marginTop: 10}}>
              <Image
                style={{
                  height: 20,
                  width: 20,
                }}
                source={require('../assets/arrow_down.png')}
              />
            </View>
          </Pressable>
          {/* Without benefitials */}
          <View>
            <View>
              <Text>Logo Without</Text>
            </View>
            <View>
              <Text>Regalo de bienvenida</Text>
            </View>
          </View>
          <View>
            <View></View>
            <View>
              <Text>Bono de netflix para maratonear</Text>
            </View>
          </View>
          <View>
            <View></View>
            <View>
              <Text>Beneficiarios en restaurantes y tiendas</Text>
            </View>
          </View>
          <View>
            <View></View>
            <View>
              <Text>
                Por cada pedido que hagas donaremos un porcentaje a una
                fundación
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text>- - - - -</Text>
        </View>
        <View>
          <View>
            <Text>Paga unicamente</Text>
            <View>
              <View>
                <Text>$69.900</Text>
                <Text>/año</Text>
              </View>
              {/* Btn no input */}
              <View>
                <Text>Lo que equivale $5.260 el mes</Text>
              </View>
            </View>
            {/* Btn yellow */}
            <View>
              <Text>Adquirir membresia</Text>
            </View>
            <View>
              <Text>Aplicar términos y condiciones</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardBenefitials;
