import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { onPress, children } = props;
  const { buttonStyles, buttonTextStyles } = styles;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyles}
    >
      <Text style={buttonTextStyles}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyles: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  buttonTextStyles: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default Button;
