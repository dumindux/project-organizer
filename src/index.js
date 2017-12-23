import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {loadProjects} from './actions/projectActions';
import './styles/styles.css';

const store = configureStore();
store.dispatch(loadProjects());

render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
