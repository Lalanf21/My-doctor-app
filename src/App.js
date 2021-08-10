import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import Router from './router/index';

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
    // <NavigationContainer>
    //   <Router />
    // </NavigationContainer>
    // <GetStarted />
  );
}

const styles = StyleSheet.create({});
