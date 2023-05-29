import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  const [toggle, setToggle] = useState(true);
  const [navStyle, setNavStyle] = useState({
    boxShadow: "0 0 0",
    borderBottom: "transparent",
  });

  const [showHeader, setShowHeader] = useState("close");

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      if (scrollTop > 80) {
        setNavStyle({
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
        });
      } else {
        setNavStyle({
          boxShadow: "0 0 0",
          borderBottom: "transparent",
        });
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleHandler = (bool) => {
    setToggle(bool);
    if (bool) {
      setShowHeader("close");
    } else {
      setShowHeader("open");
    }
  };

  return (
    <nav>
      <div style={navStyle} className={"nav__container " + showHeader}>
        <div className="nav__links">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/gallery">Նկարներ</NavLink>
          <NavLink to="/tarosik">Տարոսիկ</NavLink>
        </div>
      </div>
      <div className="nav__content">
        <div className="nav__icons">
          <a href="facebook.com">
            <i className="uil uil-facebook-f"></i>
          </a>
          <a href="instagram.com">
            <i className="uil uil-instagram"></i>
          </a>
          <a>
            <i className="uil uil-facebook-messenger-alt"></i>
          </a>
        </div>

        {toggle ? (
          <button
            onClick={() => toggleHandler(false)}
            className="nav__toggole-btn"
            id="nav__toggole-open"
          >
            <i className="uil uil-bars"></i>
          </button>
        ) : (
          <button
            onClick={() => toggleHandler(true)}
            className="nav__toggole-btn"
            id="nav__toggole-close"
          >
            <i className="uil uil-multiply"></i>
          </button>
        )}
      </div>
    </nav>
  );
}

export default Nav;
