import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Popup from 'react-popup';

const App = ({ children }) => (
  <div>
    <Header />
    <Popup />

    <main>
      {children}
    </main>

    <Footer />
  </div>
);
Popup.alert('I am alert, nice to meet you');
export default App;
