import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/main';
import ConfigureStore from './store/configure-store';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import Main from './components/main';
import Menu from './components/menu';
import MenuAjax from './components/menu-ajax';
import TestAjax from './components/test-ajax';

const store = ConfigureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}/>
      <Route path="/menu" component={Menu}/>
      <Route path="/menu_ajax" component={MenuAjax}/>
      <Route path="/test_ajax" component={TestAjax}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);