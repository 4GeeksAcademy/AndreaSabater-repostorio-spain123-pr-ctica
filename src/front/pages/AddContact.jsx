

import { useContext, useEffect, useState } from "react";
import { ContactContext } from "../store/ContactContext";
import { useNavigate, useParams } from "react-router-dom";

export default function AddContact() {
  const { contacts, createContact, updateContact } = useContext(ContactContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const editing = Boolean(id);
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    if (editing) {
      const contact = contacts.find((c) => c.id === parseInt(id));
      if (contact) setForm(contact);
    }
  }, [id, contacts]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editing) {
      await updateContact(id, form);
    } else {
      await createContact(form);
    }

    navigate("/");
  };

  return (
    <div className="container">
      <h2>{editing ? "Edit contact" : "Add a new contact"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          value={form.full_name}
          placeholder="Full Name"
          onChange={(e) => setForm({ ...form, full_name: e.target.value })}
        />
        <input
          className="form-control mb-2"
          value={form.email}
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="form-control mb-2"
          value={form.phone}
          placeholder="Phone"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <input
          className="form-control mb-2"
          value={form.address}
          placeholder="Address"
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />

        <button className="btn btn-primary w-100">Save</button>
      </form>

      <button className="btn btn-link mt-3" onClick={() => navigate("/")}>
        or go back to contacts
      </button>
    </div>
  );
}

