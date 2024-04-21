import React, { useState } from 'react'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import './Slider.scss'





const Slider = () => {

const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://variety.com/wp-content/uploads/2022/07/Music-Streaming-Wars.jpg",
        "https://neurosciencenews.com/files/2023/06/ai-music-hits-neurosciencenews.jpg",
        "https://miro.medium.com/v2/resize:fit:1400/1*VQxFxU5ueLX26yZpaMV-Fg.png",
    ];

const prevSlide = () =>{
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
};
const nextSlide = () =>{
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
};



  return (
    <div className="slider">
        <div className="container" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
            <img src={data[0]} alt='HomepageSlider'/>
            <img src={data[1]} alt='HomepageSlider'/>
            <img src={data[2]} alt='HomepageSlider'/>
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