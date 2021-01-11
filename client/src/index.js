import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import AppAuth from './auth/components/App/App';
import AppProducts from './products/components/App/App';
import reduser from './products/reducers/reducer';

const store = createStore(reduser);   //main store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppAuth />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);