import React from 'react';
import { Image, Text, View } from 'react-native';

import Card from './card';
import CardSection from './card-section';
import Button from './button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;
  const {
    headerContentStyles, thumbnailStyles, thumbnailContainerStyles,
    headerTextStyles, albumImageStyles
  } = styles;
  return (<Card>
    <CardSection>
      <View style={thumbnailContainerStyles}>
        <Image
          style={thumbnailStyles}
          source={{ uri: thumbnail_image }}
        />
      </View>
      <View style={headerContentStyles}>
        <Text style={headerTextStyles}>{title}</Text>
        <Text>{artist}</Text>
      </View>
    </CardSection>
    <CardSection>
      <Image
        style={albumImageStyles}
        source={{ uri: image }}
      />
    </CardSection>
    <CardSection>
      <Button onPress={() => console.log('hello i am rendering', title)} />
    </CardSection>
  </Card>);
};

  const styles = {
    headerContentStyles: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    headerTextStyles: {
      fontSize: 18
    },
    thumbnailStyles: {
      height: 50,
      width: 50
    },
    thumbnailContainerStyles: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
    albumImageStyles: {
      height: 250,
      flex: 1,
      width: null
    }
  };

export default AlbumDetail;
