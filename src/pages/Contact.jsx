import React from "react";
import ContactHero from "../components/contact/ContactHero";
import ContactOptions from "../components/contact/ContactOptions";
import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
  return (
    <main className="contact-page">
      <ContactHero />
      <ContactOptions />
      <div id="contact-form">
        <ContactForm />
      </div>
    </main>
  );
}