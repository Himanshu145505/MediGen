import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate("/appointment")}>Book an Appointment</button>
      <button onClick={() => navigate("/input-health")}>Input Your Health Data</button>
    </div>
  );
};

export default HomePage;
