import React from 'react'
import styled from "@emotion/styled";
import { shopDepartmentTiles, getImage } from "../Constants"
import { Link } from "react-router-dom";

const Container = styled.div`
display:flex;
width:89%;
margin: auto;
flex-wrap: wrap;
padding-start:40px;
`;

const DepartmentItem = styled.div`
padding:30px;
cursor:pointer;
`;

const ItemText = styled.div`
font-size:0.826rem;
font-weight:700;
text-align:center;
color:#1267a4`;

const ItemImage = styled.img`
  height: 125px;
  width: 125px;
`;

const Item = ({ name, image, redirectTo }) => {
    return <Link to={redirectTo}>
        <DepartmentItem>
            <ItemImage src={getImage[image]} />
            <ItemText>
                {name}
            </ItemText>
        </DepartmentItem>
    </Link>
}

const ShopDepartments = () => {
    return <Container>
        {shopDepartmentTiles.map((item) =>
            <Item name={item.name} image={item.image} redirectTo={item.redirectTo} />
        )}
    </Container>
}

export default ShopDepartments