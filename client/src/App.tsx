import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from '.';
import LoginForm from "./components/LoginForm"
import ListComponent from './components/ListComponent';

import ChangePass from './components/ChangePass';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Navigate from './components/Navigate';


function App() {
  const {store} = useContext(Context);
  const navigate = useNavigate()
  useEffect(() => {
    if(localStorage.getItem('token')) {
      store.checkAuth()
    } 
  }, [])

  if(store.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Navigate/>
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/login' element={<Login /> } />
        <Route path='/register' element={<Register /> } />
      </Routes>
    </div>
  );
}

export default observer(App);
