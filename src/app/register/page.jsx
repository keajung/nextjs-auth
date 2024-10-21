"use client" //!! told nextjs this component use for client and ability is can use hook useState and effectState

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

function RegisterPage() {

    //สร้าง state ไว้เก็บ 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const {data: session} = useSession();
    if(session) redirect("/welcome");

    //every web app that have form to store data and Click need to create function handleSubmit
    const handleSubmit = async (e) => {

        e.preventDefault(); //ใช้เพื่อกันหน้า form ที่กำลังกรอกข้อมูลมัน refresh
        if (password != confirmPassword) {
            setError("Passoword do not match!!!!");
            console.log(error);

            return; //ให้หยุดการทำงาน
        }
        if (!name || !email || !password || !confirmPassword) {
            setError("Please complete your inputs");
            console.log(error);
            return; //ให้หยุดการทำงาน
        }
        
        try {

            const resCheckUser = await fetch("http://localhost:3000/api/checkUser",{
                method: "POST", //ใช้ POST เพราะจะส่งค่าจากอินพุท เช็คใน file route 
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email})

            })

            const {user} = await resCheckUser.json();
            //!pattern code check duplicate username
            if(user){
                setError("This user already exists!");
                setSuccess("");

                return;
            }

            const res = await fetch("http://localhost:3000/api/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                }),
            })
            if (res.ok) {
                const form = e.target;
                setSuccess("Registration successful!");
                setError("");
                form.reset();
            } else {
                setSuccess("");
                console.log("Failed to register");
            }
        } catch (error) {
            console.error("Error during registration: " + error);
        }

    }

    return (
        <div>
            <Navbar />
            <div className='container mx-auto py-5'>
                <h3>Register Page</h3>
                <hr className='my-3'></hr>

                <form onSubmit={handleSubmit}>

                    {error && (

                        <div className='bg-red-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2'>
                            {error}
                        </div>
                    )}
                    {success && (

                        <div className='bg-green-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2'>
                            {success}
                        </div>
                    )}
                    <input onChange={(e) => setName(e.target.value)} className="block bg-gray-300 p-2 my-2 rounded-md" type="text" placeholder='Enter your name' />
                    <input onChange={(e) => setEmail(e.target.value)} className="block bg-gray-300 p-2 my-2 rounded-md" type="email" placeholder='Enter your email' />
                    <input onChange={(e) => setPassword(e.target.value)} className="block bg-gray-300 p-2 my-2 rounded-md" type="password" placeholder='Enter your password' />
                    <input onChange={(e) => setConfirmPassword(e.target.value)} className="block bg-gray-300 p-2 my-2 rounded-md" type="password" placeholder='Confirm your password' />
                    <button type="submit" className="bg-green-400 rounded-md text-white p-2">Sign Un</button>
                </form>
                <hr className='my-3'></hr>
                <p>Already have an account? go to <Link href="/login" className="text-blue-500 hover:underline"> Log In </Link> Page</p>


            </div>
        </div>
    )
}

export default RegisterPage