import React from "react";
import { useLocation } from "react-router-dom";
import { FaBiohazard } from "react-icons/fa";
import { Logo, LogoIcon, Path, LogoTitle, Wrapper } from "./HeaderStyles";

function Header() {
  const { pathname } = useLocation();
  return (
    <Wrapper>
      <Logo>
        <LogoTitle>COVID-19</LogoTitle>
        <LogoIcon>
          <FaBiohazard />
        </LogoIcon>
      </Logo>
      <Path>{pathname}</Path>
    </Wrapper>
  );
}

export default Header;
