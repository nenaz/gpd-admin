import React from 'react';
import ReactDOM from 'react-dom';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import Framework7React from 'framework7-react';
import { F7App, View } from 'framework7-react';
import 'framework7/css/framework7.bundle.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux';
import { BasicPage } from './pages/basic-page';
import { f7params } from './routes';
import { store } from './store';
Framework7.use(Framework7React);

ReactDOM.render(
  (
    <Provider store={store}>
      <F7App params={f7params}>
        <View main url="/">
          <BasicPage />
        </View>
      </F7App>
    </Provider>
  ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
