import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { Entypo, Feather, EvilIcons, FontAwesome } from '@expo/vector-icons';

import Home from './pages/Home';
import Finances from './pages/Finances';
import Discover from './pages/Discover';
import Profile from './pages/Profile';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      tabBarOptions={{
        style: {
          height: 50,
          marginBottom: 10,
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 22,
          height: 22,
        },
        inactiveBackgroundColor: '#fff',
        inactiveTintColor: '#B1B1B1',
        activeTintColor: '#CC092F',
      }}
      >
        <Tab.Screen name="Home" component={Home} options={{
          title: 'HOME',
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="home" color={color} size={size} />
          }
        }}/>

        <Tab.Screen name="Finances" component={Finances} options={{
          title: 'FINANÇAS',
          tabBarIcon: ({ color, size }) => {
            return <Feather name="trending-up" color={color} size={size} />
          }
        }}/>

        <Tab.Screen name="Discover" component={Discover} options={{
          title: 'DESCOBRIR',
          tabBarIcon: ({ color }) => {
            return <EvilIcons name="eye" color={color} size={30} />
          }
        }}/>

        <Tab.Screen name="Profile" component={Profile} options={{
          title: 'PERFIL',
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="user-o" color={color} size={22} />
          }
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;