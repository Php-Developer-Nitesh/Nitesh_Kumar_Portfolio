import React, { useRef } from "react";
import "./Contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_munhnpn",
        "template_8pfeu75",
        form.current,
        "lX0W4Oft5oYszTtQR"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
          alert("Error Sending Email");
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="ContactPageTitle">My clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with include:
        </p>
        <div className="clientImgs">
          <img src={Walmart} alt="Client" className="clientImg" />
          <img src={Adobe} alt="Client" className="clientImg" />
          <img src={Microsoft} alt="Client" className="clientImg" />
          <img src={Facebook} alt="Client" className="clientImg" />
        </div>
      </div>
      <div className="contact" id="contact">
        <h1 className="ContactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="SubmitBtn">
            Submit
          </button>
          <div className="links">
            <a href="https://www.facebook.com/profile.php?id=100009170649706">
              <img src={FacebookIcon} alt="Facebook" className="link" />
            </a>
            <a href="https://www.instagram.com/nitesh_singh1998/">
              <img src={InstagramIcon} alt="Instagram" className="link" />
            </a>
            <a href="https://www.youtube.com/@niteshkumarofficial4853/videos">
              <img src={YouTubeIcon} alt="YouTube" className="link" />
            </a>
            <a href="https://twitter.com/NiteshR61367199">
              <img src={TwitterIcon} alt="Twitter" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
