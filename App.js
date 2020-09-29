import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import NavStack from "./src/app/navigation/Route";
import { LogBox } from 'react-native';

/**Deafult theme for paper UI */
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#e49929',
    accent: 'yellow',
  },
};


export default class App extends Component {

  constructor() {
    super();
    LogBox.ignoreAllLogs(); //Ignore all log notifications
  }

  render() {
    return (
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <NavStack />
        </NavigationContainer>
      </PaperProvider>
    );
  }
}
