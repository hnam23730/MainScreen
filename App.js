import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Shop from './Screen/Shop';
import Bag from './Screen/Bag';
import Dress from './Screen/Dress';
import Search from './Screen/Search';


// Create a Drawer Navigator
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Shop" component={Shop} />
        <Drawer.Screen options={{title:"Shopping Bag"}} name="Bag" component={Bag} />
        <Drawer.Screen options={{title:"Dresses"}} name="Dress" component={Dress} />
        <Drawer.Screen options={{title:"Search"}} name="Search" component={Search} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
