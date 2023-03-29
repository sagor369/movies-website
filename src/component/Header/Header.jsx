import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h1>Wellcome to my movies Website </h1>
      <div>
        <input type="text" placeholder="search" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Header;
