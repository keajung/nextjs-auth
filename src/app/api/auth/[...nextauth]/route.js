import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "../../../../../lib/mongodb";
import User from "../../../../../models/user";
import bcrypt from "bcryptjs";

const authOptions = {

    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {},
            async authorize(credentials, req) {

                //get value from user entered credentials
                const {email, password} = credentials;
                try {
                    //connect to MongoDB
                    await connectMongoDB(); 
                    const user = await User.findOne({ email}); 
                    //ไปหาข้อมูลในฐานข้อมูลด้วยอีเมลที่กรอกไว้แล้วจะได้เป็น object 
                    //เก็บไว้ใน user เวลาใช้แค่เรียก user.email / user.password

                    if(!user){
                        return null; //skip login
                    }
                    const passwordMatch = await bcrypt.compare(password, user.password); 
                    
                    if(!passwordMatch){
                        return null; //skip login
                    }

                    return user;


                } catch (err) {
                    console.log(err);
                }


            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login"
    }

}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; 