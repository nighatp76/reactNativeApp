import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard, SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native';
import { IconButton } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient';
import StatusBarColor from '../../../components/status_bar/StatusBarColor';
import ColorsValue from '../../../styles/Colors';
import DimensValue from "../../../styles/Dimens";
import { AddUserStyles } from "../css/AddUserStyles";
import TextField from '../../../base_components/TextField';
import validate from '../../../components/ValidationWrapper';
import LoadingController from "../../../utils/LoadingController";
import ButtonField from '../../../base_components/ButtonField';
import AlertController from "../../../utils/AlertController";
import AsyncStorageItem from "../../../services/AsyncStorage";
import StorageConstants from "../../../utils/StorageConstants";

export default class AddUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            name: '',
            nameError: '',
            email: '',
            emailError: '',
            empCode: '',
            empCodeError: '',
            mobNo: '',
            mobNoError: '',
            addParams: [],
            dataSource: []
        }

    }

    componentDidMount() {
        this.props.navigation.addListener('focus', e => {
            this.getUsers();
            this.forceUpdate();
        });
    }


    /** 
    * Method to navigate back screen
    */

    async goBack() {
        const { navigation } = this.props;
        let alertValue = await AlertController.confirmAlert('Exit', 'Do you want to exit.');
        if (alertValue) {
            navigation.goBack();
        }
    }

    /**
    * Method to get the User Lists
    */

    getUsers = async () => {
        try {
            AsyncStorageItem.getData(StorageConstants.UserData).then(async (data) => {
                console.log(data)
                await this.setState({
                    dataSource: data
                })
            });
        } catch (error) {
            ToastController.showToastTop(error)
        } finally {
            await this.setState({
                loading: false
            })
        }
    }

    /** 
   * Method to handle Validations of fields
   */

    async validateRegister() {
        const nameError = validate('name', this.state.name)
        const emailError = validate('email', this.state.email)
        const empCodeError = validate('emp-code', this.state.empCode)
        const mobNoError = validate('mobile-number', this.state.mobNo)

        await this.setState({
            nameError: nameError === null ? '' : nameError,
            emailError: emailError === null ? '' : emailError,
            empCodeError: empCodeError === null ? '' : empCodeError,
            mobNoError: mobNoError === null ? '' : mobNoError
        })

        if (!nameError && !emailError && !empCodeError && !mobNoError) {
            this.handleSubmit()
        }
    }


    /**
     *  Method to get validation messages 
    */
    async getValidations() {
        const nameError = validate('name', this.state.name)
        const emailError = validate('email', this.state.email)
        const empCodeError = validate('emp-code', this.state.empCode)
        const mobNoError = validate('mobile-number', this.state.mobNo)

        await this.setState({
            nameError: nameError === null ? '' : nameError,
            emailError: emailError === null ? '' : emailError,
            empCodeError: empCodeError === null ? '' : empCodeError,
            mobNoError: mobNoError === null ? '' : mobNoError
        })
    }

    /** 
     * Method to adding new user
     */

    handleSubmit = async () => {
        try {
            this.setState(() => ({
                loading: true,
                addParams: [{
                    id: this.guidGenerator(),
                    name: this.state.name,
                    email: this.state.email,
                    employeeCode: this.state.empCode,
                    mobile: this.state.mobNo,
                }]
            }))
            console.log(this.state.addParams)
            let userDataValue = [...this.state.dataSource, ...this.state.addParams]
            userDataValue.sort((a, b) => a.name.localeCompare(b.name))
            const { navigation } = this.props;
            await AsyncStorageItem.setData(StorageConstants.UserData, userDataValue)
            navigation.goBack();
        } catch (error) {
            ToastController.showToastTop(error)
        } finally {
            await this.setState({
                loading: false
            })
        }
    }

    /** 
     * Generate Unique Id
     */

    guidGenerator() {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBarColor backgroundColor={ColorsValue.color_black} barStyle="light-content" />
                <LinearGradient start={{ x: DimensValue.zero_px, y: DimensValue.one_px }} end={{ x: DimensValue.onePointFive_px, y: DimensValue.zero_px }}
                    colors={[ColorsValue.gradientColor_1, ColorsValue.gradientColor_2, ColorsValue.gradientColor_3, ColorsValue.gradientColor_4]} style={AddUserStyles.SplashScreen_RootView}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS == "ios" ? "padding" : "height"}
                        style={AddUserStyles.container}>

                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View>
                                <View style={AddUserStyles.infoWrapper}>
                                    <View style={AddUserStyles.infoHeading}>
                                        <IconButton
                                            icon="arrow-left"
                                            color={ColorsValue.color_white}
                                            size={20}
                                            style={AddUserStyles.iconContainer}
                                            onPress={() => this.goBack(this)}
                                        />
                                        <Text style={AddUserStyles.infoHeadingText}> Add User </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <ScrollView>
                                <SafeAreaView style={AddUserStyles.formContainer}>

                                    <TextField
                                        name='name'
                                        type='flat'
                                        autoCorrect={false}
                                        autoCapitalize='none'
                                        returnKeyType="next"
                                        label='Name'
                                        placeholder='Enter name'
                                        underlineColor={ColorsValue.placeholder_color}
                                        onChangeText={async (value) => await this.setState({ name: value })}
                                        onBlur={async () => {
                                            await this.setState({
                                                nameError: validate('name', this.state.name)
                                            })
                                            this.getValidations();
                                        }}
                                        error={this.state.nameError} />

                                    <TextField
                                        name='email'
                                        type='flat'
                                        autoCorrect={false}
                                        autoCapitalize='none'
                                        returnKeyType="next"
                                        label='Email'
                                        keyboardType='email-address'
                                        placeholder='Enter email'
                                        underlineColor={ColorsValue.placeholder_color}
                                        onChangeText={async (value) => await this.setState({ email: value.trim() })}
                                        onBlur={async () => {
                                            await this.setState({
                                                emailError: validate('email', this.state.email)
                                            })
                                            this.getValidations();
                                        }}
                                        error={this.state.emailError} />

                                    <TextField
                                        name='emp_code'
                                        type='flat'
                                        autoCorrect={false}
                                        autoCapitalize='none'
                                        returnKeyType="next"
                                        keyboardType='number-pad'
                                        label='Emp code'
                                        placeholder='Enter emp code'
                                        underlineColor={ColorsValue.placeholder_color}
                                        onChangeText={async (value) => await this.setState({ empCode: value.trim() })}
                                        onBlur={async () => {
                                            await this.setState({
                                                empCodeError: validate('emp-code', this.state.empCode)
                                            })
                                            this.getValidations();
                                        }}
                                        error={this.state.empCodeError} />

                                    <TextField
                                        name='mob_no'
                                        type='flat'
                                        keyboardType='number-pad'
                                        autoCorrect={false}
                                        autoCapitalize='none'
                                        returnKeyType="go"
                                        label='Mob No'
                                        placeholder='Enter mob no'
                                        underlineColor={ColorsValue.placeholder_color}
                                        onChangeText={async (value) => await this.setState({ mobNo: value.trim() })}
                                        onBlur={async () => {
                                            await this.setState({
                                                mobNoError: validate('mobile-number', this.state.mobNo)
                                            })
                                            this.getValidations();
                                        }}
                                        error={this.state.mobNoError} />

                                    <ButtonField onPress={this.validateRegister.bind(this)} buttonText='Submit'></ButtonField>
                                </SafeAreaView>
                            </ScrollView>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                </LinearGradient>

                {this.state.loading ? (
                    <LoadingController animating={this.state.loading} />
                ) : null}

            </View>
        );
    }
}