import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="contact__title">Contact</h1>
      <form
        action="https://formsubmit.co/keffri.w.neal@gmail.com"
        method="POST"
        className="contact__form"
      >
        <label className="contact__label" htmlFor="name">
          Name:
        </label>
        <input type="text" id="name" name="name" placeholder="Name" required />
        <label className="contact__label" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <label className="contact__label" htmlFor="subject">
          Subject:
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          required
        />
        <label className="contact__label" htmlFor="message">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Message..."
          cols="30"
          rows="10"
        ></textarea>

        <input type="submit" value="Send" className="contact__submit" />
      </form>
    </section>
  );
};

export default Contact;
