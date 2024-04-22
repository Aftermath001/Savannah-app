import React, { useEffect, useState } from "react";
import BreadCrumb from '../../components/Breadcrumb/Breadcrumb'
import Meta from '../../components/Meta/Meta'
import './Photo.scss'
const Photo = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((photos) => setPhotos(photos));

  }, []);
   console.log(photos)
  return (
    <>
    <Meta title='PHOTO' />
    <BreadCrumb title='PHOTO' />
    <div className='about-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
          <div className='filter-card mb-3'>
                        <h3 className='filter-title'>PHOTOS PAGE</h3>
                        <table>
                          <thead style={{
                            borderBottom: 'solid 3px blue',
                            background: 'green',
                            color: 'white',
                            fontWeight: 'bold', }}>
                            <tr>
                              
                                <th>ID</th>
                                <th>NAME</th>
                                <th>USERNAME</th>
                                <th>PHONE</th>
                            </tr>
                            
                          </thead>
                          <tbody>
                            {photos.map((photo) => (
                              <tr key={photo.id}>
                                <td>{photo.albumId}</td>
                                <td>{photo.title}</td>
                                <td>{photo.url}</td>
                                <td>{photo.thumbnailUrl}</td>
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

export default Photo