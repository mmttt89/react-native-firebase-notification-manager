import React, { Component } from 'react';
import NotificationServiceProvider from "./src/services/Notification-Service";
import Root from "./src";

export default class App extends Component {
  render() {
    return (
      <NotificationServiceProvider>
        <Root />
      </NotificationServiceProvider>
    );
  }
}