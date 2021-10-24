import React from "react";
import "./Service.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
const Service = ({ service }) => {
  const { _id, name, price, description, img } = service;
  const history = useHistory();
  const handleGetService = () => {
    history.push(`/booking/${_id}`);
  };
  return (
    <div className="service pb-3">
      <img src={img} alt="" />
      <h3 className="mt-2">{name}</h3>
      <h5>
        Price: <b>{price}$</b>
      </h5>
      <p className="px-3">{description}</p>
      <Button onClick={handleGetService}> Get Service</Button>
    </div>
  );
};

export default Service;
