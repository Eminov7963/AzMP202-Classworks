import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../../Layouts/Client/client'
const ClientLayout  = () => {
  return (
    <>
        <Header/>
        <Outlet />
    </>
  )
}

export default ClientLayout 