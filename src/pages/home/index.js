import React from "react"
import styled from "@emotion/styled";
import QuickLinks from "../../components/QuickLinks"
import ShopDepartments from "../../components/ShopDepartments"
import CoverBanner from "../../images/carousel-banner.png"
import RecommendedLink from "../../images/recommended-links.png"
import ShopDepartmentsTitle from "../../images/shop-departments-title.png"
import WalmartMarketPlace from "../../images/walmart-marketplace.png"

const StaticImage = styled.img`
height: 100%;
width: 100%;
`;

const Home = () => {
    return <div>
        <QuickLinks />
        <StaticImage id={"banner"} src={CoverBanner} />
        <StaticImage id={"recommended-link"} src={RecommendedLink} />
        <StaticImage id={"shop-department-title"} src={ShopDepartmentsTitle} />
        <ShopDepartments />
        <StaticImage id={"walmart-marketplace"} src={WalmartMarketPlace} />
    </div>
}

export default Home