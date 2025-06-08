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

import CategoriaFormList from '../views/categoria/CategoriaFormList'
import CategoriaFormStore from '../views/categoria/CategoriaFormStore'
import CategoriaFormUpdate from '../views/categoria/CategoriaFormUpdate'
import CategoriaFormShow from '../views/categoria/CategoriaFormShow'
import CategoriaFormDestroy from '../views/categoria/CategoriaFormDestroy'

import CategoriaDaComunidadeFormList from     '../views/categoriaDaComunidade/CategoriaDaComunidadeFormList.jsx'
import CategoriaDaComunidadeFormStore from    '../views/categoriaDaComunidade/CategoriaDaComunidadeFormStore'
import CategoriaDaComunidadeFormUpdate from   '../views/categoriaDaComunidade/CategoriaDaComunidadeFormUpdate'
import CategoriaDaComunidadeFormShow from     '../views/categoriaDaComunidade/CategoriaDaComunidadeFormShow'
import CategoriaDaComunidadeFormDestroy from  '../views/categoriaDaComunidade/CategoriaDaComunidadeFormDestroy'

import ComentarioFormList from '../views/comentario/ComentarioFormList'
import ComentarioFormStore from '../views/comentario/ComentarioFormStore'
import ComentarioFormUpdate from '../views/comentario/ComentarioFormUpdate'
import ComentarioFormShow from '../views/comentario/ComentarioFormShow'
import ComentarioFormDestroy from '../views/comentario/ComentarioFormDestroy'

import FollowFormList from '../views/follow/FollowFormList'
import FollowFormStore from '../views/follow/FollowFormStore'
import FollowFormUpdate from '../views/follow/FollowFormUpdate'
import FollowFormShow from '../views/follow/FollowFormShow'
import FollowFormDestroy from '../views/follow/FollowFormDestroy'

import PostFormList from '../views/post/PostFormList'
import PostFormStore from '../views/post/PostFormStore'
import PostFormUpdate from '../views/post/PostFormUpdate'
import PostFormShow from '../views/post/PostFormShow'
import PostFormDestroy from '../views/post/PostFormDestroy'


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

      {/* categorias */}
        <Route path="/categoria/index" element={<CategoriaFormList />} />
        <Route path="/categoria/store" element={<CategoriaFormStore />} />
        <Route path="/categoria/update/:id" element={<CategoriaFormUpdate />} />
        <Route path="/categoria/show/:id" element={<CategoriaFormShow />} />
        <Route path="/categoria/destroy/:id" element={<CategoriaFormDestroy />} />

      {/* categorias da comunidade */}
        <Route path="/categoriadacomunidade/index" element={<CategoriaDaComunidadeFormList />} />
        <Route path="/categoriadacomunidade/store" element={<CategoriaDaComunidadeFormStore />} />
        <Route path="/categoriadacomunidade/update/:id" element={<CategoriaDaComunidadeFormUpdate />} />
        <Route path="/categoriadacomunidade/show/:id" element={<CategoriaDaComunidadeFormShow />} />
        <Route path="/categoriadacomunidade/destroy/:id" element={<CategoriaDaComunidadeFormDestroy />} />

      {/* comentarios */}
        <Route path="/comentario/index" element={<ComentarioFormList />} />
        <Route path="/comentario/store" element={<ComentarioFormStore />} />
        <Route path="/comentario/update/:id" element={<ComentarioFormUpdate />} />
        <Route path="/comentario/show/:id" element={<ComentarioFormShow />} />
        <Route path="/comentario/destroy/:id" element={<ComentarioFormDestroy />} />

      {/* follows */}
        <Route path="/follow/index" element={<FollowFormList />} />
        <Route path="/follow/store" element={<FollowFormStore />} />
        <Route path="/follow/update/:id" element={<FollowFormUpdate />} />
        <Route path="/follow/show/:id" element={<FollowFormShow />} />
        <Route path="/follow/destroy/:id" element={<FollowFormDestroy />} />

      {/* posts */}
        <Route path="/post/index" element={<PostFormList />} />
        <Route path="/post/store" element={<PostFormStore />} />
        <Route path="/post/update/:id" element={<PostFormUpdate />} />
        <Route path="/post/show/:id" element={<PostFormShow />} />
        <Route path="/post/destroy/:id" element={<PostFormDestroy />} />

      </Route>
    </Routes>
  )
}

export default Rotas