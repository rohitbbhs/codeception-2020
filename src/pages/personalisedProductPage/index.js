import React, { useState } from "react"
import styled from "@emotion/styled";
import ProductDetailTitle from "../../images/custom-designer-shoes-title.png"
import ShareIcon from "../../images/share-product.png"
import ShareModalImage from "../../images/share-product-modal.png"
import ShippingInfoIcon from "../../images/shipping-info.png"
import CrowdWorkSection from "./CrowdWorkSection"
import YourDesignSection from "./YourDesignSection"
import RoundedButton from "../../components/RoundedButton"
import CustomiseModal from "./CustomiseModal"
import { CrowdWorkImageList } from "./images"

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

const Divider = styled.hr`
height:10px
background-color:black;
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 5% auto; 
  padding: 20px;
  cursor:pointer;
  border: 1px solid #888;
  width: 300px;
  height:470px `;

const ModalBody = styled.div`
  height:600px;
  width:100%;
  display:flex;
  margin-top:40px;`;

const Modal = styled.div`
  display: ${props => props.show ? "block" : "none"}; 
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4);`;


const PersonalisedProductPage = () => {

    const [selectedThumbnail, setSelectedThumbnail] = useState(0)
    const [showCustomisationModal, setShowCustomisationModal] = useState(false)
    const [selectedImage, setSelectedImage] = useState(CrowdWorkImageList[0])
    const [showShareModal, setShowShareModal] = useState(false)
    const [hasCustomised, setHasCustomised] = useState(false)

    return <Container id={"container"} >
        <ImageSection id={"image-section"} >
            {<h3 style={{ position: "absolute", left: "9%", top: "8%" }}>Designed By: {selectedImage.name}</h3>}
            <ImageFile src={selectedImage.image1} />
            <ImageFile src={selectedImage.image2} />
            <ImageFile src={selectedImage.image3} />
            <ImageFile src={selectedImage.image4} />
        </ImageSection>
        <ProductDetailSection id={"product-details"} >
            <StaticImage className={"row"} src={ProductDetailTitle} />
            {/* <Tabs>
                <TabContent isSelect={selectedTab === INSPIRATION_TAB}
                    onClick={() => onTabClick(INSPIRATION_TAB)}>
                    Crowd Work
                    </TabContent>
                <TabContent isSelect={selectedTab === YOUR_DESIGN_TAB}
                    onClick={() => onTabClick(YOUR_DESIGN_TAB)}>
                    Your Design
                        </TabContent>
            </Tabs> */}
            <h3 style={{ padding: "10px" }}>Crowd Work</h3>
            <Divider />
            <CrowdWorkSection selectedThumbnail={selectedThumbnail}
                setSelectedThumbnail={setSelectedThumbnail} setSelectedShoe={setSelectedImage} />
            <h3 style={{ padding: "10px", marginTop: "20px" }}>Your Design</h3>
            <Divider />
            <YourDesignSection selectedThumbnail={selectedThumbnail}
                setSelectedThumbnail={setSelectedThumbnail} hasCustomised={hasCustomised} setSelectedShoe={setSelectedImage} />
            {/* <StaticImage src={ShoeSizePicker} /> */}
            <RoundedButton id={"customise-button"} handleClick={() => setShowCustomisationModal(true)} backgroundColor={"white"} borderColor={"black"} text={"Customise"} textColor={"#000000"} />
            <RoundedButton id={"buy-now-button"} backgroundColor={"#000033"} borderColor={"black"} text={"Buy Now"} textColor={"#FFFFFF"} handleClick={() => setShowCustomisationModal(false)} />
            <StaticImage style={{ marginTop: "30px" }} src={ShippingInfoIcon} />
            <StaticImage style={{ marginTop: "30px", cursor: "pointer" }} onClick={() => setShowShareModal(true)} src={ShareIcon} />
            <CustomiseModal showCustomisationModal={showCustomisationModal}
                setShowCustomisationModal={setShowCustomisationModal}
                setSelectedImage={setSelectedImage}
                setSelectedThumbnail={setSelectedThumbnail}
                setHasCustomised={setHasCustomised}
            />
        </ProductDetailSection>
        <Modal id={"modal"} show={showShareModal}>
            <span style={{ float: "right", fontSize: "20px", padding: "10px", cursor: "pointer" }}
                onClick={() => setShowShareModal(false)} class="close">&times;</span>
            <ModalBody id={"modal-body"} onClick={() => setShowShareModal(false)}>
                <ModalContent >
                    <StaticImage src={ShareModalImage} />
                </ModalContent>
            </ModalBody>
        </Modal>
    </Container>
}

export default PersonalisedProductPage