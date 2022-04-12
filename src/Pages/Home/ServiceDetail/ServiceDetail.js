import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  // parameter akare niye asbo

  const { serviceId } = useParams();
  return (
    <div>
      <h2>Service Detail : {serviceId}</h2>
    </div>
  );
};

export default ServiceDetail;
