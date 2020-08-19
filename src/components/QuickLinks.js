import React from "react"
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { quickLinksList } from "../Constants"

const QuickLinksContainer = styled.div`
height:40px;
background:#ffffff;
`;

const QuickLinks = styled.div`
display:flex;
flex-wrap:wrap;
`;

const StyledLink = styled(Link)`
  color: #000033;
  cursor: pointer;
  padding-top:5px;
  text-align: left;
  margin-left:1.3rem;
  text-decoration: none;
`;

const LinkComponent = ({ text, redirectTo }) => {
    return <Link><StyledLink id={`quick-link-${text.toLowerCase()}`} to={redirectTo}>{text}</StyledLink></Link>
}


const QuickLinksMenu = () => {
    return <QuickLinksContainer id={"quick-links"}>
        <QuickLinks>
            {quickLinksList.map((linkItem) =>
                <LinkComponent text={linkItem.name} redirectTo={linkItem.redirectTo} />
            )}
        </QuickLinks>
        <hr />
    </QuickLinksContainer>
}

export default QuickLinksMenu;