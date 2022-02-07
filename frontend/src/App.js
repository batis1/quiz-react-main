import { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./App.css";
import "./Components/Quiz/Quiz.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Scoreboard from "./Components/Scoreboard/Scoreboard";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Components/Home/Home";
import Quiz from "./Components/Quiz/Quiz";
import EndScreen from "./Components/EndScreen/EndScreen";
import Howtoplay from "./Components/Howtoplay/Howtoplay";
import Example from "./Components/Test";
import Upload from "./Components/TestV1";
import AppUpload from "./Components/upload/AppUpload";
import Tutor from "./Components/Tutor/Tutor";
import TestCenter from "./Components/TestCenter/TestCenter";
import useLocalStorage from "use-local-storage";

function App() {
  const [user, setUser] = useState();
  const [quizKey, setQuizKey] = useState(1);
  // const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // get user from session storage
    // if user check timestamp

    try {
      const currentUser =
        JSON.parse(window.sessionStorage.getItem("currentUser")) ?? null;
      if (currentUser) {
        const valid = Date.now() - currentUser.timeStamp < 12000000;
        console.log({ valid });
        console.log("CURRENT USER AUTHD", currentUser);
        if (valid) {
          console.log("setting current user");
          setUser(currentUser);
        } else {
          setUser(null);
          console.log("deleting user from storage");
          // window.sessionStorage.deleteItem("currentUser");
        }
      }
    } catch {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log(user ? user.id : null);
    }, 5000);
  });

  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  return (
    <Router>
      <div className={`app`} data-theme={theme}>
        <Navbar user={user} setUser={setUser} />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home user={user} theme={theme} setTheme={setTheme} />
            </Route>
            <Route path="/signup">
              <Signup user={user} setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login user={user} setUser={setUser} />
            </Route>
            <Route path="/about">
              <About user={user} />
            </Route>
            <Route path="/howtoplay">
              <Howtoplay />
            </Route>
            <Route path="/tutor">
              <Tutor />
            </Route>
            <Route path="/testCenter">
              <TestCenter />
            </Route>
            <Route path="/quiz">
              <Quiz
                key={quizKey}
                reset={() => setQuizKey((prevState) => prevState + 1)}
                user={user}
              />
            </Route>
            <Route path="/endscreen">
              <EndScreen user={user} />
            </Route>
            <Route path="/leaderboard">
              <Scoreboard user={user} />
            </Route>
            <Route path="/test">
              <Example user={user} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
