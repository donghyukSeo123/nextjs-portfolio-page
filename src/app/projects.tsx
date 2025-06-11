"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/logo4.png",
    title: "서동혁의 포트폴리오 사이트 \n( React + Next.js )",
    desc: "경력과 프로젝트 경험, 기술 스택을 소개하기 위해 React 기반 프론트엔드와 Next.js를 활용해 제작한 포트폴리오 웹사이트입니다. Vercel을 통한 배포까지 진행했습니다.",
    DeployYn :"Y",
    gitAdress :"https://github.com/donghyukSeo123/nextjs-portfolio-page.git",
    adress : "",
    Progress : "",
    ProgressFlag : true,
  },
  {
    img: "/image/logo1.png",
    title: "개인 포털사이트 donggle \n( React + Node.js )",
    desc: "일정관리, 날씨 확인, 택배 조회 같은 다양한 ‘실용적인’ API 기반 서비스들을 통합하는 개인 포털 사이트입니다.",
    DeployYn :"N",
    gitAdress :"https://github.com/donghyukSeo123/donggle-potal.git",
    adress : "",
    Progress : "8월 개발 예정",
    ProgressFlag : true,
  },
  {
    img: "/image/logo2.png",
    title:  "온라인 쇼핑몰 DongMarket \n( Spring + Jquery )",
    desc: "상품 등록부터 구매, 결제 프로세스까지 구현한 쇼핑몰 프로젝트입니다.",
    DeployYn :"N",
    gitAdress :"",
    adress : "",
    Progress : "개발 예정",
    ProgressFlag : false,
  },
  
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          개인 프로젝트
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
