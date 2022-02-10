import React from "react";
import { SkillModalSC } from "./TutorialSC";
import { useHistory } from "react-router-dom";

export const SkillModal = ({ isOpen }) => {
  const history = useHistory();
  return (
    <SkillModalSC isOpen={isOpen} className="skill-modal-container skm-pointer">
      <div>
        <div className="skm-start-btn-container">
          <button className="skm-start-btn">tips</button>
        </div>
        <div className="skm-start-btn-container">
          <button
            // onClick={() => history.push("/test")}
            onClick={() => history.push("/quiz/false")}
            className="skm-start-btn"
          >
            Start
          </button>
        </div>
      </div>
    </SkillModalSC>
  );
};
