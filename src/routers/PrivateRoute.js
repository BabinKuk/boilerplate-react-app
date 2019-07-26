import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest // contains all that is not destructured
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            // display if user is authenticated
            <div>
                <Header />
                <Component {...props} />
            </div>
        ) : (
            // redirect to login
            <Redirect to="/" />
        )
    )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid // true if auth, false if not auth 
});

export default connect(mapStateToProps)(PrivateRoute)