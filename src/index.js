import React from "react";
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from "@Screens/home/Home-Screen";
import UserScreen from "@Screens/user/User-Screen";
import InboxScreen from "@Screens/inbox/Inbox-Screen";
import SplashScreen from "@Screens/splash/Splash-Screen";

const AppNavigator = createStackNavigator(
    {
        HomeScreen,
        UserScreen,
        InboxScreen
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

