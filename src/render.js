import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import {addPost, inputPostText} from './redux/state';
import App from './App';

export let renderTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} inputPostText={inputPostText} />
    </BrowserRouter>, document.getElementById('root'));
}