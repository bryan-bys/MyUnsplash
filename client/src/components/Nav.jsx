import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import SearchForm from "./SearchForm";

const Nav = () => {
  const { query } = useParams();

  console.log(useParams());

  return (
    <>
      <div className="nav-container">
        {location.pathname === "/art" ? (
          <div className="links">
            <Link to="/nature">NATURE</Link>
            <Link title="HOME" to="/">
              <i class="fa-solid fa-house-chimney-window"></i>
            </Link>
            <Link to="/abstract">ABSTRACT</Link>
          </div>
        ) : null}
        {location.pathname === "/nature" ? (
          <div className="links">
            <Link to="/art">ART</Link>
            <Link title="HOME" to="/">
              <i class="fa-solid fa-house-chimney-window"></i>
            </Link>
            <Link to="/abstract">ABSTRACT</Link>
          </div>
        ) : null}
        {location.pathname === "/abstract" ? (
          <div className="links">
            <Link to="/art">ART</Link>
            <Link title="HOME" to="/">
              <i class="fa-solid fa-house-chimney-window"></i>
            </Link>
            <Link to="/nature">NATURE</Link>
          </div>
        ) : null}
        {location.pathname === `/results/${query}` ? (
          <div className="nav-special">
            <SearchForm special={true} />
            <Link title="HOME" to="/">
              <i class="fa-solid fa-house-chimney-window"></i>
            </Link>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Nav;
