import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import ColorsValue from '../styles/Colors';
import DimensValue from "../styles/Dimens";

const ButtonField = props => (
  <View>
    <TouchableOpacity style={styles.buttonContainer}
      onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.buttonText}</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: ColorsValue.button_color,
    paddingVertical: DimensValue.ten_px,
    marginVertical: DimensValue.ten_px,
    width: DimensValue.fifty_percent,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: ColorsValue.color_white,
    textAlign: 'center',
    fontWeight: DimensValue.fontWeight_700
  }
})

export default ButtonField;