"use client";

import { FormEvent } from "react";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    sessionStorage.setItem("portfolioContact", JSON.stringify(Object.fromEntries(formData)));
    window.location.assign("/?message=received");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>First name<input name="firstName" autoComplete="given-name" required /></label>
        <label>Last name<input name="lastName" autoComplete="family-name" required /></label>
      </div>
      <div className="form-row">
        <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
        <label>Contact number<input name="phone" type="tel" autoComplete="tel" /></label>
      </div>
      <label>Message<textarea name="message" rows={6} required /></label>
      <button className="button button--primary" type="submit">Send message</button>
    </form>
  );
}
