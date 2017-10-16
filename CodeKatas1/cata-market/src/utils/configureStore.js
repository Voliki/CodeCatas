import {createStore, applyMiddleware, compose} from 'redux';

import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from '../redux/rootReducer';

const routermiddleware = routerMiddleware(browserHistory);

export default function configureStore(initialState) {
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk, routermiddleware)
    );
  }