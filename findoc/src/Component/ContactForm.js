import React, { useState } from "react";
const ContactForm = ({name}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    // Here you can add your form submission logic
    // For demo, we use a timeout to simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <div className="applyBox">
      <div className="dsu-form">
        <div className="frmBg">
          <h1>{name}</h1>
          <h4>Contact Us</h4>
        </div>
        <div className="contact_fild CLDGen_PrimaryFORM_Submit">
          <form className="contactForm" onSubmit={handleSubmit}>
            <div className="formIDfid">
              <div className="contact-fild-box">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="name"
                    placeholder="Enter Name*"
                    required
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="contact-fild-box">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="email"
                    placeholder="Enter Email*"
                    required
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="contact-fild-box">
                <div className="form-group">
                  <input
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Enter Mobile Number*"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="contact-fild-box text-center">
                <div className="form-group">
                  <p
                    style={{
                      lineHeight: "16px",
                      color: "#333",
                      fontSize: "11px",
                    }}
                  >
                    By proceeding ahead you expressly agree to {name} to
                    contact you via Whatsapp and other channels with suitable
                    college options.
                  </p>
                </div>
              </div>
              <div className="contact-fild-box text-center">
                <div className="form-group">
                  <div
                    className={`loading-message ${loading ? "show" : ""}`}
                    id="loadingMessage"
                  >
                    Sending your message, please wait...
                  </div>
                  <div
                    className={`success-message ${success ? "show" : ""}`}
                    id="successMessage"
                  >
                    Thank you for contacting us! Your message has been sent
                    successfully.
                  </div>
                  <button
                    className="btn btn_submit"
                    id="btnSubmit"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
