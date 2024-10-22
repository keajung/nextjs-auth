# NEXTJS AUTH  LogIn/Register PROJECT ✨
Welcome to NEXTJS AUTH LogIn/Register PROJECT ! 
<div align="center">
    <img src="https://i.pinimg.com/originals/6f/c4/f4/6fc4f4e1a193a8d9250acefdf6aa58ca.gif" width="350"/>
</div>

<!-- <img align='right' src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif" width="230"> -->

##  คำอธิบาย
โปรเจคนี้ทำเพื่อศึกษาการทำของระบบ LogIn Register และการตรวจสอบสิทธิ์ผู้ใช้ โดยใช้ไลบรารี NextAuth
โดยใช้ฐานข้อมูล MongoDB 🥭

#### ภายในโปรเจคประกอบไปด้วยฟังก์ชันดังนี้
1. สมัครสมาชิก
2. เข้าสู่ระบบในบทบาทของ "user"

## ความต้องการระบบ
#### Frameworks:
  - Next.js: เป็น React framework สำหรับการพัฒนาเว็บแอปพลิเคชันแบบ Full-stack 

#### Runtime Environment:
  -  Node.js: เป็น JavaScript runtime environment ที่ทำให้สามารถรันโค้ด JavaScript บนเซิร์ฟเวอร์ได้ โดยไม่ต้องอาศัยเบราว์เซอร์ 
#### Authentication Library:
  - NextAuth: เป็นไลบรารีที่ใช้ในการจัดการ การตรวจสอบสิทธิ์ (authentication) บนแอปพลิเคชัน Next.js รองรับการล็อกอินผ่าน OAuth Providers เช่น Google, Facebook
#### Database
  - MongoDB: เป็นฐานข้อมูลแบบ NoSQL ที่ใช้การเก็บข้อมูลในรูปแบบเอกสาร (document-oriented) ซึ่งแต่ละเอกสารจะถูกจัดเก็บในรูปแบบ JSON 
#### Cryptography Library:
  - bcrypt: เป็นไลบรารีที่ใช้ในการ แฮช (hash) รหัสผ่านอย่างปลอดภัย ใช้สำหรับเข้ารหัสรหัสผ่านก่อนเก็บลงฐานข้อมูล และใช้สำหรับตรวจสอบรหัสผ่านเมื่อผู้ใช้ล็อกอิน โดยใช้ salt และการปรับรอบการแฮชเพื่อป้องกันการโจมตีแบบ brute force

## วิธีการติดตั้ง

1. เปิด Terminal และใช้คำสังด้านล่างเพื่อสร้าง Folder
```bash
git clone https://github.com/keajung/nextjs-auth.git
```
2. เข้าถึง Folder ที่ถูกสร้างโดยคำสั่งที่ 1
```bash
cd nextjs-auth
```
3.  ติดตั้งแพ็กเกจหรือไลบรารีที่จำเป็นสำหรับโปรเจ็กต์ใน Node.js โดย npm (Node Package Manager) เป็นตัวจัดการแพ็กเกจของ Node.js 
```bash
npm install
```
4.  ติดตั้งไลบรารี Mongoose ในโปรเจ็กต์ Node.js ของคุณ โดยใช้ npm (Node Package Manager) ซึ่งเป็นตัวจัดการแพ็กเกจสำหรับ Node.js
```bash
npm i next-auth mongoose bcryptjs
```
5. ใช้คำสั่งเพื่อเปิดโปรแกรม Visual Studio
```bash
code .
```
6. ใช้คำสั่งเพื่อรันดูหน้าเว็บ
```bash
npm run dev
```

## ผู้เขียน

[Wasika Selanon]

## แลกเปลี่ยนไอเดีย

หากมีไอเดียใหม่ ๆ หรือการปรับปรุง ยินดีต้อนรับการร่วมมือ! 😉

---
