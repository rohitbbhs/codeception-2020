import React from 'react'
import styled from "@emotion/styled";
import { CustomisedImages } from "../../Constants"

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
  `;

const CustomisationMenu = styled.img`
  width:67px;
height:67px;
border-radius:10px;`;

const CustomiseModal = ({ showCustomisationModal, setShowCustomisationModal }) => {
    return <Modal show={showCustomisationModal}>
        <ModalContent>
            <span style={{ float: "right", fontSize: "20px", padding: "10px", cursor: "pointer" }}
                onClick={() => setShowCustomisationModal(false)} class="close">&times;</span>
            <ModalBody >
                <ImageSection src={CustomisedImages["plain"]} />
                <CustomiseSection>
                    <ModalTitle>Customise your Boots</ModalTitle>
                    <CustomiseOption>
                        {/* <CustomisationMenu src={CustomisedImages["option-tip"]} /> */}
                    </CustomiseOption>
                </CustomiseSection>
            </ModalBody>
        </ModalContent>
    </Modal>
}

export default CustomiseModal