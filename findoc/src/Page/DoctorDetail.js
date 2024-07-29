import React from "react";
import { useParams } from "react-router-dom";
import "./DoctorDetail.css";
const doctorsData = [
  {
    id: 1,
    name: "Dr. Sharmila",
    specialty: "Cardiologist",
    location: "Coimbatore",
    status: "Online",
    image: "https://graph.org/file/40e4a1407d30d3e51295a.jpg",
    about: "Dr. Sharmila has over 20 years of experience in cardiology.",
    duties: ["PSG Hospital", "Private Clinic"],
  },
  {
    id: 2,
    name: "Dr. Pavithran",
    specialty: "Neurologist",
    location: "Madurai",
    status: "Away",
    image: "/path/to/doctor2.jpg",
    about: "Dr. Pavithran specializes in neurological disorders.",
    duties: ["KG Hospital", "Private Clinic"],
  },
  {
    id: 3,
    name: "Dr. Sharmila",
    specialty: "Cardiologist",
    location: "Coimbatore",
    status: "Online",
    image: "/path/to/doctor1.jpg",
    about: "Dr. Sharmila has over 20 years of experience in cardiology.",
    duties: ["PSG Hospital", "Private Clinic"],
  },
  {
    id: 4,
    name: "Dr. Pavithran",
    specialty: "Neurologist",
    location: "Madurai",
    status: "Away",
    image: "/path/to/doctor2.jpg",
    about: "Dr. Pavithran specializes in neurological disorders.",
    duties: ["KG Hospital", "Private Clinic"],
  },
  {
    id: 5,
    name: "Dr. Sharmila",
    specialty: "Cardiologist",
    location: "Coimbatore",
    status: "Online",
    image: "/path/to/doctor1.jpg",
    about: "Dr. Sharmila has over 20 years of experience in cardiology.",
    duties: ["PSG Hospital", "Private Clinic"],
  },
  {
    id: 6,
    name: "Dr. Pavithran",
    specialty: "Neurologist",
    location: "Madurai",
    status: "Away",
    image: "/path/to/doctor2.jpg",
    about: "Dr. Pavithran specializes in neurological disorders.",
    duties: ["KG Hospital", "Private Clinic"],
  },
  // Add more doctors as needed
];

const DoctorDetails = () => {
  const { id } = useParams();
  const doctor = doctorsData.find((doctor) => doctor.id === parseInt(id));

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  return (
    <div className="doctor-details-container">
      <h1>{doctor.name}</h1>
      <img src={doctor.image} alt={doctor.name} className="doctor-image" />
      <p><strong>Specialist in:</strong> {doctor.specialty}</p>
      <p><strong>Location:</strong> {doctor.location}</p>
      <p><strong>Status:</strong> {doctor.status}</p>
      <div className="doctor-section">
        <h2>About</h2>
        <p>{doctor.about}</p>
      </div>
      <div className="doctor-section">
        <h2>Duties</h2>
        <ul>
          {doctor.duties.map((duty, index) => (
            <li key={index}>{duty}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorDetails;