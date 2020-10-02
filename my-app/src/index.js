import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/index';
import * as serviceWorker from './serviceWorker';

import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000;
    overflow: hidden;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
