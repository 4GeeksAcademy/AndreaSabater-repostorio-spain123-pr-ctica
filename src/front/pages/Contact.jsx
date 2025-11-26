import { Link } from "react-router-dom";
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Contact = () => {
  const { store, dispatch } = useGlobalReducer();

  const loadContacts = async () => {
    try {
      const apiUrl = "https://playground.4geeks.com/apis/fake/contact/";

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (response.ok) {
        dispatch({
          type: "set_contacts",   // ← acción correcta
          payload: data,          // ← un array de contactos
        });
      }

    } catch (error) {
      console.error("Error loading contacts", error);
    }
  };

  useEffect(() => {
    if (store.contacts.length === 0) {
      loadContacts();
    }
  }, []);

  return (
    <div className="container mt-4">
      <h2>Contact list</h2>

      {store.contacts.length > 0 ? (
        store.contacts.map((contact) => (
          <div key={contact.id} className="p-2 border rounded mb-2">
            {contact.full_name}
          </div>
        ))
      ) : (
        <p>No contacts available</p>
      )}

      <Link to="/">
        <button className="btn btn-primary mt-3">Back home</button>
      </Link>
    </div>
  );
};
