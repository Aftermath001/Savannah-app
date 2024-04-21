import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
        <h1>Links</h1>
          <span>FAQs</span>
          <span>Pages</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Imagine a vibrant digital marketplace where music enthusiasts converge to explore and acquire their favorite albums effortlessly. 
            This platform boasts a vast catalog spanning genres from classical to contemporary, ensuring there's something for every taste. 
            Users can easily navigate through the sleek interface, discovering new releases or diving into timeless classics with just a few clicks. 
            With secure transactions and seamless downloading options, 
            this site offers a harmonious blend of convenience and musical discovery, making it a go-to destination for album aficionados worldwide.
          </span>
         
        </div>
        <div className="item">
            <h1>Contact</h1>
            <span>For any inquiries, assistance, or feedback, feel free to reach out to us through our dedicated contact channels. 
              Whether you have questions about our services, need support with an order, or simply want to share your thoughts, our friendly team is here to help. 
              You can connect with us via email at contact@email.com or reach out through our website's contact form. 
              We strive to respond promptly and provide the best possible assistance to ensure your experience with us is seamless and enjoyable.
          </span>
        </div>

      </div>
      <div className="bottom">
        <div className="left">
          <img src="https://png.pngtree.com/png-vector/20190904/ourmid/pngtree-violin-piano-instrument-musical-logo-designs-inspiration-isol-png-image_1722663.jpg" alt="LOGO"/>
          <span className='copyright'>&Copyright 2024.All Rights Reserved</span>
        </div>

      </div>
    </div>
  )
}

export default Footer