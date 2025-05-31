'use client';

import { Typography } from '@material-tailwind/react';
import { ExperienceItem } from './ExperienceItem';

const experiences = [
  {
    period: '2023.06.01 ~ 현재',
    title: '엘엠에스 - 쇼핑몰 통합관리 시스템 개발자',
    details: [
      // {
      //   text: "개발환경",
      //   subDetails: ["스프링 프레임워크 기반 애플리케이션",
      //      "오라클 DB",
      //      "JavaScript, Jquary 사용 프론트엔드 개발",     
      //      "형상관리 : SVN",
      //       "SFTP : 파일질라로 직접 파일 업로드 및 업데이트",
      //       "SSH : PuTTY",
      //       "WAS : tomcat",
      //      "중계서버를 활용한 시스템 구축 및 운영을 경험하며, 방화벽 설정, 포트 포워딩, SSL/TLS 구성, 서버 간 통신 테스트 등의 실무를 통해 기본적인 네트워크 구조와 장애 대응 역량 ↑"
          
          
          
          
      //     ],
      // },
      
      {
        text: "OOOO기술원, OOO기술원 통합관리시스템(MIS)와 연계한 신규 MRO 쇼핑몰 오픈 및 유지보수",
        subDetails: ["신규 오픈하는 고객사를 전담하여 온라인 쇼핑몰을 2회 오픈", 
          "보안 상 기관 데이터베이스에 직접 접근할 수 없어 중계서버를 이용해 데이터를 교환하는 방식을 사용(MIS <- 중계서버 -> 쇼핑몰)",
          "쇼핑몰 ) 오픈 전 고객사 요구사항 개발, 서버 WAS 설치 및 WAR 배포 진행",
          "중계서버 ) 데이터 송수신부를 개발, 서버 WAS 설치 및 WAR 배포 진행",
          " MIS와 쇼핑몰 간 SSO 기능을 추가하며, SSO 업체와 협업하여 SSO 라이브러리 서버 설치, 가이드 참고하여 로그인 수신부 개발",
        
        ],
      },
      {
        text: "신규 고객사 영업용 데모서버 ( DEMO MRO ) 시스템 개발",
        subDetails: ["영업팀에서 신규 고객사를 대상으로 한 영업 시 MRO 쇼핑몰과 기관 통합관리시스템 연계를쉽게 설명할 수 있도록 DEMO 서버를 구현", 
          "구매 과정에서 발생하는 각종 구매 관련 보고서(세금계산서 등)를 DB에서 데이터를 추출하여 자동 생성하는 타사 솔루션 AI REPORT 툴 사용 방법을 학습하고 이를 구현",
        ],
      },
      {
        text: "연구원 내 MRO 오프라인 무인매장 신규 오픈 전 키오스크 구매 시스템 개발",
        subDetails: ["기존 온라인 시스템과의 연계를 고려해 오프라인 무인매장을 위한 키오스크 구매 시스템을 기획 및 구현했으며, 이를 통해 운영의 효율성과 안정성을 크게 개선했습니다.", 
          "운영팀에서 오프라인 진열 상품에 상품 QR코드를 부착하여 진열할 수 있도록 쇼핑몰 통합관리시스템에상품 QR코드 출력 기능을 개발 ",
          "연구실 RFID 카드로 사용자 인증 후 QR코드로 장바구니에 상품을 담고 주문하는 프로세스를 구현 (구매 관련 기능 담당)",
        ],
      },
      {
        text: "운영부서 배송,정산 업무 관련 문제 해결경험",
        subDetails: [""
        ],
      },
      
      
    ],
  }
 
];

export const Experience = () => {
  return (
    <div className="container mt-20 mx-auto mb-20 text-center">
      <Typography variant="h2" color="blue-gray" className="mb-4 text-center">
        경력
      </Typography>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;