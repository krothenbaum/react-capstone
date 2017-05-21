import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';
import Home from './components/Home/Home';

import HelloWorld from './components/HelloWorld/HelloWorld';

import './styles/styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/helloworld" component={HelloWorld}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));

//import 'babel-polyfill';
//import React from 'react';
//import ReactDOM from "react-dom";
import {createStore} from 'redux'; 
import allReducers from './reducers'; 
const store = createStore(allReducers);
import {Provider} from 'react-redux';
//import App from './components/App/App'; 



console.log('store')
//console.log(createStore);
console.log(store);
/*
render((
    <Provider store = {store}>
		<App />
    </Provider>),
		
    document.getElementById('app')
);*/
