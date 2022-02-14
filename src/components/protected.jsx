import React from 'react'
import { Redirect, Route } from 'react-router-dom';

export default function Protected({ component: Cmp, ...rest }) {

    return <Route
        {...rest}
        render={(props) => (
            sessionStorage.getItem('authData') ? (
               <>
                   {sessionStorage.setItem('loginStatus','false')}
                   <Cmp {...props} />

                   </>
            ) :
                <Redirect to='/sign-in' />
        )} />
}
