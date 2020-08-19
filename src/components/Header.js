import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import HeaderPic from "../images/walmart-header.png"

const HeaderImage = styled.img`
  height: 52px;
  width: 100%;
  z-index: 4;
`;

const Header = () => {
  return <Link to="/">
    <HeaderImage id={"header"} src={HeaderPic} />
  </Link>
}

export default Header
