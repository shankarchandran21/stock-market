import Header from '@/components/header'
import React from 'react'

function Layout({children}:Readonly<{children:React.ReactNode}>) {
  return (
    <main className='min-h-screen text-gray-400'>
        {/* Header */}
        <Header/>
        <div className='container py-10'>
                {children}
        </div>
      
    </main>
  )
}

export default Layout
