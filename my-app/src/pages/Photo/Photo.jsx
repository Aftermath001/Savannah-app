import React, { useEffect, useState } from "react";
import BreadCrumb from '../../components/Breadcrumb/Breadcrumb'
import Meta from '../../components/Meta/Meta'
import { Link } from 'react-router-dom';
import './Photo.scss'

const Photo = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((photos) => setPhotos(photos));
  }, []);

  return (
    <>
      <Meta title='PHOTO' />
      <BreadCrumb title='PHOTO' />
        <div className='home-wrapper'>
          <div className='container-xxl'>
            <div className='row'>
              {photos.map((photo) => (
                <div key={photo.id} className='col-4'>
                  <div className="card photo-card">
                    <div className='card-header'>
                      <h5 className='card-title'>TITLE: {photo.title}</h5>
                    </div>
                    <div className='card-body'>
                      <p>Album ID: {photo.albumId}</p>
                      <p>ID: {photo.id}</p>
                      <img src={photo.url} alt='album-pic' className='img-fluid mb-2' />
                      <Link><button className="button edit-button">Edit</button></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

    </>
  );
};

export default Photo;
