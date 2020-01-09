import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import style from './style';

export default function Button({ children }) {
  return <View style={style.main}>{children}</View>;
}

Button.defaultProps = {
  children: null,
};

Button.propTypes = {
  children: PropTypes.node,
};
