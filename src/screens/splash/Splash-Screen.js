import React from "react";
import { View, Text } from "react-native";

export default class SplashScreen extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('AppFlow');
        }, 1000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    This is Splash, welcome
                </Text>
            </View>
        );
    }
}

styles = {
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'white'
    },
    text: {
        fontWeight: '900'
    }
}