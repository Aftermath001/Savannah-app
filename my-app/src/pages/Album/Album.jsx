import React, { useEffect, useState } from "react";
import './Album.scss'
import BreadCrumb from '../../components/Breadcrumb/Breadcrumb'
import Meta from '../../components/Meta/Meta'

const Album = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((albums) => setAlbums(albums));

  }, []);
  

  return (
    <>
    <Meta title='ALBUMS' />
    <BreadCrumb title='ALBUMS' />
    <div className='about-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
          <div className='filter-card mb-3'>
              <h3 className='filter-title'>ALBUMS PAGE</h3>
              
                <table>
                  <thead style={{
                    borderBottom: 'solid 3px blue',
                    background: 'green',
                    color: 'white',
                    fontWeight: 'bold', }}>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                    </tr>
                    
                  </thead>
                  <tbody>
                    {albums.map((album) => (
                      <tr>
                    
                        {/* <td>{album.userId}</td> */}
                        <td>{album.id}</td>
                        <td>{album.title}</td>
                      </tr>
                ))}
                </tbody>
            </table>
            
          </div>
          </div>
          <div className='col-9'>
            <div className='row'>
               
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Album