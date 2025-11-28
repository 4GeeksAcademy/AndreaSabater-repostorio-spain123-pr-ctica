import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContactContext } from "../store/ContactContext";
import ContactCard from "../components/ContactCard";

export default function Contact() {
  const { contacts } = useContext(ContactContext);

  return (
    <div className="container">
      <h2>Contact List</h2>

      <Link to="/add" className="btn btn-success mb-3">
        Add new contact
      </Link>

      {contacts.map((c) => (
        <ContactCard key={c.id} contact={c} />
      ))}
    </div>
  );
}
