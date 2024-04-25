// User.js
import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/Breadcrumb/Breadcrumb";
import Meta from "../../components/Meta/Meta";

import "./User.scss";
const User = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 4;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  // Pagination Logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Meta title="USER" />
      <BreadCrumb title="USER" />
      <div className="about-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {currentUsers.map((user) => (
              <div key={user.id} className="col-6">
                <div className="card user-card">
                  <div className="card-header">
                    <h5 className="card-title">NAME: {user.name}</h5>
                  </div>
                  <div className="card-body">
                    <p>User ID: {user.id}</p>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    {/* Add other user data as needed */}
                    <button className="button edit-button">Edit</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Pagination */}
      <nav>
        <ul className="pagination">
          {Array.from(
            { length: Math.ceil(users.length / usersPerPage) },
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
    </>
  );
};

export default User;
