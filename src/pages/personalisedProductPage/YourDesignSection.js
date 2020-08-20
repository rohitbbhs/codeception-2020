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

const YourDesignSection = ({ setSelectedShoe, hasCustomised }) => {
    const [selectedThumbnail, setSelectedThumbnail] = useState(0)

    const onThumbnailClick = (index) => {
        setSelectedThumbnail(index)
        setSelectedShoe({ ...YourDesignImageList[index] })
    }
    return <>
        <StaticImage isSelected={selectedThumbnail === 0 && !hasCustomised} onClick={() => onThumbnailClick(0)}
            src={YourDesignImageList[0].thumbnail} />
        {hasCustomised && <StaticImage isSelected={selectedThumbnail === 1 || hasCustomised} onClick={() => onThumbnailClick(1)}
            src={YourDesignImageList[1].thumbnail} />}
    </>
}

export default YourDesignSection