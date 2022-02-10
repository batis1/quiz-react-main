import React, { useState } from "react";
import { Icon1 } from "./Icon1";
import { SkillModal } from "./SkillModal";

export const Lesson = ({ lesson: { title, iconStyle } }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <a
      className="lesson-anchor-box"
      id="bscs1-a"
      href="javascript:;"
      onClick={() => setIsOpen(!isOpen)}
      // onBlur={() => setIsOpen(false)}
    >
      <div className="_2albn">
        <div>
          <div className="lesson-progress-rings">
            <div className="_2xGPj">
              <Icon1 />
            </div>
          </div>
          <span className="course-image-span-container">
            <span className={`course-image-span ${iconStyle}`}></span>
            <div className="course-crown-div">
              <img
                alt="crown"
                className="course-crown-image"
                src="//d35aaqx5ub95lt.cloudfront.net/images/juicy-crown-empty.svg"
              />
            </div>
          </span>
          <div>
            <span className="_378Tf _3qO9M _33VdW">{title}</span>
          </div>
        </div>
        <SkillModal isOpen={isOpen} />
      </div>
    </a>
  );
};