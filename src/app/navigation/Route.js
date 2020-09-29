import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddUser from "../screens/user-management/pages/AddUser";
import UserList from '../screens/user-management/pages/UserList';

const Stack = createStackNavigator();

/** 
 * Method to handle navigation stack 
 */

export default function NavStack() {
    return (
        <Stack.Navigator initialRouteName="UserList"
            screenOptions={({ navigation, route }) => ({
                headerShown: false
            })}
        >
            <Stack.Screen
                name="AddUser"
                component={AddUser}
            />

            <Stack.Screen
                name="UserList"
                component={UserList}
            />
        </Stack.Navigator>
    );
}

