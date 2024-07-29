// Home.js
import React from "react";
import HospitalCard from "../Component/HospitalCard";
import DoctorCard from "../Component/DoctorCard";
import "./Home.css";
import "../Component/DoctorCard.css";
const topRatedHospitals = [
  {
    id: 1,
    name: "PSG Hospital",
    address: "123 Main St, Cityville",
    image: "https://graph.org/file/1cf2a543d67ff270eef04.jpg",
  },
  {
    id: 2,
    name: "KG Hospital",
    address: "456 Elm St, Townsville",
    image: "https://graph.org/file/7a5580a9567eb5e5d8322.jpg",
  },
  {
    id: 3,
    name: "Kilpauk Hospital",
    address: "123 Main St, Cityville",
    image: "https://graph.org/file/96e0d65c056e003ca98c2.jpg",
  },
  {
    id: 4,
    name: "Hospital",
    address: "456 Elm St, Townsville",
    image: "https://graph.org/file/7a5580a9567eb5e5d8322.jpg",
  },
  // Add more hospitals as needed
];

const topRatedDoctors = [
  {
    id: 1,
    name: "Dr. Sharmila",
    specialty: "Cardiology",
    location: "Coimbatore",
    image: "https://graph.org/file/40e4a1407d30d3e51295a.jpg",
  },
  {
    id: 2,
    name: "Dr. Pavithran",
    specialty: "Neurology",
    location: "Madurai",
    image: "https://graph.org/file/0bcd57c3960e76ad33a55.jpg",
  },
  // Add more doctors as needed
];

const Home = () => {
  return (
    <div className="home-container">
      <div className="about">
        <div className="description">
          <h1>Welcome to HealthConnect</h1>
          <p style={{ fontSize: 25 }}>
            Your Gateway to Premier Healthcare Services
          </p>
          <p style={{ color: "#3A3D48" }}>
            At HealthConnect, we are dedicated to providing you with the highest
            quality of healthcare services, right at your fingertips. Our
            platform connects you with an extensive network of top-rated
            hospitals and specialists, ensuring that you receive the best care
            possible.
          </p>
        </div>
        <div className="hosp">
          <img
            src="https://graph.org/file/c53cb733bc6453b9e79f7.jpg"
            alt="HealthConnect"
          />
        </div>
      </div>

      <div className="top-rated-section">
        <h2>Top Rated Hospitals</h2>
        <div className="hospital-cards-container">
          {topRatedHospitals.map((hospital) => (
            <HospitalCard key={hospital.id} {...hospital} />
          ))}
        </div>

        <h2>Top Rated Doctors</h2>
        <div className="doctor-cards-container">
          {topRatedDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} {...doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
