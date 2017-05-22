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

import SimpleMapExample from './components/Map/Map';

import HelloWorld from './components/HelloWorld/HelloWorld';

import './styles/styles.scss';

// render((
//   <Router>
//     <App>
//       <Switch>
//         <Route exact path="/" component={Home}/>
//         <Route path="/helloworld" component={HelloWorld}/>
//         <Route component={NotFound}/>
//       </Switch>
//     </App>
//   </Router>
// ), document.getElementById('app'));
render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={SimpleMapExample}/>
        <Route path="/helloworld" component={HelloWorld}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));