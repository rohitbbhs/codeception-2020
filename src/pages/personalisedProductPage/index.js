import React, { useState } from "react"
import styled from "@emotion/styled";
import ProductDetailTitle from "../../images/custom-designer-shoes-title.png"
import ShareIcon from "../../images/share-product.png"
import ShoeSizePicker from "../../images/shoe-size-picker.png"
import CrowdWorkSection from "./CrowdWorkSection"
import YourDesignSection from "./YourDesignSection"
import RoundedButton from "../../components/RoundedButton"
import CustomiseModal from "./CustomiseModal"
import { CrowdWorkImageList, YourDesignImageList } from "./images"
import Gallery from 'react-grid-gallery';

const Container = styled.div`
display:flex;
width:1400px;
height:100%;
margin:auto;`;

const ImageSection = styled.div`
width:700px;
height:800px;
margin-top:30px;
display:flex;
flex-wrap:wrap;`;

const ImageFile = styled.img`
height:49%;
width:340px;
margin-right:5px;
background-color:grey;`;


const ProductDetailSection = styled.div`
width:40%;
height:100%;
padding-left:10px`;

const StaticImage = styled.img`
width:100%;
height:100%;`;

const Tabs = styled.div`
display:flex`;

const TabContent = styled.div`
padding:24px;
cursor:pointer;
font-weight:${props => props.isSelect ? 'bold' : 'normal'};
font-family:"Lucida Console", Monaco, monospace`;

const Divider = styled.hr`
height:10px
background-color:black;
`;

const INSPIRATION_TAB = 0
const YOUR_DESIGN_TAB = 1

// const ShareImage = [
//     {
//         src: ShareIcon,
//         thumbnail: ShareIcon,
//         thumbnailWidth: 832,
//         thumbnailHeight: 386,
//         isSelected: false
//     }]
const PersonalisedProductPage = () => {

    const [selectedTab, setSelectedTab] = useState(INSPIRATION_TAB)
    const [showCustomisationModal, setShowCustomisationModal] = useState(false)
    const [selectedImage, setSelectedImage] = useState(CrowdWorkImageList[0])

    console.log(showCustomisationModal)
    const onTabClick = tab => {
        (tab === YOUR_DESIGN_TAB ? setSelectedImage({ ...YourDesignImageList[0] }) : setSelectedImage({ ...CrowdWorkImageList[0] }))
        setSelectedTab(tab)
    }

    return <Container id={"container"} >
        <ImageSection id={"image-section"} >
            <ImageFile src={selectedImage.image1} />
            <ImageFile src={selectedImage.image2} />
            <ImageFile src={selectedImage.image3} />
            <ImageFile src={selectedImage.image4} />
        </ImageSection>
        <ProductDetailSection id={"product-details"} >
            <StaticImage className={"row"} src={ProductDetailTitle} />
            <Tabs>
                <TabContent isSelect={selectedTab === INSPIRATION_TAB}
                    onClick={() => onTabClick(INSPIRATION_TAB)}>
                    Crowd Work
                    </TabContent>
                <TabContent isSelect={selectedTab === YOUR_DESIGN_TAB}
                    onClick={() => onTabClick(YOUR_DESIGN_TAB)}>
                    Your Design
                        </TabContent>
            </Tabs>
            <Divider />
            {selectedTab === YOUR_DESIGN_TAB ? <YourDesignSection setSelectedShoe={setSelectedImage} /> : <CrowdWorkSection setSelectedShoe={setSelectedImage} />}
            <StaticImage src={ShoeSizePicker} />
            <RoundedButton id={"customise-button"} handleClick={() => setShowCustomisationModal(true)} backgroundColor={"white"} borderColor={"black"} text={"Customise"} textColor={"#000000"} />
            <RoundedButton id={"buy-now-button"} backgroundColor={"#000033"} borderColor={"black"} text={"Buy Now"} textColor={"#FFFFFF"} />
            <StaticImage style={{ cursor: "pointer" }} src={ShareIcon} />
            {/* <Gallery margin={4} images={ShareImage} /> */}
            <CustomiseModal showCustomisationModal={showCustomisationModal} setShowCustomisationModal={setShowCustomisationModal} />
        </ProductDetailSection>
    </Container>
}

export default PersonalisedProductPage