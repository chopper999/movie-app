import React from "react";
import "../scss/header.scss";
import Logo from "../components/Logo";
import SearchBox from "../components/SearchBox";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo-nav">
            <Logo />
            <nav className="nav">
              <ul>
                <li>
                  <div className="item">Home</div>
                </li>
                <li>
                  <div className="item">Popular</div>
                </li>
                <li>
                  <div className="item">My list</div>
                </li>
              </ul>
            </nav>
          </div>
          <SearchBox />
        </div>
      </header>
    </>
  );
};
