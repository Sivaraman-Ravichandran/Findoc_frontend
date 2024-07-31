import React from "react";
import HospitalCard from "../Component/HospitalCard";
import DoctorCard from "../Component/DoctorCard";
import "./Home.css";
import "../Component/DoctorCard.css";
import "../Component/HospitalCard.css";
import NavBar from "./NavBar";
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
    <>
    <NavBar/>
      <img
        src="https://telegra.ph/file/175dee0b21336504a8282.jpg"
        className="doctor-amma"
        alt="HealthConnect"
      />
      <div className="description">
        <h1 style={{ fontSize: 50 }}>Welcome to FindDoc</h1>
        <p className="subheading">
          Your Gateway to Premier Healthcare Services
        </p>
        <p className="details">
          At <span className="health">FindDoc</span>, we are dedicated to
          providing you with the highest quality of healthcare services, right
          at your fingertips. Our platform connects you with an extensive
          network of top-rated hospitals and specialists, ensuring that you
          receive the best care possible.
        </p>
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
    </>
  );
};

export default Home;
