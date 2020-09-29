import React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';

const ListView = props => (

  <View>
    <List.Item
      style={props.style}
      title={props.title}
      left={props.left}
      right={props.right}
      onPress={props.onPress}
      titleStyle={props.title}
      description={props.description}
      descriptionNumberOfLines={props.descriptionNumberOfLines}
      titleNumberOfLines={props.titleNumberOfLines}
      descriptionStyle={props.descriptionStyle}
      titleStyle={props.titleStyle}
    />
  </View>
)

export default ListView;