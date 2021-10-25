import React, { useContext } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { UserContext } from "../context/User";

const Header = () => {
  const { signIn, setSignIn } = useContext(UserContext);

  const handleSignIn = (event) => {
    event.preventDefault();
    setSignIn({ username: "jessjelly" });
  };

  return (
    <div className="header">
      <section className="header_left">
        <Link to="/">
          <img
            src="https://as2.ftcdn.net/v2/jpg/01/38/69/89/500_F_138698989_ekcoWNH5KmFNmTqjJl0vlHtp9Yvm8aXd.jpg"
            alt=""
            className="header_logo"
          />
        </Link>
        <section className="header_login">
          <form onSubmit={handleSignIn} className="login_form">
            <button className="header_loginButton">
              {signIn ? signIn.username : "Sign In"}
            </button>
          </form>
        </section>
      </section>
      <section className="header_centre">
        <Link to="/">
          <h1 className="header_title">FAKE NEWS</h1>
        </Link>
      </section>
      <section className="header_right">
        <a
          href="https://www.linkedin.com/in/alexander-swain"
          rel="noreferrer"
          target="_blank"
        >
          <i id="header_linkedin" className="fab fa-linkedin"></i>
        </a>
      </section>
    </div>
  );
};

export default Header;
