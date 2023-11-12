/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Games from './components/games';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './components/profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Games}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      {/* <MyStack /> */}
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#6231AD',
          inactiveTintColor: 'black',
          
          style: {borderTopWidth: 0, elevation: 0, backgroundColor: 'white'},
          tabStyle: {paddingVertical: 6, height: 50, fontSize: 10},

        }}
        >
        <Tab.Screen
          name="Home"
          component={MyStack}
          options={{
            headerShown: false,
            // tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('./assets/image/home.png')}
                name="home"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Leagues"
          component={Profile}
          options={{
            headerShown: false,
            // tabBarLabel: 'Leagues',
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('./assets/image/trophy.png')}
                name="home"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Research"
          component={Profile}
          options={{
            headerShown: false,
            // tabBarLabel: 'Research',
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('./assets/image/search.png')}
                name="home"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Leaderboard"
          component={Profile}
          options={{
            headerShown: false,
            // tabBarLabel: 'Leaderboard',
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('./assets/image/leaderboard.png')}
                name="home"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            headerShown: false,
            // tabBarLabel: 'Leagues',
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('./assets/image/user.png')}
                name="home"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 50,
        
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
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <View
            key={index}
            style={{
              flex: 1,
              alignItems: 'center',

              justifyContent: 'center',
             
              borderBottomWidth: isFocused ? 2 : 0, // Add borderBottomWidth for the active tab
              borderBottomColor: isFocused ? '#6231AD' : 'transparent', // Add borderBottomColor for the active tab
            }}>
            <Text
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              style={{
                color: isFocused ? '#6231AD' : '#727682',
                fontSize: 10,
                // marginBottom: 'auto',
                marginTop: 'auto',
                fontWeight: '600',
                marginBottom: 10
              }}
              onPress={onPress}
              onLongPress={onLongPress}>
              {label}
            </Text>
          </View>
        );
      })}
    </View>
  );
};
