// Import libraries for making components
import React from 'react';
import {
  Text,
  View
} from 'react-native';


// Make a component
const Header = (props) => {
  // Deconstructing styles
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        {props.headerText}
      </Text>
    </View>
  );
};

// Create Styles
const styles = {
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    height: 60,
    paddingTop: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  }
};

// Make the component available to other parts of the app
export default Header;
