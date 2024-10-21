import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import bcrypt from 'bcryptjs'

export async function POST(req) {

    try {
        const { name, email, password } = await req.json();

        //! ต้องสร้างตัวแปร password ก่อนเพราะต้อง Hashed หรือการเข้ารหัส
        
        const hashedPassword = await bcrypt.hash(password, 10);

        await connectMongoDB();
        await User.create({ name, email, password: hashedPassword });

        console.log("name is ", name);
        console.log("email is ", email);
        console.log("password is ", password);

        return NextResponse.json({ message: "User registered" }, { status: 201 });

    } catch (err) {
        return NextResponse.json({ message: "An error occured while registrating the user.", err: err }, { status: 500 });
    }
}