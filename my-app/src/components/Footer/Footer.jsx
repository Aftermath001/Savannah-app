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
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Beatae nam dolores libero excepturi optio nihil saepe quo. Iste, ut facilis?
          </span>
         
        </div>
        <div className="item">
            <h1>Contact</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Beatae nam dolores libero excepturi optio nihil saepe quo. Iste, ut facilis?
          </span>
        </div>

      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>LOGO</span>
          <span className='copyright'>&Copyright 2024.All Rights Reserved</span>
        </div>

      </div>
    </div>
  )
}

export default Footer