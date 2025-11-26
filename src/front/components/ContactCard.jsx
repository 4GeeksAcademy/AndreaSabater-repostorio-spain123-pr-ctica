import React from "react";
import { Link } from "react-router-dom";

// funciones separadas
function Avatar({ img }) {
return (
<img
src={img}
alt="avatar"
className="rounded-circle me-3"
width="80"
/>
);
}

function ContactInfo({ full_name, address, phone, email }) {
return (
<div>
<h5>{full_name}</h5>
<p className="mb-0"> {address}</p>
<p className="mb-0"> {phone}</p>
<p className="mb-0"> {email}</p>
</div>
);
}

function ContactActions({ id, onDelete }) {
return (
<div>
<Link to={`/edit/${id}`} className="btn btn-outline-primary me-2">✏️</Link>
<button onClick={() => onDelete(id)} className="btn btn-outline-danger">🗑️</button>
</div>
);
}

export default function ContactCard({ contact, onDelete }) {
return (
<div className="card mb-3 p-3 d-flex flex-row align-items-center justify-content-between">
<div className="d-flex align-items-center">
<Avatar img="https://i.pravatar.cc/150?img=3" />
<ContactInfo
full_name={contact.full_name}
address={contact.address}
phone={contact.phone}
email={contact.email}
/>
</div>

<ContactActions id={contact.id} onDelete={onDelete} />
</div>
);
}