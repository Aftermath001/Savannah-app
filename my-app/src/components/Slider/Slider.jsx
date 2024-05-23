import React, { useState } from 'react'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import img1 from "../../assets/musi.jpg"
import img2 from "../../assets/musically2.jpg"
import img3 from "../../assets/musically3.jpg"

import './Slider.scss'





const Slider = () => {

const [currentSlide, setCurrentSlide] = useState(0);

const prevSlide = () =>{
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
};
const nextSlide = () =>{
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
};



  return (
    <div className="slider">
        <div className="container" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
            <img src={ img1} alt="HomeSlider"/>
            <img src={ img2} alt="HomeSlider"/>
            <img src={ img3} alt="HomeSlider"/>
            {/* <img src={data[0]} alt='HomepageSlider'/>
            <img src={data[1]} alt='HomepageSlider'/>
            <img src={data[2]} alt='HomepageSlider'/> */}
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastIcon/>
            </div>
        </div>
        
    </div>
  )
}

export default Slider