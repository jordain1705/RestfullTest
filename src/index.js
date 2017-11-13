import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware} from 'redux'

import allReducers from './reducers';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import GamesPage from './components/Gamespage';



const store = createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)));

console.log(store.getState())

ReactDOM.render(
      <BrowserRouter><Provider store = {store}>
        <Switch>

          <Route path="/games" component={GamesPage}/>
<Route path="/" component={App}/>
        </Switch>
       </Provider></BrowserRouter>
, document.getElementById('root'));;
