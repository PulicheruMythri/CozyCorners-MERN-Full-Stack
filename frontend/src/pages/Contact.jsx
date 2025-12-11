import { useState } from "react";
import axios from "axios";

const API = "https://your-backend-url.onrender.com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${API}/api/contact`, form);
    if (res.data.success) setMsg("Message Sent!");
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          name="phone"
          placeholder="Phone"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <textarea
          name="message"
          placeholder="Message"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button type="submit">Send</button>
      </form>

      <p>{msg}</p>
    </div>
  );
}
