import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import ColorsValue from '../../app/styles/Colors';

const LoadingController = (props) => {
    return (
        <View style={styles.loader}>
            <ActivityIndicator size="large" color={ColorsValue.button_color} animating={props.animating}/>
        </View>
    )
}

const styles = StyleSheet.create({
    loader: {
        backgroundColor: ColorsValue.overlayBlack_BG,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1
    }
})

export default LoadingController;