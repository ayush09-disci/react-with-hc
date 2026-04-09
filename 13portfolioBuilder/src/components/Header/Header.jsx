import React from 'react'
import Logo from '../Logo'
import LogoutBtn from './LogoutBtn'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name : "Login",
      slug: "/login",
      active : !authStatus,
    },
    {
      name : "Signup",
      slug: "/login",
      active : !authStatus,
    },
    {
      name : "Home",
      slug: "/",
      active : authStatus,
    },
    {
      name : "Add Portfolio",
      slug: "/add-portfolio",
      active : authStatus,
    },
    {
      name : "Profile",
      slug: "/profile",
      active : authStatus,
    },
  ]


  return (
    <header className=' w-full py-3 shadow bg-blue-980'>
        <nav className='flex justify-evenly'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='80px'/>
              </Link>
          </div>
          <ul className='flex justify-evenly'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock ml-6 px-6 py-2 duration-200 bg-blue-500 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
    </header>
  )
}

export default Header