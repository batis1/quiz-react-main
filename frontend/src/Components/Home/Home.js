import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import clocklogo from "../../images/clocklogo.svg";
import imageex from "../../images/imageex.svg";
// import hero from "../../images/hero.svg";
import hero from "../../images/HomeHsk1.png";

const Home = (props) => {
  const history = useHistory();

  const switchTheme = () => {
    const newTheme = props.theme === "light" ? "dark" : "light";
    props.setTheme(newTheme);
  };

  return (
    <>
      <div className="Home">
        <div className="container1">
          <div className="hometitle-container">
            <h1 className="hometitle">DO YOU WANT TO PRACTICE HSK 4?</h1>
            <p className="homesubtitle">
              Test your HSK 4 knowledge skills against the clock to climb the
              leaderboard. But take your time and it's tick tick BOOM!
            </p>
          </div>

          <div className="home-buttonsContainer">
            {!props.user ? (
              <div className="buttoncontainer1">
                <button
                  onClick={() => history.push("/signup")}
                  className="btn homebtn getstarted"
                >
                  GET STARTED
                </button>
                <button
                  onClick={() => history.push("/Howtoplay")}
                  className="btn homebtn white"
                >
                  HOW TO PLAY
                </button>
              </div>
            ) : (
              <div className="buttoncontainer2">
                <button
                  onClick={() => history.push("/quiz")}
                  className="btn homebtn playnow"
                >
                  PLAY NOW
                </button>
                <button
                  onClick={() => history.push("/leaderboard")}
                  className="btn homebtn white"
                >
                  LEADERBOARD
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="imagecontainer">
          <img src={imageex} className="imageex" alt="imageex" width="400" />
          <img src={hero} className="herologo" alt="imageex" width="350" />
          {/* <img
          src={clocklogo}
          className="clocklogo"
          alt="clocklogo"
          width="200"
        /> */}
        </div>
        {/* <div className="theme-toggle">
        <h2>Light Theme</h2>
        <i onClick={switchTheme} class="fas fa-toggle-on"></i>
      </div> */}
      </div>
      <div className="theme-toggle">
        <h2>{props.theme === "light" ? "Light" : "Dark"} Theme</h2>
        <i onClick={switchTheme} class="fas fa-toggle-on"></i>
      </div>
    </>
  );
};
export default Home;
