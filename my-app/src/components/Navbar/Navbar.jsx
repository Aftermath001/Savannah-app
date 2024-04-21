import React from 'react'
// import SearchIcon from '@mui/icons-material/Search';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import './Navbar.scss'
import Button from '@mui/material/Button';



const Navbar = () => {

  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="center">
                <Link className='links' to="/">SAVANNAH MUSIC</Link>
            </div>
            <div className="right">
                <div className="">
                    <Link className='links' to="/">Homepage</Link>
                </div>
                <div className="">
                    <Link className='links' to="/">Album</Link>
                </div>
                <div className="">
                    <Link className='links' to="/">Photos</Link>
                </div>
                <div className="">
                    <Link className='links' to="/">User</Link>
                </div>
                <Button variant="contained">GET STARTED</Button>
            
            </div>
        </div>
    </div>
  )
}

export default Navbar