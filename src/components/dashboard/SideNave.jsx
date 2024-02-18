import React from 'react'
import { Link } from 'react-router-dom'


export default function SideNave() {
  return (
    <div>
      <nav>
        <ul className='space-y-4'>
            <li className='hover:text-xl duration-200 hover:border-b-2 border-blue-950'><Link>Home</Link></li>
            <li className='hover:text-xl duration-200 hover:border-b-2 border-blue-950'><Link>Students</Link></li>
            <li className='hover:text-xl duration-200 hover:border-b-2 border-blue-950'><Link>Teachers</Link></li>
        </ul>
      </nav>
    </div>
  )
}
