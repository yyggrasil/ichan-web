import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { Outlet } from 'react-router-dom'

export default function Layout(){
  return (
    <div>
        <DefaultLayout>
            <Outlet/> 
        </DefaultLayout>
    </div>
  )
}