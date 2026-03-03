import "../Layouts/components/hiredev.css";
import hireimage from "../assets/hire-developer.jpg";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const HireDevelopers = () => {
  const location = useLocation(); // ✅ get URL params

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    developerType: "", // this will be auto-filled
    experienceLevel: "",
    budget: "",
    timeline: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Prefill form based on URL ?service=Frontend
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get("service");

    if (serviceParam) {
      setFormData(prev => ({
        ...prev,
        developerType: serviceParam
      }));
    }
  }, [location.search]);

  const handleNext = (e) => {
    e.preventDefault();
    setStep(prev => prev + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/hire-developers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="schedule-section">
        <div className="schedule-container">
          <div className="success-box">
            <h2>Thank you!</h2>
            <p>Our hiring team will contact you within 24 hours.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>Hire Developers</title>
      </Helmet>

      <section className="hiredev-hero">
        {/* <img src={hireimage} alt="Hero" /> */}
        <h1>Hire Developers</h1>
      </section>

      <section className="schedule-section">
        <div className="schedule-container">
          <div className="schedule-intro">
            <h2>Hire Skilled Developers</h2>
            <p>Tell us what kind of developer you need.</p>
          </div>

          <form className="schedule-form">
            {step >= 1 && (
              <>
                <div className="schedule-form-group">
                  <label>Your Name</label>
                  <input name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="schedule-form-group">
                  <label>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="schedule-form-group">
                  <label>Company Name</label>
                  <input name="companyName" value={formData.companyName} onChange={handleChange} required />
                </div>

                {step === 1 && (
                  <button className="schedule-btn" onClick={handleNext}>
                    Next
                  </button>
                )}
              </>
            )}

            {step >= 2 && (
              <div className="schedule-form-group">
                <label>Developer Type</label>
                <div className="radio-group">
                  {["Frontend","Backend","Full Stack","Mobile","DevOps"].map(type => (
                    <label className="radio-option" key={type}>
                      <input
                        type="radio"
                        name="developerType"
                        value={type}
                        checked={formData.developerType === type} // ✅ controlled input
                        onChange={handleChange}
                      />
                      {type}
                    </label>
                  ))}
                </div>

                {step === 2 && (
                  <button className="schedule-btn" onClick={handleNext}>
                    Next
                  </button>
                )}
              </div>
            )}

            {step >= 3 && (
              <div className="schedule-form-group">
                <label>Experience Level</label>
                <div className="radio-group">
                  {["Junior","Mid-Level","Senior","Lead"].map(level => (
                    <label className="radio-option" key={level}>
                      <input
                        type="radio"
                        name="experienceLevel"
                        value={level}
                        checked={formData.experienceLevel === level} // ✅ controlled
                        onChange={handleChange}
                      />
                      {level}
                    </label>
                  ))}
                </div>

                <button className="schedule-btn" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default HireDevelopers;