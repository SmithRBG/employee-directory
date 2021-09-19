import React from "react";

function UserDetail(props) {
  return (
    <div className="text-center">
      {/* <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} /> */}
      <h3>First Name: {props.first}</h3>
      <h3>Last Name: {props.last}</h3>
      <h3>Email: {props.email}</h3>
      <h3>Phone: {props.Phone}</h3>
     <img src={props.photo} />
    </div>
  );
}

export default UserDetail;
