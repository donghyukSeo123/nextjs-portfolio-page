'use client'

import React from 'react';
import { Card, CardBody, Typography, Avatar } from '@material-tailwind/react';

export default function AboutMe() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          About  Me
        </Typography>
      </div>
      <Card className="w-full p-8 flex flex-col items-center gap-6 shadow-lg">
        <Avatar
          src="/image/00-1.jpg"
          size="xl"
          alt="홍길동"
          className="rounded-full"
        />
        <Typography variant="h4" className="font-bold">
          서동혁
        </Typography>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 w-full max-w-2xl text-left">
          <div>
            <Typography variant="small" color="gray" className="font-medium">📅 생년월일</Typography>
            <Typography variant="paragraph" className="font-semibold">1997년 9월 6일 ( 🐮 )</Typography>
          </div>
          <div>
            <Typography variant="small" color="gray" className="font-medium">📞 전화번호</Typography>
            <Typography variant="paragraph" className="font-semibold">010-7769-2774</Typography>
          </div>
          <div>
            <Typography variant="small" color="gray" className="font-medium">📍 거주지</Typography>
            <Typography variant="paragraph" className="font-semibold">대전광역시 서구</Typography>
          </div>
          <div>
            <Typography variant="small" color="gray" className="font-medium">✉️ 이메일</Typography>
            <Typography variant="paragraph" className="font-semibold">ehdgur534@gmail.com</Typography>
          </div>
        </div>
      </Card>
    </section>
  );
}
