import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContactContext } from "../store/ContactContext";
import ContactCard from "../components/ContactCard";

export default function Contact() {
  const { contacts,agendas } = useContext(ContactContext);

  return (
    <div className="container">
      <h2>Contact List</h2>
      <h2> Lista de agendas</h2>
      { agendas.length === 0? ( 
        <p> No hay agendas disponibles </p>
      ) : ( 
        <ul> 
          { agendas.map ((agenda) =>( 
            <li> {agenda.slug} </li>
          ))}
        </ul>
      )}

      <Link to="/add" className="btn btn-success mb-3"> Nuevo contacto  </Link>
      <Link to="/addagendas" className="btn btn-success mb-3"> Nueva Agenda   </Link>


    </div>
  );
}
