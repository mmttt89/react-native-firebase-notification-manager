import React from "react";
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from "./screens/Home-Screen";
import UserScreen from "./screens/User-Screen";
import SplashScreen from "./screens/Splash-Screen";

const AppNavigator = createStackNavigator(
    {
        HomeScreen,
        UserScreen
    });

const FlowNavigator = createSwitchNavigator(
    {
        AppFlow: AppNavigator,
        SplashScreen,
    }, {
        initialRouteName: 'SplashScreen'
    });

const AppContainer = createAppContainer(FlowNavigator);

export default class Root extends React.Component {
    render() {
        return <AppContainer />;
    }
}

