import  Slider  from '../../components/Slider/Slider'
import React from 'react'
import './Home.scss'


const Home = () => {
  return (
    <section id ="hero--section" className='hero--section'>
      <div className='hero--section--content-box'>
        <p className='section-title'>Hello, Welcome to Musically</p>
        <h1 className='hero--section--title'>
            <span className='hero-section-title-color'>No. 1</span>{" "} <br />
              Musical App
        </h1>
        <p className='hero--section--description'>
             For any inquiries, assistance, or feedback, feel free to reach out to us through our dedicated contact channels. 
              Whether you have questions about our services, need support with an order, or simply want to share your thoughts, our friendly team is here to help. 
              You can connect with us via email at contact@email.com or reach out through our website's contact form. 
              We strive to respond promptly and provide the best possible assistance to ensure your experience with us is seamless and enjoyable.
        </p>
      </div>
      <div className='hero--section--img' >
         <Slider />
      </div>

    </section>

  
  )
}

export default Home