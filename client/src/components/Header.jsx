import { Button, Navbar, TextInput, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'
import React from 'react'

export default function Header() {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 rounded-lg text-white'>Film</span>
            Ledger
        </Link>
        <form>
            <TextInput 
                type='text'
                placeholder='Search...'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
            />
        </form>
        <Button className='w-14 h-10 lg:hidden' color='gray' pill>
            <AiOutlineSearch />
        </Button>
        <div className="flex gap-2 md:order-2">
            <Button className='w-14 h-10 hidden sm:inline' color='gray' pill>
                <FaMoon />
            </Button>
            <Link to="/sign-in">
                <Button className='bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'>Sign In</Button>
            </Link>
            <NavbarToggle />
        </div>
        <NavbarCollapse>
                <NavbarLink active={path === "/"} as={'div'}>
                    <Link to="/">
                        Home
                    </Link>
                </NavbarLink>
                <NavbarLink active={path === "/about"} as={'div'}>
                <Link to="/about">
                        About
                </Link>
                </NavbarLink>
                <NavbarLink active={path === "/projects"} as={'div'}>
                <Link to="/projects">
                        Projects
                </Link>
                </NavbarLink>
            </NavbarCollapse>
    </Navbar>
  )
}
