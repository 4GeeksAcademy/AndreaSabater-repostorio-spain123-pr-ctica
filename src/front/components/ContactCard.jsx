import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContactContext } from "../store/ContactContext";

export default function ContactCard({ contact }) {
  const { deleteContact } = useContext(ContactContext);

  return (
    <div className="card p-3 mb-3 d-flex flex-row align-items-center">
      <img
        src="https://i.pravatar.cc/80"
        className="rounded-circle me-3"
        alt="avatar"
      />

      <div className="flex-grow-1">
        <h5>{contact.full_name}</h5>
        <p>{contact.address}</p>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
      </div>

      <div>
        <Link to={`/edit/${contact.id}`} className="btn btn-outline-warning me-2">
          
        </Link>

        <button
          className="btn btn-outline-danger"
          onClick={() => {
            if (confirm("Do you want to delete this contact?"))
              deleteContact(contact.id);
          }}
        >
          
        </button>
      </div>
    </div>
  );
}
