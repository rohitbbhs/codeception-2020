import React from "react"
import AutoPlaySlider from "./AutoPlaySlider"
import styled from "@emotion/styled";
import TrendingDesignsTitle from "../../images/Trending Designs.png"
import TrendingDesignsList from "./TrendingDesignsList"
import PersonalisationCategories from "./PersonalisationCategories"

const TrendingDesignsTitleText = styled.img`
margin-top:50px;
height:100%;
width:100%`;

const PersonalisedCategoryPage = () => {
    return <div>
        <AutoPlaySlider />
        <PersonalisationCategories />
        <TrendingDesignsTitleText src={TrendingDesignsTitle} />
        <TrendingDesignsList />
    </div>
}

export default PersonalisedCategoryPage