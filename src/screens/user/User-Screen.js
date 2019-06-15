import React from "react";
import { Button, View } from "react-native";
import NotificationServiceProvider from "@Services/Notification-Service";

class UserScreen extends React.Component {

    static navigationOptions = () => ({ title: 'Users' });
    static contextType = NotificationServiceProvider.Context;

    state = {
        title: 'This a local notification',
        body: 'This is a message from users screen',
        data: {
            key3: 'value3',
            key4: 'value4',
        }
    }
    
    _displayLocalNotification = () => {
        const { title, body, data } = this.state;
        this.context.displayLocalNotification({ title, body, data });
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Show a local notification" onPress={this._displayLocalNotification} />                
            </View>
        );
    }
}
export default UserScreen;

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }    
}
