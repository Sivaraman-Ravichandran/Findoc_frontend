import React, { useState } from "react";
import HospitalCard from "../Component/HospitalCard";
import "./Hospital.css";
import NavBar from "./NavBar";
const hospitalsData = [
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
    name: "XYZ Hospital",
    address: "456 Elm St, Townsville",
    image: "https://graph.org/file/7a5580a9567eb5e5d8322.jpg",
  },
  {
    id: 5,
    name: "PSG Hospital",
    address: "123 Main St, Cityville",
    image: "https://graph.org/file/1cf2a543d67ff270eef04.jpg",
  },
  {
    id: 6,
    name: "KG Hospital",
    address: "456 Elm St, Townsville",
    image: "https://graph.org/file/7a5580a9567eb5e5d8322.jpg",
  },
  {
    id: 7,
    name: "Kilpauk Hospital",
    address: "123 Main St, Cityville",
    image: "https://graph.org/file/96e0d65c056e003ca98c2.jpg",
  },
  {
    id: 8,
    name: "XYZ Hospital",
    address: "456 Elm St, Townsville",
    image: "https://graph.org/file/7a5580a9567eb5e5d8322.jpg",
  },
  {
    id: 9,
    name: "PSG Hospital",
    address: "123 Main St, Cityville",
    image: "https://graph.org/file/1cf2a543d67ff270eef04.jpg",
  },
  {
    id: 10,
    name: "KG Hospital",
    address: "456 Elm St, Townsville",
    image: "https://graph.org/file/7a5580a9567eb5e5d8322.jpg",
  },
  {
    id: 11,
    name: "Kilpauk Hospital",
    address: "123 Main St, Cityville",
    image: "https://graph.org/file/96e0d65c056e003ca98c2.jpg",
  },
  {
    id: 12,
    name: "XYZ Hospital",
    address: "456 Elm St, Townsville",
    image: "https://graph.org/file/7a5580a9567eb5e5d8322.jpg",
  },
  {
    id: 13,
    name: "PSG Hospital",
    address: "123 Main St, Cityville",
    image: "https://graph.org/file/1cf2a543d67ff270eef04.jpg",
  },
  {
    id: 14,
    name: "KG Hospital",
    address: "456 Elm St, Townsville",
    image: "https://graph.org/file/7a5580a9567eb5e5d8322.jpg",
  },
  {
    id: 15,
    name: "Kilpauk Hospital",
    address: "123 Main St, Cityville",
    image: "https://graph.org/file/96e0d65c056e003ca98c2.jpg",
  },
  {
    id: 16,
    name: "XYZ Hospital",
    address: "456 Elm St, Townsville",
    image: "https://graph.org/file/7a5580a9567eb5e5d8322.jpg",
  },
];

const Hospital = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredHospitals = hospitalsData.filter(
    (hospital) =>
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hospital.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <div className="hospital-container">
        <h1>Hospitals</h1>
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search hospitals..."
            className="search-input"
          />
        </div>
        <div className="hospital-cards-container">
          {filteredHospitals.map((hospital) => (
            <HospitalCard key={hospital.id} {...hospital} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Hospital;
