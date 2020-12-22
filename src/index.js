import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './container/App.js';
import { searchRobot } from './reducers.js'
import 'tachyons';

const store = createStore(searchRobot);

ReactDOM.render(<Provider store={store}>
                  <App/>
                 </Provider>
	             ,document.getElementById('root'));


reportWebVitals();
