import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  DeployYn: string;
}

export function ProjectCard({ img, title, desc ,DeployYn }: ProjectCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-38 white-space: pre-line">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        
        <div className="flex gap-2">
          {/* DeployYn이 'Y'일 때만 '바로가기' 버튼 출력 */}
          {DeployYn === "Y" && (
            <Button
              color="gray"
              size="sm"

            >
              바로가기
            </Button>
          )}

          {/* Git 바로가기 버튼 */}
          <Button
            color="blue"
            size="sm"
            onClick={() => window.open("", "_blank")}
          >
            Git 바로가기
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
