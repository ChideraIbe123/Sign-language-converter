import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 3em;
  padding: 0.5em;
  will-change: filter;
  transition: filter 300ms;
`;

const NavLinkContainer = styled.div`
  display: flex;
  gap: 1em;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0.5em 1em;
  border-radius: 4px;
  &:hover {
    background-color: #555;
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <Logo src="/path/to/your/logo.png" alt="Logo" />
      <NavLinkContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/upload">Upload</NavLink>
        {/* Add more NavLink components for other pages */}
      </NavLinkContainer>
    </NavContainer>
  );
};

export default Navbar;
