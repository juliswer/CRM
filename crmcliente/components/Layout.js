import React from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>CRM - Administracion de clientes</title>
               <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
               <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
            </Head>
            <div className="bg-gray-200 min-h-screen">
                <div className="flex min-h-screen">

                <Sidebar />
                {children}
                </div>
            </div>
        </>
    );
}
 
export default Layout;