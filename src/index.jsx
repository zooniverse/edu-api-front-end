import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import oauth from 'panoptes-client/lib/oauth';

import Main from './components/Main';
import config from './config';
import configureStore from './store';

import './styles/main.styl';

const store = configureStore();
const history = createHistory();

// TODO: Make app ID dynamic between env
oauth.init(config.dev.panoptesAppId)
  .then(() => {
    ReactDOM.render((
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Main} />
        </Router>
      </Provider>),
      document.getElementById('root'),
    );
  });
