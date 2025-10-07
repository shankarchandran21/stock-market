import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navitems from './navitems'
import UserDropdown from './userDropdown'

const Header = () => {
  return (
    <header className='sticky top-0 header'>
        <div className='container header-wrapper'>
            <Link href={"/"}>
                <Image src="/assets/icons/logo.svg" alt='Signalist logo' width={140} height={32} className='h-8 w-auto cursor-pointer' />
            </Link>
            <nav className='hidden sm:block'>
                <Navitems/>
            </nav>
            <UserDropdown/>
        </div>
    </header>
  )
}

export default Header
