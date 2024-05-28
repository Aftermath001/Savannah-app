import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/Breadcrumb/Breadcrumb";
import Meta from "../../components/Meta/Meta";
import "./User.scss";

const User = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 4;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

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
          <div className="row user-cards-row">
            {currentUsers.map((user) => (
              <div key={user.id} className="col-12 col-md-6 col-lg-3">
                <div
                  className="card user-card"
                  onClick={() => handleUserClick(user)}
                >
                  <div className="card-header">
                    <h5 className="card-title">NAME: {user.name}</h5>
                  </div>
                  <div className="card-body">
                    <p>User ID: {user.id}</p>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                  </div>
                </div>
              </div>
            ))}
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
      </div>
      {/* Display selected user info */}
      {selectedUser && (
        <div className="user-info-container">
          <h2>{selectedUser.name}'s Information</h2>
          <p>User ID: {selectedUser.id}</p>
          <p>Username: {selectedUser.username}</p>
          <p>Email: {selectedUser.email}</p>
        </div>
      )}
    </>
  );
};

export default User;
