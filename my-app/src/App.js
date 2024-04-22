import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Album from './pages/Album/Album';
import Photo from './pages/Photo/Photo';
import User from './pages/User/User';

// import About from './pages/About';
// import Contact from './pages/Contact';
// import OurStore from './pages/OurStore';
// import CompareProduct from './pages/CompareProduct';
// import Wishlist from './pages/Wishlist';
// import Login from './pages/Login';
// import Forgotpassword from './pages/Forgotpassword';
// import Signup from './pages/Signup';
// import Resetpassword from './pages/Resetpassword';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='album' element={<Album/>}/>
            <Route path='user' element={<User/>}/>
            <Route path='photo' element={<Photo/>}/>
            <Route path='login' element={<Login/>}/>

        </Route>
       </Routes>
  
    </BrowserRouter>
  </>
  )
  
}

export default App;// import {
//   createBrowserRouter,
//   RouterProvider,
//   Outlet
// } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import User from "./pages/User/User";
// import Photo from "./pages/Photo/Photo";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import './App.scss'


// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"/",
//         element:<Home/>
//       },
//       {
//         path:"/products/:id",
//         element:<User/>
//       },
//       {
//         path:"/product/:id",
//         element:< Photo/>
//       },
//     ]
//   },
 
// ])
// function App() {
//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;