import { StyleSheet, Platform } from 'react-native';
import DimensValue from "../../../styles/Dimens";
import ColorsValue from '../../../styles/Colors';

export const UserListStyles = StyleSheet.create(
    {
        SplashScreen_RootView:
        {
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
        sepratorMargin: {
            marginLeft: DimensValue.eleven_px,
            marginRight: DimensValue.ten_px,
            marginTop: DimensValue.five_px,
            marginBottom: DimensValue.sixty_px
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
        listWrapper: {
            width: DimensValue.hundred_percent,
            borderBottomColor: '#fff',
            borderBottomWidth: 1,
            borderTopColor: '#fff',
            borderTopWidth: 1,
        },
        listView:{
            width: DimensValue.hundred_percent,
            height: 90,
            display: 'flex',
            justifyContent: 'center'
        },

        listContainer: {
            color: ColorsValue.color_white,            
            fontSize: DimensValue.eighteen_px,
            fontWeight: DimensValue.fontWeight_800,
            width: DimensValue.hundred_percent
            
        },
        description: {
            color: ColorsValue.color_white,            
            fontSize: DimensValue.sixteen_px,
            fontWeight: DimensValue.fontWeight_400,
            width: DimensValue.hundred_percent,
        },
        iconLeft: {
            backgroundColor: ColorsValue.button_color,
            borderRadius: 100,
        },
        iconRight: {
            
        },
        fab: {
            width: DimensValue.sixty_px,
            height: DimensValue.sixty_px,
            borderRadius: DimensValue.sixty_px,
            position: "absolute",
            bottom: DimensValue.twentyFive_px,
            right: DimensValue.twentyFive_px,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: ColorsValue.button_color,
        }
    })