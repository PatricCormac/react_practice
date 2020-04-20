import * as serviceWorker from './serviceWorker';
import store from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';

let renderTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </BrowserRouter>, document.getElementById('root'));
}

renderTree(store.getState())

store.subscribe(renderTree)

serviceWorker.unregister();
