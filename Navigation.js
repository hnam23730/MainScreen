
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dress from './Screen/Dress';
import Bag from './Screen/Bag';

const Stack = createStackNavigator();

function Navigation() {
  return (
      <Stack.Navigator>
          <Stack.Screen  options={{headerShown: false }} name="Dress" component={Dress} />
          <Stack.Screen options={{headerShown: false}} name="Bag" component={Bag} />
      </Stack.Navigator>
  );
}

export default Navigation;
