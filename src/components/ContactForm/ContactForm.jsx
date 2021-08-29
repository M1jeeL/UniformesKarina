import React, { useState } from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };
  return (
    <form className="form-contact-container" onSubmit={handleSubmit} id="contact-form">
      <div className="title-contact-form">Puedes contactarte con nosotros</div>
      <div className="input-container">
        <input
          type="text"
          name="name"
          className="contact-form-input"
          placeholder="Nombre"
          value={formState.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className="contact-form-input"
          placeholder="Email"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          className="contact-form-input"
          placeholder="Asunto"
          value={formState.subject}
          onChange={handleChange}
        />
        <textarea
          className="contact-form-textarea"
          name="message"
          placeholder="Mensaje"
          value={formState.message}
          onChange={handleChange}
        />
      </div>
      <button className="contact-form-btn" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
