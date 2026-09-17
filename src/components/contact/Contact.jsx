"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import { FaWhatsapp, FaInstagram,FaLinkedin,FaGithub  } from 'react-icons/fa'

const ENQUIRY_OPTIONS = [
  "New Website",
  "Redesign",
  "SEO & Maintenance",
  "Consultation",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });
  const [enquiryType, setEnquiryType] = useState("New Website");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, enquiryType }),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.hero}>
        <div className={styles.overlay} />

        <div className={styles.heroContent}>
          {/* Left: heading + info */}
          <div className={styles.left}>
            <h1 className={styles.heading}>
              You Have Questions,
              <br />
              I Have Answers
            </h1>
            <p className={styles.subtext}>
              Whether you&rsquo;re starting from scratch or need a site
              rebuilt the right way, tell me what you&rsquo;re after and
              I&rsquo;ll take it from there.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>Location</h3>
                <p className={styles.infoText}>
                  Based in Douglas Northern Cape, South Africa
                  <br />
                  Working with clients nation wide
                </p>
                <p className={styles.hours}>Mon–Fri | 09:00 – 17:00 (SAST)</p>
              </div>

              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>Social Media</h3>
                <ul className={styles.linkList}>
                  <li><a href="https://www.instagram.com/ashton.b_jordan" className={styles.link}>
                  <FaInstagram size={16} color="#E1306C" style={{verticalAlign:'middle', marginRight:'5px'}} />
                  Instagram
                  </a></li>
                  <li><a href="https://www.linkedin.com/in/ashton-portman-0815b1399/" className={styles.link}>
                  <FaLinkedin size={16} color="#3083e1" style={{verticalAlign:'middle', marginRight:'5px'}} />
                  LinkedIn
                  </a></li>
                  <li><a href="https://github.com/Ashton607" className={styles.link}>
                  <FaGithub size={16} color="#ffffff" style={{verticalAlign:'middle', marginRight:'5px'}} />
                  GitHub
                  </a></li>
                  <li><a href="https://wa.me/27788825777" className={styles.link}>
                  <FaWhatsapp size={16} color="#25D366"  style={{verticalAlign:'middle', marginRight:'5px'}} />
                  WhatsApp
                  </a></li>
                </ul>
              </div>

              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>Email</h3>
                <p className={styles.infoText}>portmanashton4@gmail.com</p>
              </div>

              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>Contact</h3>
                <p className={styles.infoText}>+27 78 882 5777</p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className={styles.formPanel}>
            {status === "success" ? (
              <div className={styles.confirmation}>
                <div className={styles.confirmIcon}>✓</div>
                <h2 className={styles.formHeading}>Message sent</h2>
                <p className={styles.formSubtext}>
                  Thanks for reaching out — we&rsquo;ll get back to you soon.
                </p>
              </div>
            ) : (
              <>
                <h2 className={styles.formHeading}>Tell Us What You Need</h2>
                <p className={styles.formSubtext}>
                  We&rsquo;re ready to help with every detail, big or small.
                </p>

                <form onSubmit={handleSubmit} className={styles.form}>
                  <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={styles.input}
                    required
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={styles.input}
                    required
                  />

                  <div className={styles.row}>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={styles.input}
                    />
                    <input
                      type="url"
                      placeholder="Website URL (if you have one)"
                      value={form.website}
                      onChange={(e) => setForm({ ...form, website: e.target.value })}
                      className={styles.input}
                    />
                  </div>

                  <span className={styles.label}>Type of Enquiry</span>
                  <div className={styles.pillRow}>
                    {ENQUIRY_OPTIONS.map((option) => (
                      <button
                        type="button"
                        key={option}
                        onClick={() => setEnquiryType(option)}
                        className={`${styles.pill} ${
                          enquiryType === option ? styles.pillSelected : ""
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  <textarea
                    placeholder="Message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={styles.textarea}
                    required
                  />

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className={styles.submitButton}
                  >
                    {status === "submitting" ? "Sending…" : "Submit"}
                  </button>

                  {status === "error" && (
                    <p className={styles.errorText}>
                      Something went wrong — please try again.
                    </p>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Map */}
      <div className={styles.mapWrap}>
        <iframe
          title="Location map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3488.191063491867!2d23.765143076531018!3d-29.040929485472486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9c954b8b4e63cd%3A0xd07e373eecaead2b!2s672%20Cyprus%20St%2C%20Douglas%2C%208730!5e0!3m2!1sen!2sza!4v1789628708254!5m2!1sen!2sza"
          className={styles.map}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}