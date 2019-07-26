console.log('app.js running');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const state = store.getState();
console.log('state', state);

const jsx = (
    // provide store to all of the components
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// render app only once
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('logged in', user);
        
        // dispatch login action
        store.dispatch(login(user.uid));

        // fetch data from db and render app 
            renderApp();
            // redirect if on login page only!!
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        
    } else {
        console.log('logged out');
        // dispatch logout action
        store.dispatch(logout());

        // render app
        renderApp();
        
        // redirect to login page
        history.push('/');
    }
});