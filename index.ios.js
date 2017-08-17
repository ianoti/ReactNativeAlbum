// I'm targetting IOS here

// Import a library to help create a Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

 // Create a Component
const App = () => (
  <Header headerText={'Albums You Guy My Guy'} />
);

// Render it to a device Screen
AppRegistry.registerComponent('ReactNativeAlbum', () => App);
