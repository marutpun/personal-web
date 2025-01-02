---
layout: ../../layouts/BlogLayout.astro
title: How I Built My Blog
author: Marut
description: 'ย้ายเว็บบล็อกมาที่แห่งใหม่'
pubDate: 2024-12-27
tags: ['blog']
---

อ้างอิงจากเว็บบล็อกของ Josn W Comeau ชาวแคนาดา (www.joshwcomeau) ที่สร้างเว็บบล็อกขึ้นมา โดยปรกติแล้วเราจะเขียนบทความปล่อยลงสู่ Blogger ที่มีเจ้าของโดย Google ข้อดีก็คือง่าย สามารถล็อกอิน Google แล้วก็เข้าไปเขียนบทความได้เลยโดยที่ไม่ต้องวุ่นวาย มีระบบจัดการบทความและจัดการหน้าตา เลย์เอาท์อย่างชัดเจน

แต่ข้อเสียก็มีเหมือนกัน การจัดการหน้าตาหรือเลย์เอาต์ของ Blogger จะใช้ XML ทั้งหมด แล้วโค้ด (snippets) ก็ยุ่งยากมาก ๆ แล้วก็ใช้ syntax ไม่เหมือนชาวบ้าน จะแก้โค้ดจะต้องใช้เวลานานมาก ๆ

ก็เลยไปอ่านเจอบทความของ Josh W Comeau ที่แกเขียนเอาไว้ในหน้า [How I Build My Blog](https://www.joshwcomeau.com/blog/how-i-built-my-blog-v2) ไว้ดังนี้

1. All of my blog posts are written using MDX, so I needed first-class MDX support.
2. My other main project, my course platform, uses Next.js. I wanted as little context-switching friction as possible.
3. I wanted to get a bit more experience with the latest React features, things like Server Components and Actions.

ถ้าเงื่อนไขมีเพียงข้อเดียว สามารถใช้ Astro ได้เลย แต่กลายเป็นว่ามี 2 เงื่อนไข ก็เลยต้องไปใช้ NextJS แทนนั่นเอง

แต่เราก็ไม่ได้เขียนบล็อกจนแหวกแนวขนาดนั้น ก็เลยจบย้ายมาทำที่เว็บตัวเองแทน แน่นอนก็มีทั้งข้อดีและข้อเสีย

ข้อดีก็คือ สามารถจัดการทุกอย่างได้ง่ายและปรับแต่งได้เอง แต่ข้อเสียก็คือ ถ้าไปอยู่ข้างนอก ร้านอินเทอร์เน็ต ก็ต้องดาวน์โหลด NodeJS แล้วก็ clone ไฟล์จาก github มาลงที่เครื่องแล้วก็สร้าง branch ใหม่ แล้วก็อัพโหลดกลับขึ้นบนเว็บอีก เสียเวลาในการ build ไฟล์นาน

กำลังจะย้ายไปเขียนบน Contentful แต่ Contentful ไม่ฟรี มี API จำกัด (เดือนละ 1 ล้าน)

ค่อยคิดดูอีกทีก็แล้วกัน
