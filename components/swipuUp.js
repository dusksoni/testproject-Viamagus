import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import { useNavigation } from "@react-navigation/native";


const SwipuUp = ({isPanelActive, closePanel}) => {
  const [selectedValue, setSelectedValue] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState(4);
  const navigation = useNavigation();

  const handleValueChange = (value, index) => {
    setSelectedValue(value);
    setSelectedIndex(index);
  };
  return (
    <Modal
      isVisible={isPanelActive}
      swipeDirection={['up', 'down']}
      onSwipeComplete={closePanel}
      onBackdropPress={closePanel}
      style={styles.modal}>
      <View style={styles.modalContent}>
        <View
          style={{
            height: 4,
            width: 30,
            backgroundColor: '#B5C0C8',
            borderRadius: 30,
            marginBottom: 20,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}></View>
        <View style={{marginBottom: 28}}>
          <Text style={{fontSize: 16, fontWeight: '600', color: '#333333'}}>
            Your Prediction is Under
          </Text>
        </View>
        <View style={{marginBottom: 20}}>
          <Text style={{fontSize: 12, fontWeight: '600', color: '#727682'}}>
            ENTRY TICKETS
          </Text>
        </View>
        <View style={{height: 250, width: '100%', backgroundColor: 'red'}}>
          <ScrollPicker
            dataSource={['1', '2', '3', '4', '5', '6', '7', '8', '9']}
            selectedIndex={selectedIndex}
            renderItem={(data, index) => {
              return (
                <View
                  style={[
                    {
                      width: '100%',
                      height: 36,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                    index === selectedIndex
                      ? {backgroundColor: '#e5d7f7'}
                      : null,
                  ]}>
                  <Text
                    style={
                      index === selectedIndex ? {fontWeight: '800'} : null
                    }>
                    {data}
                  </Text>
                </View>
              );
            }}
            onValueChange={(data, selectedIndex) => {
              handleValueChange(data, selectedIndex);
            }}
            wrapperHeight={300}
            wrapperBackground="#FFFFFF"
            itemHeight={36}
            highlightColor="#e5d7f7"
            // highlightBorderWidth={2}
          />
        </View>
        <View>
          <Text style={{fontSize: 12, fontWeight: '500', color: '#B5C0C8'}}>
            You can win
          </Text>
          <View
            style={{
              marginTop: 4,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 14, fontWeight: '600', color: '#03A67F'}}>
              $2000
            </Text>
            <View style={{display: 'flex', flexDirection: 'row', gap: 8}}>
              <Text style={{fontSize: 12, fontWeight: '500', color: '#727682'}}>
                Total
              </Text>
              <View
                style={{
                  height: 13,
                  width: 13,
                  backgroundColor: '#FFE400',
                  borderRadius: 40,
                  marginTop: 'auto',
                  marginBottom: 'auto',
                }}></View>
              <Text style={{fontSize: 14, fontWeight: '600', color: '#333333'}}>
                5
              </Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: 28}}>
          <TouchableOpacity
            style={{
              width: '100%',
              height: 45,
              padding: 12,
              alignContent: 'center',
              backgroundColor: '#6231AD',
              borderRadius: 45,
            }}onPress={() => navigation.navigate("profile")}>
            <Text
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                color: 'white',
                fontWeight: '600',
                fontSize: 14,
              }} >
              Submit my prediction
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    marginBottom: -15
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    height: '60%',
    width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});

export default SwipuUp;
