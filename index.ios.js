// I'm targetting IOS here

// Import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/album-list';

 // Create a Component
const App = () => {
  const { indexViewStyle } = style;
  return (
    <View style={indexViewStyle}>
      <Header headerText={'Albums You Guy My Guy'} />
      <AlbumList />
    </View>
  );
};

const style = {
  indexViewStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  }
};

// Render it to a device Screen
AppRegistry.registerComponent('ReactNativeAlbum', () => App);
