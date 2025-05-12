import React from 'react'
import { Routes, Route } from 'react-router-dom'


import Login from '../views/Login/Login'
import Signup from '../views/Login/Signup'
import ForgotPassword from '../views/Login/ForgotPassword'
import UpdatePassword from '../views/Login/UpdatePassword'
import Layout from './Layout'
import Dashboard from '../components/Dashboard'

import UserFormList from '../views/user/UserFormList'
import UserFormStore from '../views/user/UserFormStore'
import UserFormUpdate from '../views/user/UserFormUpdate'
import UserFormShow from '../views/user/UserFormShow'
import UserFormDestroy from '../views/user/UserFormDestroy'

import ComunidadeFormList from '../views/comunidade/ComunidadeFormList'
import ComunidadeFormStore from '../views/comunidade/ComunidadeFormStore'
import ComunidadeFormUpdate from '../views/comunidade/ComunidadeFormUpdate'
import ComunidadeFormShow from '../views/comunidade/ComunidadeFormShow'
import ComunidadeFormDestroy from '../views/comunidade/ComunidadeFormDestroy'


const Rotas = () => {
  return (
    <Routes>
      {/* Páginas de login e princial */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/update-password" element={<UpdatePassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route element={<Layout />}>

        {/* usuarios */}
        <Route path="/user/index" element={<UserFormList />} />
        <Route path="/user/store" element={<UserFormStore />} />
        <Route path="/user/update/:id" element={<UserFormUpdate />} />
        <Route path="/user/show/:id" element={<UserFormShow />} />
        <Route path="/user/destroy/:id" element={<UserFormDestroy />} />

        {/* comunidades */}
        <Route path="/comunidade/index" element={<ComunidadeFormList />} />
        <Route path="/comunidade/store" element={<ComunidadeFormStore />} />
        <Route path="/comunidade/update/:id" element={<ComunidadeFormUpdate />} />
        <Route path="/comunidade/show/:id" element={<ComunidadeFormShow />} />
        <Route path="/comunidade/destroy/:id" element={<ComunidadeFormDestroy />} />


      </Route>




    </Routes>
  )
}

export default Rotas