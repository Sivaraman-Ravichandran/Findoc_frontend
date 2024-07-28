import React, { useState } from "react";
import "../Component/DoctorCard.css";
import DoctorCard from "../Component/DoctorCard";
import "./Doctors.css";
const doctorsData = [
  { name: "Dr. Sharmila", specialty: "Cardilogists", location: "Coimbatore" },
  { name: "Dr. Pavithran", specialty: "Neurologists", location: "Madurai" },
  { name: "Dr. Sharmila", specialty: "Cardilogists", location: "Coimbatore" },
  { name: "Dr. Pavithran", specialty: "Neurologists", location: "Madurai" },
  { name: "Dr. Sharmila", specialty: "Cardilogists", location: "Coimbatore" },
  { name: "Dr. Pavithran", specialty: "Neurologists", location: "Madurai" },
  { name: "Dr. Sharmila", specialty: "Cardilogists", location: "Coimbatore" },
  { name: "Dr. Pavithran", specialty: "Neurologists", location: "Madurai" },
  { name: "Dr. Sharmila", specialty: "Cardilogists", location: "Coimbatore" },
  { name: "Dr. Pavithran", specialty: "Neurologists", location: "Madurai" },
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
        <button className="search-button">Search</button>
      </div>
      <div className="doctor-cards-container">
        {filteredDoctors.map((doctor, index) => (
          <DoctorCard key={index} {...doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
