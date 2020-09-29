import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import ColorsValue from '../styles/Colors';
import DimensValue from "../styles/Dimens";

const TitleField = props => (
  <View>
    <Title style={styles.titleText}>{props.titleText}</Title>
  </View>
)

const styles = StyleSheet.create({
  titleText: {
    color: ColorsValue.color_white,
    marginTop: DimensValue.five_px,
    fontSize: DimensValue.eighteen_px,
    fontWeight: DimensValue.fontWeight_100
  }
})

export default TitleField;