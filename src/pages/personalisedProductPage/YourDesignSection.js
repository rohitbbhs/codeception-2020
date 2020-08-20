import React, { useState } from "react"
import styled from "@emotion/styled";
import { YourDesignImageList } from "./images"

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

const YourDesignSection = ({ setSelectedShoe, hasCustomised, selectedThumbnail, setSelectedThumbnail }) => {

    const onThumbnailClick = (index) => {
        setSelectedThumbnail(4)
        setSelectedShoe({ ...YourDesignImageList[index] })
    }
    return <>
        {!hasCustomised && <h3>You do not have any designs yet, you may start customising by clicking on the button below.</h3>}
        {hasCustomised && <StaticImage isSelected={selectedThumbnail === 4} onClick={() => onThumbnailClick(0)}
            src={YourDesignImageList[0].thumbnail} />}
    </>
}

export default YourDesignSection