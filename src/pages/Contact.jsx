import "../Layouts/components/contactus.css";
import contactusimage from "../assets/contact-us.jpg";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Please try again later.");
    }
  };

  if (submitted) {
    return (
      <section className="contact-section">
        <div className="contact-container">
          <div className="success-box">
            <h2>Thank you!</h2>
            <p>We will get back to you shortly.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>Hire IT Talent | Staff Augmentation Services</title>
      </Helmet>

      <section className="contact-hero">
        <img src={contactusimage} alt="Hero" />
      </section>

      <section className="contact-section">
        <div className="contact-container">

          <div className="contact-intro">
            <h2>Contact Us</h2>
            <p>Need developers or want to discuss your project? Get in touch with us today.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>

        </div>
      </section>
    </>
  );
};

export default Contact;