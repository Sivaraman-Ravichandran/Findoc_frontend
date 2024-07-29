import React, { useState } from "react";
import SpecialistCard from "../Component/SpecialListCard";
import "./Specialist.css";

const specialties = [
  {
    name: "Cardiology",
    image: "https://graph.org/file/b2604b071aa65ad5a20c5.jpg",
  },
  {
    name: "Neurologists",
    image: "https://graph.org/file/380920a503494ce80d40b.jpg",
  },
  {
    name: "Orthopedics",
    image: "https://graph.org/file/289f1e9675148e90e56a0.jpg",
  },
  {
    name: "Nephrologists",
    image: "https://graph.org/file/e093423f28976123f4fce.jpg",
  },
  { name: "Dermatology", image: "https://graph.org/file/b3558313580995813ef22.jpg" },
  { name: "Pediatrics", image: "https://graph.org/file/1f71f6e418640118f37c9.jpg" },
  { name: "Oncology", image: "https://graph.org/file/398c164929296e09d5e4d.jpg" },
  { name: "Psychiatry", image: "https://graph.org/file/0c98071018b3cc5def5e3.jpg" },
  { name: "Gastroenterology", image: "https://graph.org/file/a2af6908194ade97e8aa1.jpg" },
  { name: "Endocrinology", image: "https://graph.org/file/4ee3e0bd68cecfa91c525.jpg" },
  // Add more specialties as needed
];

const SpecialistPage = () => {
  return (
    <div className="specialist-page">
      <div className="specialty-cards">
        {specialties.map((specialty) => (
          <SpecialistCard
            key={specialty.name}
            specialty={specialty.name}
            image={specialty.image}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialistPage;
