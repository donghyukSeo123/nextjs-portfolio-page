"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/logo3.png",
    title: "대덕인재개발원 4인 프로젝트 구인구직 웹사이트 ONESTEP (Spring + JavaScript)",
    desc: "TA, DA를 맡았으며 데이터베이스 설계와 담당한 기능에대한 다양한 API를 접목시켰습니다.",
    DeployYn :"N",
    gitAdress :"https://github.com/donghyukSeo123/DDIT-Final-Project---One-Step-.git",
    adress : "",
    Progress : "",
    ProgressFlag : true,
  },
  
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          팀 프로젝트
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4 white-space: pre-line">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
