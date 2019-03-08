import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './component/Header';
import LeftContent from './App';
import RightContent from './component/RightContent';
import Counter from './component/Counter';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<LeftContent />, document.getElementById('left-side'));
ReactDOM.render(<RightContent />, document.getElementById('right-side'));
ReactDOM.render(<Counter />, document.getElementById('counter'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
