"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/logo3.png",
    title: "구인구직 웹사이트 ONESTEP (대덕인재개발원 4인 프로젝트)",
    desc: "‘ONESTEP’은 구직자에게는 구직과정에 필요한 것을 제공하여 편의성을 도모하고 프리랜서에게 필요한 최소한의 법적 울타리를 제공하고 구인자에게는 지원자의 조건을 항목별로 한 화면에 편리하게 볼 수 있는 프로젝트 입니다.",
    DeployYn :"N",
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
