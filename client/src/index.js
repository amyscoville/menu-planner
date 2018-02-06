import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { Provider, store } from 'react-redux';

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>

, document.getElementById('root'));