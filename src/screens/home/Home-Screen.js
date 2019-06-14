import React from "react";
import { connect } from "react-redux";
import { Button, View, Text } from "react-native";
import { withNotificationService } from "../../services/Notification-Service";
import Count from "./Count";

class HomeScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Home',
            headerRight:
                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    <Count />
                    <Button title="Inbox" style={styles.inbox} onPress={() => navigation.navigate('InboxScreen')} />
                </View>
        }
    };

    state = {
        title: 'This a local notification',
        body: 'This is a message from home screen',
        data: {
            key1: 'value1',
            key2: 'value2',
        },        
    }

    componentDidMount() {
        this._do();        
    }

    _do = async () => {
        const { notificationContext } = this.props;
        await notificationContext.subscribe(this._onNotificationReceived);
    }

    componentWillUnmount() {
        const { notificationContext } = this.props;
        notificationContext.unsubscribe(this.onNotificationReceived);
    }

    _onNotificationReceived = (notification) => {
        this.setState({ notification });
    }

    _gotoUserScreen = () => {
        this.props.navigation.navigate('UserScreen');
    }

    _showLocalNotifcation = () => {
        const { notificationContext } = this.props;
        const { title, body, data } = this.state;
        notificationContext.displayLocalNotification({ title, body, data })
    }

    render() {
        const { notificationContext } = this.props;
        const { notification } = this.state;

        return (
            <Layout
                fcmToken={notificationContext.fcmToken}
                notification={notification}
                showLocalNotifcation={this._showLocalNotifcation}
                gotoUserScreen={this._gotoUserScreen}
            />
        );
    }
}

const Layout = ({ fcmToken, notification, showLocalNotifcation, gotoUserScreen }) =>
    <View style={styles.container}>
        <View style={styles.topConatiner} >
            <Text>Welcome to React Native Notification Test!</Text>
            <Text>
                FCM Token is
            </Text>
            <Text>{fcmToken}</Text>
        </View>
        <View style={styles.notifcationConatiner} >
            {
                notification ?
                    <NotificationLayout notification={notification} />
                    : <Text>No notification received</Text>
            }

        </View>
        <View style={styles.buttonsContainer}>
            <Button title="Show a local notification" onPress={showLocalNotifcation} />
            <Button title="Go to User Screen" onPress={gotoUserScreen} />
        </View>
    </View>

const NotificationLayout = ({ notification }) =>
    <React.Fragment>
        <Text>New notification received: {notification.title}</Text>
        <Text>body: {notification.body}</Text>
        <Text>{notification.data && JSON.stringify(notification.data)}</Text>
    </React.Fragment>


const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15
    },
    topConatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notifcationConatiner: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    buttonsContainer: {
        width: '100%',
        height: '30%',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'gray'
    },
    inbox: {
        marginRight: 20
    },
}

export default connect(mapStateToProps, null)(withNotificationService(HomeScreen));