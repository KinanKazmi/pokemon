import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './apis/store';
import NavStack from './nav/NavigationStack';

const App = () => {
  return (
    <Provider store={store}>
      <NavStack />
    </Provider>
  );
};

export default App;