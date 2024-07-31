import React, { useState } from "react";
import "../Component/DoctorCard.css";
import DoctorCard from "../Component/DoctorCard";
import "./Doctors.css";
import NavBar from "./NavBar";
const doctorsData = [
  {
    id: "1",
    image: "https://graph.org/file/40e4a1407d30d3e51295a.jpg",
    name: "Dr. Sharmila",
    specialty: "Cardilogists",
    location: "Coimbatore",
  },
  {
    id: "2",
    image: "https://graph.org/file/8469e0051c8bacfe053e2.jpg",
    name: "Dr. Nishanth",
    specialty: "Neurologists",
    location: "Madurai",
  },
  {
    id: "3",
    image: "https://graph.org/file/ebb12e7699b6f4d846d30.jpg",
    name: "Dr. Prakash Raj",
    specialty: "Cardilogists",
    location: "Coimbatore",
  },
  {
    id: "4",
    image: "https://graph.org/file/0bcd57c3960e76ad33a55.jpg",
    name: "Dr. Pavithran",
    specialty: "Neurologists",
    location: "Madurai",
  },
  {
    id: "5",
    image: "https://graph.org/file/32d75ae14cab9d9689a22.jpg",
    name: "Dr. Vikram",
    specialty: "Cardilogists",
    location: "Coimbatore",
  },

  {
    id: "6",
    image: "https://graph.org/file/40e4a1407d30d3e51295a.jpg",
    name: "Dr. Sharmila",
    specialty: "Cardilogists",
    location: "Coimbatore",
  },
  {
    id: "7",
    image: "https://graph.org/file/8469e0051c8bacfe053e2.jpg",
    name: "Dr. Nishanth",
    specialty: "Neurologists",
    location: "Madurai",
  },
  {
    id: "8",
    image: "https://graph.org/file/ebb12e7699b6f4d846d30.jpg",
    name: "Dr. Prakash Raj",
    specialty: "Cardilogists",
    location: "Coimbatore",
  },
  {
    id: "9",
    image: "https://graph.org/file/0bcd57c3960e76ad33a55.jpg",
    name: "Dr. Pavithran",
    specialty: "Neurologists",
    location: "Madurai",
  },
  {
    id: "10",
    image: "https://graph.org/file/32d75ae14cab9d9689a22.jpg",
    name: "Dr. Vikram",
    specialty: "Cardilogists",
    location: "Coimbatore",
  },

  // Add more doctors as needed
];

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDoctors = doctorsData.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <div className="doctors-container">
        <h1>Doctors</h1>
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search doctors..."
            className="search-input"
          />
        </div>
        <div className="doctor-cards-container">
          {filteredDoctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Doctors;
