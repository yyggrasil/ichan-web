import React from 'react'
import { Routes, Route } from 'react-router-dom'

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
      <Route path="/user/index" element={<UserFormList />} />
      <Route path="/user/store" element={<UserFormStore />} />
      <Route path="/user/update/:id" element={<UserFormUpdate />} />
      <Route path="/user/show/:id" element={<UserFormShow />} />
      <Route path="/user/destroy/:id" element={<UserFormDestroy />} />

      <Route path="/comunidade/index" element={<ComunidadeFormList />} />
      <Route path="/comunidade/store" element={<ComunidadeFormStore />} />
      <Route path="/comunidade/update/:id" element={<ComunidadeFormUpdate />} />
      <Route path="/comunidade/show/:id" element={<ComunidadeFormShow />} />
      <Route path="/comunidade/destroy/:id" element={<ComunidadeFormDestroy />} />


    </Routes>
  )
}

export default Rotas