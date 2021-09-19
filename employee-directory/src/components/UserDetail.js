import React from "react";

function UserDetail(props) {
  return (
    <div className="text-center">
        <div className="card text-center">
      <div className="card-header">
      <img src={props.photo} />
      <h3>First Name: {props.first}</h3>
      <h3>Last Name: {props.last}</h3>
      <h3>Email: {props.email}</h3>
      <h3>Phone: {props.Phone}</h3>
      </div>
      <div className="card-body">{props.children}</div>
    </div>
    </div>
  );
}

export default UserDetail;
