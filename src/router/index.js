import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../Pages/Splash/index';
import GetStarted from '../Pages/GetStarted/index';
import Register from '../Pages/Register/index';
import Login from '../Pages/Login/index';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
