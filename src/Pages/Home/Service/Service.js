import React from "react";

const Service = ({ service }) => {
  const { name, img, description, price } = service;
  return (
    <div>
      <img src={img} alt="" />
      <h2>service : {name}</h2>
      <p> Price: {price}</p>
      <p>{description}</p>
      <button> Book: {name}</button>
    </div>
  );
};

export default Service;
