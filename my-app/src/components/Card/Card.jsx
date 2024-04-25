import React from "react";
import './Card.scss'

const Card = ({ user }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{user.name}</h3>
        <p>User ID: {user.id}</p>
        <p>Username: {user.username}</p>
        <p>Phone No: {user.phone}</p>
      </div>
    </div>
  );
};

export default Card;