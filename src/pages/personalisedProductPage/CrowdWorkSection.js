import React, { useState } from "react"
import styled from "@emotion/styled";
import { CrowdWorkImageList } from "./images"

const StaticImage = styled.img`
width:67px;
height:67px;
cursor:pointer;
border:${({ isSelected }) => isSelected ? "2px solid black" : "none"};
border-radius:10px;
&:hover {
    opacity: 0.5;
  }
  margin-right:10px;`;

const CrowdWorkSection = ({ setSelectedShoe, selectedThumbnail, setSelectedThumbnail }) => {

    const onThumbnailClick = (index) => {
        setSelectedThumbnail(index)
        setSelectedShoe({ ...CrowdWorkImageList[index] })
    }
    return <>
        {CrowdWorkImageList.map((image, index) =>
            <StaticImage isSelected={index === selectedThumbnail} onClick={() => onThumbnailClick(index)}
                src={image.thumbnail} />)}
    </>
}

export default CrowdWorkSection