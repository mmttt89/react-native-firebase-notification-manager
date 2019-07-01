
import NavigationService from './Navigation-Service';

export default class NotificationManager {
    onForegroundNotificationRecevied = (action, notification) => {
        action({ ...notification, unRead: true });
    }

    onBackgroundNotificationRecevied = (action, notification) => {
        NavigationService.navigate('InboxScreen');
        action({ ...notification, unRead: true });        
    }
}
