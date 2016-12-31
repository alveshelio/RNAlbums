import React from 'react';
import { Linking, Image, Text, View } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import BuyButton from './Buton';

const AlbumDetail = (props) => {
  const {
    title,
    artist,
    url,
    image,
    thumbnail_image
  } = props.album;

  const {
    thumbnailStyle,
    headerTextStyle,
    thumbnailContainerStyle,
    headerContentStyle,
    albumCover
  } = styles;

  function handleBuyAlbum() {
    Linking.openURL(url);
  }

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>

        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={albumCover}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <BuyButton handleBuyButton={handleBuyAlbum}>
          Buy {title} Album
        </BuyButton>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
    borderRadius: 5
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
  },
  albumCover: {
    flex: 1,
    width: null,
    height: 300
  }
};

export default AlbumDetail;
