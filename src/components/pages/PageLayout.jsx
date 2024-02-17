import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from './Headers'


export default function PageLayout() {
  return (
    <div>
      <Headers/>
      <Outlet/>
    </div>
  )
}
