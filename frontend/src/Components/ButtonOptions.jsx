import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const ButtonOptions = () => {
  const history = useHistory();

  return (
    <div
      style={
        {
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          // height: "20vh",
          // marginLeft: "-100px",
          // flexDirection: "column",
        }
      }
    >
      <button
        // to={"/quiz"}
        onClick={() => history.push("/quiz/true")}
        className="btn homebtn white"
        style={{ lineHeight: "42px" }}
      >
        GAME
      </button>
      <button
        onClick={() => history.push("/tutorial")}
        className="btn homebtn white"
        style={{ lineHeight: "42px" }}
      >
        TUTORIAL
      </button>
      <button className="btn homebtn white" style={{ lineHeight: "42px" }}>
        WORDS SAVED
      </button>
    </div>
  );
};
