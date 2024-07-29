import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DoctorCard from "../Component/DoctorCard";
import "./HospitalDetail.css";
const hospitalsData = [
  {
    id: 1,
    name: "PSG Hospitals",
    address: "123 Main St, Cityville",
    services: ["Emergency", "Cardiology", "Neurology"],
    image: "https://graph.org/file/1cf2a543d67ff270eef04.jpg",
    doctors: [
      {
        name: "Dr. Sharmila",
        specialty: "Cardiologist",
        location: "Coimbatore",
        status: "Online",
        image: "/path/to/doctor1.jpg",
      },
      {
        name: "Dr. Pavithran",
        specialty: "Neurologist",
        location: "Madurai",
        status: "Away",
        image: "/path/to/doctor2.jpg",
      },
    ],
    news: "Latest hospital news here.",
    events: "Upcoming hospital events here.",
    contact: "Contact information here.",
  },
  {
    id: 2,
    name: "KG Hospital",
    address: "456 Elm St, Townsville",
    services: ["Pediatrics", "Orthopedics", "Dermatology"],
    image: "https://graph.org/file/7a5580a9567eb5e5d8322.jpg",
    doctors: [
      {
        name: "Dr. Sharmila",
        specialty: "Cardiologist",
        location: "Coimbatore",
        status: "Online",
        image: "/path/to/doctor1.jpg",
      },
      {
        name: "Dr. Pavithran",
        specialty: "Neurologist",
        location: "Madurai",
        status: "Away",
        image: "/path/to/doctor2.jpg",
      },
    ],
    news: "Latest hospital news here.",
    events: "Upcoming hospital events here.",
    contact: "Contact information here.",
  },
  {
    id: 3,
    name: "PSG Hospital",
    address: "123 Main St, Cityville",
    services: ["Emergency", "Cardiology", "Neurology"],
    image: "/path/to/hospital1.jpg",
    doctors: [
      {
        name: "Dr. Sharmila",
        specialty: "Cardiologist",
        location: "Coimbatore",
        status: "Online",
        image: "/path/to/doctor1.jpg",
      },
      {
        name: "Dr. Pavithran",
        specialty: "Neurologist",
        location: "Madurai",
        status: "Away",
        image: "/path/to/doctor2.jpg",
      },
    ],
    news: "Latest hospital news here.",
    events: "Upcoming hospital events here.",
    contact: "Contact information here.",
  },
  {
    id: 4,
    name: "KG Hospital",
    address: "456 Elm St, Townsville",
    services: ["Pediatrics", "Orthopedics", "Dermatology"],
    image: "../assets/kg.jpg",
    doctors: [
      {
        name: "Dr. Sharmila",
        specialty: "Cardiologist",
        location: "Coimbatore",
        status: "Online",
        image: "/path/to/doctor1.jpg",
      },
      {
        name: "Dr. Pavithran",
        specialty: "Neurologist",
        location: "Madurai",
        status: "Away",
        image: "/path/to/doctor2.jpg",
      },
    ],
    news: "Latest hospital news here.",
    events: "Upcoming hospital events here.",
    contact: "Contact information here.",
  },
  {
    id: 5,
    name: "PSG Hospital",
    address: "123 Main St, Cityville",
    services: ["Emergency", "Cardiology", "Neurology"],
    image: "/path/to/hospital1.jpg",
    doctors: [
      {
        name: "Dr. Sharmila",
        specialty: "Cardiologist",
        location: "Coimbatore",
        status: "Online",
        image: "/path/to/doctor1.jpg",
      },
      {
        name: "Dr. Pavithran",
        specialty: "Neurologist",
        location: "Madurai",
        status: "Away",
        image: "/path/to/doctor2.jpg",
      },
    ],
    news: "Latest hospital news here.",
    events: "Upcoming hospital events here.",
    contact: "Contact information here.",
  },
  {
    id: 6,
    name: "KG Hospital",
    address: "456 Elm St, Townsville",
    services: ["Pediatrics", "Orthopedics", "Dermatology"],
    image: "../assets/kg.jpg",
    doctors: [
      {
        name: "Dr. Sharmila",
        specialty: "Cardiologist",
        location: "Coimbatore",
        status: "Online",
        image: "/path/to/doctor1.jpg",
      },
      {
        name: "Dr. Pavithran",
        specialty: "Neurologist",
        location: "Madurai",
        status: "Away",
        image: "/path/to/doctor2.jpg",
      },
    ],
    news: "Latest hospital news here.",
    events: "Upcoming hospital events here.",
    contact: "Contact information here.",
  },
  // Add more hospitals as needed
];

const HospitalDetail = () => {
  const { id } = useParams();
  const hospital = hospitalsData.find(
    (hospital) => hospital.id === parseInt(id)
  );
  const [searchTerm, setSearchTerm] = useState("");

  if (!hospital) {
    return <div>Hospital not found</div>;
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDoctors = hospital.doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="hospital-detail-container">
      <div className="hospital-about">
        <img
          src={hospital.image}
          alt={hospital.name}
          className="hospital-image"
        />
        <div className="hospital-name-overlay">{hospital.name}</div>
      </div>
      <p>{hospital.address}</p>
      <h2>Services</h2>
      <ul>
        {hospital.services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
      <h2>Doctors</h2>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search doctors..."
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>
      <div className="doctor-cards-container">
        {filteredDoctors.map((doctor, index) => (
          <DoctorCard key={index} {...doctor} />
        ))}
      </div>
      <h2>News</h2>
      <p>{hospital.news}</p>
      <h2>Events</h2>
      <p>{hospital.events}</p>
      <h2>Contact Information</h2>
      <p>{hospital.contact}</p>
    </div>
  );
};

export default HospitalDetail;
