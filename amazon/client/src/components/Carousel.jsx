import react, { useState } from 'react'
import "./component_styles/Carousel.css"

const Carousel = () => {
    const [imgNum, setImgNum] = useState(0)
    const carouselImages = ["https://m.media-amazon.com/images/I/61Krxygsz6L.jpg", "https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/YzllYTYxOGQt/YzllYTYxOGQt-M2I2ZTU1ZGQt-w3000._CB663476491_.jpg", "https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/YjdiZWM5NmEt/YjdiZWM5NmEt-NzEwM2E3YWIt-w3000._CB658366825_.jpg", "https://images-na.ssl-images-amazon.com/images/G/15/OHL_Marketing/Events/SummerToyList21/XCM_Manual_1346205_1765857_CA_ca_gw_pc_tallhero_2x_ca_en_3960604_3000x1200_2X_en_CA._CB663359793_.jpg", "https://images-na.ssl-images-amazon.com/images/G/15/digital/video/Magellan_MLP/BRND_MTH21_GWBleedingHero_3000x1200_Final_en-CA_FT_PVD7126._CB665277737_.jpg"]

function shiftImgLeft(){
   imgNum === 0 ? setImgNum(carouselImages.length - 1) : setImgNum(imgNum - 1)
}

function shiftImgRight(){
    imgNum === carouselImages.length - 1 ? setImgNum(0) : setImgNum(imgNum + 1);
    console.log(imgNum)
}


    return (
        <div className="carousel">
            <div className="left-btn" onClick={shiftImgLeft}></div>
            <img src={carouselImages[imgNum]} alt="carousel-img" />
            <div className="right-btn" onClick={shiftImgRight}></div>
        </div>
        )
}

export default Carousel