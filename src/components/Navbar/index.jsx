import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./style.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();


  const handleClose = () => {
    //if (screenWidth < 600) {
      setOpen(false);
    //}
  };
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        
        <div className="list-wrapper">
          <img
            src="https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true"
            alt="Menu bars"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <img
            src="https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true"
            alt="Menu cross"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />

          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <Link
                to="/"
                onClick={handleClose}
                style={{ color: location.pathname === "/" && "#4071f4" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={handleClose}
                style={{ color: location.pathname === "/about" && "#4071f4" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                onClick={handleClose}
                style={{ color: location.pathname === "/skills" && "#4071f4" }}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/works"
                onClick={handleClose}
                style={{ color: location.pathname === "/works" && "#4071f4" }}
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={handleClose}
                style={{ color: location.pathname === "/contact" && "#4071f4" }}
              >
                Contact
              </Link>
            </li>
            <li>
            <a
                href="https://github.com/tron5389/public-images/blob/master/Tom_Ron_Resume2021.pdf"
                onClick={handleClose}
                style={{ color: location.pathname === "/contact" && "#4071f4" }}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div className="logo">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/atom-solid.svg`}
              alt="brand"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
