"use client"

import Image from "next/image";
import Navbar from "./components/Navbar";
import { useSession } from "next-auth/react";
import Link from "next/link";
export default function Home() {

  const { data: session } = useSession();

  return (
    <main>
      <Navbar session={session} />
      <div className="container mx-auto my-3">
        <h3>Welcome to my homepage</h3>
        <hr className="my-3" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quasi dolorum fugiat sequi deleniti autem, maxime quidem earum repellendus corrupti, maiores eius delectus explicabo, magnam beatae harum veritatis iste. Cumque.</p>

      </div>
    </main>

  );
}