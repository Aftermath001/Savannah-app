// Album.js
import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/Breadcrumb/Breadcrumb";
import Meta from "../../components/Meta/Meta";
import "./Album.scss";

const Album = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const albumsPerPage = 10;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((albums) => setAlbums(albums));
  }, []);

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
  };

  const indexOfLastAlbum = currentPage * albumsPerPage;
  const indexOfFirstAlbum = indexOfLastAlbum - albumsPerPage;
  const currentAlbums = albums.slice(indexOfFirstAlbum, indexOfLastAlbum);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Meta title="ALBUMS" />
      <BreadCrumb title="ALBUMS" />
      <div className="album-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">ALBUMS PAGE</h3>
                {/* Move pagination here */}
                <nav>
                  <ul className="pagination">
                    {Array.from(
                      { length: Math.ceil(albums.length / albumsPerPage) },
                      (_, i) => (
                        <li key={i} className="page-item">
                          <button
                            onClick={() => paginate(i + 1)}
                            className="page-link"
                          >
                            {i + 1}
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                {/* Render album cards */}
                {currentAlbums.map((album) => (
                  <div
                    key={album.id}
                    className="col-6"
                    onClick={() => handleAlbumClick(album)}
                  >
                    <div className="card album-card">
                      <div className="card-header">
                        <h5 className="card-title">ALBUM ID: {album.id}</h5>
                      </div>
                      <div className="card-body">
                        <p>USER ID: {album.userId}</p>
                        <p>TITLE: {album.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Display selected album info */}
      {selectedAlbum && (
        <div className="selected-album-info">
          <h2>Album Title:{selectedAlbum.title}</h2>
          <p>Album ID: {selectedAlbum.id}</p>
          <p>User ID: {selectedAlbum.userId}</p>
          {/* <p>Album Title: {selectedAlbum.}</p> */}
        </div>
      )}
    </>
  );
};

export default Album;
