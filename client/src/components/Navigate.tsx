import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Context } from '..';


const Navigate: FC = () => {
    const location = useLocation()

    const { store } = useContext(Context);

    if (!store.isAuth) {
        return (
            <div>
                {location.pathname === '/login' ? <Link to='/register'>
                    Register
                </Link>
                    : null}
                {location.pathname === '/register' ? <Link to='/login'>
                    Login
                </Link>
                    : null}
            </div>
        )
    }

    return (
        <div>
            <Link to='login' onClick={() => store.logout()}>Logout</Link>
            <Link to='login' onClick={() => store.deleteUser(store.user.id)}>Delete Account</Link>
        </div>
    )
}
export default observer(Navigate);