import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React from 'react';
import GamePlayedScreen from './gamePlayedScreen';
import BadgesScreen from './badgesScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Profile = () => {
  return (
    <View style={{backgroundColor: '#F6F3FA', flex: 1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{marginTop: 'auto', marginBottom: 'auto'}}>
            <Image
              source={require('../assets/image/logo.png')}
              height={30}
              width={30}
            />
          </View>
          <Text style={styles.headerText}>Profile</Text>
          <View style={{marginTop: 'auto', marginBottom: 'auto'}}>
            <Image
              source={require('../assets/image/message.png')}
              height={30}
              width={30}
              style={{position: 'absolute'}}
            />
            <View
              style={{
                height: 16,
                width: 16,
                borderRadius: 40,
                position: 'relative',
                bottom: 7,
                left: 10,
                backgroundColor: '#6231AD',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 11}}>1</Text>
            </View>
          </View>
        </View>
        <View style={styles.profileImageContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
            }}
            style={styles.profileImage}
          />
          <View style={styles.initialsContainer}>
            <Text style={styles.initialsText}>
              <Image source={require('../assets/image/edit.png')} />
            </Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={{fontSize: 14, fontWeight: '500', color: '#333333'}}>
            Jina Simons
          </Text>
        </View>
        <View style={{marginVertical: 8, alignItems: 'center'}}>
          <Text style={{fontSize: 12, fontWeight: '500', color: '#727682'}}>
            6000 pts
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 14, fontWeight: '500', color: '#727682'}}>
            I’m a software developer that has been in the crypto space since
            2012. And I’ve seen it grow and falter over a period of time. Really
            happy to be here!
          </Text>
        </View>
        <TouchableOpacity
          style={{
            marginVertical: 20,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 9,
          }}>
          <Image source={require('../assets/image/logout.png')} />
          <Text style={{fontSize: 14, fontWeight: '500', color: '#727682'}}>
            Logout
          </Text>
        </TouchableOpacity>
        <View>
          <View
            style={{
              position: 'absolute',
              bottom: 95,
              left: '50%',
              backgroundColor: 'white',
              zIndex: 9,
            }}>
            <Image source={require('../assets/image/starCircle.png')} />
          </View>
          <View
            style={{
              borderWidth: 2,
              borderColor: '#EEEAF3',
              borderRadius: 5,
              padding: 20,
              position: 'relative',
            }}>
            <View
              style={{display: 'flex', flexDirection: 'row', marginBottom: 15}}>
              <Text
                style={{
                  width: '50%',
                  fontSize: 14,
                  fontWeight: '600',
                  color: '#727682',
                }}>
                Under or Over
              </Text>
              <Text
                style={{
                  width: '50%',
                  fontSize: 14,
                  fontWeight: '600',
                  color: '#727682',
                }}>
                Top 5
              </Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View style={{display: 'flex', flexDirection: 'row', gap: 12,  width: '50%',}}>
                <Image source={require('../assets/image/roundUp.png')} />
                <Text
                  style={{
                    
                    fontSize: 24,
                    fontWeight: '600',
                    color: '#4F4F4F',
                  }}>
                  81%{' '}
                </Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row', gap: 12,  width: '50%'}}>
                <Image source={require('../assets/image/roundDown.png')} />
                <Text
                  style={{
                   
                    fontSize: 24,
                    fontWeight: '600',
                    color: '#4F4F4F',
                  }}>
                  -51%{' '}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginTop: 4, backgroundColor: 'white', flex: 1}}>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#6231AD',
            inactiveTintColor: 'black',

            style: {borderTopWidth: 0, elevation: 0, backgroundColor: 'white'},
            // tabStyle: {borderBottomWidth: 2, borderColor: 'transparent'},
          }}
          tabBar={props => <CustomTabBar {...props} />}
          initialRouteName="Badges">
          <Tab.Screen name="Games Played" component={GamePlayedScreen} />
          <Tab.Screen name="Badges" component={BadgesScreen} />
        </Tab.Navigator>
      </View>
      {/* //tab pages from here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 34,
  },
  headerText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#727682',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  profileImageContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 40,
    position: 'absolute',
  },
  initialsContainer: {
    height: 24,
    width: 24,
    borderRadius: 40,
    position: 'relative',
    top: 53,
    left: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  initialsText: {
    fontWeight: 'bold',
  },
  textContainer: {
    marginTop: 70, // Adjust the margin based on your design
    alignItems: 'center',
  },
});

export default Profile;

const CustomTabBar = ({state, descriptors, navigation, position}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 60,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',

              justifyContent: 'center',

              borderBottomWidth: isFocused ? 2 : 0, // Add borderBottomWidth for the active tab
              borderBottomColor: isFocused ? '#6231AD' : 'transparent', // Add borderBottomColor for the active tab
            }}>
            <Animated.Text
              style={{
                color: isFocused ? '#6231AD' : '#727682',
                fontSize: 14,
                marginBottom: 'auto',
                marginTop: 'auto',
                fontWeight: isFocused ? '600' : '500',
              }}>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
