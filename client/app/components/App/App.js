import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// import Prompt from '../popup/popup';

const App = ({ children }) => (
  <div>
    <main>
    		
      {children}
    </main>
  </div>
);

export default App;