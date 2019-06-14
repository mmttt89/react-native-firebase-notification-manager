import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@Store/configure-store.dev.js';
import NotificationServiceProvider from "./src/services/Notification-Service";
import Root from "./src";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NotificationServiceProvider>
            <Root />
          </NotificationServiceProvider>
        </PersistGate>
      </Provider>
    );
  }
}