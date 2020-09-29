import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Divider } from 'react-native-paper';
import ColorsValue from '../styles/Colors';
import DimensValue from "../styles/Dimens";

const Separator = props => (

  <View>
    <Divider style={styles.divider} />
  </View>
)

const styles = StyleSheet.create({
  divider: {
    backgroundColor: ColorsValue.color_white,
    height: DimensValue.one_px,
    marginVertical: DimensValue.ten_px,
  }
})

export default Separator;