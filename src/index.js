import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {CartContextProvider} from './contexts/CartContext';
import {ThemeContextProvider} from './contexts/ThemeContext';
import {AuthContextProvider} from './contexts/AuthContext';


ReactDOM.render(
  <React.StrictMode>

    <CartContextProvider>
      <ThemeContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ThemeContextProvider>
    </CartContextProvider>
    
  </React.StrictMode>,

  document.getElementById('root')
);

