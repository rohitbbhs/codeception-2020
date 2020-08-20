import React from "react"
import Gallery from 'react-grid-gallery';
import { TrendingImages } from "../../Constants"

// const Container = styled.div`
// display:flex;
// width:89%;
// margin: auto;
// flex-wrap: wrap;
// padding-start:40px;
// `;

// const TrendingItem = styled.div`
// padding:30px;
// cursor:pointer;
// `;

// const ItemText = styled.div`
// font-size:0.826rem;
// font-weight:700;
// text-align:center;
// color:#1267a4`;

// const ItemImage = styled.img`
//   height: 125px;
//   width: 125px;
// `;

const divStyle = {
    height: '188px',
    width: '100%',
    backgroundColor: '#000033',
    marginTop: "70px"
};
const TrendingDesignsList = () => {
    return (
        <div style={divStyle} >
            <Gallery margin={4} images={TrendingImages} />
        </div>
    );
}



export default TrendingDesignsList