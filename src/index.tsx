import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';
import './styles/main.css';

ReactDom.render(
  <App kek="123" />,
  document.getElementById('root'),
);
