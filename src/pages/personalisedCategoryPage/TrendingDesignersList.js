import React from "react"
import styled from "@emotion/styled"
import Designer1 from "../../images/designers/Designer1_Portfolio.png"
import Designer2 from "../../images/designers/Designer2_Portfolio.png"
import Designer3 from "../../images/designers/Designer3_Portfolio.png"
import FollowIcon from "../../images/follow-icon.png"

const Container = styled.div`
display:flex;
width:86%;
margin:auto;
`;

const ImageContainer = styled.div`
margin-left:20px;
width:30%;
margin:auto;
margin-bottom:100px;
border: 5px solid #000000;
position:relative;
height:30%;`;

const ImageItem = styled.img`
width:100%;
height:100%;`

const FollowImage = styled.img`
position:absolute;
left:5px;
bottom:9px;
cursor:pointer;
width:100px;
z-index:2;
height:30px;`

const TrendingDesignersList = () => {
    return <Container>
        <ImageContainer>
            <ImageItem src={Designer1} />
            <FollowImage src={FollowIcon} />
        </ImageContainer>
        <ImageContainer>
            <ImageItem src={Designer2} />
            <FollowImage src={FollowIcon} />
        </ImageContainer>
        <ImageContainer>
            <ImageItem src={Designer3} />
            <FollowImage src={FollowIcon} />
        </ImageContainer>
    </Container>
}

export default TrendingDesignersList