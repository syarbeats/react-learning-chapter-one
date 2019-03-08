import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RightContent from './RightContent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('left-side'));
ReactDOM.render(<RightContent />, document.getElementById('right-side'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
