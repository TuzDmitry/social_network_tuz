import React from 'react';
import AppMainComponent from "./App";
import ReactDOM from 'react-dom'

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppMainComponent />, div);
  ReactDOM.unmountComponentAtNode(div)
});