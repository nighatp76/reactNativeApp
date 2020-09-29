import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorsValue from '../styles/Colors';
import DimensValue from "../styles/Dimens";

const ErrorMessage = ({ errorValue }) => (

  <View>
    <Text style={styles.errorText}>{errorValue === null ? '' : errorValue}</Text>
  </View>
)

const styles = StyleSheet.create({
  errorText: {
    color: ColorsValue.error_color,
    textAlign: 'center',
    fontWeight: DimensValue.fontWeight_700,
    marginBottom: DimensValue.five_px
  }
})

export default ErrorMessage;
