import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../Views/Main';
import { Details } from '../Views/Details';

export type RootStackParamList = {
  Main: undefined;
  Details: any;
};

const Stack = createStackNavigator();

const NavStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={Main} />
        <Stack.Screen
          name='Details'
          component={Details}
          options={({ route }) => ({
            title: route?.params?.pokemon?.name || 'Pokemon Details'
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavStack;
