import { StyleSheet, Platform } from 'react-native';
import DimensValue from "../../../styles/Dimens";
import ColorsValue from '../../../styles/Colors';

export const AddUserStyles = StyleSheet.create(
    {
        SplashScreen_RootView: {
            justifyContent: 'center',
            flex: DimensValue.one_px,
            margin: DimensValue.zero_px,
            position: 'absolute',
            width: DimensValue.hundred_percent,
            height: DimensValue.hundred_percent,
        },
        container: {
            flex: 1,
            width: '100%',
            marginTop: (Platform.OS === 'ios') ? DimensValue.twenty_px : DimensValue.forty_px
        },
        infoWrapper: {
            paddingHorizontal: DimensValue.ten_px,
        },
        infoHeading: {
            width: DimensValue.hundred_percent,
            paddingHorizontal: DimensValue.twelve_px,
            position: 'relative',
            backgroundColor: ColorsValue.overlayBlack_BG,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        infoHeadingText: {
            color: ColorsValue.color_white,
            fontWeight: 'bold',
            fontSize: DimensValue.eighteen_px,
            padding: DimensValue.ten_px,
            textAlign: "center"
        },
        iconContainer: {
            position: 'absolute',
            left: DimensValue.zero_px,
            top: DimensValue.one_px
        },
        formContainer: {
            padding: DimensValue.twelve_px,
            paddingBottom: DimensValue.five_px,
        },
        pencil: {
            position: 'absolute',
            bottom: -5,
            right: -5,
            zIndex: 1,
            backgroundColor: ColorsValue.overlayBlack_BG,
            borderRadius: 100
        },
        profileContainer: {
            display: 'flex',
            width: DimensValue.hundred_percent,
            alignItems: 'center',
            padding: 1,
            justifyContent: 'center',
            height: 160
        },
        profileWrapper: {
            height: 120,
            width: 120,
        },
        avatarIcon: {
            height: 50,
            width: 50,
        },
        fab: {
            position: 'absolute',
            margin: 16,
            right: 0,
            bottom: 0,
          }
    })