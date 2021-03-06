import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux';
import './Styles/src.css';

store.subscribe(() => console.log(store.getState()));


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);