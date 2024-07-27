import React from "react";
import { useParams } from "react-router-dom";
import DoctorCard from "../Component/DoctorCard";
import "./HospitalDetail.css";
const hospitalsData = [
  {
    id: 1,
    name: "PSG Hospital",
    address: "123 Main St, Cityville",
    services: ["Emergency", "Cardiology", "Neurology"],
    doctors: [
      { name: "Dr. Smith", specialty: "Cardiology", location: "Room 101" },
      { name: "Dr. Jones", specialty: "Neurology", location: "Room 102" },
    ],
    image: "/path/to/image1.jpg",
    about: "About PSG Hospital...",
    news: "Latest news about PSG Hospital...",
    events: "Upcoming events at PSG Hospital...",
    contact: "Contact information for PSG Hospital...",
  },
  {
    id: 2,
    name: "KG Hospital",
    address: "456 Elm St, Townsville",
    services: ["Pediatrics", "Orthopedics", "Dermatology"],
    doctors: [
      { name: "Dr. Brown", specialty: "Pediatrics", location: "Room 201" },
      { name: "Dr. White", specialty: "Orthopedics", location: "Room 202" },
    ],
    image: "/path/to/image2.jpg",
    about: "About KG Hospital...",
    news: "Latest news about KG Hospital...",
    events: "Upcoming events at KG Hospital...",
    contact: "Contact information for KG Hospital...",
  },
  // Add more hospital data as needed
];

const HospitalDetails = () => {
  const { id } = useParams();
  const hospital = hospitalsData.find((h) => h.id === parseInt(id));

  if (!hospital) {
    return <div>Hospital not found</div>;
  }

  return (
    <div className="hospital-details">
      <img
        src={hospital.image}
        alt={`${hospital.name}`}
        className="hospital-image"
      />
      <h1>{hospital.name}</h1>
      <p>{hospital.about}</p>
      <h2>Services</h2>
      <ul>
        {hospital.services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
      <h2>Doctors</h2>
      <div className="doctor-cards">
        {hospital.doctors.map((doctor, index) => (
          <DoctorCard key={index} {...doctor} />
        ))}
      </div>
      <h2>News</h2>
      <p>{hospital.news}</p>
      <h2>Events</h2>
      <p>{hospital.events}</p>
      <h2>Contact</h2>
      <p>{hospital.contact}</p>
    </div>
  );
};

export default HospitalDetails;
