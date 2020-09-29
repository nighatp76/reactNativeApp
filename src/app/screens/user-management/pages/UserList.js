import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Provider, Portal, FAB } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import StatusBarColor from '../../../components/status_bar/StatusBarColor';
import ColorsValue from '../../../styles/Colors';
import DimensValue from "../../../styles/Dimens";
import { UserListStyles } from "../css/UserListStyles";
import ListView from '../../../base_components/ListView';
import LoadingController from "../../../utils/LoadingController";
import { Limit } from "../../../utils/constants";
import AsyncStorageItem from "../../../services/AsyncStorage";
import StorageConstants from "../../../utils/StorageConstants";

//var userData = require("../../../assets/mock-data/userList-mock-data");

export default class UserList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            loading: false,
            scrollEnabled: true,
            count: Limit,
        }
    }


    componentDidMount() {
        this.props.navigation.addListener('focus', async (e) => {
            this.getUsers();
            this.forceUpdate();
        });
    }


    /** 
     * List item seprator 
     */

    FlatListItemSeparator = () => {
        return (
            <View style={UserListStyles.seprator} />
        );
    }


    /**
     * Method to get the User Lists
     */

    getUsers = async () => {
        try {
            await this.setState({
                loading: true,
                dataSource: []
            })
            AsyncStorageItem.getData(StorageConstants.UserData).then(async (data) => {
                console.log(data)
                await this.setState({
                    loading: false,
                    dataSource: data
                })
                this.forceUpdate();
            });
        } catch (error) {
            ToastController.showToastTop(error)
        } finally {
            await this.setState({
                loading: false
            })
        }
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBarColor backgroundColor={ColorsValue.color_black} barStyle="light-content" />
                <LinearGradient start={{ x: DimensValue.zero_px, y: DimensValue.one_px }} end={{ x: DimensValue.onePointFive_px, y: DimensValue.zero_px }}
                    colors={[ColorsValue.gradientColor_1, ColorsValue.gradientColor_2, ColorsValue.gradientColor_3, ColorsValue.gradientColor_4]} style={UserListStyles.SplashScreen_RootView}>
                    <View style={UserListStyles.container}>
                        <View style={UserListStyles.infoWrapper}>
                            <View style={UserListStyles.infoHeading}>
                                <Text style={UserListStyles.infoHeadingText}> USER MANAGEMENT </Text>
                            </View>
                        </View>
                        <View style={UserListStyles.sepratorMargin}>

                            <FlatList
                                scrollEnabled={this.state.scrollEnabled}
                                data={this.state.dataSource}
                                keyExtractor={item => item.id ? item.id.toString() : item.id}
                                ItemSeparatorComponent={this.ItemSeparator}
                                onScrollEndDrag={() => console.log(" *********end")}
                                onScrollBeginDrag={() => console.log(" *******start")}
                                initialNumToRender={this.state.count}
                                maxToRenderPerBatch={1}
                                onEndReachedThreshold={0.5}
                                onEndReached={({ distanceFromEnd }) => {
                                    console.log(" ***************** " + distanceFromEnd);
                                }}
                                renderItem={({ item, index }) => (
                                    // rendered Item starts here
                                    <View style={UserListStyles.listWrapper}>
                                        <ListView
                                            title={item.name}
                                            description={item.email}
                                            descriptionStyle={UserListStyles.description}
                                            titleNumberOfLines={1}
                                            descriptionNumberOfLines={1}
                                            titleStyle={UserListStyles.listContainer}
                                            style={UserListStyles.listView}
                                        />
                                    </View>

                                    // rendered Item ends here
                                )}
                            />

                        </View>

                        <Provider>
                            <Portal>
                                <FAB
                                    style={UserListStyles.fab}
                                    icon={"plus"}
                                    onPress={() => this.props.navigation.navigate('AddUser')}
                                    color={ColorsValue.color_white}
                                />
                            </Portal>
                        </Provider>
                    </View>
                </LinearGradient>
                {this.state.loading ? (
                    <LoadingController animating={this.state.loading} />
                ) : null}
            </View>
        );
    }
}
