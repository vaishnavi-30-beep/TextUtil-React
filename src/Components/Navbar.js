import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          <div className="form-check">
            <input
              className="form-check-input "
              type="radio"
              name="exampleRadios"
              role="switch"
              id="exampleRadios1"
              value="option1"
              onClick={() => {props.settingMode('light')}}
          
            />
            <label className={`form-check-label text-light`} forhtml="exampleRadios1">
              Light
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input "
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
              onClick={() => {props.settingMode('dark')}}
             
            />
            <label className={`form-check-label text-light`} forhtml="exampleRadios2">
              Dark
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios3"
              value="option3"
              onClick={() => {props.settingMode('success')}}
            />
            <label className={`form-check-label text-light`} forhtml="exampleRadios3">
              Green
            </label>
          </div>
          {/* <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={props.toggleMode}
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              forhtml="flexSwitchCheckDefault"
            >
              Enable {props.mode === "light" ? "dark" : "light"} Mode
            </label>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Enter title",
};
