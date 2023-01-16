import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59771.939784705326!2d74.50086558945277!3d20.55756128124938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bde99b980a72691%3A0x2670392bc1c3ce16!2sMalegaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1673882096642!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="Container">
        <div className="Contact-form">
          <form
            action="https://formspree.io/f/xnqynpqd"
            method="POST"
            id="Contact-info"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              autoComplete="off"
              required
             
            />
            <input
              type="email"
              placeholder="Email"
              name="Email"
              autoComplete="off"
              required
             
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              autoComplete="off"
              required
              placeholder="Enter Your Message"
            ></textarea>

            <input className="btn" type="submit" value="send" />
          </form>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Contact;
