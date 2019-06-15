
export default class NotificationManager {
    onForegroundNotificationRecevied = (action, notification) => {
        action({ ...notification, unRead: true });
    }

    onBackgroundNotificationRecevied = (action, notification) => {
        action({ ...notification, unRead: true });
        console.log(notification)
    }
}