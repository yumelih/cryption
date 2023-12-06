import styled from "styled-components";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  margin: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: rgba(255, 255, 255, 0.05);
  box-shadow: rgba(255, 255, 255, 0.12) 0px 1px 3px,
    rgba(255, 255, 255, 0.103) 0px 1px 2px;

  backdrop-filter: blur(100px);
  border-radius: 30px;
`;

const StyledNavList = styled.ul`
  display: flex;
  column-gap: 3rem;
`;

const StyledNavListLink = styled(Link)`
  color: white;
  cursor: pointer;

  &:hover {
    color: var(--color-gray);
  }
`;

function Navbar() {
  return (
    <StyledNav>
      <Logo src="/Logo.png" />
      <StyledNavList>
        <li>
          <StyledNavListLink to="">Home</StyledNavListLink>
        </li>
        <li>
          <StyledNavListLink to="about">About us</StyledNavListLink>
        </li>
        <li>
          <StyledNavListLink to="contact">Contact</StyledNavListLink>
        </li>
      </StyledNavList>
    </StyledNav>
  );
}

export default Navbar;
