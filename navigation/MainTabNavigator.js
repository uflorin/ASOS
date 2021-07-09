import Basket from '../screens/Basket';
import Favourites from '../screens/Favourites';
import HomePage from '../screens/Homepage';
import { Image } from 'react-native';
import ProductInfo from '../screens/ProductInfo';
import ProductListPage from '../screens/ProductListPage';
import Profile from '../screens/Profile';
import React from 'react';
import SearchScreen from '../screens/Search';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Home' component={HomePage} />
    <Stack.Screen name='ProductListPage' component={ProductListPage} />
    <Stack.Screen name='ProductInfo' component={ProductInfo} />
  </Stack.Navigator>
);

const SearchStack = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Search' component={SearchScreen} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'rgb(53,51,53)',
      inactiveTintColor: 'rgb(173,173,173)',
      showLabel: false,
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 1,
      },
    }}
  >
    <Tab.Screen
      name='Home'
      component={HomeStack}
      options={{
        tabBarLabel: 'HOME',
        tabBarIcon: ({ tintColor }) => <Image source={require('../assets/images/asos-logo.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />,
      }}
    />
    <Tab.Screen
      name='Search'
      component={SearchStack}
      options={{
        tabBarLabel: 'SEARCH',
        tabBarIcon: ({ tintColor }) => (
          <Image source={require('../assets/images/search.png')} style={{ height: 30, width: 30, resizeMode: 'contain', tintColor: tintColor }} />
        ),
      }}
    />
    <Tab.Screen
      name='Basket'
      component={Basket}
      options={{
        tabBarLabel: 'BASKET',
        tabBarIcon: ({ tintColor }) => <Image source={require('../assets/images/bag.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />,
      }}
    />
    <Tab.Screen
      name='Favourites'
      component={Favourites}
      options={{
        tabBarLabel: 'Favourites',
        tabBarIcon: ({ tintColor }) => (
          <Image source={require('../assets/images/favourite.png')} style={{ height: 24, width: 24, resizeMode: 'contain', tintColor: tintColor }} />
        ),
      }}
    />
    <Tab.Screen
      name='Profile'
      component={Profile}
      options={{
        tabBarLabel: 'PROFILE',
        tabBarIcon: ({ tintColor }) => <Image source={require('../assets/images/user.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />,
      }}
    />
  </Tab.Navigator>
);
