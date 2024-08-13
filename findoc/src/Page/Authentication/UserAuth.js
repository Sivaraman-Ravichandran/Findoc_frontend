import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

const UserAuth = ({ setIsAuthenticated }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsRegister(!isRegister);
    setForm({ email: "", password: "" });
    setErrors({ email: "", password: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    let valid = true;
    let errors = {};
    if (!form.email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Email address is invalid";
      valid = false;
    }
    if (!form.password) {
      errors.password = "Password is required";
      valid = false;
    }
    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        if (isRegister) {
          // Handle registration logic
          const response = await axios.post(
            "http://localhost:8080/saveUser",
            form
          );
          alert("Registration Successful");
          console.log("Registration successful", response.data);
          setIsRegister(false); // Switch to login after successful registration
          setForm({ email: "", password: "" });
          setErrors({ email: "", password: "" });
        } else {
          // Handle login logic
          const response = await axios.post("http://localhost:8080/login", {
            email: form.email,
            password: form.password,
          });
          alert("Login Successful");
          console.log("Login successful", response.data);
          localStorage.setItem("isAuthenticated", "true"); // Save authentication state
          setIsAuthenticated(true);
          navigate("/home"); // Navigate to the home page upon successful login
        }
      } catch (error) {
        console.error("Error during authentication", error);
        // Handle errors appropriately
        if (error.response && error.response.data) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: error.response.data.message || "Invalid credentials",
            password: error.response.data.message || "Invalid credentials",
          }));
          alert("Invalid credentials");
        }
      }
    }
  };

  return (
    <div className="container">
      <div className="image-section"></div>
      <div className="form-section">
        <form onSubmit={handleSubmit} className="form-container">
          <h1 style={{ textAlign: "center" }}>
            {isRegister ? "User Register" : "User Login"}
          </h1>
          <div>
            <label className="form-label">
              Email:
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </label>
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>
          <div>
            <label className="form-label">
              Password:
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="form-input"
              />
            </label>
            {errors.password && <p className="form-error">{errors.password}</p>}
          </div>
          <button type="submit" className="form-button">
            {isRegister ? "Register" : "Login"}
          </button>
          <button type="button" onClick={toggleMode} className="toggle-button">
            {isRegister
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserAuth;
