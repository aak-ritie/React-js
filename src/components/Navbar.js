import React, { useState } from "react";

export default function Navbar(props) {
  const clickTheme = (color) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
            
          </form> */}
          <div>
            <span style={{ color: props.mode === "dark" ? "white" : "black" }}>
              Theme :
            </span>
            <button
              onClick={() => clickTheme("blue")}
              type="button"
              class="btn btn-primary mx-1"
            >
              Blue
            </button>
            <button
              onClick={() => clickTheme("green")}
              type="button"
              class="btn btn-success mx-1"
            >
              Green
            </button>
            <button
              onClick={() => clickTheme("red")}
              type="button"
              class="btn btn-danger mx-1"
            >
              Red
            </button>
          </div>
          <div
            className={`form-check mx-3 form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlfor="flexSwitchCheckDefault"
            >
              Enable DarkMode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
