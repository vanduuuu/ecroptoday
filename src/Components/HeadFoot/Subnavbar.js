import React, { useState, useEffect } from "react";
import Topnavbar from "./Topnavbar";
import './Subnavbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../Assets/images/vlogo.jpg';
import { Link } from "react-router-dom";
const Subnavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overlay-active");
    } else {
      document.body.classList.remove("overlay-active");
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("overlay-active");
    };
  }, [isOpen]);

  return (
    <>
      <Topnavbar />
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
            <div className="logoimgMob">
            <a className="navbar-brand w-100" href="#">
            <img src={logo} alt="" />
          </a>
            </div>
             <button
            className="navbar-toggler shadow-none"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            {isOpen ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
          <div
            className={`navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Archives
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/editorial">
                  Editorial Board
                </Link>
              </li>
              <li className="nav-item logoimg">
                <Link className="navbar-brand" to="/">
            <img src={logo} alt="" />
          </Link>
               </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                Guidelines For Author
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                Article Submission
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="https://ecrop.co.in/">
                e-CROP
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Subnavbar;
