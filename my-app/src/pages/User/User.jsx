// User.js
import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";// Import the Card component
import BreadCrumb from "../../components/Breadcrumb/Breadcrumb";
import Meta from "../../components/Meta/Meta";

import "./User.scss";
const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <>
      <Meta title="USER" />
      <BreadCrumb title="USER" />
      <div className="about-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">USER PAGE</h3>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                {/* Display cards here */}
                {users.map((user) => (
                  <div key={user.id} className="col-md-4 mb-4">
                    <Card user={user} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
