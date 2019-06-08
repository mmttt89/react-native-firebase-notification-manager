export default class NotificationManager {

    onBackgroundNotificationRecevied = (action, notification) => {
        console.log('onBackgroundNotificationRecevied >>>> Backgroud:', action, notification);
    }

    onForegroundNotificationRecevied = (notification) => {
        console.log('onForegroundNotificationRecevied >>>> Foreground:', notification);
    }
}