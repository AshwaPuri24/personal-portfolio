/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaMapMarkerAlt, FaSatelliteDish } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import "../Styles/Contact.css";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "TRANSMITTING DATA..." });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "CONFIGURATION ERROR: MISSING KEYS",
      });
      console.error(
        "Missing EmailJS environment variables. Check your .env file."
      );
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      (result) => {
        setStatus({ type: "success", message: "TRANSMISSION SUCCESSFUL" });
        formRef.current.reset();
        // Clear success message after 5 seconds
        setTimeout(() => setStatus({ type: "", message: "" }), 5000);
      },
      (error) => {
        setStatus({ type: "error", message: "TRANSMISSION FAILED. RETRY." });
        console.error("EmailJS Error:", error);
      }
    );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Subspace Link</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">:: OPEN FREQUENCY ::</p>
        </div>

        <AnimatedSection delay={0.2}>
          <div className="contact-content">
            <div className="contact-info">
              <h3 className="contact-heading">Comms Station</h3>

              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div className="info-text">
                  <h4>BASE COORDINATES</h4>
                  <p>New Delhi, India</p>
                </div>
              </div>

              <div className="info-item">
                <FaSatelliteDish className="info-icon" />
                <div className="info-text">
                  <h4>STATUS</h4>
                  <p>Open for collaboration & freelance missions.</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="ENTER IDENTIFIER (NAME)"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="RETURN FREQUENCY (EMAIL)"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="SUBJECT PARAMETER"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="ENCRYPTED MESSAGE..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={status.type === "loading"}
                >
                  <FaPaperPlane className="icon" />
                  {status.type === "loading"
                    ? "SENDING..."
                    : "INITIATE TRANSMISSION"}
                </button>

                {status.message && (
                  <p className={`status-msg ${status.type}`}>
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
