import React from "react"
import AutoPlaySlider from "./AutoPlaySlider"
import styled from "@emotion/styled";
import TrendingDesignsTitle from "../../images/Trending Designs.png"
import TrendingDesignsList from "./TrendingDesignsList"
import TrendingDesignersList from "./TrendingDesignersList"
import PersonalisationCategories from "./PersonalisationCategories"
import TrendingDesignersTitle from "../../images/TrendingDesigners.png"
import Landingpage_photo from "../../images/landingpage_photo.png";

const TrendingDesignsTitleText = styled.img`
margin-top:50px;
margin-bottom:50px;
height:100%;
width:100%`;

const StaticImage = styled.img`
margin-top:-3px;
height: 100%;
width: 100%;
`;

const PersonalisedCategoryPage = () => {
    return <div>
        <StaticImage src={Landingpage_photo} />
        <PersonalisationCategories />
        <TrendingDesignsTitleText src={TrendingDesignsTitle} />
        <TrendingDesignsList />
        <TrendingDesignsTitleText src={TrendingDesignersTitle} />
        <TrendingDesignersList />
    </div>
}

export default PersonalisedCategoryPage