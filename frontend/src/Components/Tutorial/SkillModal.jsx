import React, { useContext } from "react";
import { SkillModalSC } from "./TutorialSC";
import { useHistory } from "react-router-dom";
import { actions, GlobalContext } from "../../App";

export const SkillModal = ({ isOpen, title }) => {
  const history = useHistory();

  const { state, dispatch } = useContext(GlobalContext);

  console.log({ state });

  return (
    <SkillModalSC isOpen={isOpen} className="skill-modal-container skm-pointer">
      <div>
        <div className="skm-start-btn-container">
          <button className="skm-start-btn">Lesson</button>
        </div>
        <div className="skm-start-btn-container">
          <button
            // onClick={() => history.push("/test")}
            // onClick={() => history.push("/quiz/false")}
            onClick={() => {
              dispatch({
                type: actions.SET_IS_GAME_SET_LEVEL,
                payload: { level: title, isGame: false },
              });

              history.push("/quiz");
            }}
            className="skm-start-btn"
          >
            Exercise
          </button>
        </div>
      </div>
    </SkillModalSC>
  );
};
