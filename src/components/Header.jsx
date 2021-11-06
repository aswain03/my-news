import React, { useContext } from "react";
import { StyledHeader, Top, Logo } from "../styles/Header.styled";
import { Button } from "../styles/Button.styled";
import { Container } from "../styles/Container.styled";
import { Flex } from "../styles/Flex.styled";
import { Link } from "react-router-dom";
import { UserContext } from "../context/User";

const Header = () => {
  const { signIn, setSignIn } = useContext(UserContext);

  const handleSignIn = (event) => {
    event.preventDefault();
    setSignIn({ username: "jessjelly" });
  };

  return (
    <StyledHeader>
      <Container>
        <Top>
          <Link to="/" className="Link">
            <Logo
              className="ImgLogo"
              src="https://as2.ftcdn.net/v2/jpg/01/38/69/89/500_F_138698989_ekcoWNH5KmFNmTqjJl0vlHtp9Yvm8aXd.jpg"
              alt="FakeNews"
            />
          </Link>{" "}
          <Flex>
            <Link to="/" className="Link">
              <h1>FAKE NEWS</h1>
            </Link>
          </Flex>
          <form onSubmit={handleSignIn}>
            <Button>{signIn ? signIn.username : "Sign In"}</Button>
          </form>
          <a
            href="https://www.linkedin.com/in/alexander-swain"
            rel="noreferrer"
            target="_blank"
          >
            <i id="linkedin" className="fab fa-linkedin"></i>
          </a>
        </Top>
      </Container>
    </StyledHeader>
  );
};

export default Header;
