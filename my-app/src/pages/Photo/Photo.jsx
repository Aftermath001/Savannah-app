import React, { useEffect, useState } from "react";
import BreadCrumb from '../../components/Breadcrumb/Breadcrumb';
import Meta from '../../components/Meta/Meta';
import Editform from "../../components/Editform/Editform";
import './Photo.scss';

const Photo = () => {
  const [photos, setPhotos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 10;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=100")
      .then((res) => res.json())
      .then((photos) => setPhotos(photos));
  }, []);

  function handleUpdate(updatedPhoto){
    const updatedPhotos = photos.map((photo) =>
    photo.id === updatedPhoto.id ? updatedPhoto : photo
  );
  setPhotos(updatedPhotos);
  setEditId(null)
  }
  // Pagination Logic
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // function handleUpdate(updatedTransaction) {
  //   const updatedTransactions = transactions.map((transaction) =>
  //   transaction.id === updatedTransaction.id ? updatedTransaction : transaction
  //   );
  //   setTransactions(updatedTransactions);
  //   setEditId(null);
  //   }

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
                    
                    {editId === photo.id ? (
                      <Editform
                        photo={photo}
                        onEdit={handleUpdate}
                        onCancel={() => setEditId(null)}
                      />
                      // creating buttons for edit and delete.
                    ) : ( <button id="edit" onClick={()=> setEditId(photo.id)}> Edit </button>)}
          
                   
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
