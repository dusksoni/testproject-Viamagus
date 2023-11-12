import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import * as Progress from 'react-native-progress';
import SwipuUp from './swipuUp';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

const Games = () => {
  const [isPanelActive, setPanelActive] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleValueChange = (value, index) => {
    console.log(value, index);
    setSelectedValue(value);
    setSelectedIndex(index);
  };

  const openPanel = () => {
    setPanelActive(true);
  };

  const closePanel = () => {
    setPanelActive(false);
  };

  return (
    <View style={{padding: 16}}>
      <Text
        style={{
          marginBottom: 16,
          color: 'black',
          fontWeight: '600',
          fontSize: 16,
        }}>
        Today’s Games
      </Text>
      <SwipuUp isPanelActive={isPanelActive} closePanel={closePanel} />
      <View style={styles.cardContainer}>
        <View style={{backgroundColor: '#6231AD', padding: 16}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'white', fontWeight: '600'}}>
              Under or Over
            </Text>
            <Text style={{color: '#B296DC', fontWeight: '600'}}>
              Starting in 03:23:12
            </Text>
          </View>
          <View style={{flexDirection: 'column', marginTop: 16}}>
            <Text style={{color: 'white', fontWeight: '400'}}>
              Bitcoin price will be under
            </Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={{color: 'white', fontWeight: '700', fontSize: 16}}>
                $24,524
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '600',
                  marginTop: 'auto',
                  marginBottom: 'auto',
                }}>
                {' '}
                at 7 a ET on 22nd Jan’21
              </Text>
            </View>
          </View>
        </View>
        <View style={{padding: 16}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{color: '#B5C0C8', fontSize: 12, marginBottom: 8}}>
                PRIZE POOL
              </Text>
              <Text style={{color: '#333333', fontSize: 14}}>$12,000</Text>
            </View>
            <View>
              <Text style={{color: '#B5C0C8', fontSize: 12, marginBottom: 8}}>
                UNDER
              </Text>
              <Text style={{color: '#333333', fontSize: 14}}>3.25x</Text>
            </View>
            <View>
              <Text style={{color: '#B5C0C8', fontSize: 12, marginBottom: 8}}>
                OVERL
              </Text>
              <Text style={{color: '#333333', fontSize: 14}}>1.25x</Text>
            </View>
            <View>
              <Text style={{color: '#B5C0C8', fontSize: 12, marginBottom: 8}}>
                ENTRY FEE
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginLeft: 'auto',
                }}>
                <Text style={{color: '#333333', fontSize: 14}}>5</Text>
                <View
                  style={{
                    height: 9,
                    width: 9,
                    backgroundColor: '#FFE400',
                    borderRadius: 40,
                    marginTop: 'auto',
                    marginLeft: 10,
                    marginBottom: 'auto',
                  }}></View>
              </View>
            </View>
          </View>
          <View style={{marginTop: 22, width: '100%'}}>
            <Text
              style={{
                color: '#727682',
                fontWeight: '600',
                fontSize: 14,
                marginBottom: 14,
              }}>
              What’s your prediction?
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 18,
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <TouchableOpacity
                style={{
                  width: '45%',
                  height: 40,
                  padding: 12,
                  alignContent: 'center',
                  backgroundColor: '#452C55',
                  borderRadius: 45,
                }}>
                <Text
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    color: 'white',
                    fontWeight: '600',
                    fontSize: 14,
                  }}>
                  Under
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '45%',
                  height: 40,
                  padding: 12,
                  alignContent: 'center',
                  backgroundColor: '#6231AD',
                  borderRadius: 45,
                }}
                onPress={() => openPanel()}>
                <Text
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    color: 'white',
                    fontWeight: '600',
                    fontSize: 14,
                  }}>
                  Over
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#F6F3FA',
            paddingHorizontal: 15,
            paddingVertical: 20,
            gap: 12,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#727682', fontWeight: '600', fontSize: 14}}>
              355 Players
            </Text>
            <Text style={{color: '#727682', fontWeight: '600', fontSize: 14}}>
              View chart
            </Text>
          </View>
          <View>
            <Progress.Bar
              progress={0.7}
              color="#FE4190"
              width={350}
              unfilledColor="#2DABAD"
              borderColor="white"
              height={10}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#B5C0C8', fontSize: 12, marginBottom: 8}}>
              232 predicted under
            </Text>
            <Text style={{color: '#B5C0C8', fontSize: 12, marginBottom: 8}}>
              123 predicted over
            </Text>
          </View>
          
        </View>
      </View>
    </View>
  );
};

const styles = {
  cardContainer: {
    borderRadius: 20,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
};
export default Games;
