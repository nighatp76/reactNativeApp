import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import ColorsValue from '../styles/Colors';
import DimensValue from "../styles/Dimens";

const TextField = props => (
  <View>
    <TextInput style={{...styles.input, ...props.style}}
      type={props.type}
      label={props.label}
      placeholder={props.placeholder}
      name={props.name}
      autoCorrect={props.autoCorrect}
      autoCapitalize={props.autoCapitalize}
      keyboardType={props.keyboardType}
      returnKeyType={props.returnKeyType}
      selectionColor={props.selectionColor}
      underlineColor={props.underlineColor}
      secureTextEntry={props.secureTextEntry}
      onChangeText={props.onChangeText}
      onBlur={props.onBlur}
      value={props.value}
      editable={props.editable}
      multiline={props.multiline}
      numberOfLines={props.numberOfLines}
      theme={{ colors: { placeholder: ColorsValue.color_white, text: ColorsValue.color_white } }}
    />
    {
      props.error ? <Text style={styles.error}>{props.error && <Text>{props.error}</Text>}</Text> : null
    }
  </View>
)

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'transparent',
    marginLeft: DimensValue.zero_px,
    paddingLeft: DimensValue.zero_px,
    height: DimensValue.fifty_px,
    marginBottom: DimensValue.fifteen_px,
    justifyContent: "center",
  },
  error: {
    color: ColorsValue.error_color,
    marginBottom: DimensValue.five_px,
    marginTop: DimensValue.minusTen_px,
    paddingLeft: DimensValue.ten_px
  }
})

export default TextField;