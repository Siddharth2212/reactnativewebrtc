import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import VideocallScreen from './screens/VideocallScreen';

const store = ConfigureStore();
export default function App() {
  return <Provider store={store}>
          <VideocallScreen />
        </Provider>
}