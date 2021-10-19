import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <section className="header_left">
        <Link to="/">
          <img
            src="https://as2.ftcdn.net/v2/jpg/01/38/69/89/500_F_138698989_ekcoWNH5KmFNmTqjJl0vlHtp9Yvm8aXd.jpg"
            alt=""
            className="header_logo"
          />{" "}
        </Link>
      </section>
      <section className="header_centre">
        <h1 className="header_title">FAKE NEWS</h1>
      </section>
      <section className="header_right">
        <Link to="www.linkedin.com/in/alexander-swain">
          <i id="header_linkedin" class="fab fa-linkedin"></i>
        </Link>
      </section>
    </div>
  );
};

export default Header;
