"use client"

import React from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

function Navbar({ session }) {
    return (
        <nav className='bg-[#333] text-white p-5'>
            <div className="container mx-auto items-center">
                <div className='flex justify-between'>
                    <div>
                        <Link href="/">NextAuth</Link>
                    </div>

                    {/*check session ที่ส่งเข้ามาว่า มีมั้ย ถ้ามีแปลว่ามีการล็อคอิน 
                    แสดงแค่ปุ่ม logout แต่ถ้าไม่มีแปลว่าไม่ได้ล็อคอินจะแสดงปุ่ม signIn register*/}

                    <ul className='flex'>
                        {!session ? (
                            <>
                                <li className='mx-3'><Link href="/login">Sign In</Link></li>
                                <li className='mx-3'><Link href="/register">Sign Up</Link></li>
                            </>
                        ) : (
                            <>
                                <li className='mx-3'><a href="/welcome" className='bg-gray-500 border py-2 px-3 rounded-md text-lg my-2'>Profile</a></li>
                                <li className='mx-3'><a onClick={() => signOut()} className='bg-red-500 border py-2 px-3 rounded-md text-lg my-2'>Logout</a></li>

                            </>
                        )}

                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
