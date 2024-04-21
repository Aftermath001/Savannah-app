import React from 'react'
// import SearchIcon from '@mui/icons-material/Search';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import './Navbar.scss'




const Navbar = () => {

  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="center">
                <Link className='links' to="/">SAVANNAH INFORMATICS</Link>
            </div>
            <div className="right">
                <div className="">
                    <Link className='links' to="/">Homepage</Link>
                </div>
                <div className="">
                    <Link className='links' to="/">ALbum</Link>
                </div>
                <div className="">
                    <Link className='links' to="/">Photos</Link>
                </div>
                <div className="">
                    <Link className='links' to="/">User</Link>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default Navbar