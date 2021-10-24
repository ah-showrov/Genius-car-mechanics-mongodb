import React, { useEffect, useState } from "react";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/services`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/services/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted Successfully");
          const remainingServices = services.filter(
            (service) => service._id != id
          );
          setServices(remainingServices);
        }
      });
  };
  return (
    <div>
      <h2>this is ManageServices</h2>
      <div>
        {services.map((service) => (
          <div key={service._id}>
            {service.name}

            <button onClick={() => handleDelete(service._id)}>Delete</button>
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
