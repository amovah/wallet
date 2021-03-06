import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import 'Root/styles/main.less';

import store from './store';
import App from './components';
import history from './history';
import 'rc-dropdown/assets/index.css';
import checkToken from './actions/wallet/checkToken';

(async () => {
  await checkToken();

  render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    global.document.getElementById('root'),
  );
})();

if (module.hot) {
  module.hot.accept();

  module.hot.addStatusHandler((status) => {
    if (status === 'prepare') {
      console.clear();
    }
  });
}
