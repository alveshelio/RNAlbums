import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const BuyButton = (props) => {
  function buyAlbum() {
    console.log('url', props.url);
  }

  return (
    <TouchableOpacity>
      <Text style={styles.buttonStyle} onPress={buyAlbum}>
        Buy Album
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
  }
};

export default BuyButton;
