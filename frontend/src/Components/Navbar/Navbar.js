import { useState, useEffect } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { DropdownOptions } from "../DropdownOptions/DropdownOptions";

const Navbar = ({ user, setUser }) => {
  const useBigLogo = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => {
        setMatches(media.matches);
      };
      media.addListener(listener);
      return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
  };

  let isPageWide = useBigLogo("(min-width: 1000px)");

  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);
  const options = [
    { value: "GAME", to: "/quiz" },
    { value: "TUTORIAL", to: "/tutorial" },
    { value: "SAVED WORDS", to: "" },
  ];
  return (
    <header>
      {isPageWide ? (
        <Logo type="dark" className="logo" />
      ) : (
        <Logo type="horizontal" className="logo" />
      )}
      <nav className="navbar">
        <button onClick={handleToggle}>
          {menuOpen ? (
            <CloseOutlined className="navbar-icon" />
          ) : (
            <MenuOutlined className="navbar-icon" />
          )}
        </button>
        <div className={`menuNav ${menuOpen ? "showMenu" : ""}`}>
          <NavLink
            exact
            to="/"
            className="navbar-item"
            activeClassName="navbar-selected"
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <DropdownOptions options={options} className="navbar-item" />
          {/* <NavLink
            to="/quiz/true"
            className="navbar-item"
            activeClassName="navbar-selected"
            onClick={closeMenu}
          >
            Quiz
          </NavLink> */}
          <NavLink
            to="/leaderboard"
            className="navbar-item"
            activeClassName="navbar-selected"
            onClick={closeMenu}
          >
            Leader board
          </NavLink>

          {/* <NavLink
            to="/howtoplay"
            className="navbar-item"
            activeClassName="navbar-selected"
            onClick={closeMenu}
          >
            Test
          </NavLink>
          <NavLink
            to="/howtoplay"
            className="navbar-item"
            activeClassName="navbar-selected"
            onClick={closeMenu}
          >
            result analysis
          </NavLink> */}
          {/* <NavLink
            to="/testCenter"
            className="navbar-item"
            activeClassName="navbar-selected"
            onClick={closeMenu}
          >
            Test center
          </NavLink> */}
          {/* <NavLink
            to="/howtoplay"
            className="navbar-item"
            activeClassName="navbar-selected"
            onClick={closeMenu}
          >
            hsk dictionary
          </NavLink> */}
          <NavLink
            to="/tutor"
            className="navbar-item"
            activeClassName="navbar-selected"
            onClick={closeMenu}
          >
            Tutor
          </NavLink>
          <NavLink
            to="/about"
            className="navbar-item"
            activeClassName="navbar-selected"
            onClick={closeMenu}
          >
            About
          </NavLink>

          {/* <NavLink
            to="/howtoplay"
            className="navbar-item"
            activeClassName="navbar-selected"
            onClick={closeMenu}
          >
            tutorial
          </NavLink> */}
          <NavLink
            to="/howtoplay"
            className="navbar-item"
            activeClassName="navbar-selected"
            onClick={closeMenu}
          >
            {/* How to play */}
            GUIDES
          </NavLink>

          {!user ? (
            <NavLink
              to="/login"
              className="navbar-item"
              activeClassName="navbar-selected"
              onClick={closeMenu}
            >
              Log In
            </NavLink>
          ) : (
            <NavLink
              to="/"
              className="navbar-item"
              activeClassName="navbar-selected"
              onClick={() => {
                closeMenu();
                setUser(null);
                sessionStorage.clear();
              }}
            >
              Log Out
            </NavLink>
          )}
        </div>
        {/* <div>
        <span style={{ color: "yellow" }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: "blue" }}>☽</span>
      </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
