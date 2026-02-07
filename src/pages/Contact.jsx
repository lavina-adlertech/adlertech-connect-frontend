const Contact = () => {
  return (
    <section style={{ padding: "40px" }}>
      <h1>Contact Us</h1>

      <p>
        Need developers or want to discuss your project?  
        Get in touch with us today.
      </p>

      <form style={{ marginTop: "20px", maxWidth: "400px" }}>
        <div style={{ marginBottom: "15px" }}>
          <label>Name</label>
          <br />
          <input type="text" placeholder="Your name" />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>
          <br />
          <input type="email" placeholder="Your email" />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Message</label>
          <br />
          <textarea rows="4" placeholder="Your message"></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
