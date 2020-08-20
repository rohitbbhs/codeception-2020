import React from "react"
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Landingpage_photo from "../../images/landingpage_photo.png";
import CustomisedMask from "../../images/personalise-categories/Mask.jpg";
import CustomisedBag from "../../images/personalise-categories/Bags.jpg";
import CustomisedShoes from "../../images/personalise-categories/Shoes.jpg";
import CustomisedClock from "../../images/personalise-categories/Clock.jpg";
import CustomisedShoeGif from "../../images/personalise-categories/shoes.gif";
import CustomisedCalendar from "../../images/personalise-categories/Mugs.gif";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const AutoPlaySliderView = () => {
    return <div style={{ margin: "auto", height: "100%", width: "84%", backgroundColor: "#FFFFFF" }}>
        <AutoplaySlider
            style={{ margin: "auto", width: "100%", height: "400px" }}
            play={false}
            cancelOnInteraction={true}
            interval={1000}
        >
            <div data-src={Landingpage_photo} />
        </AutoplaySlider>
    </div>
}

export default AutoPlaySliderView