import React from 'react';
import ReactDOM from 'react-dom';
import { assert } from 'chai';
import App from './App';

describe('snapmdAdmin actions tests', () => {
  let store;
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
});