import React, { useState } from 'react'
import styled from "@emotion/styled";
import { CustomisedImages } from "../../Constants"
import RoundedButton from "../../components/RoundedButton"

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

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 5% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 80%; `;

const ModalBody = styled.div`
  height:600px;
  width:100%;
  display:flex;
  margin-top:40px;`;

const ImageSection = styled.img`
  width:50%;`;

const CustomiseSection = styled.div`
  width:50%;
  padding-left:40px;
  `;

const ModalTitle = styled.h1`
  font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif;
  `;

const CustomiseOption = styled.div`
  display:flex;
  padding-top:30px;
  `;

const StaticImage = styled.img`
  width:97px;
height:97px;`;

const Option = styled.div`
  width:57px;
height:57px;
border-radius:10px;
margin-left:10px;
background-color:${props => props.color}`;

const CustomiseModal = ({ showCustomisationModal, setShowCustomisationModal }) => {

    const [selectedUpper, setSelectedUpper] = useState("")
    const [selectedLogo, setSelectedLogo] = useState("")

    return <Modal show={showCustomisationModal}>
        <ModalContent>
            <span style={{ float: "right", fontSize: "20px", padding: "10px", cursor: "pointer" }}
                onClick={() => setShowCustomisationModal(false)} class="close">&times;</span>
            <ModalBody >
                <ImageSection src={CustomisedImages[`${selectedUpper}-${selectedLogo}`]} />
                <CustomiseSection>
                    <ModalTitle>Customise your Boots</ModalTitle>
                    <CustomiseOption>
                        <StaticImage src={CustomisedImages["option-upper"]} />
                        <Option color={"#FFD700"} onClick={() => setSelectedUpper("gold-upper")} />
                        <Option color={"#C0C0C0"} onClick={() => setSelectedUpper("gray-upper")} />
                    </CustomiseOption>
                    <CustomiseOption>
                        <StaticImage src={CustomisedImages["option-logo"]} />
                        <Option color={"#556B2F"} onClick={() => setSelectedLogo("green-logo")} />
                        <Option color={"#000000"} onClick={() => setSelectedLogo("black-logo")} />
                    </CustomiseOption>
                    <h4 style={{ marginTop: "70px" }}>Not happy with the options ? You can download the project and make your
                        own customisations which can be emailed to the seller </h4>

                    <RoundedButton id={"customise-button"} handleClick={() => alert("Are you sure you want to download this file?")} backgroundColor={"white"} borderColor={"black"} text={"Download .psd"} textColor={"#000000"} />
                </CustomiseSection>
            </ModalBody>
        </ModalContent>
    </Modal>
}

export default CustomiseModal