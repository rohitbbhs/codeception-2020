import React from 'react'
import styled from "@emotion/styled";

const StyledButton = styled.button`
background-color: ${props => props.backgroundColor};
width:460px;
border-style: solid;
border-color: ${props => props.borderColor};
  border-radius: 60px;
  color: ${props => props.textColor};
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left:40px;
  margin-top:20px;
  cursor:pointer;
  outline:none;
  `;
const RoundedButton = ({ text, backgroundColor, textColor, borderColor, handleClick }) => {
  return <div><StyledButton backgroundColor={backgroundColor} onClick={() => handleClick()} textColor={textColor} borderColor={borderColor}>{text}</StyledButton></div>
}
export default RoundedButton