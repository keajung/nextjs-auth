"use client"

import React from 'react'
import Navbar from '../components/Navbar'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

function WelcomePage() {

    const { data: session } = useSession();
    // console.log("session is ", session)
    if(!session) redirect("/login");


    return (
        <div>
            <Navbar session={session} />
            {/* ส่ง session ไปที่ Navbar เพื่อทำให้ signin button and register button hide */}
            <div className='container mx-auto py-5'>
                <h3 className='text-3xl my-3'>Welcome {session?.user?.name} to NextAuth!</h3>
                <p>Your email: {session?.user?.email}</p>

                <hr className='my-5' />
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus nesciunt reprehenderit sit explicabo aperiam molestiae harum sunt, quasi est consectetur voluptate optio magni architecto sequi provident sapiente tempore nihil non.</p>
            </div>
        </div>
    )
}

export default WelcomePage