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

const YourDesignSection = ({ setSelectedShoe }) => {
    const [selectedThumbnail, setSelectedThumbnail] = useState(0)

    const onThumbnailClick = (index) => {
        setSelectedThumbnail(index)
        setSelectedShoe({ ...YourDesignImageList[index] })
    }
    return <>
        {YourDesignImageList.map((image, index) =>
            <StaticImage isSelected={index === selectedThumbnail} onClick={() => onThumbnailClick(index)}
                src={image.thumbnail} />)}
    </>
}

export default YourDesignSection