import "../Layouts/components/schedule.css";
import hiretalentimage from "../assets/hire-talent.jpg";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const HireTalent = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    talentType: "",
    budget: "",
    timeline: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(prev => prev + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/hire-talent", {
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
            <p>Our recruitment team will contact you shortly.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>Hire Talent</title>
      </Helmet>

      <section className="schedule-hero">
        <img src={hiretalentimage} alt="Hero" />
        <h1>Hire Talent</h1>
      </section>

      <section className="schedule-section">
        <div className="schedule-container">
          <div className="schedule-intro">
            <h2>Find the Right Talent</h2>
            <p>Tell us about your hiring needs.</p>
          </div>

          <form className="schedule-form">

            {step >= 1 && (
              <>
                <div className="schedule-form-group">
                  <label>Your Name</label>
                  <input name="name" onChange={handleChange} required />
                </div>

                <div className="schedule-form-group">
                  <label>Email</label>
                  <input type="email" name="email" onChange={handleChange} required />
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
                <label>Talent Type</label>
                <div className="radio-group">
                  {["Remote","Onsite","Contract","Full-time"].map(type => (
                    <label className="radio-option" key={type}>
                      <input type="radio" name="talentType" value={type} onChange={handleChange} />
                      {type}
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

export default HireTalent;