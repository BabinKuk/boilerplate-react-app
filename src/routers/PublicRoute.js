import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest // contains all that is not destructured
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            // redirect to dahboard
            <Redirect to="/dashboard" />
        ) : (
            <Component {...props} />
        )
    )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid // true if auth, false if not auth 
});

export default connect(mapStateToProps)(PublicRoute)