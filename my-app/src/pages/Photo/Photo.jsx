import React, { useEffect, useState } from "react";
import BreadCrumb from '../../components/Breadcrumb/Breadcrumb';
import Meta from '../../components/Meta/Meta';
import { Link } from 'react-router-dom';
import './Photo.scss';

const Photo = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 10;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=100")
      .then((res) => res.json())
      .then((photos) => setPhotos(photos));
  }, []);

  // Pagination Logic
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Meta title='PHOTO' />
      <BreadCrumb title='PHOTO' />
      <div className='home-wrapper'>
        <div className='container-xxl'>
          <div className='row'>
            {currentPhotos.map((photo) => (
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
          {/* Pagination */}
          <nav>
            <ul className='pagination'>
              {Array.from({ length: Math.ceil(photos.length / photosPerPage) }, (_, i) => (
                <li key={i} className='page-item'>
                  <button onClick={() => paginate(i + 1)} className='page-link'>
                    {i + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Photo;
