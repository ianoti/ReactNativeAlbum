// I'm targetting IOS here

// Import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/album-list';

 // Create a Component
const App = () =>
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums You Guy My Guy'} />
      <AlbumList />
    </View>;

// Render it to a device Screen
AppRegistry.registerComponent('ReactNativeAlbum', () => App);
