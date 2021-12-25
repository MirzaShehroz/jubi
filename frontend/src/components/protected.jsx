import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import {Notifications} from '../helpers/helpersfunctions'

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
