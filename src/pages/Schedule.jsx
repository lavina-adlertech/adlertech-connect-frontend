import "../Layouts/components/schedule.css";
import scheduleimage from "../assets/schedule.jpg";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const GetStarted = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
    companyName: "",
    phone: "",
    engineersNeeded: "",
    budget: "",
    referral: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(prev => prev + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/schedule", {
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
            <p>
              Our engineering specialists will reach out within the next business day.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>Get Started | Staff Augmentation</title>
      </Helmet>

      {/* HERO */}
      <section className="schedule-hero">
        
        <h1>Schedule A Call</h1>
      </section>

      {/* FORM SECTION */}
      <section className="schedule-section">
        <div className="schedule-container">

          <div className="schedule-intro">
            <h2>Want to discuss a project? Tell us more.</h2>
            <p>Please answer a few questions about your software development needs.</p>
          </div>

          <form className="schedule-form">

            {/* STEP 1 */}
            {step >= 1 && (
              <>
                <div className="schedule-form-group">
                  <label>Your name</label>
                  <input type="text" name="name" onChange={handleChange} required />
                </div>

                <div className="schedule-form-group">
                  <label>Your work email</label>
                  <input type="email" name="email" onChange={handleChange} required />
                </div>

                <div className="schedule-form-group">
                  <label>What service are you most interested in?</label>
                  <div className="radio-group">
                    {["Staff Augmentation","Dedicated Teams","Software Outsourcing"].map(service => (
                      <label className="radio-option" key={service}>
                        <input
                          type="radio"
                          name="service"
                          value={service}
                          onChange={handleChange}
                          required
                        />
                        {service}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="schedule-form-group">
                  <label>How can we help?</label>
                  <textarea name="message" rows="4" onChange={handleChange} required />
                </div>

                {step === 1 && (
                  <button className="schedule-btn" onClick={handleNext}>
                    Get Started
                  </button>
                )}
              </>
            )}

            {/* STEP 2 */}
            {step >= 2 && (
              <>
                <div className="schedule-form-group">
                  <label>Company Name</label>
                  <input name="companyName" onChange={handleChange} required />
                </div>

                <div className="schedule-form-group">
                  <label>Phone Number</label>
                  <input name="phone" onChange={handleChange} required />
                </div>

                {step === 2 && (
                  <button className="schedule-btn" onClick={handleNext}>
                    Next
                  </button>
                )}
              </>
            )}

            {/* STEP 3 */}
            {step >= 3 && (
              <div className="schedule-form-group">
                <label>How many tech professionals do you need?</label>
                <div className="radio-group">
                  {["1","2 - 5","6 - 10","11 - 20","More than 20","I don't know"].map(opt => (
                    <label className="radio-option" key={opt}>
                      <input
                        type="radio"
                        name="engineersNeeded"
                        value={opt}
                        onChange={handleChange}
                      />
                      {opt}
                    </label>
                  ))}
                </div>

                {step === 3 && (
                  <button className="schedule-btn" onClick={handleNext}>
                    Next
                  </button>
                )}
              </div>
            )}

            {/* STEP 4 */}
            {step >= 4 && (
              <div className="schedule-form-group">
                <label>Monthly Budget?</label>
                <div className="radio-group">
                  {["Under $10k","$10k to $50k","$50k to $200k","More than $200k"].map(opt => (
                    <label className="radio-option" key={opt}>
                      <input
                        type="radio"
                        name="budget"
                        value={opt}
                        onChange={handleChange}
                      />
                      {opt}
                    </label>
                  ))}
                </div>

                {step === 4 && (
                  <button className="schedule-btn" onClick={handleNext}>
                    Next
                  </button>
                )}
              </div>
            )}

            {/* STEP 5 */}
            {step >= 5 && (
              <div className="schedule-form-group">
                <label>Where did you hear about us?</label>
                <div className="radio-group">
                  {["Google/Bing","LinkedIn","ChatGPT","Other"].map(opt => (
                    <label className="radio-option" key={opt}>
                      <input
                        type="radio"
                        name="referral"
                        value={opt}
                        onChange={handleChange}
                      />
                      {opt}
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

export default GetStarted;