import React from "react"
import styled from "@emotion/styled"
import Designer1 from "../../images/designers/Designer1_Portfolio.png"
import Designer2 from "../../images/designers/Designer2_Portfolio.png"
import Designer3 from "../../images/designers/Designer3_Portfolio.png"

const Container = styled.div`
display:flex;
width:86%;
margin:auto;
`;

const ImageItem = styled.img`
margin-left:20px;
width:30%;
margin:auto;
margin-top:70px;
margin-bottom:100px;
border: 5px solid #000000;
height:30%;`;

const TrendingDesignersList = () => {
    return <Container>
        <ImageItem src={Designer1} />
        <ImageItem src={Designer2} />
        <ImageItem src={Designer3} />
    </Container>
}

export default TrendingDesignersList