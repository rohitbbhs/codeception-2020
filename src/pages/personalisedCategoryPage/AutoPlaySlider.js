import React from "react"
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import CustomisedFaceShield from "../../images/personalise-categories/FaceShield.jpg";
import CustomisedMask from "../../images/personalise-categories/Mask.jpg";
import CustomisedBag from "../../images/personalise-categories/Bags.jpg";
import CustomisedShoes from "../../images/personalise-categories/Shoes.jpg";
import CustomisedClock from "../../images/personalise-categories/Clock.jpg";
import CustomisedShoeGif from "../../images/personalise-categories/shoes.gif";
import CustomisedCalendar from "../../images/personalise-categories/Calendar.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const AutoPlaySliderView = () => {
    return <div style={{ margin: "auto", height: "50%", width: "100%", backgroundColor: "#000033" }}>
        <AutoplaySlider
            style={{ margin: "auto", height: "50%", width: "50%" }}
            play={true}
            cancelOnInteraction={true}
            interval={1000}
        >
            <div data-src={CustomisedFaceShield} />
            <div data-src={CustomisedMask} />
            <div data-src={CustomisedShoeGif} />
            <div data-src={CustomisedBag} />
            <div data-src={CustomisedCalendar} />
            <div data-src={CustomisedClock} />
            <div data-src={CustomisedShoes} />
        </AutoplaySlider>
    </div>
}

export default AutoPlaySliderView