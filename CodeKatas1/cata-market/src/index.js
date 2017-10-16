import * as  React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

import configureStore from './utils/configureStore';
import state from './redux/initialState';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

const store = configureStore(state);
//const history = syncHistoryWithStore(browserHistory, store);


render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
//registerServiceWorker();
