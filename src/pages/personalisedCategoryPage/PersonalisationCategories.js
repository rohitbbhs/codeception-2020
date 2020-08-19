import React from 'react'
import styled from "@emotion/styled";
import { personaliseCategories, getImage } from "../../Constants"
import RoundedImage from "react-rounded-image";
import { Link } from "react-router-dom";
import PersonaliseCategoriesTitle from "../../images/personalise-categories-title.png"

const Container = styled.div`
display:flex;
width:89%;
margin: auto;
flex-wrap: wrap;
padding-start:40px;
`;

const CategoryItem = styled.div`
padding:30px;
cursor:pointer;
`;

const CategoryText = styled.div`
font-size:0.826rem;
font-weight:700;
text-align:center;
color:#1267a4`;

const CategoryImage = styled.img`
  height: 125px;
  width: 125px;
`;

const StaticImage = styled.img`
margin-top:50px;
height: 100%;
width: 100%;
`;

const Item = ({ name, image, redirectTo }) => {
    return <Link to={redirectTo}>
        <CategoryItem>
            <RoundedImage roundedColor="#FFFFFF" imageWidth="125"
                imageHeight="125" roundedSize="13"
                image={getImage[image]} />

            <CategoryText>
                {name}
            </CategoryText>
        </CategoryItem>
    </Link>
}

const PersonalisationCategories = () => {
    return <>
        <StaticImage src={PersonaliseCategoriesTitle} />
        <Container>
            {personaliseCategories.map((item) =>
                <Item name={item.name} image={item.image} redirectTo={item.redirectTo} />
            )}
        </Container>
    </>
}

export default PersonalisationCategories