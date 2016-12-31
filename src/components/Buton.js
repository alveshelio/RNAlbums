import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const BuyButton = (props) => {
  const { buttonStyle, buttonTextStyle } = styles;

  const { handleBuyButton } = props;

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={handleBuyButton}
    >
      <Text style={buttonTextStyle}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  }
};

export default BuyButton;
