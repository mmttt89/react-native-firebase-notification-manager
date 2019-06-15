import React from "react";
import { connect } from "react-redux";
import firebase from 'react-native-firebase';
import hoistNonReactStatic from 'hoist-non-react-statics';
import uuidv4 from "uuid/v4";
import { putMessageIntoInbox } from "@Actions/Messages";
import NotificationManager from "./Notification-Manager";

const ReactContext = React.createContext();

class NotificationServiceProvider extends React.Component {

    static Context = ReactContext;

    _notificationManager = new NotificationManager();

    state = {
        fcmToken: '',
        hasPermission: false
    }

    checkPermission = async () => {
        const enabled = await firebase.messaging().hasPermission();
        this.setState({ hasPermission: enabled }, () => {
            if (enabled) {
                this.getToken();
            } else {
                this.requestPermission();
            }
        });
    }

    requestPermission = async () => {
        try {
            await firebase.messaging().requestPermission();
            this.setState({ hasPermission: true }, () => {
                this.getToken();
            });
        } catch (error) {
            // User has rejected permissions
            this.setState({ hasPermission: false });
        }
    }

    getToken = async () => {
        const fcmToken = await firebase.messaging().getToken();
        this.setState({ fcmToken });
    }

    async componentDidMount() {
        this.checkPermission();
        this.createNotificationListeners();
    }

    componentWillUnmount() {
        this.onNotificationListener();
    }

    createNotificationListeners = async () => {
        /***************
         * When the application is on foreground this will be called
         */
        this.onNotificationListener =
            firebase
                .notifications()
                .onNotification(receivecNotification => {
                    const notification = {
                        title: receivecNotification.title,
                        body: receivecNotification.body,
                        data: receivecNotification.data
                    }
                    this.listeners.map(listener => listener(notification));                    
                    this._notificationManager.onForegroundNotificationRecevied(this.props.putMessageIntoInbox, notification);
                });

        /***************
         * When the application is in background this will be called
         */
        const notificationOpen =
            await firebase
                .notifications()
                .getInitialNotification();

        // App was opened by a notification        
        if (notificationOpen) {
            // Get the action triggered by the notification being opened
            const action = notificationOpen.action;
            // Get information about the notification that was opened
            const notification = {
                title: notificationOpen.notification.data.title,
                body: notificationOpen.notification.data.body,
                data: notificationOpen.notification.data
            };
            this._notificationManager.onBackgroundNotificationRecevied(this.props.putMessageIntoInbox, notification);
        }
    }

    listeners = [];
    _subscribe = (listener) => {
        this.listeners.push(listener);
    }

    _unsubscribe = (listener) => {
        this.listeners = this.listeners.filter(l => l != listener);
    }

    _localNotification = ({ title, body, data }) => {
        const LOCAL_CHANNEL_ID = "notif-local-channel-id";

        const notification = new firebase.notifications.Notification()
            .setNotificationId(uuidv4())
            .setTitle(title || 'My App')
            .setBody(body)
            .setData(data);

        // Build a channel
        const channel = new firebase.notifications
            .Android
            .Channel(LOCAL_CHANNEL_ID, 'Local notifications', firebase.notifications.Android.Importance.Max)
            .setDescription('Non remote app notifications');

        // Create the channel
        firebase.notifications().android.createChannel(channel);

        notification
            .android.setChannelId(LOCAL_CHANNEL_ID)
            .android.setSmallIcon('ic_launcher');

        firebase.notifications().displayNotification(notification);
    }

    render() {
        const { fcmToken } = this.state;
        return (
            <ReactContext.Provider
                value={{
                    fcmToken: fcmToken,
                    displayLocalNotification: this._localNotification,
                    subscribe: this._subscribe,
                    unsubscribe: this._unsubscribe,
                }}>
                {this.props.children}
            </ReactContext.Provider>
        )
    }
}

export const withNotificationService = (WrappedComponent) => {

    class HOC extends React.Component {
        render() {
            return (
                <ReactContext.Consumer>
                    {
                        context =>
                            <WrappedComponent
                                {...this.props}
                                notificationContext={context}
                            />
                    }
                </ReactContext.Consumer>
            );
        }
    }

    return hoistNonReactStatic(HOC, WrappedComponent);
}

const mapStateToProps = ({ messages }) => ({
    messages: messages.messages
})

export default connect(mapStateToProps, { putMessageIntoInbox })(NotificationServiceProvider);