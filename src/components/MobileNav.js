import styled from "styled-components";
import logo from "../assets/icons/logo.svg";
import Button from "./Button";
import { useEffect, useRef } from "react";

const StyledMobileNav = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #ffffff;
  padding: 1.5rem var(--side-padding);
  width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  transform: scale(0.95);
  opacity: 0;
  transition: all 0.3s ease-in-out;
`;

const LogoAndCloseButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CloseMenuButton = styled.button`
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  padding: 0.875rem 1rem;
  border: 1px solid var(--orange);
  background-color: #ffecec;
  color: var(--orange);
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
`;

const NavLinksContainer = styled.nav`
  margin-top: 3rem;

  & a {
    display: block;
    font-size: 1.25rem;
  }
  & a:not(:last-of-type) {
    padding: 1rem 0;
  }
  & a:last-of-type {
    margin-top: 1rem;
    text-align: center;
  }
`;

export default function MobileNav({ isMobileNavOpen, setIsMobileNavOpen }) {
  const navRef = useRef();

  useEffect(() => {
    const navNode = navRef.current;

    if (isMobileNavOpen) {
      navNode.style.transform = "scale(1)";
      navNode.style.opacity = 1;
    } else {
      navNode.style.transform = "scale(0)";
      navNode.style.opacity = 0;
    }
  }, [isMobileNavOpen]);

  return (
    <StyledMobileNav ref={navRef}>
      <LogoAndCloseButtonContainer>
        <img src={logo} alt="LaslesVPN logo" />
        <CloseMenuButton onClick={() => setIsMobileNavOpen(false)}>
          Close
        </CloseMenuButton>
      </LogoAndCloseButtonContainer>
      <NavLinksContainer>
        <Button>About</Button>
        <Button>Features</Button>
        <Button>Pricing</Button>
        <Button>Testimonials</Button>
        <Button>Help</Button>
        <Button alternate>Sign In</Button>
        <Button secondary>Sign Up</Button>
      </NavLinksContainer>
    </StyledMobileNav>
  );
}
