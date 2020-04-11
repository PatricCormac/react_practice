import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  {id: 1, postContent: 'Installed Node.js', likes: 3},
  {id: 2, postContent: 'Installed create-react-app', likes: 5},
  {id: 3, postContent: 'Launched a project', likes: 8},
  {id: 4, postContent: 'Learning React', likes: 1},
]

let dialogs = [
  {id: 1, name: 'Oleg'},
  {id: 2, name: 'Petr'},
  {id: 3, name: 'Max'},
  {id: 4, name: 'Misha'},
  {id: 5, name: 'Nikita'},
  {id: 6, name: 'Tolya'}
]

let messages = [
  {id: 1, message: 'hello'},
  {id: 2, message: 'hi'},
  {id: 3, message: 'how are you?'},
  {id: 4, message: 'I\'m fine'},
  {id: 5, message: 'I\'m happy for you'},
  {id: 6, message: 'Thanks'}
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
