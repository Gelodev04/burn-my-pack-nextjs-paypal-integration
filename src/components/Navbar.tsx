"use client"
import React from 'react'
import { Squeeze as Hamburger } from 'hamburger-react'


export const Navbar = () => {
  return (
    <header className='bg-white h-[65px] flex items-center w-full'>
        <nav className='p-3 w-full'>
                {/* Mobile */}
            <div className='flex justify-between items-center'>
                <h1 className='text-[1.3rem] font-[700]'>Burn my pack</h1>
                <Hamburger size={21}/>
            </div>

            {/* Desktop */}
        </nav>
    </header>
  )
}
