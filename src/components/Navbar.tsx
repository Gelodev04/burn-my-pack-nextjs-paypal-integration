"use client"
import React from 'react'
import { Squeeze as Hamburger } from 'hamburger-react'
import { useState } from 'react'


export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Toggle the menu visibility when the hamburger is clicked
  const handleHamburgerClick = () => {
    setIsMenuOpen(prevState => !prevState)
  }

  const menuItems = [
    {
        label: "How It Work",
        link: "/"
    },
    {
        label: "The Science",
        link: "/"
    },
    {
        label: "Get Started",
        link: "/"
    },
    {
        label: "Contact",
        link: "/"
    }
  ]

  return (
    <header className='bg-white h-[65px] flex items-center w-full'>
        <nav className='p-3 w-full'>
                {/* Mobile */}
            <div className='flex justify-between items-center'>
                <h1 className='text-[1.3rem] font-[700]'>Burn my pack</h1>
                <Hamburger toggled={isMenuOpen} toggle={handleHamburgerClick} size={21}/>
            </div>

            {/* mobile menu */}
            {isMenuOpen && (
          <div className='absolute z-50 bg-white w-full left-0'>
            <ul className='text-center divide-y divide-gray-200'>
              {menuItems.map((item, index) => (
              
                    <li key={index} className=' text-[15px]'><a className='w-full block  py-3 hover:bg-gray-100 ' href={item.link}>{item.label}</a></li>
            
              ))}
            </ul>
          </div>
        )}
        </nav>
    </header>
  )
}
