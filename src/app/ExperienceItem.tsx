"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";



interface ExperienceItemProps {
  period: string;
  title: string;
  details: {
    text: string;
    subDetails?: string[];
  }[];
}



export const ExperienceItem = ({ period, title, details }: ExperienceItemProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [openSubIndexes, setOpenSubIndexes] = useState<number[]>([]);


  const toggleSubItem = (index: number) => {
    if (openSubIndexes.includes(index)) {
      setOpenSubIndexes(openSubIndexes.filter(i => i !== index));
    } else {
      setOpenSubIndexes([...openSubIndexes, index]);
    }
  };

  return (
    <div className="border-b py-4">
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <Typography variant="h3">{title} ({period})</Typography>
        </div>
        {isOpen ? (
          <ChevronUpIcon className="h-10 w-10 text-blue-500" />
        ) : (
          <ChevronDownIcon className="h-10 w-10 text-blue-500" />
        )}
      </div>

      {isOpen && (
        <ul className="mt-7 list-disc list-inside text-2xl list-none ">
          {details.map((detail, index) => (
            <li key={index} className="mb-1">
              <div 
                className={`flex justify-between cursor-pointer ${
                  detail.subDetails ? "font-semibold" : ""
                }`}
                onClick={() => detail.subDetails && toggleSubItem(index)}
              >
                {/* 보기좋게 간격 조정 */}
                <span className="block text-center w-full mt-12 mb-7  text-blue-500">{detail.text}</span>
                {detail.subDetails && (
                  openSubIndexes.includes(index) ? 
                    <ChevronUpIcon className="mt-7 h-7 w-7 text-blue-500" /> : 
                    <ChevronDownIcon className="mt-7 h-7 w-7 text-blue-500" />
                )}
              </div>

              {detail.subDetails && openSubIndexes.includes(index) && (
                <ul className="mt-7 ml-4 list-disc  text-lg text-left  ">
                  {detail.subDetails.map((sub, si) => (
                    <li className="mt-4" key={si}>{sub}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
