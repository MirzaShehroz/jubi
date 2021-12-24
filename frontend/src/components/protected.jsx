import React from 'react'
import { Redirect, Route } from 'react-router-dom';

export default function Protected({ component: Cmp, ...rest }) {
    return <Route
        {...rest}
        render={(props) => (
            localStorage.getItem('sign-in') ? (
                <Cmp {...props} />
            ) :
                <Redirect to='/sign-in' />
        )} />
}
