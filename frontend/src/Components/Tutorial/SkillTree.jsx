import React from "react";
import { LessonsContainer } from "./LessonsContainer";

export const SkillTree = () => {
  const lessonsContainer = [
    [{ title: "Basics 1", iconStyle: "bscs1" }],
    [
      { title: "Greetings", iconStyle: "grtngs" },
      { title: "Basics 2", iconStyle: "bscs2" },
    ],
  ];

  return (
    <div className="skill-tree">
      {lessonsContainer.map((item) => (
        <LessonsContainer lessons={item} />
      ))}
    </div>
  );
};
