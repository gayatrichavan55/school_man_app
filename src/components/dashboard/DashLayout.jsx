import React from 'react'
import SideNave from './SideNave'
import { Outlet } from 'react-router-dom'



export default function DashLayout() {
  return (
    <div className='flex'>
     <div className='bg-red-100 w-1/5 h-screen p-6' >
     <SideNave/>
     </div>
     <div className='bg-orange-50 w-4/5 p-6'>
        <Outlet/>
     </div>
    </div>
  )
}
