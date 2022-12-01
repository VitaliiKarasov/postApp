import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from '.';
import LoginForm from "./components/LoginForm"
import ListComponent from './components/ListComponent';


function App() {
  const {store} = useContext(Context);

  useEffect(() => {
    if(localStorage.getItem('token')) {
      store.checkAuth()
    } 
  }, [])

  if(store.isLoading) {
    return <div>Loading...</div>
  }

  if (!store.isAuth) {
    return (
       <LoginForm/>
    )
  }


  return (
    <div>
      {/* <h1>{store.isAuth ? `User is authorized ${store.user.email}`: 'You must be authorized'}</h1>
      <h1>{store.user.isActivated ? 'Account confirmed' : 'Confirm your account'}</h1> */}
      <button onClick={() => store.logout()}>Logout</button>
      <button onClick={() => store.deleteUser(store.user.id)}>Delete</button>
      <ListComponent/>
    </div>
  );
}

export default observer(App);
