"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            끈기와 열정으로  <br />  끝까지 해내는 개발자 <br />  서동혁입니다!
          </Typography>
          <Typography 
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            “다양한 문제를 마주하며 해결해나가고,
            꾸준한 자기 계발로 성장하는 데 최선을 다하는 개발자입니다.”

          </Typography>         
        </div>
        <Image
          width={354}
          height={472}
          alt="team work"
          src="/image/00-1.jpg"
          className="mx-auto w-[354px] h-[472px] rounded-xl border border-gray-300 object-cover outline-none"

        />

      </div>
    </header>
  );
}

export default Hero;
